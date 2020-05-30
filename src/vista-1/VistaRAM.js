import React from 'react';

import { Dimmer, Loader } from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

class VistaRAM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data.results,
          isLoading: false,
        })
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.isLoading !== this.state.isLoading && !this.state.isLoading) {
    //   this.setState({
    //     loaderSize: 'medium',
    //     isLoading: true,
    //   })
    // }
  }

  renderLoader() {
    return(
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>);
  }

  renderCell(data) {
    if (data.toString().includes('/avatar/')) {
      return <img className="avatar-img" src={data} />
    }
    return data;
  }

  renderTable() {
    const { data } = this.state;
    return(
      <div className="data-container">
        <h3>Rick & Morty API</h3>
        <div className="data-container__table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                {Object.keys(data[0]).map(key => <Table.HeaderCell>{key}</Table.HeaderCell>)}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map(character => 
                <Table.Row>
                  {Object.keys(character).map(key => <Table.Cell>{typeof character[key] === 'object' ? '-' : this.renderCell(character[key])}</Table.Cell>)}
                </Table.Row>)}
            </Table.Body>
            <Table.Footer>
            </Table.Footer>
          </Table>
        </div>
      </div>)
  }

  render() {
    const { isLoading } = this.state;
    return(
      <div>
        { isLoading ? this.renderLoader() : this.renderTable() }
      </div>);
  }
}

export default VistaRAM;