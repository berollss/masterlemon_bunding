import * as React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorldComponent } from './components/hello-world.component';

const logoImage = require('./content/logo_2.png');
const description = ' Simple app with webpack bundling.';

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <HelloWorldComponent title="Bundling exercise" logoImage={logoImage} description={description} module={3} />
  </div>,
  document.getElementById('root'),
);

console.log(`We are in: ${process.env.NODE_ENV}`);
