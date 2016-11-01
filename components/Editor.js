import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind' //COLLIN created a auto binding method. He is cool.
import { sharedState, attachSharedState, detachSharedState} from 'react-helpers/dist/sharedState' //each object is just a function. attach listens for changes in inbox, detach stops listening.

class Editor extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        this.state = sharedState()
        // this.updatePageText = this.updatePageText.bind(this)
      //   this.state = {
      //       pageText: ''
      //   }
   }

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

render() {
   return <div>
   <h1>Editor View</h1>
   <textarea className="form-control" onChange={this.updatePageText}>{this.state.pageText}</textarea>
   <p>{this.state.pageText}</p>
   </div>
}
}

export default Editor
