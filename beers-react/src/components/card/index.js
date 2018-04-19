import React, { Component } from 'react';
import beersApi from '../../api-client/beers-api'
import './styles/main.css'
import 'bulma/css/bulma.css'

class Card extends Component {
    constructor() {
        super()

        this.state = {
            beer: {}
        }
    }

    componentWillMount() {
        const { params: { id } } = this.props.match

        if (id) {

            beersApi.retrieve(id)
                .then(beer => this.setState({ beer }))
        }
    }

    render() {
        const { state: { beer } } = this
        console.log(beer)
        return (
            beer ?
                <div>
                    <h3>{beer.name}</h3>
                    <div className="blog-card spring-fever">
                        <div className="title-content">
                            <hr />
                            <div className="intro">{beer.id}</div>
                        </div>
                        <div className="card-info">{beer.description}
                        </div>
                        <ul className="utility-list">

                            <li className="date">{beer.createDate}</li>
                        </ul>
                        <div className="gradient-overlay"></div>
                        <div className="color-overlay"></div>
                    </div>
                </div>
                : undefined
        )
    }
}

export default Card