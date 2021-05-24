import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'



class App extends React.Component{
  constructor(props){
    super(props)

    // this.deleteToy = this.deleteToy.bind(this);

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
      fetch("http://localhost:3000/toys")
    .then((r) => r.json())
    .then((toysArray) => this.setState({toys: toysArray}))
    console.log(this.state)
  }

  
  addToy = (toyName, toyImage) => {
      fetch("http://localhost:3000/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: toyName,
          image: toyImage,
          likes: 0
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
  addLike = (id) => {
        const elementsIndex = this.state.toys.findIndex(element => element.id == id )
        let newArray = [...this.state.toys]
        newArray[elementsIndex] = {...newArray[elementsIndex], likes: newArray[elementsIndex].likes + 1}
        const currentLikes = this.state.toys[id].likes
        // console.log(currentLikes)
        // console.log(newArray[elementsIndex].likes)
                fetch(`http://localhost:3000/toys/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                likes: newArray[elementsIndex].likes
              }),
            })
              .then((r) => r.json())
              .then((toyObj) => {
                    this.setState({
                      toys: newArray
                    })
                })
      }


  render(){

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
         addLike={this.addLike}
         />

         
        
      </>
    );
  }

}

export default App;
