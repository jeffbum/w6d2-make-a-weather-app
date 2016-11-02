import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, Link, browserHistory } from 'react-router'
import CMS from '../components/CMS'
import Page from '../components/Page'
import Search from '../components/Search'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={CMS}>
            <Route path="/page" component={Page} />
            <Route path="/search" component={Search} />
        </Route>
    </Router>





    , document.getElementById('cms')
)
