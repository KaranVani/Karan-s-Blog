import React, {Component} from 'react';
import BlogList from "./blog";

class Content extends Component {
    render() {
        return (
            <div className="content_container">
                <h2>About me</h2>
                <div className="content">
                    <p>
                        Hi there my name is Karan Vani!

                        I am a Software Developer based in Brighton, United Kingdom
                        <a href="https://shorturl.at/iory4">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="20">
                                <g>
                                    <path d="M0,0h24v24H0V0z" fill="none"/>
                                </g>
                                <g>
                                    <path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.32,2.67,7.25,8,11.8c5.33-4.55,8-8.48,8-11.8C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/>
                                </g>
                            </svg>
                        </a>
                        .
                    </p>
                </div>
                <h2>My Journey </h2>
                <div className="content">
                    <p>I graduated from The University of Brighton in 2023, and started working full time at Paxton
                        Access that same year</p>
                </div>

                <BlogList/>
            </div>
        );
    }
}

export default Content;
