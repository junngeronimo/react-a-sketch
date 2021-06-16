import './Etch.css';
import styled from 'styled-components';
import React from 'react';
import {GridForm} from './Grid.js';

export const AuthorComponent = styled.div`
  color: ${( props ) => props.color};

`;

class Etch extends React.Component {

  

  render() {
    var today = new Date().getFullYear();
    return (
      <div className="Etch">
        <h1>Etch-A-Sketch</h1>
        <h3>Please enter a grid size below.</h3>

        <GridForm message="">
        </GridForm>
        <br />

        <AuthorComponent color="red">By Junn Geronimo {today}</AuthorComponent>
      </div>
      
    );
  }
}

export default Etch;
