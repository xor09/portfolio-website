import React from 'react';
import './Contact.css'
import myImage from '../../Images/programming-image2.jpg';

const Contact = () => {
    return (
        <div id="contact" className='contact-wrapper'>
            <div className='contact-section1'>
                <div>Contact</div>
            </div>
            <div className='container'>
                <div className='image-wrapper'>
                    <img className='my-image2' src={myImage} />
                </div>
                <div>
                    <h1 style={{fontFamily: 'cursive', color: 'whitesmoke', marginBottom: '30px'}}>Send me a message 🚀</h1>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputFullname1" className="form-label">Fullname</label>
                            <input type="fullname" className="form-control" id="exampleInputFullname1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputSubject1" className="form-label">Subject</label>
                            <input type="subject" className="form-control" id="exampleInputSubject1" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                        }}>Submit</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;
