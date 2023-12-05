import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';


export default function Landing(){
    return(
        <Container>
        <Row className="my-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>New/Related Articles</Card.Title>
                <Card.Text>
                  Content related to new articles or relevant topics can be placed here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Announcements</Card.Title>
                <Card.Text>
                  Important announcements or any relevant information can be displayed here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}