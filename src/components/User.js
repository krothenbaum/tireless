import React from 'react';

const User = ({user}) => {
  const {email, name } = user;
  return (
    <p> {email} : {name} </p>
  );
}

export default User;