import React from "react";
import ReactDOM from "react-dom";
// import { Container, CreateUser, Posts, NewPost } from "blog-components";
import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./components/Main";
import AsideOne from "./components/AsideOne";
import AsideTwo from "./components/AsideTwo";
import Footer from "./components/Footer";
import User from './components/User';

import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

const USER = gql`
{
  user(id: "cjjdty50wimsk0b96orvcmt5q") {
    email
    name
  }
}`

class App extends React.Component {
  // state = { user: null, drafts: [] };

  // createUser = name => {
  //   this.setState({ user: { name } });
  // };

  // createDraft = ({ title, content }) => {
  //   this.setState({
  //     posts: [...this.state.posts, { title, content, author: this.state.user }]
  //   });
  // };

  render() {
    return (
      // <Container user={this.state.user}>
      //   <CreateUser createUser={this.createUser} />
      //   <NewPost user={this.state.user} createPost={this.createPost} />
      //   <Posts posts={this.state.posts} />
      // </Container>
      <ApolloProvider client={client}>
        <Container>
          <Header>Header</Header>
          <AsideOne>Aside-1</AsideOne>
          <Main>
            <Query query={USER}>
            {({ loading, error, data }) => {
              if (error) {
                return <div>Error :(</div>;
              }
              if (loading) {
                return <div>Loading...</div>;
              }
              return <User user={data.user} />;
            }}
            </Query>
          </Main>
          <AsideTwo>Aside-2</AsideTwo>
          <Footer>Footer</Footer>
        </Container>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
