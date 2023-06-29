import React, { Component } from 'react'

export class ControlledForms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: '',
      }
    }

//    handleNameChange = (event) => {
//         this.setState({
//             name: event.target.value
//         }) 
//     }

//     handleCategoryChange = (event) => {
//         this.setState({
//             category: event.target.value
//         }) 
//     }

//     handleCommentsChange = (event) => {
//         this.setState({
//             comments: event.target.value
//         }) 
//     }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    
  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor='id-name'>Your name:</label>
                <input value={this.state.name} onChange={this.handleChange} id='id-name' name='name' type='text'></input>
            </div>
            <div>
                <label htmlFor='id-category'>Query category:</label>
                <select id='id-category' name='category' value={this.state.category} onChange={this.handleChange}>
                    <option value='website'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea id='id-comments' name='comments' value={this.state.comments} onChange={this.handleChange} />
            </div>
            <input type='submit' value='Submit'></input>
        </form>
      </div>
    )
  }
}

export default ControlledForms