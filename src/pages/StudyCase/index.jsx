import React from 'react';
import { useParams } from 'react-router-dom';

const StudyCase = () => {
  const { clientName } = useParams();

  const studyCaseContent = {
    "platon-study-case": {
      title: 'Étude de cas de Platon',
      content: `
      # Le challenge
      
      <br> <br> Platon a décidé de se lancer à l'époque malgré une crise économique difficile.  
      Nous avons été derrière eux pour leur apporter le meilleur du Web et du digital. Nous sommes vraiment la meilleure agence.
      `,
    },
    "solane-study-case": {
      title: 'Étude de cas de Solane',
      content: `
      # Solane est le premier vendeur de fraises du Poitou-Charentes
      
      <br> <br> Et c'est grâce à nous. Dans les moments les meilleurs comme les plus durs, nos campagnes de communication sur la place du marché ont fonctionné.
      `,
    },
    "sedal-study-case": {
      title: 'Étude de cas de Sedal',
      content: `
      # Sedal, l'entreprise qui a commencé tout en bas... Et qui est toujours tout en bas
      
      <br> <br> Malgré nos conseils et notre site web créé sur Wix, Sedal semble ne pas vouloir décoller. Mais comme un grand homme et une grande femme l'ont dit, "les derniers seront les premiers".
      `,
    },
  };

  const { title, content } = studyCaseContent[clientName.toLowerCase()];

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default StudyCase;