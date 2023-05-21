import './FormStyles.css'
import React, { useRef, useState } from 'react'
// import {} from '@emailjs/'
import emailjs from '@emailjs/browser';

var nameVal = document.getElementById('name')
var emailVal = document.getElementById('email')
var subjectVal = document.getElementById('subject')
var msgVal = document.getElementById('message')


const Form = () => {
  const [enteredText, setEnteredText] = useState(''); 

  const form1 = useRef();

  const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_8iknvgp', 'template_t7og7ln', form1.current, 'LTXPnN5k9N0CCnyjj')
    .then((result) => {
        console.log(result.text);
        console.log("message Sent")
    }, (error) => {
        
        console.log(error.text);
    });

    // setEnteredText('')
    // document.getElementById("form").reset()
    // document.getElementById('name')
    nameVal.value = ''
    emailVal.value = ''
    subjectVal.value = ''
    msgVal.value = ''

  };
  

  return (
    <div className='form' id='form'>
      <form ref={form1} onSubmit={sendEmail}>
        <label> Your Name</label>
        <input id='name' type='text' name='user_name' placeholder='Enter your name'></input>

        <label> Email</label>
        <input id='email' type='email' placeholder='Enter your email id' name='user_email'  ></input>
        
        <label> Subject</label>
        <input id='subject' type='text' placeholder='Enter the message-subject' name='message_subject' ></input>
        
        <label> Message</label>
        <textarea id='message' rows='7' name='message' placeholder='Enter your message here' ></textarea>
        
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form