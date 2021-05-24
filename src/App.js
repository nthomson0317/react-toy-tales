import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{
  constructor(props){
    super(props)

    this.deleteToy = this.deleteToy.bind(this);

  this.state = {
    isLoading: false,
    display: true,
    toys: []
  }
}
  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

    componentDidMount() {
      // this.fetchToys()
      fetch("http://localhost:3000/toys")
    .then((r) => r.json())
    .then((toysArray) => this.setState({toys: toysArray}))
  }

  
  addToy = (toyName, toyImage) => {
      fetch("http://localhost:3000/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: toyName,
          image: toyImage
        }),
      })
        .then((r) => r.json())
        .then((newToy) => this.setState({ toys: [...this.state.toys, newToy]}))
        
    
  }

  deleteToy = (id) => {
          fetch(`http://localhost:3000/toys/${id}`, {
        method: "DELETE",
          })
        .then((r) => r.json())
        .then((toy) => {
          this.setState({
            toys: [...this.state.toys.filter(toy => toy.id !==id)] 
          })
        })
  }


  render(){
    console.log(this.state)

    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          {/* <button onClick={this.handleClick}> Add a Toy </button> */}
        </div>
        <ToyContainer allToys={this.state.toys}
         deleteToy={this.deleteToy}
         />
         
        
      </>
    );
  }

}

export default App;
