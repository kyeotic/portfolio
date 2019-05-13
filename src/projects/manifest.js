import React from 'react'

export default [
  {
    name: 'cerberus-node-client',
    title: 'Cerberus Node Client',
    tags: ['Security', 'Open Source'],
    icon: <img alt="" src="/images/projects/cerberus3.svg" />,
    height: 221,
    body: (
      <div>
        <p>
          <a href="http://engineering.nike.com/cerberus/">Cerberus</a> is a
          secrets management system developed at Nike that used AWS IAM Roles
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
          <a href="https://www.npmjs.com/package/cerberus-node-client">npm</a>,
          the source is on{' '}
          <a href="https://github.com/Nike-Inc/cerberus-node-client">Github</a>.
        </p>
      </div>
    )
  },
  {
    name: 'rocket',
    title: 'Rocket',
    tags: ['Front End', 'Professional'],
    icon: <img alt="" src="/images/projects/rocket.svg" />,
    height: 213,
    body: (
      <div>
        <p>
          Rocket is a project bootstrapper. Nike is a big shop with thousands of
          engineers. Experimentation is strongly encouraged, and new projects
          spin up every week (sometimes to fail less than a month later). Rocket
          is designed on a plugin system that lets its user select a Blueprint
          and choose what modules get included. Are you starting a new
          serverless project? Do you need CloudFormation or Terraform? CircleCI
          or Jenkins? Rocket makes getting off the ground quick, even with
          constantly shifting "Best Practices", patterns, and technology stacks.
        </p>
        <p>
          Rocket was my team's first Typescript project, which we chose to help
          with the tangled interactions between plugins. Its plugins are
          described with <a href="http://json-schema.org/">JSON Schema</a>,
          which dynamically creates the UI forms and validation for each
          Blueprint, and they use <a href="http://yeoman.io/">Yeoman</a> for
          composing and generating the output.
        </p>
        <p>
          Rocket was a team effort, but I was largely responsible for the design
          and implementation of the plugin system and dynamic JSON schema UI
          that powered it.
        </p>
      </div>
    )
  },
  {
    name: 'devportal',
    title: 'API Dev Portal',
    tags: ['Security', 'Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/code_icon.svg" />,
    height: 277,
    body: (
      <div>
        <p>
          Like the Facebook or Twitter developer portals the Niketech Developer
          Portal is a tool for discovering APIs, viewing documentation, and
          manaing oAuth applications.
        </p>
        <p>
          APIs can be created, managed, and versioned. Documentation can be
          supplied using a combination of markdown READMEs and interactive
          endpoint documenation using{' '}
          <a href="https://www.openapis.org/">OpenAPI 3 (formerly Swagger)</a>{' '}
          or <a href="https://apiblueprint.org/">API Blueprint</a>. Details can
          also be provided for API, such as host, SLAs, and maintainer contact
          emails.
        </p>
        <p>
          The portal also offered self-service oAuth application management,
          which was a managed abstraction over PingFederate and Okta. It guided
          you through client creation, setup, and implementation.
        </p>
      </div>
    )
  },
  {
    name: 'auth-toolkit',
    title: 'Auth Toolkit',
    tags: ['Professional', 'Security'],
    icon: <img alt="" src="/images/projects/oauth_logo2.png" />,
    height: 250,
    body: (
      <div>
        <p>
          The NextGen Platforms authentication toolkit was a collection of
          packages pre-configured to handle the variety of authentication
          providers in use at Nike, as well as aid in generating API-specific
          authorization policies.
        </p>
        <p>
          The first part was a JWT validator, provided as a Node library and
          packaged as an AWS{' '}
          <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html">
            API Gateway Custom Authorizer
          </a>{' '}
          lambda. It handled the x509 signatures from PingFederate and the more
          common RSA singatures from Okta, and shipped with configuration for
          the various authorization servers in each. A seperate, matching Java
          library was maintained by another team member.
        </p>
        <p>
          The other part was a build-step tool that compiled{' '}
          <a href="https://www.openapis.org/">OpenAPI</a> specs (formerly
          Swagger) to create endpoint-aware authorization policies that could be
          included with the JWT validator to apply oAuth claim requirements to
          API requests.
        </p>
      </div>
    )
  },
  {
    name: 'grey-market',
    title: 'Grey Market',
    tags: ['Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/market_icon.svg" />,
    height: 213,
    body: (
      <div>
        <p>
          This was a tool developed to help identify where unauthorized online
          resellers were getting their product. It took a list of products being
          sold and compared them to the order book for authorized sellers. The
          UI helped users identify most likely candidates for unauthorized
          reselling, even when a seller bought their stock from multiple
          distributors, by visually arranging the overlapping product offerings
          of each distibutor with the unauthorized sellers (unfortunately I
          cannot share screenshots of this).
        </p>
        <p>
          PostgreSQL was used to handle the fairly taxing analysis, which was
          further aided by the native array aggregation and JSON serialization
          being done in the database. The product overlap query, which compared
          tens of millions of rows and returned an unaggregated set of hundreds
          of thousands, was especially taxing. By using PostgreSQLs array
          aggregation to move the joined rows into an aggregated cell-per-seller
          the response time dropped from 2 and half minutes to ~10 seconds.
        </p>
      </div>
    )
  },
  {
    name: 'lambda-router',
    title: 'Lambda Router',
    tags: ['Professional', 'Open Source'],
    icon: <img alt="" src="/images/projects/lambda.svg" />,
    height: 223,
    body: (
      <div>
        <p>
          <a href="https://github.com/Nike-Inc/lambda-router">Lambda Router</a>{' '}
          is a{' '}
          <a href="https://bundlephobia.com/result?p=lambda-router@2.4.1">
            small, 5kb
          </a>{' '}
          API router for AWS Lambda. Lambda's recieve and return
          plain-old-JSON-objects with a known structure. Lambda Router
          simplifies the access and decoding of the incoming event, including
          the awkward mapping from the <em>API Proxy Integration</em>, routes by
          path to a handler, and provides a simple API for returning responses,
          including custom headers.
        </p>
        <p>I developed this while working at Nike.</p>
      </div>
    )
  },
  {
    name: 'cryonic',
    title: 'Cryonic',
    tags: ['Performance', 'Professional'],
    icon: <img alt="" src="/images/projects/snow.svg" />,
    height: 223,
    body: (
      <div>
        <p>
          Cryonic is a tool for measuring NodeJS AWS Lambda cold-start
          performance. It hooks into the module loader, times everything, and
          generates a flame graph like{' '}
          <a href="https://github.com/aws/aws-sdk-js/issues/1469#issuecomment-322820847">
            this one
          </a>{' '}
          (this was actually generated with Cryonic).{' '}
        </p>
        <p>
          If you aren't familiar with AWS Lambdas the need for this may not be
          clear. AWS Lambdas are special containers that each handle a single
          concurrent request, which makes their scaling policy dead simple: if
          there is not an available container to handle a request, make a new
          one. They are discarded if they are idle for too long, so "cold
          starts" like this are common unless you have a perfectly flat request
          rate. Freshly started containers have to load all their code before
          they can run, in contrast to typical servers that startup once and
          then run forever. This means their is an unusual focus on how quickly
          the container can start. Cryonic was built to help identify
          bottlenecks in this process.
        </p>
        <p>
          Unlike the AWS Thin Libraries, which I also developed at Nike, I was
          not allowed to release Cryonic as Open Source.
        </p>
      </div>
    )
  },
  {
    name: 'coral-commons',
    title: 'Coral Commons',
    tags: ['Open Source', 'Front End'],
    icon: <img alt="" src="/images/projects/ic_cc.png" />,
    height: 185,
    body: (
      <div>
        <p>
          I used to live in a condo project with a very proactive and positive
          community. After our first community meeting I discovered they were
          keeping contact and other information in spreadsheets, so I offered to
          help them out. It was also a good opportunity to play with{' '}
          <a href="https://github.com/rackt/redux">Redux</a>,{' '}
          <a href="https://www.firebase.com/">Firebase</a>, and the{' '}
          <a href="https://github.com/firebase/blaze_compiler">
            blaze compiler
          </a>
          .
        </p>
        <p>
          The app has display and entry screens for Residents and Houses, and
          mapping between the two. "Verified" accounts can read any data, and
          write to Residents or Houses that they have been linked to. The HOA
          board members have write access to everything.
        </p>
        <p>
          There is also a bulletin board that anyone can post to, which supports
          Markdown (<a href="http://commonmark.org/">CommonMark</a> flavored).
          The site was designed with Bootsrap so that it can be easily used on
          phones, which is how I expected the majority of the community the use
          the site.
        </p>
        <p>
          You can check out the{' '}
          <a href="https://github.com/kyeotic/coral-commons">source code</a> on
          GitHub.
        </p>
      </div>
    )
  },
  {
    name: 'dabber',
    title: 'dabber',
    tags: ['Open Source'],
    icon: <img alt="" src="/images/projects/dynamodb.png" />,
    height: 228,
    body: (
      <div>
        <p>
          DynamoDB, AWS's NoSQL database, didn't have an integrated backup
          solution until Dec 2017. There were some "official" solutions that
          involved Elastic Map Reduce, which was very slow and expensive (even
          tables with less than 1k rows could take 10-20 minutes and use 16
          instance hours of processing). So I created{' '}
          <a href="https://github.com/Nike-Inc/dabber">
            Dynamo Automated Backup, and (Benevolently Ergonomic) Restore
          </a>
          , affectionately named "dabber" for short.
        </p>
        <p>
          Dabber includes a CLI that allows easy, fast backups and restores on
          Dyanmo tables to S3 buckets. The CLI can also deploy an AWS Lambda and
          create Cloudwatch Trigger's to schedule backups. The Cloudwatch
          Trigger event contained the information necessary to describe the
          backup, so a single Lambda could handle any number of backup schedules
          (up to Cloudwatch's event limit).
        </p>
        <p>
          Since Dynamo has since added a native backup and restore, dabber is no
          longer maintained.
        </p>
      </div>
    )
  },
  {
    name: 'aws-thin-libraries',
    title: 'AWS Thin Libraries',
    tags: ['Performance', 'Open Source'],
    icon: <img alt="" src="/images/projects/aws.png" />,
    height: 223,
    body: (
      <div>
        <p>
          AWS Lambdas are "serverless" runtimes that offer low-cost,
          automatically scaling infrastructure. These benefits come at the cost
          of ephemeral instances which often have to start and load their entire
          package before handling a request, which can result in very slow
          responses if your containers cannot start very, <em>very</em> quickly.
          This problem is exacerbated by the{' '}
          <a href="https://github.com/aws/aws-sdk-js/issues/1469#issuecomment-322820847">
            slow startup speed of the Official AWS SDK.
          </a>
        </p>
        <p>
          Enter the AWS Thin Libraries: paired down versions of the{' '}
          <a href="https://github.com/Nike-Inc/aws-thin-dynamo-node">Dynamo</a>,{' '}
          <a href="https://github.com/Nike-Inc/aws-thin-s3-node">S3</a>, and{' '}
          <a href="https://github.com/Nike-Inc/aws-thin-ses-node">SES</a>{' '}
          clients optimzed for start-up speed. The performance gains on these
          are substantial, ranging from 300ms-1500ms depending on the size of
          the lambda and how you loaded the client. While less important for
          lambdas that triggered by S3 or Dynamo events, these are indispensable
          if your lambda is handling requests from your user-facing REST API.
          Since lambdas are billed by their execution time if you can cut off
          500ms you could be saving 50% on your bill, which is still valuable to
          those S3 triggered lambdas if they fire a million times a month.
        </p>
      </div>
    )
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
          <a href="http://knockoutjs.com">KnockoutJS</a> is one of the early
          JavaScript front-end data binding libraries. It was developed by
          engineers at Microsoft and, following in the footsteps of Windows
          Presentation Foundation (WPF), used the Model-View-ViewModel (MVVM)
          pattern. Since I transitioned from WPF desktop development into web
          development it was a natural choice for me. I still think it made a
          lot of good decisions, though newer frameworks have come a lot
          farther.
        </p>
        <p>
          I wrote{' '}
          <a href="https://www.amazon.com/Mastering-KnockoutJS-Timothy-Moran/dp/1783981008">
            Mastering KnockoutJS
          </a>{' '}
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
          <a href="https://github.com/kyeotic/MasteringKnockout">Github repo</a>
          .
        </p>
      </div>
    )
  },
  {
    name: 't-plus-plus',
    title: 'T++ Blog',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/blog_logo.jpg" />,
    body: (
      <div>
        <p>
          While I don't update it as frequently as I should I do maintain a
          blog, filled mostly with technical posts.
        </p>
        <p>
          It's usually small solutions, but sometimes I write larger guides,
          like this multi-part, soup to nuts guide guide on{' '}
          <a href="https://blog.tyrsius.com/digital-ocean-for-beginners/">
            getting started with Digital Ocean
          </a>
        </p>
      </div>
    )
  },
  {
    name: 'portolfio',
    title: 'Portfolio',
    tags: ['Open Source', 'Front End'],
    icon: <img alt="" src="/images/projects/ic_portfolio.png" />,
    body: (
      <div>
        <p>
          This portfolio iterates with me as I learn new tools and techniques.
          Now in its fifth iteration it is based on{' '}
          <a href="https://github.com/facebook/create-react-app">
            create-react-app
          </a>
          , deployed with <a href="https://www.terraform.io/">Terraform</a> and
          hosted with AWS S3/Cloudfront.
        </p>
        <p>
          <a href="https://github.com/kyeotic/portfolio">
            Check out the source on GitHub
          </a>
        </p>
      </div>
    )
  }
]
