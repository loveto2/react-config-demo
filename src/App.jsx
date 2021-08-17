/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

export default function App() {
  console.log(BASE_NAME);
  console.log(PUBLIC_PATH);
  return (
    <BrowserRouter basename={BASE_NAME}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}
