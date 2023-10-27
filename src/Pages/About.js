import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h2>Founded in 2021</h2>
                  <h5>AMB Engineers is providing solutions for accessing all kind of Façade, Window,
                    painting & plaster. AMB Engineers deals in Design, Manufacturing, Supply &
                    installation of Facade access systems. We offers the complete range of
                    facade access systems from Eyebolts, Jibs, Davits, Monorails to Building
                    Maintenance Unit (BMU). We providing Temporary Suspended Platforms (TSP)
                    for construction sites on rental basis.
                    Our Services are not limited to Sales & execution, we cater all the needs
                    of customer from pre sales to after sales service like Operations & maintenance
                    of equipment's.</h5>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="Vision">Our Vision</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Mission">Our Mission</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Values">Our Values</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="Vision">
                        {/* <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row> */}

                        <p>At AMB Engineers, we strive to make a mark with our presence in the
                          Building & Façade Maintenance sphere both locally and nationally by providing
                          high quality, affordable and innovative solutions. By the turn of this decade,
                          we shall be amongst the most admired companies in India.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Mission">
                        <p>AMB Engineers carries out its mission in catering to the needs of building
                          and construction industries, putting forward solutions for the key technical
                          problems met in engineering based on applied research and development,
                          providing technical development and consulting services, and undertaking
                          building design and construction activities.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Values">
                        <ul>
                          <li>Quality products</li>
                          <li>Total customer satisfaction </li>
                          <li>Cost effective solution </li>
                          <li>Committed delivery </li>
                          <li>Excellent working culture</li>
                        </ul>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default About;