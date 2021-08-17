import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

export default function App() {
  // eslint-disable-next-line
  console.log(NDK_BASE_NAME)
  return (
    // eslint-disable-next-line
    <BrowserRouter basename={NDK_BASE_NAME}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}
