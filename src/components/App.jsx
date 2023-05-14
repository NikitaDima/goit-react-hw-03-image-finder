import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

export class App extends Component {
  state = {
    valueInput: '',
  };

  handleFormSubmit = valueInput => {
    this.setState({ valueInput });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery />
        <Button />
      </>
    );
  }
}
