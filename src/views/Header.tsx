import { Navbar, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";

const Header = () => <Navbar>
    <Container fluid as="header">
        <Row className="py-3">
            <Col xxl={6} xl={8} lg={10} md={12} className="mx-lg-auto">
                <Navbar.Brand>
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Col>
        </Row>
    </Container>
    <hr className="my-0" />
</Navbar>

export default Header;