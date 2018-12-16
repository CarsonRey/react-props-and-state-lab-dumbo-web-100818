import React from 'react'

class Filters extends React.Component {

  state = {

  }

  grabValue = (e) => {
    let value = e.target.parentElement.previousElementSibling.firstElementChild.value
    this.props.onChangeType(value)
    this.props.onFindPetsClick(value)
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.grabValue} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
