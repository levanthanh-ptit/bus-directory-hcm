import * as React from 'react';
import { Link } from 'react-router-dom'

const BusBlock = (props) => {
    let info = null
    if (props.businfo) {
        info = <table className="bus_list__block">
            <tbody>
                <tr>
                    <td>
                        <div>
                            <div className="icon">{props.businfo.number} </div>
                            <div>{props.businfo.name}</div>
                        </div>

                        
                    </td>
                </tr>
            </tbody>
        </table>
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
                <Link to={{pathname:`/buses/${bus.id}`, state:{tai:'tai'}}} key={bus.id}><BusBlock businfo={bus} /></Link>
            )}
        </div>
    )
}

export { BusBlock, BusBlocks };
