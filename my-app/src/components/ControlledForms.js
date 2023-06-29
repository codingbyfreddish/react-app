import React, { Component } from 'react'

export class ControlledForms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }

   handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        }) 
    }
    
  render() {
    return (
      <div>
        <form>
            <label htmlFor='id-name'>Your name:</label>
            <input value={this.state.name} onChange={this.handleNameChange} id='id-name' name='name' type='text'></input>
            <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}

export default ControlledForms