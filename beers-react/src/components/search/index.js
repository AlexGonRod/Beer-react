import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './styles/main.css'
import 'bulma/css/bulma.css'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            query: ''
        }
    }

    handleChange = (e) => {

        this.setState({ query: e.target.value })
    }

    search = (e) => {
        const { state: { query } } = this
        e.preventDefault()

        if (query) { this.props.history.push(`/search/${query}`) }
    }


    render() {
        return (

            <div className="search-wrapper">
                <form onSubmit={this.search}>
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="text" placeholder="Find a Beer" onChange={this.handleChange} />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                Search
                    </button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const SearchWithRouter = withRouter(Search)
export default SearchWithRouter