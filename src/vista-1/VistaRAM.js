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

  renderTable() {
    const { data } = this.state;
    return(
      <div className="data-container">
        <h3>Rick & Morty API</h3>
        <div className="data-container__table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Especie</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map(character => 
                  <Table.Row>
                    <Table.Cell>{character.name}</Table.Cell>
                    <Table.Cell>{character.status}</Table.Cell>
                    <Table.Cell>{character.species}</Table.Cell>
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