import { Col } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl,projectUrl}) => {
    return(
        <Col sm={6} md={4}>
        <div className="proj-imgbx" onClick={()=>window.open(projectUrl,"_blank")} target="_blank">
        <img src={imgUrl} alt="Proyecto1"/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            {}
        </div>
        </div>
        </Col>
    )
}