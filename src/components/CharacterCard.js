import React from "react";
import { Card, Grid, Image, Icon } from 'semantic-ui-react';
export default function CharacterCard(props) {
  return (
  <Grid.Column padded key={props.id}>
    <Card>
      <Card.Content>
      <Image src={props.mug}/>
        <Card.Header>Name: {props.name}</Card.Header>
        <Card.Meta>Status: {props.status}</Card.Meta>
        <Card.Description>Species: {props.species}</Card.Description>        
      </Card.Content>
    </Card>
  </Grid.Column>
  )
}
