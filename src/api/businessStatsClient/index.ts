import axios, {AxiosInstance, AxiosResponse} from "axios";
import {onErrorCallback, onResponseCallback} from "../../types/api/utils";
import {logOnError} from "../utils";
import {GetStatTimeSeriesByCompanyUUIDParams} from "../../types/api/businessStatsClient";

class BusinessStatsClient {
    cli: AxiosInstance =  axios.create({
        baseURL: "https://business-statistic.sputnik.systems/api/v1/",
        headers: {
            "User-Agent": "Asgard Mission Control"
        }
    })

    getStatTimeSeriesByCompanyUUID (params: GetStatTimeSeriesByCompanyUUIDParams, onResponse: onResponseCallback, onError: onErrorCallback = logOnError) {
        this.handleResponse(
            this.cli.get("/stats/GetStatTimeSeriesByCompanyUUID", {
                params: params
            }),
            onResponse,
            onError)
    }

    getOnlineIntercomsCount (onResponse: onResponseCallback, onError: onErrorCallback = logOnError) {
        this.handleResponse(this.cli.get("/intercoms/online_count"), onResponse, onError)
    }

    private handleResponse (res: Promise<AxiosResponse<any, any>>, onResponse: onResponseCallback, onError: onErrorCallback) {
        res.then((res) => {
            if (res.data.error){
                onError(res.data.error)
                return null
            }
            if (!res.data){
                onError("data is missing")
                return null
            }
            onResponse(res.data.data)
        }).catch((err)=>{
            onError(err)
        })
    }
}

export default BusinessStatsClient