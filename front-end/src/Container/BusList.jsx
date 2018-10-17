import * as React from 'react'
import {SearchBus} from '../component/SearchBus'
import {BusBlocks} from '../component/BusBlock'
import axios from 'axios'

class BusList extends React.Component {

    state={
        buses: []
    }

    fetchBuses=() => {
        axios.get(`http://localhost:8080/api/buses`)
            .then(resp => console.log(resp))

    }

    componentDidMount() {
        this.fetchBuses()
    }

    render() {
        return (
            <div>
                <SearchBus />
                <BusBlocks />
            </div>
        )
    }
}

export {
    BusList
}