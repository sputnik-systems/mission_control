import Intercom from "../../types/intercom/intercom";
import {makeAutoObservable, runInAction} from "mobx";
import {ApolloClient} from "@apollo/client";
import graphql from "../../api/graphqlutil";
import {INTERCOMS_COUNT, SEARCH} from "../../api/asgard/queries/queries";
import BusinessStatsClient from "../../api/businessStatsClient";
import {onResponseCallback} from "../../types/api/utils";
import {Duration} from "../../utils/humanTime";
import {companyUUIDMock} from "../../mocks";


interface VectorsCollection {
    OpenDoorApi: Vector | null
    OpenDoorAnalog: Vector | null

    KeyValid: Vector | null
    KeyInvalid: Vector | null
}

export type Vector = number[][]

class BusinessStore {
    asgardClient: ApolloClient<any>
    businessStatsClient: BusinessStatsClient = new BusinessStatsClient()

    step: number = 60

    relativeTimeWindowVariants: Duration[] = [
        new Duration("5m"),
        new Duration("10m"),
        new Duration("15m"),
        new Duration("30m"),
        new Duration("1h"),
        new Duration("3h"),
        new Duration("6h"),
        new Duration("12h")]
    selectedTimeWindow: number = 3

    companyUUID: string = companyUUIDMock

    intercomsList: Array<Intercom> | null = null
    intercomsCount: number | null = null
    intercomsOnlineCount: number | null = null

    timeSeries: VectorsCollection = {
        OpenDoorApi: null,
        OpenDoorAnalog: null,
        KeyValid: null,
        KeyInvalid: null
    }

    constructor(asgardClient: ApolloClient<any>) {
        this.asgardClient = asgardClient

        console.log(new Duration("5h").subtractFromNow())

        makeAutoObservable(this)
    }

    loadEverything = () => {
        this.queryIntercomsCount()
        this.queryIntercomsList()
        this.queryOnlineIntercoms()

        this.queryOpenDoorApi()
        this.queryOpenDoorAnalog()
        this.queryKeyValid()
        this.queryKeyInvalid()
    }

    queryIntercomsList = () => {
        // graphql(this.asgardClient, (data) => console.log(data)).query(SEARCH, {search: "123"})
    }

    queryIntercomsCount = () => {
        graphql(
            this.asgardClient,
            ({intercoms})=>{
                runInAction(() => this.intercomsCount = intercoms.totalCount)
            }).query(INTERCOMS_COUNT)
    }

    queryOnlineIntercoms = () => {
        this.businessStatsClient.getOnlineIntercomsCount((data) => {
            let onlineCount = data[this.companyUUID]
            if (this.companyUUID === "b1782e4f-9198-49d1-b5aa-7bdba9c87d21"){
                onlineCount = 0
                for(const k in data){
                    onlineCount += data[k]
                }
            }
            runInAction(() => this.intercomsOnlineCount = onlineCount)
        })
    }

    queryStatTimeSeries = (metricName: string, onResponse: onResponseCallback) => {
        this.businessStatsClient.getStatTimeSeriesByCompanyUUID({
            startTime: this.getStartTime().toISOString(),
            endTime: undefined,
            companyUUID: this.companyUUID,
            metricName: metricName,
            stepDuration: `${this.step}s`
        },
            onResponse)
    }

    queryOpenDoorApi = () => {
        this.queryStatTimeSeries("open_door_type_api", (data) => {
            runInAction(
                () => this.timeSeries.OpenDoorApi = data
            )
        })
    }

    queryOpenDoorAnalog = () => {
        this.queryStatTimeSeries("open_door_type_analog", (data) => {
            runInAction(
                () => this.timeSeries.OpenDoorAnalog = data
            )
        })
    }

    queryKeyValid = () => {
        this.queryStatTimeSeries("key_state_valid", (data) => {
            runInAction(
                () => this.timeSeries.KeyValid = data
            )
        })
    }
    queryKeyInvalid = () => {
        this.queryStatTimeSeries("key_state_invalid", (data) => {
            runInAction(
                () => this.timeSeries.KeyInvalid = data
            )
        })
    }

    setTimeWindow = (i: number) => {
        runInAction(
            () => this.selectedTimeWindow = (i >= this.relativeTimeWindowVariants.length ? 0 : i)
        )
    }

    getStartTime (): Date {
        return this.relativeTimeWindowVariants[this.selectedTimeWindow].subtractFromNow()
    }
}

export default BusinessStore