import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'

// my import
import error404 from './components/error/error404'
import Principal from './components/principal/Principal'

axios.defaults.baseURL = 'https://www.perlerencontre.fr'

function App (props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          {/* <Route exact path="/List=:categorie" component={List}/> */}
          <Route exact path="/" component={Principal}/>
          <Route component={error404} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
