import * as React from 'react'
import Map from '../component/Map'
import { Marker } from 'react-google-maps'
import { BusScheduleBox } from '../component/BusScheduleBox'
import { compose } from 'recompose'
import { withMapDetailStyle } from '../hoc/withMapstyle'
import axios from 'axios'

class BusDetail extends React.Component {

    state = {
        loading: true,
        loadingMap: true,
        center: {
            lat: null,
            lng: null,
        },
        busdetail: null,
        busstops: [],
        selectedStop: {
            lat: null,
            lng: null,
        }
    }

    fetchBusdetail = () => {
        axios.get(`http://localhost:8080/api/buses/${this.props.match.params.id}`)
            .then(resp => {
                this.setState({
                    busdetail: resp.data,
                })
                return resp;
            })
            .then(resp => {
                axios.get(`http://localhost:8080/api/stops/route/${resp.data.number}`)
                    .then(resp => {
                        var buff = resp.data;
                        console.log(buff);
                        
                        this.setState({ 
                            busstops: resp.data,
                            loading: false,
                            center: {
                                lat: buff[0].lat,
                                lng: buff[0].lng,
                            },
                        })
                    })
            })
    }

    handleClickBusStop = (lat, lng) => {
        this.setState({
            selectedStop: {
                lat: lat,
                lng: lng,
            },
            center: {
                lat: lat,
                lng: lng,
            },
        })
    }

    componentDidMount() {
        console.log(this.props)
        navigator.geolocation.getCurrentPosition(location => {
            this.setState({
                center: {
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                },
                loadingMap: false,
            })
        })
        this.fetchBusdetail();

    }

    render() {
        const Mapstyle = compose(withMapDetailStyle)(Map);
        let renderBusdetai = 'Loading....';
        if (this.state.busdetail && this.state.busstops) {
            const { busdetail, busstops } = this.state;
            console.log(busstops)
            renderBusdetai = <React.Fragment><p className="busdetail__title">Thông tin tuyến xe buýt <span className="busdetail__high_light">{busdetail.number} {busdetail.name}</span> </p>
                <div className="busdetail__content">
                    <ul className="busdetail__content__list">
                        <li>
                            <div className="busdetail__content__label"> <strong>Mã số tuyến:</strong> {busdetail.number}</div>
                        </li>
                        <li>
                            <div className="busdetail__content__label"><strong>Tên tuyến:</strong>  {busdetail.name}</div>
                        </li>
                        <li>
                            <div className="busdetail__content__label"><strong>Loại hình hoạt động:</strong> {busdetail.name}</div>
                        </li>
                        <li>
                            <div className="busdetail__content__label"><strong>Chiều đi:</strong> {busdetail.forwardRoute}</div>
                        </li>
                        <li>
                            <div className="busdetail__content__label"> <strong>Chiều về:</strong> {busdetail.backRoute}</div>
                        </li>
                    </ul>
                    <div className="busdetail__content__hot-line">Công ty Cổ phần Xe khách Sài Gòn, ĐT: (028)39505505</div>

                </div>
                <div className="busdetail__schedule">
                    <BusScheduleBox busstops={busstops} handleClickBusStop={this.handleClickBusStop} />
                    {!this.state.loadingMap ?
                        <Mapstyle
                            center={this.state.center}
                        >
                            {busstops.map(stop => {
                                const _position = {
                                    lat: stop.lat,
                                    lng: stop.lng
                                }
                                return <Marker position={_position} key={stop.id} />

                            })}
                            
                        </Mapstyle> : null
                    }

                </div>
            </React.Fragment>
        }

        return (
            <div>
                {renderBusdetai}
            </div>
        )
    }
}

export {
    BusDetail
}