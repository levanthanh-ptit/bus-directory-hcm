import * as React from 'react'


const BusScheduleBox = (props) => {
    return (
        <div className='busdetail__schedule__box'>
            {props.busstops.map(stop => {
            return <div className='busdetail__schedule__box__item'key={stop.id} 
                onClick={() => props.handleClickBusStop(stop.lat, stop.lng)}>
                {stop.name}
                </div>
            })}
        </div>
    )
}

export {
    BusScheduleBox
}