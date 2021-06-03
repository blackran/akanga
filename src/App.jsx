import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

// my import
import error404 from './components/error/error404'
import Principal from './components/principal/Principal'

axios.defaults.baseURL = 'https://www.perlerencontre.fr'

// <BrowserRouter basename={window.location.pathname || ''}>
function App (props) {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path="/List=:categorie" component={List}/> */}
          <Route exact path="/" component={Principal}/>
          <Route component={error404} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
