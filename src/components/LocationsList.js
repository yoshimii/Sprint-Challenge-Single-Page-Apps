import React, { useEffect, useState } from "react";
import { Container, Grid } from 'semantic-ui-react';

import LocationCard from './LocationCard';

import Axios from "axios";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

  useEffect(() => {
   Axios.get('https://rickandmortyapi.com/api/location/', {
     params: {}//optional params
   }).then(res => {
     const locations = res.data.results;
    setLocations(locations);
   })
   .catch((err) => {
    console.log(err);
  })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  });

  return (
    <section className="location-list grid-view">
      <h2>Locations</h2>
      <Container text>
      <Grid relaxed columns={3} divided="vertically">
        <Grid.Row padded="vertically" columns={3}>
          {locations.map(loc => {
            return (
              <LocationCard
                key={loc.id}
                id={loc.id}
                name={loc.name}
                type={loc.type}
                dimension={loc.dimension}
                residents={loc.residents.length}
                mug={loc.image}
              />
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
    </section>
  );
};
