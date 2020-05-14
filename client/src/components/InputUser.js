import React, { Fragment, useState } from 'react';

const InputUser = () => {

  const [name, setName] = useState("")

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { name };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
  <Fragment>
    <h1 className="text-center mt-5">User Database</h1>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input 
        type="text" 
        className="form-control" 
        value={name} 
        onChange={e => setName(e.target.value)}/>
      <button className="btn btn-success">Add User</button>
    </form>
  </Fragment>
  );
};

export default InputUser;