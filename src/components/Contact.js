import React from 'react'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 p-25'>
                        <h3>Contact Us</h3>
                        <h1>Feel Free To Contact Us</h1>
                        <form className='contact__form'>
                            <div className="contact__text">
                                <input className="contact__list"
                                    type="text"
                                    placeholder="Your name"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className="contact__text">
                                <input className="contact__list"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="contact__text">
                                <textarea className="contact__list" id='contact__message' 
                                    placeholder="Your message"
                                    name="message"
                                    required
                                />
                            </div>
                            <div className="contact__text">

                                <button className="contact__list" id='contact__btn' type='submit'>SEND MESSAGE</button>

                                {/* <div className='about__btn'>
                                    <a className='btn btn-smart'>READ MORE</a>
                                </div> */}
                            </div>
                        </form>
                    </div>
                    <div className='col-6'>
                        <div className='about__img'>
                            <img src='/img/contact.jpg' alt='Pizza' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact