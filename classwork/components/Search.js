import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind' //COLLIN created a auto binding method. He is cool.
import { sharedState, attachSharedState, detachSharedState} from 'react-helpers/dist/sharedState' //each object is just a function. attach listens for changes in inbox, detach stops listening.

class Search extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = {
           city: 'Indianapolis',
           temp: '--',
           condition: '---------',
        }

        // this.updatePageText = this.updatePageText.bind(this)
      //   this.state = {
      //       pageText: ''
      //   }
   }
//Will use this for the API. Read LifeCycle
      componentDidMount(){
         attachSharedState(this)
      }
      componentWillUnmount(){
         detachSharedState(this)
      }

updatePageText(e) {
    sharedState({
        pageText: e.target.value,
    })
}
// function weatherData() {
//    searchTerm = document.querySelector('.searchByCity').value
//    fetch(encodeURIComponent('http://api.openweathermap.org/data/2.5/weather?q=') + encodeURIComponent(searchTerm) + ',us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
//    .then(function(response) {
//        return response.json()
//    })
//    .then(function(weather) {
//        console.log(weather)
//    })
// }
// weatherData()

render() {
   return <div>
   <h1>Search by City</h1>
   <textarea className="form-control" onChange={this.updatePageText}>{this.state.pageText}</textarea>
   <p>{this.state.pageText}</p>
   </div>
}
}

export default Search
