import {Vector} from "../../stores/businessStore/businessStore";

export const vectorToChartData = (v: Vector)  => {
    return v.map((sample, i) => {
        const date = new Date(sample[0] * 1000)
        const stringDate = date.toLocaleTimeString().replace(new RegExp("AM|PM"), "")
        return {
            time: sample[0],
            value: sample[1],
            label: stringDate
        }
    })
}

export const mergeChartData = (datas: Object[][], dataKeys: string[]) => {
    let result: Object[] = []
    for (let i = 0; i < datas[0].length; i++){
        let resSample = {
            // @ts-ignore
            time: datas[0][i].time,
            // @ts-ignore
            label: datas[0][i].label,
        }
        for (let j = 0; j < datas.length; j++){
            // @ts-ignore
            resSample[dataKeys[j]] = datas[j][i]?.value
        }
        result.push(resSample)
    }
    return result
}