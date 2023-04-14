import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
 import { BoxArrowUpRight } from "react-bootstrap-icons"
import logo from '../assets/img/logo-mg.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/logo-github.svg'

export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home')
    const[scrolled, setScrolled] = useState('false')

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skill" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
           <Nav.Link className={activeLink === 'download' ? 'active navbar-link' : 'navbar-link'}  href="https://drive.google.com/file/d/1Bhyb-5vckPdgMzNQ2a6BCEKdYRlAE8Wa/view?usp=share_link" target="_blank" onClick={()=> onUpdateActiveLink('download')}>Preview CV <BoxArrowUpRight size={15} className="box-arrow"/>
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div  className="social-icon">
                  <a href="https://www.linkedin.com/in/manuel-gordon/" target="_blank"><img src = {navIcon1} alt="LinkedIn"/></a>
                  <a href="https://github.com/manugordon" target="_blank"><img src = {navIcon2} alt="Github"/></a>
              </div>
              <button className="vvd" onClick={()=> window.location.href='#contact'}><span> Let's Connect </span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}