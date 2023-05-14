import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

export class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        <Button></Button>
      </>
    );
  }
}
