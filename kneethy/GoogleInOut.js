import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin, GoogleLogout} from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}
const logoutGoogle = (logout) => {
  console.log(logout);
}

export function LoginBlock() {
  if (true) {
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