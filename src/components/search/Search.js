import React, { Component } from 'react';
import Div from '../../styles/search';
import OutlinedTextFields from './subcomp/Textfield';

class Search extends Component {

  render() {
    return (
        <Div primary>
            <OutlinedTextFields/>
        </Div>
    );  
  }

}


export default Search;