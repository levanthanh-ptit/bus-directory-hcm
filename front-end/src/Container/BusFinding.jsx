import * as React from 'react'
import { SearchMap } from '../component/SearchMap'
import Map from '../component/Map'
import { Marker } from 'react-google-maps'
import { withMapFindingStyle } from '../hoc/withMapstyle'
import { compose, withProps } from 'recompose'
import axios from 'axios'

class BusFinding extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingMap: true,
            isGetBoundsDone: false,
            center: {
                lat: null,
                lng: null,
            },
            topleft: {
                lat: null,
                lng: null,
            },
            bottomright: {
                lat: null,
                lng: null,
            }
        }

    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                center: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                },
                loadingMap: false,
            })
        })
    }

    // componentDidUpdate() {
    //     if (!this.state.isGetBoundsDone && !this.state.loadingMap && window.google.maps) {
    //         // const googlemap = this.googlemap.current;
    //         // console.log(googlemap)
    //     }
    // }


    fetchBusStops = (topleft, bottomright) => {
        axios.get(`http://localhost:8080/api/stops/getinbounds?lng1=106.68340787887573&lat1=10.768808774874774&lng2=106.72228231430054&lat2=10.786346643944889`,
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
    }

    onPlacesChanged = (place) => {
        console.log(place);

        let topleft = {
            lat: place[0].geometry.viewport.b.b,
            lng: place[0].geometry.viewport.f.b,
        }
        let bottomright = {
            lat: place[0].geometry.viewport.b.f,
            lng: place[0].geometry.viewport.f.f,
        }

        this.setState({
            center: {
                lat: place[0].geometry.location.lat(),
                lng: place[0].geometry.location.lng()
            },
            topleft: topleft,
            bottomright: bottomright,
        })

        this.fetchBusStops(topleft, bottomright);


    }

    render() {
        const Mapstyle = compose(withMapFindingStyle)(Map);
        return (
            <div>
                <SearchMap onPlacesChanged={this.onPlacesChanged} />
                {!this.state.loadingMap ?
                    <Mapstyle center={this.state.center} >
                        <Marker position={this.state.center} />
                    </Mapstyle>
                    : null
                }
            </div>
        )
    }
}

export {
    BusFinding
}