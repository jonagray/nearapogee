import React, {Fragment} from 'react';
import './App.css';

// Components

import InputUser from "./components/InputUser";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputUser />
      <ListUsers />
      </div>
    </Fragment>
  );
}

export default App;
