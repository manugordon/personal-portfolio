import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/logo-react.svg"
import meter2 from "../assets/img/logo-html.svg"
import meter3 from "../assets/img/logo-css.svg"
import meter4 from "../assets/img/logo-javascript.svg"
import meter5 from "../assets/img/logo-nodejs.svg"
import meter6 from "../assets/img/logo-express.svg"
import meter7 from "../assets/img/logo-mysql.svg"
import meter8 from "../assets/img/logo-bootstrap.svg"
import meter9 from "../assets/img/logo-postman.svg"
import colorSharp from "../assets/img/color-sharp.png"



export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Take a look of my skills below to gain a better understanding of my technical capabilities</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter8} alt="Image"/>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image"/>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter6} alt="Image"/>
                                    <h5>Express js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter7} alt="Image"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={meter9} alt="Image"/>
                                    <h5>Postman</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}