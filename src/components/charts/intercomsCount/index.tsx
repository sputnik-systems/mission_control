import {useBusinessStore} from "../../../stores/businessStore/businessStoreProvider";
import "src/styles/global.css"
import {observer} from "mobx-react-lite";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import {useMemo} from "react";

const IntercomsCount = observer(() => {
    const bs = useBusinessStore()

    const intercomsOfflineCount = useMemo(
        () => (bs.intercomsCount || 0) - (bs.intercomsOnlineCount || 0),
        [bs.intercomsCount, bs.intercomsOnlineCount]
    )

    return (
        <ResponsiveContainer >
            <PieChart>
                <Pie
                    nameKey={"name"}
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={[
                        {name: "online", value: bs.intercomsOnlineCount, fill: "lightgreen"},
                        {name: "offline", value: intercomsOfflineCount, fill: "lightgray"}
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill={"#8884d8"}
                />
            </PieChart>
        </ResponsiveContainer>
    )
})

export default  IntercomsCount
