import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            imgURL: '',
            name: '',
            price: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }

    handleImgChange = (event) => {
        this.setState({
            imgURL: event.target.value
        })
    }

    resetState = (event) => {
        event.preventDefault();
        this.setState({
            imgURL: '',
            name: '',
            price: ''
        })
    }

  render() {
      console.log(this.state)
    return (
      <div>
        <form>
            <input type="text" placeholder="name" onChange={(event) => this.handleNameChange(event)}/>
            <input type="text" placeholder="img url" onChange={(event) => this.handleImgChange(event)}/>
            <input type="text" placeholder="price" onChange={(event) => this.handlePriceChange(event)}/>
            <button>Add To Inv</button>
            <button onClick={(event) => this.resetState(event)}>Cancel</button>
        </form>
      </div>
    )
  }
}
