import './Etch.css';
import styled from 'styled-components';
import React from 'react';

const GridStyledComponent = styled.div`
  color: ${( props ) => props.color}

`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 800px) {
      ${styles}
    }
  `,
}

export const GridContainer = styled.div`
  border: 5px solid palevioletred;
`;

const Row = styled.div`
  display: flex;
  border: 1px dotted gray;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  border: 1px dotted gray;

  &:hover {
    background-color: BLACK;
  }

  ${(props) => props.collapse && media[props.collapse](`
    display: none;
  `)}
`;

const ClearButton = styled.button`
  background: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: gray;
  }
`;

function rowWithColumns(content, col, size) {

  let columns = [];

  for (let i = 0; i < col; i++) {
    columns.push(<Col size={size}>{content}</Col>);
  }

  let newColumns = columns.map((cols, i) =>
    <div key={i}>
      {cols}
    </div>
  );

    return (
      <Row>
        {newColumns}
      </Row>

    )
}

function Grid(props) {

  // console.table(props);

  let autoGrid = [];

  for (let i = 0; i < props.gridSize; i++) {
    if (i % 4 === 0) {
      autoGrid.push(rowWithColumns("testing testingtestingtestingtestingtestingtesting", props.gridSize/4, 4));
    }
  }

  console.log(autoGrid.length);

  let newGrid = autoGrid.map((grid, i) =>
    <div key={i}>
      {grid}
    </div>
  );
  
  // console.table(testGrid);
  return (
    <div className="Grid">
      
      {newGrid}
      
    </div>
  );
}


class Etch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "test",
      gridSize: 16,
    };

  }

  handleClearButtonClick() {
    console.log("I'm here");
    return;
  }

  render(props) {
    return (
      <div className="Etch">
        <h1>Etch-A-Sketch</h1>

        <ClearButton
          onClick={() => this.handleClearButtonClick()}>
          Clear
        </ClearButton>
        
        <GridContainer>
        
          <Grid gridSize={this.state.gridSize}>
          
          </Grid>

        </GridContainer>

        <GridStyledComponent>Test GridStyledComponent</GridStyledComponent>
      </div>
      
    );
  }
}



export default Etch;
