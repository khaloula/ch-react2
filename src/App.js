import React from 'react';
import './App.css';
import{Nav,Navbar,Container,Card,Button,Carousel,Form }from "react-bootstrap"
function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <div class="logo"></div>
<img alt="" src= "https://www.mercedes-benz.com/etc/designs/brandhub/frontend/static-assets/header/logo.svg"></img>

<img alt="" src= "https://www.mercedes-benz.com/etc/designs/brandhub/frontend/static-assets/header/brand-without-claim.svg"></img>
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div><Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.caradisiac.com/images/3/8/4/1/193841/S0-et-la-moins-fiable-des-supercars-est-la-mercedes-amg-gt-701070.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.turbo.fr/sites/default/files/2020-07/736964.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ytimg.com/vi/w2JT6mmTSJI/maxresdefault.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel></div>
<h1>checkpoint react</h1> 
<audio class="amg-m-sound-player__audio amg-js-sound-player__audio" src="https://www.mercedes-amg.com/dam/hq/UAT%20content/Sounds/g63/01_G63_eng-start.mp3/_jcr_content/renditions/original.1542212332301./01_G63_eng-start.mp3"></audio>

<div className='cards'> 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.mercedes-amg.com/content/global/en/vehicles/e-class/cabriolet/jcr:content/content/tabbedcontent/tabs/tabbedentry_1/content/imagetext/sliders/imagetextslide/media/image.media6.responsive_zoom_image_16_9.1618222576279.jpeg" />
  <Card.Body>
    <Card.Title>Mercedes-AMG E53 coupé</Card.Title>
    <Card.Text>
    3.0-litre 6-cylinder in-line engine with exhaust gas turbocharger and electric additional compressor
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.mercedes-amg.com/content/global/en/vehicles/g-class/suv/g63/jcr:content/content/imagetext_864531193_/sliders/imagetextslide/media/image.media6.responsive_zoom_image_16_9.1646410869557.jpeg" />
  <Card.Body>
    <Card.Title> Mercedes-AMG G 63e</Card.Title>
    <Card.Text>
     4.0-litre V8 biturbo engine delivering 430 kW (585 hp), the Mercedes-AMG G 63 makes every journey feel like a motorised primal scream.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.mercedes-amg.com/content/global/en/vehicles/sl/roadster/jcr:content/content/tabbedcontent_copy/tabs/tabbedentry_2/content/imagetext_1614177872/sliders/imagetextslide/media/image.media6.responsive_zoom_image_16_9.1647426614467.jpeg" />
  <Card.Body>
    <Card.Title>CMercedes-AMG SL 63 4MATIC+ </Card.Title>
    <Card.Text>
    Enjoy the exclusive premiere of the new Mercedes-AMG SL and learn more about the highlights of the new roadster from merc
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 

</div>
<div className='forms'>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</div>

    </div>
  );
}

export default App;
