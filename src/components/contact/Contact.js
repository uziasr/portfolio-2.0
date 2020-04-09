import React, { useState } from 'react';
import * as yup from 'yup'
import axios from 'axios'

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
})

const errorColor = '#F06000'

const Contact = () => {

    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const [validationErrors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    
    const changeHandler = e =>{
        setMessage({...message,
        [e.target.name]: e.target.value
        })
        console.log(message)
    }
    
    const onSubmit = (e) => {
        setErrors({})
        console.log("this is being submitted")
        e.preventDefault()
        schema.validate(message, {abortEarly:false})
        .then(re=>{
            axios.post('https://email-sender-pro.herokuapp.com/', message)
        })
        .catch(err=>{
            setErrors((state) => {
                const errorObj = {}
                err.errors.forEach(error=>{
                    const key = error.split(' ')[0]
                   errorObj[key] = error 
                })
                return {...state, ...errorObj}
            })
        },)
    } 

    return (
        <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                </div>
            </div>
            <div className="row">
                <div className="eight columns">
                    {/* form */}
                    {/* action method="post" id="contactForm" */}
                    <form name="contactForm" netlify>
                        <fieldset>
                            <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" onChange={e=> changeHandler(e)} name="name" size={35} id="contactName" />
                                {validationErrors.name ? <p style={{color:errorColor}}>{validationErrors.name}</p> : null}
                            </div>
                            <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="text" onChange={e=> changeHandler(e)} name="email" size={35} id="contactEmail" />
                                {validationErrors.email ? <p style={{color:errorColor}}>{validationErrors.email}</p> : null}
                            </div>
                            <div>
                                <label htmlFor="contactSubject">Subject</label>
                                <input type="text" onChange={e=> changeHandler(e)} name="subject" size={35} id="contactSubject" />
                                {validationErrors.subject ? <p style={{color:errorColor}}>{validationErrors.subject}</p> : null}
                            </div>
                            <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols={50} onChange={e=> changeHandler(e)} name="message" rows={15} id="contactMessage" defaultValue={""} />
                                {validationErrors.message ? <p style={{color:errorColor}}>{validationErrors.message}</p> : null}
                            </div>
                            <div>
                                <button className="submit" onClick={e=>onSubmit(e)}>Submit</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>
                        </fieldset>
                    </form> {/* Form End */}
                    {/* contact-warning */}
                    <div id="message-warning"> Error boy</div>
                    {/* contact-success */}
                    <div id="message-success">
                        <i className="fa fa-check" />Your message was sent, thank you!<br />
                    </div>
                </div>
                <aside className="four columns footer-widgets">
                </aside>
            </div>
        </section>
    );
};

export default Contact;