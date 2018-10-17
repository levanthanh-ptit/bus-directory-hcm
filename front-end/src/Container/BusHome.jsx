import * as React from 'react'
import { compose } from 'recompose'

class BusHome extends React.Component {
    render() {
        var x = [1,1,1,1,1,1,1,1,1,1,11,1,1]
        return (
            <div>
                {x.map(z =>{
                    return <div> {z}</div>
                })}
            </div>
        );
    }
}

export default BusHome;