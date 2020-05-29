import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Card, Icon, Image } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <Card>
          <Image src={logo} wrapped ui={false} />
          <Card.Content>
            <Card.Header>React js</Card.Header>
            <Card.Meta>
              <span className='date'></span>
            </Card.Meta>
            <Card.Description>
              <p>Edit <code>src/App.js</code> and save to reload.</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a><Icon name='user' /></a>
          </Card.Content>
        </Card>
      </header>
    </div>
  );
}

export default App;
