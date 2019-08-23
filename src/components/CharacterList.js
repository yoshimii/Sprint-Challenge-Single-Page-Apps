import React, { useEffect, useState } from "react";
import { Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CharacterCard from './CharacterCard';

import Axios from "axios";


export default function CharacterList() {
const [characters, setCharacters] = useState([]);

  useEffect(() => {
   Axios.get('https://rickandmortyapi.com/api/character/', {
     params: {}//optional params
   }, []).then(res => {
     const characters = res.data.results;
    setCharacters(characters);
   })
   .catch((err) => {
     console.log(err);
   })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>Characters</h2>
      <Container text>
      <Grid relaxed columns={3} divided="vertically">
        <Grid.Row padded="vertically" columns={3}>
          {characters.map(char => {
            return (
              
              <CharacterCard
                key={char.id}
                id={char.id}
                name={char.name}
                status={char.status}
                species={char.species}
                mug={char.image}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
    </section>
  );
}
