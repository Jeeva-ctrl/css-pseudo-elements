import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </blockquote>
        </div>
        <div>
          <ul class="name-list">
            <li>John</li>
            <li>Michael</li>
            <li>Simpson</li>
            <li>Johnson</li>
          </ul>
        </div>

        <form class="container1">
          <label class="switch">
            <input type="checkbox" />
          </label>
        </form>

        <div class="container2">
          <figure>
            <img
              src="https://i.imgur.com/jFKonXQ.jpeg"
              alt="White and Red Chevrolet"
            />
            <figcaption>Chevrolet</figcaption>
          </figure>
        </div>
        <form class="form flex-center">
          <div class="form-row flex-center">
            <input type="radio" name="gender" id="Male" class="form-input" />
            <label for="Male" class="form-label">
              Male
            </label>
          </div>
          <div class="form-row flex-center">
            <input type="radio" name="gender" id="Female" class="form-input" />
            <label for="Female" class="form-label">
              Female
            </label>
          </div>
        </form>
      </>
    );
  }
}

render(<App />, document.getElementById('root'));
