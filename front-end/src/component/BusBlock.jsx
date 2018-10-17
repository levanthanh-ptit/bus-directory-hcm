import * as React from 'react';
import { Link } from 'react-router-dom'

const BusBlock = (props) => {
    let info = null
    if (props.businfo) {
        info = 
        <div className="bus_list__block">
            <div className="bus_list__route-num-icon">{props.businfo.number} </div>
            <div className="bus_list__route-lable" >{props.businfo.name}</div>
        </div>
    }

    return (
        <div>
            {info}
        </div>
    )
}

const BusBlocks = (props) => {
    return (
        <div className="bus_list">
            <Link to="/buses/1"><BusBlock /></Link>
            {props.buses && props.buses.map(bus =>
                <Link to={{ pathname: `/buses/${bus.id}`, state: { tai: 'tai' } }} key={bus.id}><BusBlock businfo={bus} /></Link>
            )}
        </div>
    )
}

export { BusBlock, BusBlocks };
