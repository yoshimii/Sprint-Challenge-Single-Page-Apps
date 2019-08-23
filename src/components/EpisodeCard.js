import React from "react";
import { Card, Grid } from 'semantic-ui-react';
export default function EpisodeCard(props) {
  return (
    <Grid.Column padded key={props.id}>
    <Card>
      <Card.Content>
        <Card.Header>Episode Name: {props.name}</Card.Header>
        <Card.Description>Air Date: {props.airdate}</Card.Description>
        <Card.Description>Episode#: {props.episode}</Card.Description>
        {/* <Card.Description>Characters: {props.characters}</Card.Description> */}
      </Card.Content>
    </Card>
  </Grid.Column>
  )
}
