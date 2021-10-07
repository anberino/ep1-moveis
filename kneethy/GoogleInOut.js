import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-login';

export function LoginBlock() {
  var [logged, setLogged] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    if (response.tokenId != null) {
      setLogged(true);
    }
  
  }

  const logoutGoogle = (logout) => {
    console.log(logout);
    if (logout.error == null) {
      setLogged(false)
    }
  }
  
  if (!logged) {
    return <GoogleLogin
    clientId="124292557093-bm13qb1e0elsj3v5aio9c0c773ecplsr.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  }
  else {
    return <GoogleLogout
    clientId="124292557093-bm13qb1e0elsj3v5aio9c0c773ecplsr.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logoutGoogle}
    />
  }
}