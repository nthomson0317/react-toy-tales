import React, { Component } from 'react';

class ToyCard extends Component {
  constructor(props){
    super(props)
    
  }

  

  handleDelete = () => {
    const id = this.props.toy.id
    // event.preventDefault()
    this.props.deleteToy(id)
    console.log('handle delete fired')
    console.log(this.props)

    

  }

  render() {
    console.log(this.props.toy)
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" id={this.props.toy.id} onClick={this.handleDelete}>Donate to GoodWill </button>
      </div>
      // 
    );
  }

}

export default ToyCard;
