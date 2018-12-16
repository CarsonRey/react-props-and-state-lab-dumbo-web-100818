import React from 'react'
import pets from '../data/pets'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: pets,
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (value) => {
    this.setState({
      filters: {...this.state.filters, type: value}
    })
  }

  onFindPetsClick = (value) => {
    if(value === "all"){
      fetch('/api/pets').then(response => response.json()).then(pets => {
        this.setState({
          pets: pets
        })
      })
    } else {
      fetch(`/api/pets?type=${value}`).then(response => response.json()).then(pets => {
        this.setState({
          pets: pets
        })
      })
    }

  }

  onAdoptPet = (petId) => {
    let pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    this.setState({
      pets: pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
