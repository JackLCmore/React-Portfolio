import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [formName, setFormName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleInput(event){
    const {target} = event;
    const inputType = target.name;
    const inputValue = target.value;

    if(inputType === "name"){
      setFormName(inputValue);
    } else if(inputValue === "email"){
      setEmail(inputValue);
    } else if(inputValue === "message"){
      setMessage(inputValue);
    }
  }

  function handleSubmit(event){
    event.preventDefault();

    if(!validateEmail(emailInput) || !nameInput || !messageInput){
      setErrorMessage('Please Complete All Input Forms!');
      return;
    }

    setFormName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
          <div className="form-group row m-5">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input value={formName} name="name" onChange={handleInput} type="text" className="form-control" id="colFormLabel" placeholder="Name"></input>
          </div>
          </div>
          <div className="form-group row m-5">
          <label className="col-sm-2 col-form-label">E-mail</label>
          <div className="col-sm-10">
            <input value={email} name="email" onChange={handleInput} type="email" className="form-control" id="colFormLabel" placeholder="E-mail"></input>
          </div>
          </div>
          <div className="form-group row m-5" >
          <label className="col-sm-2 col-form-label">Message</label>
          <div className="col-sm-10">
            <input value={message} name="message" onChange={handleInput} type="text" className="form-control" id="messageForm" placeholder="Message"></input>
          </div>
          </div>
          <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
