import * as React from 'react'
import { Header } from './component/header'
import { BusList } from './Container/BusList'
import { BusDetail } from './Container/BusDetail'
import { Route } from 'react-router-dom'
import { BusFinding } from './Container/BusFinding'
import { BusHome } from './Container/BusHome'


class App extends React.Component{
  render() {
    return (
      <div className="background">
        <div className="content">
          <Header/>
          <Route exact path='/danhsachtuyen' component={BusList}></Route>
          <Route exact path='/trangchu' component={BusHome}></Route>
          <Route exact path='/buses/:id' component={BusDetail}></Route>
          <Route exact path='/timduong' component={BusFinding}></Route>
        </div>
      </div>    
    )
  }
}

export {
  App
}