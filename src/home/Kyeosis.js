import React from 'react'
import { Link } from '../components/index.js'

const linkStyle = { marginTop: '2rem', display: 'block' }

export default () => (
  <>
    <h2>Kyeosis</h2>
    <p>
      In 2016 I legally changed my name from Timothy Moran to Timothy Kye.{' '}
      <br />
      In 2019 I changed my name handle from Tyrsius to Kyeotic.
    </p>
    <p>
      At first <em>Kyeotic</em> may seem like a pun on my last name and{' '}
      <em>chaotic</em>, but I like to think there is a bit more to it.
    </p>
    <p />
    <ul>
      <li>
        <em>
          <a href="https://www.dictionary.com/browse/chaotic?s=t">chaotic</a>
        </em>
        : completely confused or disordered
      </li>
      <li>
        <em>
          <a href="https://www.dictionary.com/browse/-osis">-osis</a>
        </em>
        : indicating a process or state <em>metamorphosis</em>.
      </li>
      <li>
        {' '}
        <em>
          <a href="https://www.dictionary.com/browse/otic">-otic</a>
        </em>
        : an adjective suffix of Greek origin, often corresponding to nouns
        ending in -osis, denoting a relationship to an action, process, state,
        or condition indicated by the preceding element: <em>hypnotic</em>;{' '}
        <em>neurotic</em>.
      </li>
    </ul>
    <p />
    <p />
    <p>
      Using these roots <em>kyeosis</em> could be the process of being a Kye, or
      becoming a Kye. I like to think of it as growing and changing according to
      my idealized values; as becoming who I want to be.
    </p>

    <p>
      If <em>kyeosis</em> is becoming who I want to be then <em>kyeotic</em> is
      the opposite of <em>chaotic</em>.
    </p>

    <Link to="/about" style={linkStyle}>
      Back to About
    </Link>
  </>
)
