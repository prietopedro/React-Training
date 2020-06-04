import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input, Container, Row, Col } from 'reactstrap';

const Filter = (props) => {

  return (
    <Container>
      <InputGroup>
        <Input id="search"/>
        <InputGroupAddon addonType="append">
          <Button color={"dark"} onClick={()=>props.search()}>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </Container>
  );
};

export default Filter;