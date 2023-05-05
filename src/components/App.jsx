import React, {Component} from "react";

// import axios from "axios";

import { api } from "servises/api";

import { ImageGallery } from "./ImageGallery/ImageGallery";

import { Searchbar } from "./Searchbar/Searchbar";

import { Modal } from "./Modal/Modal";

import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    search: '',
    pictures: [],
    status: "",
    forModal: {},
    page: 1,
  }
  componentDidMount() {   
    
  }
  async componentDidUpdate(_, prevState) {
    const { search, page, pictures} = this.state; 
    console.log("in componentDidUpdate", this.state)
    // const key = '28720978-48527d1c9d73f1bfd555e68c2'; 
    if (prevState.search !== search || prevState.page !== page) 
      try {
        api.getPictures(search, page).then(pict => {
          const { data } = pict;
          this.setState({ pictures: [...data.hits, ...pictures]})
        } )      
      } catch (error) {
        console.log(error);      
    }
      
  }
  handleSubmit = (search) => {       
    this.setState({ search })   

  }
  handleShowModal = (forModal) => {
    
    this.setState({ forModal, status: "modal" })    
  }
  handleCloseModal = () => {
    this.setState({status: "",})
  }
  handleTurnPages = (prevState) => {
    // const { page } = this.state;
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }
  render() {
    const { pictures, forModal } = this.state;   
    
    return (
      <div>        
        <Searchbar onSubmit={this.handleSubmit} />        
        <ImageGallery pictures={pictures} onClick={this.handleShowModal} />
        {this.state.status.includes("modal") && <Modal bigPic={forModal} onClose={this.handleCloseModal} />}
        <Button onClick={ this.handleTurnPages} />
      </div>
  );
  }
  
};
