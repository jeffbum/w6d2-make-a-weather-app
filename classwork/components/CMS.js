import React from 'react'
import { Link } from 'react-router' //alows you to link to different routes in realtime.

class CMS extends React.Component {
    constructor(props) {
        super(props)
        // this.state = sharedState()
    }
    render() {
        return <div className="text-center">
        <h1>What's the Weather Today?!</h1>
        <Link to="/"><button type="button" className=" btn btn-default">Home Page</button></Link>
        <Link to="/page"><button type="button" className=" btn btn-default">5 Day Forecast</button></Link>
        <Link to="/search"><button type="button" className=" btn btn-default">Settings</button></Link>
        <div className="panel panel-default">
            <div className="panel-body">
                {this.props.children}
            </div>
        </div>
    </div>
    }
}

export default CMS
