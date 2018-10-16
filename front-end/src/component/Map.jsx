import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps"
import * as React from "react"
import { compose, lifecycle } from "recompose"
import withGoogleKey from "../hoc/withGoogleKey";


const Map = compose(
    withGoogleKey,
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentWillMount() {
            const refs = {}
            
            this.setState({
                bounds: null,

                onMapMounted: ref => {
                    refs.map = ref
                },
                onBoundChanged : () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                    })

                }
            })
        }
    })
)(props => {
    console.log(props)
    return (
        <div>
            <GoogleMap
                ref={props.onMapMounted}
                onZoomChanged={props.onBoundsChanged}
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
}
)

export default Map;
