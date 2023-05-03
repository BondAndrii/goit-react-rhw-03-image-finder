import React, {Component} from "react";

import { ImageGallery } from "./ImageGallery/ImageGallery";

import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    search:''
  }

  handleSubmit = (search) => {
    // event.preventDefault();
    this.setState({search})
    

  }

  // reset = () => {
  //   this.setState({ search: '' })
  //   console.log("in reset")
  // } 

  render() {
    console.log("in render", this.state)
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery/>
      </div>
  );
  }
  
};
