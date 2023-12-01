import {observer} from "mobx-react-lite";
import React, {useEffect} from "react";
import {useBusinessStore} from "../../stores/businessStore/businessStoreProvider";
import Grid from "../grid";
import {Button, Header} from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import TimeRangeSelector from "./timeRangeSelector";


interface Props extends React.HTMLAttributes<any> {

}

const Dashboard = observer((props: Props) => {
    const businessStore = useBusinessStore()

    useEffect(() => {
        businessStore.loadEverything()
    });

    return (
        <div className={props.className}>
            <Header>
                <TimeRangeSelector/>
                <Button onClick={businessStore.loadEverything}>
                    <FontAwesomeIcon icon={faRotateRight} /> Обновить
                </Button>
            </Header>
            <Grid/>
        </div>
    )
})

export default Dashboard;