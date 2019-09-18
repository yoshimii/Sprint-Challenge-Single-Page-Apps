import React from "react";
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import {TabNavPanes} from './components/TabNav';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return ([
    <main>
      
  
      <Header />
      <TabNavPanes />
      {/* <CharacterList />
      <LocationsList />
      <EpisodeList /> */}

    </main>,

        <Route path = '/characters' component={CharacterList} />,
        <Route path = '/episodes' component={EpisodeList} />,
        <Route path = '/locations' component={LocationsList} />
  ]);
}
