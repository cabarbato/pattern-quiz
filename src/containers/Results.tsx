import { Container, Row, Col } from 'react-bootstrap';
import { connect } from "react-redux"

const mapStateToProps = state => ({
});

const Results = props => <Container fluid as="section">
    <Row className="py-3">
        <Col xxl={6} xl={8} lg={10} md={12} className="mx-lg-auto d-flex justify-content-between">
            Results
        </Col>
    </Row>
</Container>

export default connect(mapStateToProps)(Results)