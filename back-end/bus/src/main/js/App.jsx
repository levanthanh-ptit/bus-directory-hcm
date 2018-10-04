import * as React from 'react'
import { Header } from './component/header'
import { BusList } from './Container/BusList'


class App extends React.Component{
  render() {
    return (
      <div className="background">
        <div className="content">
          <Header/>
          <BusList/>
        </div>
      </div>    
    )
  }
}

export {
  App
}