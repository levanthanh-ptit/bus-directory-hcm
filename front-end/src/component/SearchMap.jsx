import * as React from "react"
import { compose, lifecycle } from "recompose"
import { withScriptjs } from "react-google-maps"
import { withMapDetailStyle } from "../hoc/withMapstyle"
import withGoogleKey from "../hoc/withGoogleKey"
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox"


const SearchBox = compose(
    withGoogleKey,
    withMapDetailStyle,
    lifecycle({
        componentWillMount() {
            const refs = {} // because this is functionnal component so we can not access this.refs
            this.setState({
                place: [],
                onSearchBoxMounted: ref => {
                    refs.SearchBox = ref
                },
                onPlacesChanged: () => {
                    const place = refs.SearchBox.getPlaces();
                    this.setState({
                        place: place
                    })
                    this.props.onPlacesChanged(place)
                }

            })
        },
    }),
    withScriptjs
)(props =>

    <div>
        <StandaloneSearchBox
            ref={props.onSearchBoxMounted}
            onPlacesChanged={props.onPlacesChanged}
            bounds={props.bounds}
        >
            <input type="text"
                placeholder="Position..."
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `50rem`,
                    margin: " 1rem 1rem 0rem 1rem",
                    height: `3.2rem`,
                    padding: `2rem 1.2rem`,
                    borderRadius: `0.3rem`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `1.6rem`,

                    textOverflow: `ellipses`,
                }} />

        </StandaloneSearchBox>
    </div>

);

const SearchMap = (props) => {
    return (
        <div>
            <SearchBox onPlacesChanged={props.onPlacesChanged}/>
            {/* <SearchBox/> */}
        </div>
    )
}
export {
    SearchBox,
    SearchMap
}