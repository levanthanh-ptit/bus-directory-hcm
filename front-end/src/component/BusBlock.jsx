import * as React from 'react';
import { Link } from 'react-router-dom'


const BusBlock = (props) => {

    return (
        <table className="bus_list__block">
            <tbody>
                <tr>
                    <td>
                        <div className="icon">01</div>
                    </td>
                    <td>Bến Thành- BX Chợ Lớn</td>
                </tr>
            </tbody>
        </table>
    )
}

const BusBlocks = () => {
    return(
        <div className="bus_list">
            
            <Link to="/buses/1"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
            <Link to="/busdetail/:id"><BusBlock/></Link>
        </div>
    )
}

export { BusBlock, BusBlocks };
