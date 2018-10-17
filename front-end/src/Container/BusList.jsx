import * as React from 'react'
import {
    SearchBus
} from '../component/SearchBus'
import {
    BusBlocks
} from '../component/BusBlock'
import axios from 'axios'

class BusList extends React.Component {

    state = {
        loading: true,
        buses: []
    }

    fetchBuses = () => {
        axios.get(`http://localhost:8080/api/buses`)
            .then(resp => {
                this.setState({
                    buses: resp.data,
                    loading: false,
                })
            })

    }

    componentDidMount() {
        this.fetchBuses()
    }

    render() {
        return (
            <React.Fragment>
                <div className="buslist__content__label">Danh sách <span className="busdetail__high_light">Tuyến</span> </div>
                <div className="buslist__content__list" >
                    {!this.state.loading && this.state.buses ? <BusBlocks buses={this.state.buses} /> : "LOADING...."}
                </div>
            </React.Fragment>
        )
    }
}

export {
    BusList
}