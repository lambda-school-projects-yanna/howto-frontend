import React from 'react';
import { connect } from 'react-redux';
import { useInput } from '../hooks';
import { authLogin } from '../actions';
import LoginForm from '../components/LoginForm';

const Login = ({ authLogin }) => {
  const [username, setUsername, updateUsername] = useInput();
  const [password, setPassword, updatePassword] = useInput();

  const handleSubmit = e => {
    e.preventDefault();
    authLogin({ username, password });
    setUsername(''); setPassword('');
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      username={username}
      updateUsername={updateUsername}
      password={password}
      updatePassword={updatePassword}
    />
  );
};

export default connect(
  null, { authLogin }
)(Login);