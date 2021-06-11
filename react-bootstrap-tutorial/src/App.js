
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>

        <Form>
          <Row>
            <Col md>

          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@gmail.com" />
            <Form.Text className="text-muted">
              We'll never share your email address, trust us!
            </Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
            </Form.Group>
            </Col>
          </Row>
            <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Card className="mb-3" style={{color:"#000"}}>
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO81Rb-0j5g4S4QtF3766AytXt4K05bQM5m0lxrgfWN6ptpCwu_gu682LPJep9D8MHxmE&usqp=CAU"/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item>Test 3</Breadcrumb.Item>
          <Breadcrumb.Item>Test 4</Breadcrumb.Item>
          <Breadcrumb.Item>Test 5</Breadcrumb.Item>

        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
