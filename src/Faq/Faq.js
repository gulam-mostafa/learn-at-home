import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion className='vh-100' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our Stander Gidelines</Accordion.Header>
        <Accordion.Body>
        Web design standards are a communal effort. They’re about what works best for most people and the best way to figure that out is through consensus.
One of the things that make a website looked polished and on-brand are web design standards they’re based on. That’s right, at the core of every great website you’ve visited lays a set of unified design principles established to bring order to what could quickly turn to chaos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About this Site</Accordion.Header>
        <Accordion.Body>
        About Us pages are where you showcase your history, what is unique about your work, your company's values, and who you serve. The design, written content, and visual or video elements together tell an important story about who you are and why you do it
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;