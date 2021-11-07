import "./styles.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>React x Bootstrap</h1>
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Adress</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                  ></Form.Control>
                  <Form.Text className="text-muted">
                    We'll absolutely share not your email adress, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="danger">Login</Button>
          </Form>
          <Card className="mb-3">
            <Card.Img src="https://cdn.pixabay.com/photo/2018/06/17/20/35/chain-3481377_960_720.jpg" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>Lurem ipsum dolor</Card.Text>
              <Button variant="danger">Purchase</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>test 1</Breadcrumb.Item>
            <Breadcrumb.Item>test 2</Breadcrumb.Item>
            <Breadcrumb.Item active>test 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a Button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}
