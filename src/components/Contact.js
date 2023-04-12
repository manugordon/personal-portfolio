import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';
import React, {useRef} from "react"

export const Contact = () => {
    const form = useRef();
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails,setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send');
    const [status,setStatus] = useState({})

    const onFormUpdate = (category,value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...')
        emailjs.sendForm('service_eoaw44a', 'template_xh7h6k7', form.current, 'ae9ttbL1s241cbUc7')
        .then((result) => {
            console.log(result.text);
            setStatus({
                success: true,
                message: "Email sent successfully"
            })
            setButtonText('Send')
            setFormDetails(formInitialDetails)
        }, (error) => {
            setStatus({
                success: false,
                message: "There was an error sending"
            })
        });

    
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact me"/>
                    </Col>
                    <Col md={6}>
                         <h2> Get In Touch</h2>
                         <form ref={form} onSubmit = {handleSubmit}>
                             <Row>
                                 <Col sm={6} className="px-1">
                                     <input type="text" name="first_name" value = {formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName', e.target.value)}/>
                                 </Col>
                                 <Col sm={6} className="px-1">
                                     <input type="text" name="last_name" value = {formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName', e.target.value)}/>
                                 </Col>
                                 <Col sm={6} className="px-1">
                                     <input type="email" name="email" value = {formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate('email', e.target.value)}/>
                                 </Col>
                                 <Col sm={6} className="px-1">
                                     <input type="tel" name="phone" value = {formDetails.phone} placeholder="Phone number" onChange={(e)=> onFormUpdate('phone', e.target.value)}/>
                                 </Col>
                                 <Col>
                                 <textarea row="6" name="message" value = {formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message', e.target.value)}/>
                                 <button type="submit"><span>{buttonText}</span></button>
                                 </Col>
                                 {
                                     status.message && 
                                     <Col>
                                        <p className={status.success === false ? "danger" : "succes"}> {status.message}</p>                                     
                                     </Col>
                                 }
                             </Row>
                         </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}