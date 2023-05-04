import { useNavigate } from '@remix-run/react'
import Panel from '../components/Panel.tsx'
import Link from '../components/Link.tsx'
import { tw } from 'tw'

import { H2, BodyText } from '../components/Typography.tsx'

const links = [
  { title: 'Github', href: 'https://github.com/kyeotic' },
  { title: 'Blog', href: 'http://blog.tyrsius.com/' },
  {
    title: 'StackOverflow',
    href: 'https://stackoverflow.com/users/788260/kyeotic',
  },
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/kyeotic/' },
  { title: 'email me', href: 'mailto:tim@kye.dev' },
]

export default function AboutMe() {
  const navigate = useNavigate()
  const kyeosis = () => {
    navigate(window.location.pathname !== '/kyeosis' ? '/kyeosis' : '/about', {
      preventScrollReset: true,
    })
  }

  return (
    <Panel>
      <H2>A Bit About Me</H2>
      <BodyText>
        I live in Portland, Oregon and I am a full stack developer. That term
        means a lot of things to different people, for me it means that I know
        how to:
      </BodyText>
      <ul className={tw(`mt-4 max-w-screen-sm list-disc list-inside`)}>
        <li>
          design and implement every layer of a modern business application,
          from the database to the user interface
        </li>
        <li>create a reliable and repeatable build and deployment pipeline</li>
        <li>secure it from the most common forms of attack</li>
        <li>monitor its stability and measure its performance</li>
        <li>operate and scale it to meet user demand</li>
      </ul>
      <BodyText>
        While TypeScript has been my language of choice for the last few years,
        lately I have been working with Kotlin and loving it. I am also
        comfortable with C#, and I have some experience patching Python and Go.
      </BodyText>
      <BodyText>
        I am very experienced with Amazon Web Services, with both the serverless
        Lambda architecture and Docker on ECS/Fargate, as well as supporting
        services like Dynamo, RDS Aurora, S3, API Gateway, SQS, etc. I've also
        worked with K8s, Cloudflare Pages/Workers, Digital Ocean Apps, and
        recently Deno Deploy.
      </BodyText>
      <BodyText>
        In 2016 I legally changed my name from Timothy Moran to Timothy Kye.{' '}
        <br />
        In 2019 I changed my handle from Tyrsius to{' '}
        <span onClick={kyeosis}>Kyeotic</span>.
      </BodyText>
      <H2>External Links</H2>
      <ul className={tw(`mt-4 max-w-screen-sm list-disc list-inside`)}>
        {links.map((link) => (
          <li key={link.href} className={tw(`inline-block mr-4`)}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </Panel>
  )
}
