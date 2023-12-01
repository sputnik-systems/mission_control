import {DurationsRow, DurationsTable, TooltipWrapper} from "./styled";
import {useBusinessStore} from "../../../../stores/businessStore/businessStoreProvider";
import {observer} from "mobx-react-lite";

const Tooltip = observer(() => {
    const bs = useBusinessStore()

    return (
        <TooltipWrapper>
            <DurationsTable>
                {bs.relativeTimeWindowVariants.map((e, i) => (
                    <DurationsRow
                        selected={i === bs.selectedTimeWindow}
                        onClick={() => {
                            bs.setTimeWindow(i)
                            bs.loadEverything()
                        }}
                    >
                        {`Последние ${e.str}`}
                    </DurationsRow>
                ))}
            </DurationsTable>
        </TooltipWrapper>
    )
})

export default Tooltip