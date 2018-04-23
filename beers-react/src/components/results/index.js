import React, { Component } from 'react';
import beersApi from '../../api-client/beers-api'
import Card from '../card'
import './styles/main.css'

class Results extends Component {
    constructor(){
        super()

        this.state = {
            beers:[],
            beerResult:''
        }
    }

    search = (query) => {
        if (query) {
            beersApi.search(query)
                .then(beers => {
                    this.setState({ beers })
                })
        }
    }

    componentDidMount(){
        this.search(this.props.match.params.query)
    }

    componentWillReceiveProps(props) {
        this.search(this.props.match.params.query)

    }

    render() {
        const {state:{beers}} = this
        const { params: {query} } = this.props.match
        return (
            
                <div className="wrapper">
                    <h1>{query}</h1>
                    <div className="cols">

                        {beers.map(beer => {                            
                            return (
                                <Card key={beer.id}
                                      id={beer.id}
                                      name={beer.name}
                                      
                                />
                            )
                        })}
                                
                    </div>
                </div>
            
        )
    }
}


export default Results