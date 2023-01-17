import React, { Component } from "react";
import { SearchHeader, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from "./Searchbar.styled";
import { ImSearch } from 'react-icons/im';
import toast from 'react-hot-toast';

export default class Searchbar extends Component {
    state = {
        query: '',
    }
    
    handleChange = e => {
        this.setState({
            query:e.currentTarget.value.toLowerCase(),
        })
    }

    handleSubmit = e =>{
    e.preventDefault();
    if (this.state.query.trim() === '') {
    return toast.error('Please enter query again', {
    duration: 2000,
    position: 'top-right',
      });
    }
    this.props.onSubmit(this.state.query);
        this.setState({
            query: ''
    });
    }
        
    render() {
   
    return (
    <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
            <SearchButton type="submit">
            <SearchButtonLabel><ImSearch/></SearchButtonLabel>
            </SearchButton>

            <SearchInput
            onChange={this.handleChange}
            value={this.state.query}            
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </SearchForm>
    </SearchHeader>
    )}
   
}

