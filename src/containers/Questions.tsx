import { Container } from 'react-bootstrap';
import Progress from "../components/Progress";
import Slide from "../components/Slide";
import Nav from "../components/Nav";
import "./Questions.scss";

const Questions = () => <Container fluid as="section" className="questions d-flex flex-column justify-content-between">
    <Progress />
    <Slide />
    <Nav />
</Container>

export default Questions;