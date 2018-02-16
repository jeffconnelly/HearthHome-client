## HearthHome Description

- HearthHome is a card database and deck builder site for the popular digital card game, Hearthstone.  HearthHome is a one page app designed to make it easy on users to quickly switch back and forth between wanting to view and filter the latest Hearthstone cards and to build out their own decks.  

## Linked to Deployed App

- You can view the deployed app at https://adoring-bardeen-d90d59.netlify.com/ 

## Tech Stack

* Front End: React.js & Redux, CSS3
* Back End: Node.js, Express.js, REST API endpoints, MongoDB, Mongoose, Passport, bcryptjs
* Workflow: Git, Github, Heroku, Netlify, NPM, Yarn, Trello
* Testing: Enzyme for React

## React/Redux App Structure

* This app focuses heavily around the React/Redux architecture of working with state globally, available to all components as needed.  It uses the pattern of dispatching actions -> update reducer -> update store & state -> props available back in the components throughout the app.  App.js is the parent component rendering important child components such as the filter-section component, deck-builder component, grid-list component, and saved-decks component.  These components have further rendering & props importance.

## Screenshots


- Header 

![Header](screenshots/hearthhome-header.png "Landing Page Header")


- Main View

![Main View](screenshots/hearthhome-main-view.png "Main View of Card List & Deck Builder")




