import * as React from "react"
import { withProps, compose } from "recompose"


const withMapDetailStyle = compose(
    withProps({
        loadingElement: < div />,
        containerElement: <div className="busdetail__schedule__map" />,
        mapElement: < div style={{ width: "100%", height: "100%" }} />,
    }
    ))


const withMapFindingStyle = compose(
    withProps({
        loadingElement: < div />,
        containerElement: <div className="busfinding__map" />,
        mapElement: < div style={{ width: "100%", height: "100%" }} />,
    }
    )
)

export {
    withMapDetailStyle,
    withMapFindingStyle,
}

