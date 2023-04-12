
import { Container, Row, Col, Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img4.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

export const Projects = () => {

    const projects = [
        {
            title: "Estoy Seguro",
            description: "As part of an integrative project, I was responsible for designing and developing an E-commerce website. I successfully created a functional platform for users with an easy-to-use design. I collaborated with other developers on the team.",
            imgUrl: projImg2,
            projectUrl: "https://github.com/manugordon/Project-EstoySeguro/tree/main/Node"
        },
        {
            title: "Mercado Liebre",
            description: "Design and development of an e-commerce website to enhance knowledge in CSS, JavaScript, and HTML.",
            imgUrl: projImg1,
            projectUrl: "https://mercaditus-liebre.onrender.com/"
        },
        {
            title: "Portfolio",
            description: "This beautiful portfolio designed with React",
            imgUrl: projImg3,
            projectUrl: "https://github.com/manugordon/personal-portfolio"
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2> Projects</h2>
                        <p>Welcome to my projects section, where I showcase my latest work and passion projects. These projects are a reflection of my skills and interests. Take a look and feel free to reach out if you have any questions or collaboration opportunities</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Tab three</Nav.Link>
                            </Nav.Item>
                        </Nav> */}
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}