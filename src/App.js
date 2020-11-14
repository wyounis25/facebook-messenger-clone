import React, { useState,useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";

// import db from "./firebase"

function App() {
  const [ input, setInput ] = useState('');
  const [username, setUsername] = useState('')  
	const [ messages, setMessages ] = useState([]);

  //useEffect = run code on a condition in REACT

  useEffect(() => {

    db.collection('Messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
    
  }, []) // conditional



  useEffect(() => {

    setUsername(prompt('please enter your name'))
    // run code here
    //if its black inside [], this code runs ONCE when the app the app
    // if we put anything in there it will load that evertime the app reloads
  }, []) // conditional
	const sendMessage = (event) => {
    event.preventDefault()
    db.collection('Messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // all the logic to send the message goes here
    
		setMessages([ ...messages, {username: username, message: input} ]);
		setInput('');
  };
  console.log(username)
	console.log(input);
	console.log(messages);
	return (
		<div className="App">
      <h2>Walid's Messenger</h2>
			<FormControl>
				<InputLabel> Enter a Message</InputLabel>
        <br/>
				<Input
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<Button disabled={!input} variant="outlined" color="primary" onClick={sendMessage}>
					Send Message
				</Button>
			</FormControl>

			{/* DISPLAY MESSAGES */}
			{messages.map((message) => {
				return <Message username={username} message={message}/>;
			})}
		</div>
	);
}

export default App;
