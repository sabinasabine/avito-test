import React, { Fragment } from "react";
import ImageList from "./component/ImageList";
import Modal from "./component/Modal/Modal";
import Portal from "./component/Modal/Portal";
import Header from "./component/Header";
import Footer from "./component/Footer";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imgArr: [],
      isLoaded: false,
      error: null,
      isModalOpen: false,
      idModal: null
    };
  }

  componentDidMount() {
    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            imgArr: result,
            isLoaded: true
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleClick = e => {
    this.toggleModal();
    const id = e.target.id;
    this.setState({ idModal: id });
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    const { imgArr, isLoaded, error, isModalOpen, idModal } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <h1 className="loading">Loading... </h1>;
    } else {
      return (
        <Fragment>
          <Header />
          <ImageList imgArr={imgArr} handleClick={this.handleClick} />
          <Footer />
          {isModalOpen && (
            <Portal>
              <Modal idModal={idModal} toggleModal={this.toggleModal} />
            </Portal>
          )}
        </Fragment>
      );
    }
  }
}

export default App;
