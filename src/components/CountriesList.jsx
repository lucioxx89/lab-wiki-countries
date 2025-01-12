import React from 'react';
import { Link } from 'react-router-dom';
import countriesJSON from '../countries.json';

// import CountryDetails from './CountryDetails';

const CountriesList = (props) => {
  const countriesArrayList = [...countriesJSON]; //to import data from json

  return (
    <div>
      {countriesArrayList.map((item, index) => {
        return (
          <div key={index} className="container border mb-4 py-4 ml-4">
            <p className="text-xl">
              {item.flag} <Link to={item.cca3}>{item.name.official}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
