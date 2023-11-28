import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card style={{width:"20rem"}}>
       <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos blanditiis saepe illo repudiandae vitae, odit nihil distinctio quod quas accusantium?</Card.Text>
            <Button>Click me</Button>
       </Card.Body>
    </Card>
  )
}

export default ReactBootstrap

