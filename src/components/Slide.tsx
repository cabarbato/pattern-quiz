import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux"

const mapStateToProps = state => ({
});

const Slide = props => <Row className="py-5">
<Col xxl={6} xl={8} lg={10} md={12} className="mx-lg-auto">
    Question
</Col>
</Row>

export default connect(mapStateToProps)(Slide)