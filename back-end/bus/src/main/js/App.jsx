import * as React from 'react'
import { Header } from './component/header'


class App extends React.Component{
  render() {
    return (
      <div className="background">
        <div className="content">
          <Header/>
        </div>
      </div>    
    )
  }
}

export {
  App
}