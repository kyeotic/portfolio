import Link from '../Link.js'

export interface Project {
  name: string
  title: string
  tags: string[]
  height: number
  icon: JSX.Element
  body: JSX.Element
}

function PlaceholderIcon({
  label,
  bg = '#333',
}: {
  label: string
  bg?: string
}) {
  return (
    <div
      style={{
        background: bg,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: '0.05em',
      }}
    >
      {label}
    </div>
  )
}

export const projects = [
  {
    name: 'raviger',
    title: 'Raviger',
    tags: ['Open Source'],
    icon: (
      <img
        style={{ padding: '.3rem', filter: 'brightness(0) invert(1)' }}
        alt="Raviger"
        src="/images/projects/raviger.svg"
      />
    ),
    height: 250,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/raviger">Raviger</Link>, is a
          React routing library built using React Hooks. At {'<'}4kb its tiny,
          with a simple API to match. It is heavily inspired by{' '}
          <Link href="https://github.com/Paratron/hookrouter">hookrouter</Link>,
          but written from scratch.
        </p>
        <p>
          I started using hookrouter because its API and size were a breath of
          fresh air after living with React Router for so long. However,
          hookrouter doesn't treat query strings as first-class citizens during
          routing, which makes search and filter pages difficult. I{' '}
          <Link href="https://github.com/Paratron/hookrouter/pull/71">
            created PR
          </Link>{' '}
          to address this, but it appears the maintainer doesn't think{' '}
          <Link href="https://github.com/Paratron/hookrouter/issues/72#issuecomment-513977880">
            query strings should work with routes.
          </Link>{' '}
          So in true OSS fashion I made my own solution.
        </p>
      </div>
    ),
  },
  {
    name: 'dockru',
    title: 'Dockru',
    tags: ['Open Source', 'DevOps', 'Rust', 'Web Apps'],
    icon: (
      <img
        style={{ padding: '.3rem' }}
        alt="Stack Sync"
        src="/images/projects/dockru.svg"
      />
    ),
    height: 240,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/dockru">Dockru</Link> is a
          self-hosted Docker Compose management UI. I liked{' '}
          <Link href="https://dockge.kuma.pet/">Dockge</Link>'s simplified
          interface over Portainer, but found its idle CPU usage noticeably
          worse — so I rewrote the backend in Rust while keeping a Vue-based
          frontend.
        </p>
        <p>
          Features include compose file create/edit/start/stop/restart/delete,
          an interactive terminal, multi-host support, and{' '}
          <code>docker run</code> → <code>compose.yaml</code> conversion.
          Supports amd64, arm64, and armv7.
        </p>
      </div>
    ),
  },
  {
    name: 'stack-sync',
    title: 'Stack Sync',
    tags: ['Open Source', 'DevOps', 'Rust'],
    icon: (
      <img
        style={{ padding: '.3rem' }}
        alt="Stack Sync"
        src="/images/projects/stack%20sync.png"
      />
    ),
    height: 240,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/stack-sync">Stack Sync</Link>{' '}
          is a Rust CLI for deploying and managing Docker Compose stacks to
          remote infrastructure. It supports two backends: Portainer's REST API
          and direct SSH deployment to any host running Docker Compose.
        </p>
        <p>
          Commands include <code>sync</code>, <code>view</code>,{' '}
          <code>import</code>, <code>redeploy</code>, and <code>init</code>. It
          uses hierarchical config inheritance so credentials can live in parent
          directories, separate from project-specific stack files.
        </p>
      </div>
    ),
  },
  {
    name: 'vault-sync',
    title: 'Vault Sync',
    tags: ['Open Source', 'DevOps', 'Rust'],
    icon: (
      <img
        style={{ padding: '.3rem' }}
        alt="Vault Sync"
        src="/images/projects/vault-sync.png"
      />
    ),
    height: 230,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/vault-sync">Vault Sync</Link>{' '}
          is a Rust CLI that syncs secrets from{' '}
          <Link href="https://bitwarden.com/products/secrets-manager/">
            Bitwarden Secrets Manager
          </Link>{' '}
          into local <code>.env</code> files. It uses a <code>.toml</code>{' '}
          config, supports template variable substitution, dry-run mode, and
          self-update. Installable via Homebrew, shell script, or Nix flakes.
        </p>
      </div>
    ),
  },
  {
    name: 'stook',
    title: 'Stook',
    tags: ['Open Source', 'DevOps', 'Rust'],
    icon: <PlaceholderIcon label="ST" bg="#e05c1a" />,
    height: 220,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/stook">Stook</Link> is a
          webhook receiver that enables continuous deployment for self-hosted
          Docker infrastructure. When an image is pushed to a Docker registry,
          Stook queries the Docker socket for containers labeled{' '}
          <code>stook: redeploy</code> and triggers Portainer to redeploy those
          stacks automatically — a clean CD primitive without a full CI/CD
          platform.
        </p>
      </div>
    ),
  },
  {
    name: 'smashdown',
    title: 'Smashdown',
    tags: ['Open Source', 'Web Apps'],
    icon: <PlaceholderIcon label="SD" bg="#c0392b" />,
    height: 240,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/smashdown">Smashdown</Link> is
          a Super Smash Bros. Ultimate tournament app for friend groups. It
          handles the full tournament lifecycle: drafting rosters from the
          complete 89-fighter roster (with random fill helpers), running a
          single-elimination bracket, and tracking per-fighter win/loss stats
          and win streaks.
        </p>
        <p>
          Built with SolidJS, tRPC, and Deno — with Auth0 for user management so
          each player has their own account.
        </p>
      </div>
    ),
  },
  {
    name: 'foodie',
    title: 'Foodie',
    tags: ['Open Source', 'Web Apps'],
    icon: <PlaceholderIcon label="FD" bg="#27ae60" />,
    height: 240,
    body: (
      <div>
        <p>
          <Link href="https://github.com/kyeotic/foodie">Foodie</Link> is a
          collaborative restaurant tracker for groups. Places are organized by
          city and tag, with a rating system and an interactive split-screen
          Google Maps view where hovering a list entry highlights its map pin
          and vice versa.
        </p>
        <p>
          Built as a PWA (installable on mobile), with team support so a group
          can share and manage their restaurant list together. Stack: SolidJS,
          tRPC, Deno, Auth0.
        </p>
      </div>
    ),
  },
  {
    name: 'airtable',
    title: 'Airtable Alternative Client',
    tags: ['Open Source'],
    icon: (
      <img
        style={{ padding: '.3rem' }}
        alt="Airtable"
        src="/images/projects/airtable-mark.svg"
      />
    ),
    height: 250,
    body: (
      <div>
        <p>
          While Airtable has an{' '}
          <Link href="https://github.com/Airtable/airtable.js">
            official client
          </Link>{' '}
          I struggled with its then-lacking documentation and unconventional
          API. It is also much larger than I would like for essentially being an
          HTTP wrapper.
        </p>
        <p>
          <Link href="https://github.com/kyeotic/airtable">I made my own</Link>,
          largely to experiment with the newly-released async generators
          functions in Node 10. It even got an{' '}
          <Link href="https://github.com/Airtable/airtable.js/issues/108#issuecomment-497081949">
            unofficial blessing
          </Link>{' '}
          from one of the Airtable devs. I'm pretty happy with how it turned
          out.
        </p>
      </div>
    ),
  },
  {
    name: 'cerberus-node-client',
    title: 'Cerberus Node Client',
    tags: ['Open Source'],
    icon: <img alt="" src="/images/projects/cerberus_logo.svg" />,
    height: 221,
    body: (
      <div>
        <p>
          <Link href="http://engineering.nike.com/cerberus/">Cerberus</Link> is
          a secrets management system developed at Nike that used AWS IAM Roles
          for authentication. I developed the node client while working there,
          and it was among the first projects to go through Nike's Open Source
          process.
        </p>
        <p>
          Cerberus is designed to be used by EC2 instances and AWS Lambdas.
          Getting a performant cold-start on AWS Lambdas can be challengeing,
          especially on Node where the provided AWS SDK can take 1-2 seconds to
          load. Like the AWS Thin Libraries the Cerberus node client makes
          signed HTTP requests to AWS's REST API to avoid using the slow-to-load
          SDK.
        </p>
        <p>
          This client is on{' '}
          <Link href="https://www.npmjs.com/package/cerberus-node-client">
            npm
          </Link>
          , the source is on{' '}
          <Link href="https://github.com/Nike-Inc/cerberus-node-client">
            Github
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    name: 'lambda-router',
    title: 'Lambda Router',
    tags: ['Open Source'],
    icon: (
      <img
        alt=""
        src="/images/projects/lambda.svg"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    ),
    height: 223,
    body: (
      <div>
        <p>
          <Link href="https://github.com/Nike-Inc/lambda-router">
            Lambda Router
          </Link>{' '}
          is a{' '}
          <Link href="https://bundlephobia.com/result?p=lambda-router@2.4.1">
            small, 5kb
          </Link>{' '}
          API router for AWS Lambda. Lambda's recieve and return
          plain-old-JSON-objects with a known structure. Lambda Router
          simplifies the access and decoding of the incoming event, including
          the awkward mapping from the <em>API Proxy Integration</em>, routes by
          path to a handler, and provides a simple API for returning responses,
          including custom headers.
        </p>
        <p>I developed this while working at Nike.</p>
      </div>
    ),
  },
  {
    name: 'mastering-knockoutjs',
    title: 'Mastering Knockout JS',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/mastering_knockout_cover.jpg" />,
    height: 279,
    body: (
      <div>
        <p>
          <Link href="http://knockoutjs.com">KnockoutJS</Link> is one of the
          early JavaScript front-end data binding libraries. It was developed by
          engineers at Microsoft and, following in the footsteps of Windows
          Presentation Foundation (WPF), used the Model-View-ViewModel (MVVM)
          pattern. Since I transitioned from WPF desktop development into web
          development it was a natural choice for me. I still think it made a
          lot of good decisions, though newer frameworks have come a lot
          farther.
        </p>
        <p>
          I wrote{' '}
          <Link href="https://www.amazon.com/Mastering-KnockoutJS-Timothy-Moran/dp/1783981008">
            Mastering KnockoutJS
          </Link>{' '}
          in 2014 at the height of Knockout's popularity. It is targeted at
          experienced developers, or developers who know Knockout but want to
          understand it better. It is well-reviewed on Amazon, and I am quite
          proud of it. It is the only book I have ever written, but it will
          likely be the last programming book I ever write. I find writing
          shorter, focused blog posts to be more useful and fun, and the ability
          to use hyperlinks and embed interactive elements has a special value
          when communicating programming concepts.
        </p>

        <p>
          The books has over 90 runnable code examples, which you can see on the
          accompanying{' '}
          <Link href="https://github.com/kyeotic/MasteringKnockout">
            Github repo
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    name: 't-plus-plus',
    title: 'T++ Blog',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/blog_logo.jpg" />,
    body: (
      <div>
        <p>
          <Link href="https://blog.kye.dev">
            This is my personal/technical blog
          </Link>
          , named after an inside joke. While I don't update it as frequently as
          I should I do maintain a blog, filled mostly with technical posts.
        </p>
        <p>
          It's usually small solutions, but sometimes I write larger guides,
          like this multi-part, from-scratch guide on{' '}
          <Link href="https://blog.kye.dev/digital-ocean-for-beginners/">
            getting started with Digital Ocean
          </Link>{' '}
          and this one on{' '}
          <Link href="https://blog.kye.dev/proxmox-series/">
            setting up a Proxmox cluster
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    name: 'portfolio',
    title: 'Portfolio',
    tags: ['Open Source', 'Web Apps'],
    icon: (
      <img
        alt=""
        src="/images/projects/ic_portfolio.png"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    ),
    body: (
      <div>
        <p>
          This portfolio iterates with me as I learn new tools and techniques.
          Its current iteration is Waku and React Server Components running on
          Cloudflare Workers. I'm quite happy with the transition from
          Remix/Deno to RSC, especially Waku's minimal footprint.
        </p>
        <p>
          <Link href="https://github.com/kyeotic/portfolio">
            Check out the source on GitHub
          </Link>
        </p>
      </div>
    ),
  },
] as Project[]
