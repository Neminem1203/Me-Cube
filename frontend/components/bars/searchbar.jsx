import React from 'react';
import { searchIcon } from '../../icons';
class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search_query: props.location.search.slice(14)
        }
        this.updateSearchQuery = this.updateSearchQuery.bind(this);
        this.search = this.search.bind(this);
    }
    updateSearchQuery(e){
        e.preventDefault();
        this.setState({search_query: e.target.value})
    }
    search(e){
        e.preventDefault();
        if (this.state.search_query != "") {
            window.location.href = `/#/results?search_query=${this.state.search_query}`
        }
    }
    render(){
        return (
            <form id="searchbar" onSubmit={this.search}>
                <input type="text" value={this.state.search_query} onChange={this.updateSearchQuery} />
                <button>{searchIcon()}</button>
            </form>
        )
    }
}
export default Searchbar;