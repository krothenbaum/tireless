import React from 'react';
import { Grid } from 'reakit';
import { Query } from 'react-apollo';

import User from './User';
import Draft from './Draft';

const Main = ({ mainQuery }) => (
  <Grid.Item area="main" padding={'8px'}>
    <Draft />
    {/* <Query query={mainQuery}>
      {({ loading, error, data }) => {
        if (error) {
          return <div>Error :(</div>;
        }
        if (loading) {
          return <div>Loading...</div>;
        }
        return <User user={data.user} />;
      }}
    </Query> */}
  </Grid.Item>
);

export default Main;
