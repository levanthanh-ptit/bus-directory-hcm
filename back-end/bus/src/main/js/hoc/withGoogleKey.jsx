import { withProps, compose } from "recompose"

const withGoogleKey = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWUjzm2-h1y1GTdl-K5fFv2Sd5uAIjYpk&v=3.exp&libraries=geometry,drawing,places",
    }
    ))

export default withGoogleKey;

