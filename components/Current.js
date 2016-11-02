import React from 'react'
import moment from 'moment'

class Current extends React.Component{
    constructor(props) {
        super(props)
        this.state= {}
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=indianapolis,us&units=imperial&APPID=61e5f9e16630c213257862b8ddce24b7')
       .then(response => response.json())
       .then((weatherFetch)=>{
           this.setState({
               location:weatherFetch.name,
               temp:Math.round(weatherFetch.main.temp),
               condition:weatherFetch.weather[0].main,
           })
       })
   }

   render() {
       var date = moment().format('MMMM Do YYYY, h:mm:ss a');
       return <div className="container text-center">
           <div className="row">
               <h3 className="weatherApp">{this.state.location}</h3>
               <span>{date}</span>
               <h1 className="degrees">{this.state.temp} &#x2109;</h1>
               <h3 className="textWhite">{this.state.condition}
               </h3>
           </div>
       </div>
   }

export default Current
