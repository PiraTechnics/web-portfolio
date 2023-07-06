import { Container, Row, Col } from "react-bootstrap";

function AppLink({ icon, link, title, subtitle }) {

    return (
        <Col xs={12} sm={6} md={4} xl={3}>
            <Container className="p-3 mx-0">
                <Row>
                    <Col className="p-0 border border-2 border-light-subtle rounded bg-info-subtle" style={{ maxWidth: "100px", minWidth: "80px", height: "auto", margin: "auto" }}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            {icon}
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="fs-3 fw-semibold text-decoration-underline">{title}</Col>
                </Row>
                <Row>
                    <Col className="fs-6">{subtitle}</Col>
                </Row>
            </Container>
        </Col>
    )
}

export default AppLink;