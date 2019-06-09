import React, { Fragment } from 'react';
import './App.css';
import LoginTable from './components/LoginTable';

const App: React.FC = () => {

//TODO: přepsat na class component - asi
//  -component should update -> render Register Form and remove Login Table and vice versa

  return (
    <Fragment>
    <LoginTable></LoginTable>
    </Fragment>
  );
}

export default App;
