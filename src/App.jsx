import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

// my import
import error404 from './components/error/error404'
import Principal from './components/principal/Principal'

axios.defaults.baseURL = 'https://www.perlerencontre.fr'

function App (props) {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className="App">
        <Switch>
          {/* <Route exact path="/List=:categorie" component={List}/> */}
          <Route exact path="/akanga/" component={Principal}/>
          <Route exact path="/" component={Principal}/>
          <Route component={error404} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
