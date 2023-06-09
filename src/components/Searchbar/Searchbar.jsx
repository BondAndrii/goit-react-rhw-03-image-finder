import React, {Component} from "react"

import style from "./Searchbar.module.css"

export class Searchbar extends Component {
  state = {
    search:'',
  }
  handleChange = event => {
    this.setState({search: event.target.value})
    

  }
  handleSubmit = (event) => {
      event.preventDefault();
      const { search } = this.state;
      this.props.onSubmit(search);
      this.reset();
    
  }
  reset = () => {
        this.setState({search: ''})
    }
  render() {
   
    return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={this.handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
            className={style.SearchFormInput}
            value={this.state.search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
        />
      </form>
    </header>
  )
  }
  
}

