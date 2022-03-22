import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        );
    }

    search(term) {
        this.props.onSearch(this.state.text);
    }

    handleTermChange(event) {
        this.setState({text: event.target.value})
    }
}

export default SearchBar;
