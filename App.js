import React, { useState } from 'react';
import './App.css';

const apiKey = '6bbadeec-8b29-41dd-b7f3-52606cb111ec';
const url = 'https://api.thecatapi.com/v1/images/search';

function App() {
  const [ catUrl, newCatUrl ] = useState('https://cdn2.thecatapi.com/images/3t7.jpg');

  
// Function that generates cats
  const generateCat = () => {

    fetch(url, {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then((res) => res.json())
      .then((cats) => {
       // console.log('Cats: ', cats);
        const catUrl = cats[0].url;

        newCatUrl(catUrl);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  console.log('cat URL: ', catUrl);

// JSX
return(
  <div className='app'>
    <h1>Cat Tinder</h1>
    <img src={catUrl}></img>
    <button className='yes' onClick={generateCat}>I like it</button>
    <button className='no' onClick={generateCat}>Nah, I'll pass</button>
  </div>
);
}




export default App;