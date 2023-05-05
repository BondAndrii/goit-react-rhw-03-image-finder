import React, {Component} from "react";

import axios from "axios";

import { ImageGallery } from "./ImageGallery/ImageGallery";

import { Searchbar } from "./Searchbar/Searchbar";

import { Modal } from "./Modal/Modal";


export class App extends Component {
  state = {
    search: '',
    pictures: [],
    status: "",
    forModal: {},
  }
  componentDidMount() {
    console.log("componentDidMount")
    
  }
  async componentDidUpdate(_, prevState) {
    const { search } = this.state;   
    const key = '28720978-48527d1c9d73f1bfd555e68c2';     
    try {
      const { data } = await axios.get(`https://pixabay.com/api/?q=${search}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=4`)
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
  handleShowModal = (forModal) => {
    console.log("приход с итема", forModal);
    this.setState({ forModal, status: "modal" })    
  }
  handleCloseModal = () => {
    this.setState({status: "",})
  }
  render() {
    const { pictures, forModal } = this.state;
    
    // console.log("in render", pictures);
    console.log("in render", this.state);
    return (
      <div>        
        <Searchbar onSubmit={this.handleSubmit} />        
        <ImageGallery pictures={pictures} onClick={this.handleShowModal} />
        {this.state.status.includes("modal") && <Modal bigPic={forModal} onClose={this.handleCloseModal} />}
      </div>
  );
  }
  
};
