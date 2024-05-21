//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';// импортируем файл, лежащий в той же папке, что и App.js
//Вместо class пишем className; писать JSX-разметку необходимо в корневом узле <div className="App"> или нужно создать один родительский элемент и писать разметку в нем
const App = () => {

  return (
    <div>
      <div>one div</div>
      <div className="App">
        Simple HTML

        <ul>
          <li>html</li>
          <li>css</li>
          <li>react</li>
          <li>js</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
