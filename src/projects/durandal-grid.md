# Durandal Grid

Ko-Grid is the de facto plugin for Knockout if you want to create a databound table, but like SlickGrid it forces you to write HTML-in-string inside your Javascript if you want to customize your rows. Durandal has a much cleaner native way to do such customization via it's data-part overrides in Widgets, which is what I used to create Durandal Grid. It supports asc/desc sorting on properties using the standard <code>sort()</code>, or you can specify your own sort method for each column. It has a standard paging button footer, as well as page size buttons. Finally, it provides easy-to-change row templates so that you can add functionality, or use custom contents.

If you are interested in more details, I've made a dedicated docs/example page for it on Github Pages. You can [check it out here](http://tyrsius.github.io/durandal-grid/), or you can just [check out the source](https://github.com/tyrsius/durandal-grid).


# Portfolio

This portfolio, now in its second version, is my ideal tinkering stack. Originally it was a simple [Durandal](http://durandaljs.com/) application built with Grunt ssh deployed to a self-managed [Webfaction](https://www.webfaction.com/) box with Git. While I loved Durandal, and Knockout (which it was built on), it didn't fare too well with the public and has now been abandonded. The current version of this portfolio is built with [React](https://facebook.github.io/react/), which has quickly become my new favorite Javascript front-end. Instead of Grunt I am now [building with plain-old-npm](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) and using [jspm](http://jspm.io/) and [Babel](https://babeljs.io/) to develop with ES6/7 and package the application. If this application was larger I would also be using [Redux](http://redux.js.org/) to provide the **M** to React's **V** for **MV***.

Javascript client, stateless server, deploy with Git. I love it. If you want to check out the source it's on [GitHub](https://github.com/tyrsius/portfolio).