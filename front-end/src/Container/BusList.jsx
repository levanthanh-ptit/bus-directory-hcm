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
            <div className="buslist__content__list" >
                {!this.state.loading && this.state.buses ? <BusBlocks buses={this.state.buses} /> : "LOADING...."}
            </div>
        )
    }
}

export {
    BusList
}