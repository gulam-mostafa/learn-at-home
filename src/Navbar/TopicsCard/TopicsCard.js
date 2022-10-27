import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Category from '../../Category/Category';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const TopicsCard = ({topic}) => {
 
  const {details, image_url, _id } = topic
    return (
    <div className='card d-flex align-items-center ' >


            <div  ref={ref} >
         <div style={{ width: '18rem' }}>
      <Card.Img className='mt-2' variant="top" src={topic.image_url} />
      <Card.Body>
        <Card.Title>{topic.title}</Card.Title>
        <Card.Text>
      {
          details.length > 150 ? 
           <p>{details.slice(0, 200 ) + '...' } <Link to={`/topics/${_id}`}>Read More</Link></p> 
           :
           <p>{details}</p>

      }
      
    
        </Card.Text>
        <Link to={`/checkout/${_id}`}  ><Button variant="primary">check Out</Button></Link>
        
      </Card.Body>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button className='bg-info w-100' onClick={toPdf}>Download This  Demo Course</Button>}
      </Pdf>
    </div>
    
        </div>
        
    </div>
    );
};

export default TopicsCard;