import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from 'state/globalSlice';

Login.propTypes = {};

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    dispatch(setLogin());
    if (location.state?.from) {
      navigate(location.state.from);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default Login;
