import { Container, Row, Col} from "react-bootstrap"
import logo from "../assets/img/logo-mg.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/logo-github.svg'

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <Col sm={6}>
                    <img src={logo} alt="Logo"/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/manuel-gordon/" target="_blank"><img src = {navIcon1} alt="LinkedIn"/></a>
                        <a href="https://github.com/manugordon" target="_blank"><img src = {navIcon2} alt="Github"/></a>
                    </div>
                    <p>CopyRight 2023. All Right Reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}