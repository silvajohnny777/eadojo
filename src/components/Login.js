import React from 'react';

    function Login(){
        return(
            <div>
                <div class="columns">
                    <div class="column login-left is-three-fifths"><section class="hero ">
  <div class="hero-body">
    <div class="container loginForm">
    <h1 className="title">
        Login
    </h1><br/>
    <h3 className="subtitle">
        Email
    </h3>
    <p class="control has-icons-left has-icons-right">
        <input class="input is-rounded" type="email" placeholder="Email"/>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
    </p><br/>
    <h3 className="subtitle">
        Password
    </h3>
    <p class="control has-icons-left has-icons-right">
        <input class="input is-rounded" type="password" placeholder="Email"/>
        <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
        </span>
    </p><br/>
    <label class="checkbox">
        <input type="checkbox"/>
        Remember me
    </label><br/><br/>
    <a class="button is-fullwidth is-primary">Login</a>
  </div>
  </div>
</section></div>
                    <div class="column login-right is-two-fifths"></div>
                </div>
            </div>
        )
    }

export default Login;