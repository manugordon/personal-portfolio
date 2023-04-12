import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Manuel Gordon","Web Developer", "Web Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 200

    useEffect(()=> {
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0, text.length + 1)

        setText(updateText)

        if  (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return(
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>Hi I'm <span className="wrap">{text}</span></h1>
                        <p> I'm a full stack web developer. I am excited to embark on my career as a developer and apply my skills to real-world projects</p>
                        <button onClick={()=>window.location.href='#contact'}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}