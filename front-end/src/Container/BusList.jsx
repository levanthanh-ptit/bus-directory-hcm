import * as React from 'react'
import { SearchBus } from '../component/SearchBus'
import { BusBlocks } from '../component/BusBlock'


class BusList extends React.Component {

    render() {
        return (
            <div>
                <SearchBus/>
                <BusBlocks/>
            </div>
        )
    }
}

export {
    BusList
}