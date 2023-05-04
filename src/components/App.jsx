import React, {Component} from "react";

import axios from "axios";

import { ImageGallery } from "./ImageGallery/ImageGallery";

import { Searchbar } from "./Searchbar/Searchbar";



export class App extends Component {
  state = {
    search: '',
    pictures: [],
    
  }
  componentDidMount() {
    console.log("componentDidMount")
    
  }
  async componentDidUpdate(_, prevState) {
    const { search } = this.state;
    console.log(search)
    const key = '28720978-48527d1c9d73f1bfd555e68c2'; 
    
    try {
      const {data} = await axios.get(`https://pixabay.com/api/?q=${search}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
      console.log(data.hits)
      if (prevState.search !== search)
      this.setState({pictures: data.hits})
    } catch (error) {
      console.log(error);
    }
    
      
    
    
    
  }
  handleSubmit = (search) => {       
    this.setState({ search })   

  }

  render() {
    const { pictures } = this.state;
    console.log("in render", pictures);
    return (
      <div>        
        <Searchbar onSubmit={this.handleSubmit} />
        
        <ImageGallery/>
      </div>
  );
  }
  
};
