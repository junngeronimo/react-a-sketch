import styled from 'styled-components';
import React from 'react';

// const media = {
//   xs: (styles) => `
//     @media only screen and (max-width: 1000px) {
//       ${styles}
//     }
//   `,
// }

const GridContainer = styled.div`
  border: 0.5px solid red;

  display: grid;
  
  ${'' /* justify-content: center; */}
  margin-left: auto;
  margin-right: auto;

  grid-template-columns: repeat(${(props) => props.gridsize}, 1fr);
  height: ${(props) => props.gridsize}vw;
  width: ${(props) => props.gridsize}vw;
  
`;

const Cell = styled.div`
  ${'' /* flex: ${(props) => props.size}; */}
  height: 1vw;
  width: 1vw;
  position: absolute;
  
  transition:0s 1000000s;

  &:hover {
    background-color: rgba(0,0,0,1);
    
    transition:0s;
  }

  &:onClick {
    background-color: white;
  }

  ${'' /* ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)} */}
`;



export const GridButton = styled.button`
  background: white;
  font-size: 0.75em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: gray;
  } 
`;



export function GridGenerate(props) {
  let cells = [];

  // console.table(props);

  for (let i = 0; i < (props.gridsize*props.gridsize); i++) {
    cells.push(<Cell></Cell>);
  }
  let newGrid = cells.map((cell, j) =>
    <div key={j}>
      {cell}
    </div>
  );
  
  return (
    <GridContainer gridsize={props.gridsize}>
      
      {newGrid}
      
    </GridContainer>
  );
}

export class GridForm extends React.Component {

  handleInputGridChange = (event) => {

    this.props.onChange(event);
    
  }

  render() {
    return (
      <form>
        <legend>
          Grid Size ({this.props.value} by {this.props.value})
          <input
            type={this.props.type}
            value={this.props.value}
            onChange={(event) => this.handleInputGridChange(event)}
            min={this.props.min}
            max={this.props.max} />
        </legend>
      </form>

    )
  }
}

export class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.onGridReset = this.onGridReset.bind(this);
  }

  onGridReset(event) {
    this.props.onGridReset(event.target.value);
  }

  render() {  
    return (
      <div>
        <GridGenerate gridsize={this.props.gridsize}>
        
        </GridGenerate> 
      </div>
      )
    }
}



