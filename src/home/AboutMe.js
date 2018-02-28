import React from 'react'

const aboutMe = `I am a full stack developer. That term means a lot of things to different people, but too me it means that I know: how to design and implement every layer of a modern business application, from the database to the user interface; how to create a reliable and repeatable build and deployment pipeline; how to secure it from the most common forms of attack; how to monitor and measure it's stability and performance; and how to operate and scale it to meet user demand.

I am a full stack developer. I used to work heavily with C# and the Microsoft stack: MS SQL, IIS, ASP MVC, etc. I started with containers before .NET Core was stable and so naturally I took my JavaScript experience from front end work into NodeJS and haven't looked back. I have a solid foundation with strongly-typed languages working with normalized databases which evolved into a more modern`

export default () => (
  <section id="about">
    <p>
      I am a full stack developer. That term means a lot of things to different
      people. To me it means that I know how to:
    </p>
    <ul>
      <li>
        design and implement every layer of a modern business application, from
        the database to the user interface
      </li>
      <li>create a reliable and repeatable build and deployment pipeline</li>
      <li>secure it from the most common forms of attack</li>
      <li>monitor and measure it's stability and performance</li>
      <li>operate and scale it to meet user demand</li>
    </ul>
    <p>
      While JavaScript is my language of choice on most projects I am also
      comfortable with C#, and I have some experience patching Python and Go.
    </p>
  </section>
)
