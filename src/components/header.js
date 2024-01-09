import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Karan Vani</h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/posts">Posts</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
