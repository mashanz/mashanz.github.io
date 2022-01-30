import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Social from './components/Social';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import OnDemand from './pages/ondemand';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Social />
      <Portfolio />
      <Footer />
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ondemand" element={<OnDemand />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
