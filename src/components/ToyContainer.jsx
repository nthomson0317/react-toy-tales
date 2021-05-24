import React, { Component } from 'react'
import ToyCard from './ToyCard'

export default class ToyContainer extends Component {
  constructor(props) {
    super(props)
    
    // this.state = {
    //   toys: this.props.allToys
    // }
  }


//  deleteToy = (id) => {
//           fetch(`http://localhost:3000/toys/${id}`, {
//         method: "DELETE",
//           })
//         .then((r) => r.json())
//         .then((toy) => {
//           this.setState({
//             toys: [...this.state.toys.filter(toy => toy.id !==id)] 
//           })
//         })
  // }

  //  onDeleteToy = (id) => {
  //   this.props.deleteToy(id);
  //   // () => alert('A new toy was deleted ');
  //   // this.setState({
  //   //   toys: [...this.state.toys.filter(toy => toy.id !==id)] 
  //   // })
  // }

  render() {
  return(
    <div id="toy-collection">
      {/* Render the collection of ToyCards */
      
      this.props.allToys.map(toy => (
        <ToyCard 
        key={toy.id}
        toy={toy}
        deleteToy={this.props.deleteToy}
        />
        
      ))
      
      }
    </div>
  );
}
}


