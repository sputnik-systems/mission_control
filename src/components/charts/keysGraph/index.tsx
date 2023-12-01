import {useBusinessStore} from "../../../stores/businessStore/businessStoreProvider";
import {observer} from "mobx-react-lite";
import {
    Area, AreaChart,
    CartesianGrid,
    LabelList,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {useEffect, useMemo} from "react";
import {mergeChartData, vectorToChartData} from "../utils";

const KeysGraph = observer(() => {
    const bs = useBusinessStore()

    const mergedData = useMemo(() => {
        const keysValidData = vectorToChartData(bs.timeSeries.KeyValid || [])
        const keysInvalidData = vectorToChartData(bs.timeSeries.KeyInvalid || [])
        return mergeChartData([keysValidData, keysInvalidData], ["valid", "invalid"])
    }, [bs.timeSeries.KeyValid, bs.timeSeries.KeyInvalid])

    return (
        <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart width={730} height={250} data={mergedData}
                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={"#82ca9d"} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={"#82ca9d"} stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff7676" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ff7676" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="label" axisLine={false} tickLine={false} />
                <YAxis />
                <CartesianGrid stroke="var(--purple)" />
                <Tooltip />
                <Area type="monotone" dataKey="valid" stroke={"#82ca9d"} fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="invalid" stroke={"#ff7676"} fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>

    )
})

export default KeysGraph