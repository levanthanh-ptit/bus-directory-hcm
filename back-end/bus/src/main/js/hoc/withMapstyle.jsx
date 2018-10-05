import * as React from "react"
import { withProps, compose } from "recompose"

const withMapStyle = compose(
    withProps({
        loadingElement: < div />,
        containerElement: <div className="busdetail__schedule__map"  />,
        mapElement: < div style={{width:"100%", height: "100%"}}/>,
    }
    ))

export default withMapStyle;

