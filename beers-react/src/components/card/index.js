import React, { Component } from 'react';
import beersApi from '../../api-client/beers-api'
import './styles/main.css'
import 'bulma/css/bulma.css'

class Card extends Component {
    state = {
        beer: '',
        description:'',
        category: ''
    }
   
    retrieve = (id) => {
       
        if (id) {
            beersApi.retrieve(id)
                .then(beer => {
                    this.setState({
                        name: this.props.name,
                        description: beer.style.description,
                        category: beer.style.category.name
                     })
                })
        }
    }

    componentWillMount(){
        this.retrieve(this.props.id)
    }

    componentWillReceiveProps(props) {
        this.retrieve(this.props.id)

    }

    render() {
        const {state:{name, description, category }} = this
       
        return (
           
                <div className="col" >
                    <div className="container">
                        <div className="front">
                            <div className="inner">
                                <p>{name}</p>
                                <span>{category}</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
        )
    }
}

export default Card