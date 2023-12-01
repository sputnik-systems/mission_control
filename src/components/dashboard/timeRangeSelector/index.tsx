import {TimeRangeSelectorWrapper} from "./styled";
import Tooltip from "./tooltip";
import {useBusinessStore} from "../../../stores/businessStore/businessStoreProvider";
import React, {useRef, useState} from "react";
import {useOutsideAlerter} from "../../../hooks/outsideClick";
import {observer} from "mobx-react-lite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons";

const TimeRangeSelector = observer(() => {
    const [showTooltip, setShowTooltip] = useState(false)
    const tooltipRef = useRef(null)
    const bs = useBusinessStore()

    useOutsideAlerter(tooltipRef, () => {
        setShowTooltip(false)
    })

    return (
        <TimeRangeSelectorWrapper onClick={() => setShowTooltip(true)}>
                <FontAwesomeIcon icon={faClockRotateLeft} />
                {`  Последние ${bs.relativeTimeWindowVariants[bs.selectedTimeWindow].str}`}
                {showTooltip ?
                    <div ref={tooltipRef}>
                    <Tooltip />
                    </div>
                    : null}
        </TimeRangeSelectorWrapper>
    )
})

export default TimeRangeSelector