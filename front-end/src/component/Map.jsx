import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"
import * as React from "react"
import { compose, withProps } from "recompose"
import withGoogleKey from "../hoc/withGoogleKey";


const Map = compose(
    withGoogleKey,
    withScriptjs,
    withGoogleMap,
)(props => (
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
)

export default Map;
