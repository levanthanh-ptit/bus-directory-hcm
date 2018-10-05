import { GoogleMap, DirectionsRenderer, withGoogleMap, withScriptjs } from "react-google-maps"
import * as React from "react"
import { lifecycle, compose } from "recompose"
import withMapStyle from "../hoc/withMapstyle";
import withGoogleKey from "../hoc/withGoogleKey";


const Map = compose(
    withGoogleKey,
    withMapStyle,
    withScriptjs,
    withGoogleMap,
)(props => {
    return (
        <div>
            <GoogleMap
                ref={this.map}
                defaultZoom={13}
                center={props.center}
                defaultOptions={{
                    scrollwheel: true,
                }}
            >
                {props.children}
            </GoogleMap>
        </div>
    )
})


export default Map;
