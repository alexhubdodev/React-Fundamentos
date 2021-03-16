import React from 'react';
import './header.css'
export default () =>
    <div class="container-fluid purple darken-4">
        <nav class="purple darken-4">
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="">About</a></li>
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li><i class="material-icons prefix">home</i></li>
                    <li><a href="/">Home</a></li>
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li><i class="material-icons prefix">account_circle</i></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>
    </div>
