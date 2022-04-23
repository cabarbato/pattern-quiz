import { Container } from 'react-bootstrap';
import Progress from "../components/Progress";
import Slide from "../components/Slide";
import Nav from "../components/Nav";

const Questions = () => <Container fluid as="section">
    <Progress />
    <Slide />
    <Nav />
</Container>

export default Questions;