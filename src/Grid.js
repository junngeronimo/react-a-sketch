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
  border: 10px solid red;

  display: grid;
  
  ${'' /* justify-content: center; */}
  margin-left: auto;
  margin-right: auto;

  grid-template-columns: repeat(${(props) => props.gridSize}, 1fr);
  height: ${(props) => props.gridSize}vw;
  width: ${(props) => props.gridSize}vw;
  
`;

const Cell = styled.div`
  ${'' /* flex: ${(props) => props.size}; */}
  height: 1vw;
  width: 1vw;
  position: absolute;
  
  transition:0s 1000000s;

  &:hover {
    background-color: darkgray;
    transition:0s;
  }

  &:onClick {
    background-color: white;
  }



  ${'' /* ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)} */}
`;

const GridButton = styled.button`
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

export function Grid(props) {
  let cells = [];

  // console.table(props);

  for (let i = 0; i < (props.gridSize*props.gridSize); i++) {
    cells.push(<Cell>{props.message}</Cell>);
  }
  let newGrid = cells.map((cell, j) =>
    <div key={j}>
      {cell}
    </div>
  );
  
  return (
    <GridContainer gridSize={props.gridSize}>
      
      {newGrid}
      
    </GridContainer>
  );
}

export class GridForm extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props);
    
    this.state = {
      message: props.message,
      gridSize: 32,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    this.setState({gridSize: value});
    // console.log(this.state);
  }

  // handleSubmit(event) {
  //   alert('A grid size was submitted: ' + this.state.gridSize);
  //   event.preventDefault();
  // }

  handleClearButtonClick(event) {
    this.setState({gridSize: this.state.gridSize})
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Grid Size ({this.state.gridSize} by {this.state.gridSize}): 
            <input 
              type="number" 
              value={this.state.gridSize} 
              onChange={this.handleChange}
              min="1"
              max="100" 
              />
          </label>

          {/* <GridButton 
            onClick={() => this.handleSubmit()} 
            type="submit">
              Submit
          </GridButton>  */}

          <GridButton 
            onClick={() => this.handleClearButtonClick()}
            type="clear">
            Clear
          </GridButton>
        </form>

        <Grid message={this.state.message} gridSize={this.state.gridSize} >
        
        </Grid>

      </div>
      )
    }
}



