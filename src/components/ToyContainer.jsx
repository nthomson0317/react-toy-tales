import React, { Component } from 'react'
import ToyCard from './ToyCard'

export default class ToyContainer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toys: this.props.allToys
    }
  }

   onDeleteToy = (id) => {
    this.props.deleteToy(id);
    // this.setState({
    //   toys: [...this.state.toys.filter(toy => toy.id !==id)] 
    // })
  }

  render() {
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */
      
      this.props.allToys.map(toy => (
        <ToyCard 
        key={toy.id}
        toy={toy}
        deleteToy={this.onDeleteToy}
        // data={this.props.state}
        />
      ))
      
      }
    </div>
  );
}
}


