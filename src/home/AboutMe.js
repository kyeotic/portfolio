import React from 'react'
import { kyeosis } from './Kyeosis.js'

const links = [
  { title: 'Github', href: 'https://github.com/kyeotic' },
  { title: 'Blog', href: 'http://blog.tyrsius.com/' },
  {
    title: 'StackOverflow',
    href: 'https://stackoverflow.com/users/788260/kyeotic'
  },
  { title: 'Link edIn', href: 'https://www.linkedin.com/in/kyeotic/' },
  { title: 'email me', href: 'mailto:tim@kye.dev' }
]

export default () => (
  <>
    <h2>A Bit About Me</h2>
    <p>
      I live in Portland, Oregon and I am a full stack developer. That term
      means a lot of things to different people, for me it means that I know how
      to:
    </p>
    <ul className="list">
      <li>
        design and implement every layer of a modern business application, from
        the database to the user interface
      </li>
      <li>create a reliable and repeatable build and deployment pipeline</li>
      <li>secure it from the most common forms of attack</li>
      <li>monitor its stability and measure its performance</li>
      <li>operate and scale it to meet user demand</li>
    </ul>
    <p>
      While JavaScript is my language of choice on most projects I am also
      comfortable with C#, and I have some experience patching Python and Go. I
      am very experienced with Amazon Web Services, with both the serverless
      Lambda architecture and Docker on EC2/ECS, as well as supporting services
      like Dynamo, RDS Aurora, S3, API Gateway, SQS, etc.
    </p>
    <p>
      In 2016 I legally changed my name from Timothy Moran to Timothy Kye.{' '}
      <br />
      In 2019 I changed my handle from Tyrsius to{' '}
      <span onClick={kyeosis}>Kyeotic</span>.
    </p>
    <h2>External Links</h2>
    <ul className="link-list">
      {links.map(link => (
        <li key={link.href}>
          <a href={link.href}>{link.title}</a>
        </li>
      ))}
    </ul>
  </>
)
