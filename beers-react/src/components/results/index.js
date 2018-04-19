import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import beersApi from '../../api-client/beers-api'
import 'bulma/css/bulma.css'

class Results extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    loadBeers(query) {
        beersApi.search(query)
            .then(beers => this.setState({ beers }))
    }

    retrieveBeer = (id) => {
        if (id) { this.props.history.push(`/beer/${id}`) }

    }

    componentDidMount() {
        const { params: { query } } = this.props.match

        this.loadBeers(query)
    }

    componentWillReceiveProps(props) {
        const { params: { query } } = props.match

        this.loadBeers(query)
    }

    render() {
        const { params: { query } } = this.props.match
        

        return (
            <div>
                <h1 className="is-size-3">{query}</h1>
                <ul>
                    {this.state.beers.map(beer => <li key={beer.id}>
                            <a onClick={e => { e.preventDefault(); this.retrieveBeer(beer.id) }}>
                            {beer.name}
                            </a>
                        </li>
                    )}
                </ul>

            </div>
        )
    }
}

const ResultsWithRouter = withRouter(Results)

export default ResultsWithRouter