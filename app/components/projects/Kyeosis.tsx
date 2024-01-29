import { Link } from '@remix-run/react'

import Panel from '../components/Panel.tsx'
import { H2, BodyText } from '../components/Typography.tsx'

// const linkStyle = { marginTop: '2rem', display: 'block' }

export default () => (
  <Panel>
    <>
      <H2>Kyeosis</H2>
      <BodyText>
        In 2016 I legally changed my name from Timothy Moran to Timothy Kye.{' '}
        <br />
        In 2019 I changed my handle from Tyrsius to Kyeotic.
      </BodyText>
      <BodyText>
        At first <em>Kyeotic</em> may seem like a pun on my last name and{' '}
        <em>chaotic</em>, but I like to think of it a little differently.
      </BodyText>
      <ul className={`mt-4 max-w-screen-sm`}>
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
          : indicating a process or state: <em>metamorphosis</em>,{' '}
          <em>hypnosis</em>.
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
      <BodyText>
        Using these roots <em>kyeosis</em> could be the process of being a Kye,
        or becoming a Kye. I like to think of it as developing according to my
        idealized values; as becoming who I want to be.
      </BodyText>

      <BodyText>
        So why Kyeotic, not Kyeosis? A hypnotist isn't <em>hypnosis</em>, they
        are neither the process nor the state. They may be <em>hypnotic</em>,
        though. Likewise, I am not Kyeosis. I am Kyeotic.
      </BodyText>

      <BodyText>
        If <em>kyeosis</em> is becoming who I want to be then <em>kyeotic</em>{' '}
        is the opposite of <em>chaotic</em>.
      </BodyText>

      <Link to="/about" className={`mt-4 block underline underline-offset-2`}>
        Back to About
      </Link>
    </>
  </Panel>
)
