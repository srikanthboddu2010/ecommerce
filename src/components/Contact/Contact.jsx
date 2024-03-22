import React, { useState } from 'react';
import "../Contact/Contact.css";

const Contact = () => {
    const [user, setUser] = useState({
        Name: '', email: '', subject: '', Message: ''
    });

    const data = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const send = async (e) => {
        e.preventDefault();
        const { Name, email, subject, Message } = user;

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, email, subject, Message
            })
        };

        try {
            const response = await fetch(
                'https://react-ecommerce-contact-36bdb-default-rtdb.firebaseio.com/Message.json', option
            );
            
            if (response.ok) {
                alert("Message sent");
            } else {
                alert("Error occurred. Message sending failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error occurred. Message sending failed");
        }
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="form">
                    <h2>#contact us</h2>
                    <form method='POST' action="">
                        <div className="box">
                            <div className="label">
                                <h4>Name</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Name' value={user.Name} name='Name' onChange={data} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>E-mail</h4>
                            </div>
                            <div className="input">
                                <input type="email" placeholder='E-mail' value={user.email} name='email' onChange={data} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Subject</h4>
                            </div>
                            <div className="input">
                                <input type="text" placeholder='Subject' value={user.subject} name='subject' onChange={data} />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Message</h4>
                            </div>
                            <div className="input">
                                <textarea placeholder='Message !' value={user.Message} name='Message' onChange={data}></textarea>
                            </div>
                        </div>
                        <button type='submit' onClick={send}>send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
