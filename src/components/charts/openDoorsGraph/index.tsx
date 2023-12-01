import {useBusinessStore} from "../../../stores/businessStore/businessStoreProvider";
import {observer} from "mobx-react-lite";
import {
    Line,
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    AreaChart,
    CartesianGrid,
    CartesianAxis
} from "recharts";
import {useMemo} from "react";
import {vectorToChartData} from "../utils";

const OpenDoorGraph = observer(() => {
    const bs = useBusinessStore()

    const data = useMemo(() => {
        return vectorToChartData(bs.timeSeries.OpenDoorApi || [])
    }, [bs.timeSeries.OpenDoorApi])

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={300} data={data}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <defs>
                    <linearGradient id="openDoorsGraph" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={"deepskyblue"} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={"deepskyblue"} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="label" axisLine={false} tickLine={false}/>
                <YAxis axisLine={false} tickLine={false} />
                <CartesianGrid stroke="#f5f5f5"/>
                <Tooltip/>
                <Area type="monotone" dataKey="value" stroke={"deepskyblue"} fillOpacity={1} fill="url(#openDoorsGraph)" />

            </AreaChart>
        </ResponsiveContainer>

    )
})

export default OpenDoorGraph