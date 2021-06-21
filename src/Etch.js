import './Etch.css';
import styled from 'styled-components';
import React from 'react';
import {Grid, GridButton, GridForm} from './Grid.js';

export const AuthorComponent = styled.div`
  color: ${( props ) => props.color};

`;

class Etch extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gridsize: 32,
      clear: false,
    };

    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleGridSizeChange = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({gridsize: value});
  }

  handleClearButtonClick(event) {
    event.preventDefault();
    this.setState({clear: !this.state.clear});
  }

  render() {
    const today = new Date().getFullYear();
    const gridsize = this.state.gridsize;
    return (
      <div className="Etch">
        <h1>Etch-A-Sketch</h1>
        <p>Change the grid size below. Hover your cursor through the canvas below to draw!</p>

        <GridForm 
          type="number"
          value={gridsize}
          onChange={(event) => this.handleGridSizeChange(event)}
          min="1"
          max="99">
        </GridForm>

        <GridButton 
            type="submit"
            value={gridsize}
            onClick={this.handleClearButtonClick}>
            Reset
          </GridButton>

        <Grid gridsize={gridsize} key={this.state.clear} > 
        </Grid> 
        <br />

        <AuthorComponent color="red">By Junn Geronimo {today}</AuthorComponent>
      </div>
      
    );
  }
}

export default Etch;
