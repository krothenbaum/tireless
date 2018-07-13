import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'reakit';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import SetSymbol from './components/mtgIcons/SetSymbol';
import User from './components/User';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import styledNormalize from 'styled-normalize';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
${styledNormalize}
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #898989;
  background-color: #F2F2F2;
}


`;

const template = `
  "header header header" 80px
  "sidebar main main" minmax(240px, 1fr)
  "footer footer footer" 80px / 160px
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

const USER = gql`
  {
    user(id: "cjjdty50wimsk0b96orvcmt5q") {
      email
      name
    }
  }
`;

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Grid template={template} minHeight={'100vh'}>
          <Header />
          <Sidebar />
          <Main mainQuery={USER} />
          <Footer />
        </Grid>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
