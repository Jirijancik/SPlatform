import React, { Fragment } from 'react';
import './App.css';
import LoginTable from './components/LoginTable';
import {useSelector, useDispatch} from 'react-redux';
import {signIn} from './redux/actions'

const App: React.FC = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

//TODO: přepsat na class component - asi
//  -component should update -> render Register Form and remove Login Table and vice versa

  return (
    <Fragment>
          <h1>Counter {counter}</h1>
          <button onClick={() => dispatch(signIn())}>+</button>
    <LoginTable></LoginTable>
    </Fragment>
  );
}

export default App;
