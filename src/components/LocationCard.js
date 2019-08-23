import React from "react";
import { Card, Grid, Image } from 'semantic-ui-react';
export default function LocationCard(props) {
  return (
    <Grid.Column padded key={props.id}>
    <Card>
      <Card.Content>
      <Image src={'https://i.imgur.com/5TRxfTL.png'}/>
        <Card.Header>Name: {props.name}</Card.Header>
        <Card.Description>Type: {props.type}</Card.Description>
        <Card.Description>Dimension: {props.dimension}</Card.Description>
        <Card.Description>Residents: {props.residents}</Card.Description>
      </Card.Content>
    </Card>
  </Grid.Column>
  )
}



