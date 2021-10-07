import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

global.logged = false;
global.name = "...?";

export const LoginBlock = (props) => {
  console.log(JSON.stringify(props));
  var [logged, setLogged] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    if (response.tokenId != null) {
      global.name = response.getBasicProfile().getName();
      global.logged = true;
      setLogged(true);
    }
  }

  const logoutGoogle = (logout) => {
    console.log(logout);
    if (logout == null) {
      global.logged = false;
      global.name = "...?";
      setLogged(false)
    }
  }

  if (!logged) {
    props.onStuff(null);
    return <GoogleLogin
    clientId="124292557093-bm13qb1e0elsj3v5aio9c0c773ecplsr.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  }
  else {
    props.onStuff(null);
    return <GoogleLogout
    clientId="124292557093-bm13qb1e0elsj3v5aio9c0c773ecplsr.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logoutGoogle}
    />
  }
}