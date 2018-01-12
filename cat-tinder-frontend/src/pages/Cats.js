import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
    Col,
  Row
} from 'react-bootstrap'


class Cats extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='cat-name'>
                        {cat.name}
                      </span>
                       <small className='cat-age'>   {cat.age} years old</small>
                    </h4>
                  }>
                  <span className='cat-enjoys'>
                    {cat.enjoys}
                  </span>
                  <span className='cat-city'>
                    {cat.city}
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Cats;
