import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
      <ul>
        <li>
          <Link to="/works/platon-study-case">Étude de cas de Platon</Link>
        </li>
        <li>
          <Link to="/works/solane-study-case">Étude de cas de Solane</Link>
        </li>
        <li>
          <Link to="/works/sedal-study-case">Étude de cas de Sedal</Link>
        </li>
      </ul>
    </div>

  );
};

export default Works;