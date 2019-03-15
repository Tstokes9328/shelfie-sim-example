import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            imgURL: '',
            name: '',
            price: '',
        }
    }

    //Lifecycle hooks
    componentDidMount() {
        const { id } = this.props.match.params;
        this.getProduct(id);
    }

    //Methods
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

    resetState = () => {
        this.setState({
            imgURL: '',
            name: '',
            price: ''
        })
    }

    getProduct = (id) => {
        axios.get(`/api/product/${id}`).then(response => {
            console.log(response);
            const { img, name, price } = response.data;
            this.setState({
                imgURL: img,
                name: name,
                price: price
            });
        })
    }

    createProduct = () => {
        const { imgURL, name, price } = this.state;

        const product = {
            imgURL: imgURL,
            name: name,
            price: price
        }

        axios.post('/api/product', product).then(response => {

        });

        this.resetState();
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.imgURL} onError={() => {
                        this.setState({
                            imgURL: 'https://www.marylandhillel.org/wp-content/plugins/bc-flex-content/images/default-no-image.jpg'
                        })
                    }} />
                    <input type="text" placeholder="name" onChange={(event) => this.handleNameChange(event)} />
                    <input type="text" placeholder="img url" onChange={(event) => this.handleImgChange(event)} />
                    <input type="text" placeholder="price" onChange={(event) => this.handlePriceChange(event)} />
                    <button onClick={() => this.createProduct()}>Add To Inv</button>
                    <button onClick={() => this.resetState()}>Cancel</button>
                </div>
            </div>
        )
    }
}
