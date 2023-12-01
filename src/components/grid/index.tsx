import {ReactNode} from "react";
import {Layouts, Responsive, WidthProvider} from "react-grid-layout";
import IntercomsCount from "../charts/intercomsCount";
import "react-grid-layout/css/styles.css";
import OpenDoorGraph from "../charts/openDoorsGraph";
import KeysGraph from "../charts/keysGraph";
import {Card, CardContentWrapper, CardHeader} from "./styled";

const ResponsiveGridLayout = WidthProvider(Responsive);


interface Props {
    gridLayoutConfig?: GridLayoutConfig
}

interface TCard {
    i: string
    x: number
    y: number
    w: number
    h: number
    header: string,
    content: ReactNode
}

type GridLayoutConfig = Array<TCard>

const defaultLayoutConfig: GridLayoutConfig = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1, content: (<IntercomsCount/>), header: "Online" },
    { i: "dark-magician", x: 0, y: 1, w: 3, h: 2, content: (<OpenDoorGraph/>), header: "Open Doors"  },
    { i: "kuriboh", x: 3, y: 1, w: 2, h: 2, content: (<KeysGraph/>), header: "Keys"  },
]

const Grid = ({gridLayoutConfig}: Props) => {
    gridLayoutConfig = gridLayoutConfig || defaultLayoutConfig
    const layouts: Layouts = {lg: gridLayoutConfig?.map((card) => {
            return card
        })}

    return (
        <ResponsiveGridLayout
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
            rowHeight={200}
            compactType={"horizontal"}
            // isResizable={true}
            // draggableHandle={".cardHeader"}
        >
            {gridLayoutConfig?.map((card) =>
                <Card
                    key={`card-${card.i}`}
                    data-grid={{
                      static: true,
                      resize: false,
                      resizeHandles:["se"],
                      draggableHandle: "nw",
                      ...card,
                    }}
                >
                    <CardHeader>
                        {card.header}
                    </CardHeader>
                    <CardContentWrapper>
                        {card.content}
                    </CardContentWrapper>
                </Card>)}
        </ResponsiveGridLayout>
    )
}

export default Grid