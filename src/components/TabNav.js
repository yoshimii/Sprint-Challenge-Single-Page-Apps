import React from "react";
import { NavLink } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from "./LocationsList.js";
import EpisodeList from './EpisodeList';
import App from '../App';
import { Tab, Menu, Icon } from "semantic-ui-react";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

export default function TabNav() {
    return([

     
    ])

};

    
    const panes = [
        { menuItem: 'Home', render: () =><Tab.Pane><NavLink to='/'><WelcomePage /></NavLink></Tab.Pane> },
      { menuItem: 'Characters', render: () => <Tab.Pane><NavLink to='/characters'><CharacterList/></NavLink></Tab.Pane> },
      { menuItem: 'Locations', render: () => <Tab.Pane><NavLink to='/locations'><LocationsList/></NavLink></Tab.Pane> },
      { menuItem: 'Episodes', render: () => <Tab.Pane><NavLink to='/'episodes><EpisodeList/></NavLink></Tab.Pane> },
    ]
    
    const TabNavPanes = () => <Tab panes={panes} />
    
    export {TabNavPanes}



