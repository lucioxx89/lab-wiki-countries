import React from 'react';
import { Route } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import countriesJSON from './countries.json';
import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      countriesArrayList: [],
    };
  } //constructor bracket

  componentDidMount = () => {
    this.setState({
      countriesArrayList: [...countriesJSON],
    });
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="container flex mx-auto my-8 ">
          <Route exact path="/">
            <CountriesList />
          </Route>

          <Route path="/:id" component={CountryDetails} />
        </div>
      </div>
    );
  } //render bracket
} // class bracket

export default App;
