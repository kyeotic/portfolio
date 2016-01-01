import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className={'jumbotron text-center'}>
                    <h1>Timothy Moran</h1>
                    <p className={'lead'}>I am a software developer in Portland, Oregon. I love my job, and I love tinkering.</p>
                </div>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <p>
                            I have been doing software development professionally since 2010, and web development since 2011. I work primarily in C# and Javascript, and love both of them. I've worked with a of different technologies, and I spent a fair amount of free time tinkering with new frameworks at home.
                        </p>

                        <p>
                            I have a strong preference for Service Oriented Front End Architecture (<a target="_blank" href="http://www.smart-soft.com/downloads/articles/sofea.html">SOFEA</a>). Lately that has meant a Durandal or Angular client talking to a server running either ServiceStack (Windows) or NodeJS (Linux).
                        </p>

                        <p>
                            If you want to see some of my work or look at my resume check out the links at the top. If you are trying to contact me about consulting, please <a target="_blank" href="mailto:tmoran.jobs@gmail">email me here</a>.
                        </p>

                        <p>
                            I also just recently published my first book, <a href="https://www.packtpub.com/web-development/mastering-knockoutjs"><em>Mastering KnockoutJS</em></a>. It is an in-depth look at using Knockout for web application development.
                        </p>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <h2>External Links</h2>
                        <ul className={'nav nav-pills'}>
                            <li><a href="http://blog.tyrsius.com" target="_blank" className={'btn btn-lg btn-home'}>Blog</a></li>
                            <li><a href="https://github.com/tyrsius" target="_blank" className={'btn btn-lg btn-home'}>Github</a></li>
                            <li><a href="https://stackoverflow.com/users/788260/tyrsius" target="_blank" className={'btn btn-lg btn-home'}>StackOverflow</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}