import React, { useEffect, useState } from "react";
import { Container, Grid } from 'semantic-ui-react';

import EpisodeCard from './EpisodeCard';

import Axios from "axios";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
   Axios.get('https://rickandmortyapi.com/api/episode/', {
     params: {}//optional params
   }).then(res => {
     const episodes = res.data.results;
    setEpisodes(episodes);
   })
   .catch((err) => {
    console.log(err);
  })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="location-list grid-view">
      <h2>Episodes</h2>
      <Container text>
      <Grid relaxed columns={3} divided="vertically">
        <Grid.Row padded="vertically" columns={3}>
          {episodes.map(ep => {
            return (
              <EpisodeCard
                key={ep.id}
                id={ep.id}
                name={ep.name}
                airdate={ep.air_date}
                // characters={ep.characters}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
    </section>
  );
};
