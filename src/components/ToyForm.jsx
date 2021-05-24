import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: ''
  }

  handleChange = (event) => {
        this.setState ({
          [event.target.name]: event.target.value,
        })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('A new toy was submitted: ' + this.state);
    this.props.addToy(this.state.name, this.state.image)
    }

  render() {
    // console.log(this.state.name, this.state.image)
    // console.log(this.handleSubmit)
    // console.log(this.state)

    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input 
           type="text"
           name="name" 
           placeholder="Enter a toy's name..." 
           className="input-text" 
           value={this.state.name}
           onChange={this.handleChange}
           />
          <br/>
          <input 
          type="text" 
          name="image" 
          placeholder="Enter a toy's image URL..." 
          className="input-text"
          value={this.state.image}
          onChange={this.handleChange}
          />
          <br/>
          
          <input type="submit" 
          name="submit" 
          value="Create New Toy" 
          className="submit"
          />
        </form>
      </div>
    );
  }

}

export default ToyForm;
