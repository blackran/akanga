import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

// my import
import error404 from './components/error/error404'
import Principal from './components/principal/Principal'

axios.defaults.baseURL = 'https://www.perlerencontre.fr'

// <BrowserRouter basename={window.location.pathname || ''}>
function App (props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <Route exact path="/List=:categorie" component={List}/> */}
          <Route basename={process.env.PUBLIC_URL} exact path="/" component={Principal}/>
          <Route basename={process.env.PUBLIC_URL} component={error404} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
