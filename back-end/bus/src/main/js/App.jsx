import * as React from 'react'
import { Header } from './component/header'
import { SearchBus } from './component/SearchBus'


class App extends React.Component{
  render() {
    return (
      <div className="background">
        <div className="content">
          <Header/>
          <SearchBus/>
        </div>
      </div>    
    )
  }
}

export {
  App
}