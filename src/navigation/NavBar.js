import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <header className={'nav navbar navbar-default navbar-fixed-top'}>
    <div className={'container'}>
      <nav>
        <NavLink className={'brand navbar-brand'} to="/">
          <i className={'icon-home'} />
        </NavLink>
        <ul className={'nav navbar-nav'}>
          <li>
            <NavLink to="/projects"> {'Portfolio'} </NavLink>
          </li>
          <li>
            <NavLink to="/resume"> {'Resume'} </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
