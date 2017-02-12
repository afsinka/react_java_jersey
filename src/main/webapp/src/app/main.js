import React, {Component} from 'react';
import {Title} from './title';
import {Footer} from './footer';
import {Form} from './form';

export class Main extends Component {

  render() {
    return (
      <div>
        <main>
          <Title/>
          <p>---main---</p>
          <Form/>
        </main>
        <Footer/>
      </div>

    );
  }

}
