import * as React from 'react'
import { SearchMap } from '../component/SearchMap'
import Map from '../component/Map'
import { Marker } from 'react-google-maps'
import { withMapFindingStyle } from '../hoc/withMapstyle'
import { compose, withProps } from 'recompose'


class BusFinding extends React.Component {

    state = {
        loadingMap:true,    
        center: {
            lat: null,
            lng: null,
        },
        findingLocation:{
           lat: null,
           lng: null,  
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

    render() {
        const Mapstyle = compose(withMapFindingStyle)(Map);
        
        return (
            <div>
                <SearchMap/>
                {!this.state.loadingMap ?
                    <Mapstyle center={this.state.center}>
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