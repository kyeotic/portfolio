

# Animate

The animate() function is a powerful tool for creating and controlling animations.

```js
animate("li", { opacity: 0 })
```

It comes in two sizes, mini (2.3kb) and hybrid (18kb).

The mini version can animate HTML and SVG styles using native browser APIs for incredible performance.

The hybrid version can additionally animate:

- Independent transforms (x/y/rotateZ etc)
- More styles, like mask-image and gradients
- CSS variables
- SVG paths
- Animation sequences
- Colors/strings/numbers
- JavaScript objects and WebGL

## Usage

```ts
// Hybrid
import { animate } from "motion"
```

### HTML & SVG
Both versions of animate are capable of animating HTML and SVG styles either by passing elements directly, or via CSS selectors.

```js
// Element(s)
const box = document.getElementById("box")

animate(box, { opacity: 0 }, { duration: 0.5 })

// CSS selectors
animate("div", { opacity: 0 }, { duration: 0.5 })
```

#Transforms

The hybrid version of animate can animate every transform axis independently:

- Translate: x, y, z
- Scale: scale, scaleX, scaleY
- Rotate: rotate, rotateX, rotateY, rotateZ
- Skew: skewX, skewY
- Perspective: transformPerspective

```js
animate("div", { rotate: 360 })
```

### CSS variables

Hybrid  animate can animate CSS variables in every browser:

```js
animate(element, { "--rotate": "360deg" })
```

### Single values

By passing a to and from value, the hybrid animate will output the latest values to the provided onUpdate callback.

```js
// Numbers
animate(0, 100, {
  onUpdate: latest => console.log(latest)
})

// Colors
animate("#fff", "#000", {
  duration: 2
  onUpdate: latest => console.log(latest)
})
```


### Motion values
By passing hybrid animate a React motion value, it'll be automatically updated with the latest values.

```js
const x = motionValue(0)

animate(x, 200, { duration: 0.5 })
```


### Objects
Objects can be animated much in the same way as HTML & SVG elements.

```js
const values = {
  x: 100,
  color: "#f00"
}

animate(values, { x: 200, color: "#00f" })
```


Any object can be animated, for instance an Object3D from Three.js:

```js
const camera = new THREE.Camera()

animate(camera.rotation, { y: 360 }, { duration: 10 })
```

### Timeline sequences
The hybrid animate function can also accept complex animation sequences.

```js
const sequence = []

animate(sequence)
A sequence is an array of animate definitions:

const sequence = [
  ["ul", { opacity: 1 }, { duration: 0.5 }],
  ["li", 100, { ease: "easeInOut" }]
]
```

Each definition will, by default, play one after the other.

### Stagger
When animating more than one element, it's possible to stagger animations by passing the stagger function to delay.


```js
import { stagger, animate } from "motion"

animate(".item", { x: 300 }, { delay: stagger(0.1) })
```

## Options

Animations can be configured with transition options. By default, provided options will affect every animating value.

```js
animate(
  element,
  { x: 100, rotate: 0 },
  { duration: 1 }
)
```

By providing named transitions, these can be overridden on a per-value basis:

```js
animate(
  element,
  { x: 100, rotate: 0 },
  {
    duration: 1,
    rotate: { duration: 0.5, ease: "easeOut" }
  }
)
```


### `type`

type decides the type of animation to use.

Mini animate can either animate with the default keyframes animation, or spring:

```js
import { animate } from "motion/mini"
import { spring } from "motion"

animate(
  element,
  { transform: "translateX(100px)" },
  { type: spring, stiffness: 300 }
)
```

Hybrid animate has all animation types built-in, and can be set to "tween", "spring" or "inertia".

Tween animations are set with a duration and an easing curve.

Spring animations are either physics-based or duration-based.

Physics-based spring animations are set via stiffness, damping and mass, and these incorporate the velocity of any existing gestures or animations for natural feedback.


Duration-based spring animations are set via a duration and bounce. These don't incorporate velocity but are easier to understand.

Inertia animations decelerate a value based on its initial velocity, usually used to implement inertial scrolling.

```js
animate("path", { pathLength: 1 }, { duration: 2, type: "tween" })
```

### duration

Default: 0.3 (or 0.8 if multiple keyframes are defined)

The duration of the animation. Can also be used for "spring" animations when bounce is also set.

```js
animate("ul > li", { opacity: 1 }, { duration: 1 })
```

### ease
The easing function to use with tween animations. Accepts:

Easing function name. E.g "linear"

An array of four numbers to define a cubic bezier curve. E.g [.17,.67,.83,.67]

A JavaScript easing function, that accepts and returns a value 0-1.

These are the available easing function names:

"linear"

"easeIn", "easeOut", "easeInOut"

"circIn", "circOut", "circInOut"

"backIn", "backOut", "backInOut"

"anticipate"

When animating keyframes, ease can optionally be set as an array of easing functions to set different easings between each value:

```js
animate(
  element,
  { x: [0, 100, 0] },
  { ease: ["easeIn", "easeOut"] }
)
```

### times
When animating multiple keyframes, times can be used to adjust the position of each keyframe throughout the animation.

Each value in times is a value between 0 and 1, representing the start and end of the animation.

```js
animate(
  element,
  { x: [0, 100, 0] },
  { times: [0, 0.3, 1] }
)
```

There must be the same number of times as there are keyframes. Defaults to an array of evenly-spread durations.


### bounce
Default: 0.25

bounce determines the "bounciness" of a spring animation.

> is no bounce, and 1 is extremely bouncy.

bounce and duration will be overridden if stiffness, damping or mass are set.

```js
animate(
  "section",
  { rotateX: 90 },
  { type: "spring", bounce: 0.25 }
)
```

### visualDuration
If visualDuration is set, this will override duration.

The visual duration is a time, set in seconds, that the animation will take to visually appear to reach its target.

In other words, the bulk of the transition will occur before this time, and the "bouncy bit" will mostly happen after.

This makes it easier to edit a spring, as well as visually coordinate it with other time-based animations.

```js
animate(
  "section",
  { rotateX: 90 },
  { type: "spring", visualDuration: 0.5, bounce: 0.25 }
)

```

### stiffness
Default: 1

Stiffness of the spring. Higher values will create more sudden movement.

```js
animate(
  "section",
  { rotate: 180 },
  { type: "spring", stiffness: 50 }
)
```

### damping
Default: 10

Strength of opposing force. If set to 0, spring will oscillate indefinitely. 

```js
animate(
  "section",
  { rotate: 180 },
  { type: "spring", damping: 300 }
)
```

### mass
Default: 1

Mass of the moving object. Higher values will result in more lethargic movement. 

```js
animate(
  "feTurbulence",
  { baseFrequency: 0.5 },
  { type: "spring", mass: 0.5 }
)
```

### velocity
Default: Current value velocity

The initial velocity of the spring.

```js
animate(
  ".my-element",
  { rotate: 180 },
  { type: "spring", velocity: 2 }
)
```

### restSpeed
Default: 0.1

End animation if absolute speed (in units per second) drops below this value and delta is smaller than restDelta.

```js
animate(
  ".my-element",
  { rotate: 180 },
  { type: "spring", restSpeed: 2 }
)
```

### restDelta
Default: 0.01

End animation if distance is below this value and speed is below restSpeed. When animation ends, the spring will end.

```js
animate(
  ".my-element",
  { x: 200 },
  { type: "spring", restDelta: 0.5 }
)
```

### delay
Default: 0

Delay the animation by this duration (in seconds).
```js
animate(element, { filter: "blur(10px)" }, { delay: 0.3 })
```
By setting delay to a negative value, the animation will start that long into the animation. For instance to start 1 second in, delay can be set to -1.


### repeat
Default: 0

The number of times to repeat the transition. Set to Infinity for perpetual animation.

```js
animate(
  element,
  { backgroundColor: "#fff" },
  { repeat: Infinity, duration: 2 }
)
```

### repeatType
Default: "loop"

How to repeat the animation. This can be either:

loop: Repeats the animation from the start.

reverse: Alternates between forward and backwards playback.

mirror: Switches animation origin and target on each iteration.

```js
animate(
  element,
  { backgroundColor: "#fff" },
  { repeat: 1, repeatType: "reverse", duration: 2 }
)
```

### repeatDelay
Default: 0

> Not available in animate mini.

When repeating an animation, repeatDelay will set the duration of the time to wait, in seconds, between each repetition.

```js
animate(
  element,
  { backgroundColor: "#fff" },
  { repeat: 1, repeatDelay: 1 }
)
```

### at
When defining animations as part of a larger sequence, each definition will start one after the other:

```js
const sequence = [
  ["ul", { opacity: 1 }],
  // This will start when ul opacity is 1
  ["li", { x: [-100, 0] }]
]
```

By passing at, this behaviour can be changed. at can change the time to:

- A specific time
- A labelled time
- The start of the previous animation
- Time relative to start or end of previous animation

### Specific time
Set as a number to define a specific time (in seconds):

```js
const sequence = [
  ["nav", { opacity: 1 }],
  
  // This will start 0.5 from the start of the whole animation:
  ["nav", { x: 100 }, { at: 0.5 }],
]
```

#### Labelled time
Set as a label name to start at the same point as the label definition:

```js
const sequence = [
  ["nav", { x: 100 }, { duration: 1 }],
  
  "my-label", // label definition
  ["li", { opacity: 1 }],
  
  // my-label was defined at 1 second
  ["a", { scale: 1.2 }, { at: "my-label" }],
]
```

#### Start of previous animation
Pass "<" to start at the same time as the previous segment:

```js
const sequence = [
  ["nav", { x: 100 }, { duration: 1 }],
  
  // This will start at the same time as the x: 100 animation
  ["li", { opacity: 1 }, { at: "<" }],
]
```

#### Relative to end of previous animation
Pass a string starting with + or - to start relative to the end of the previous animation:

```js
const sequence = [
  ["nav", { opacity: 1 }, { duration: 1 }],
  
  // 0.5 seconds after the previous animation (1.5 secs):
  ["nav", { x: 100 }, { at: "+0.5" }],
  
  // 0.2 seconds before the end of the previous animation:
  ["nav li", { opacity: 1 }, { at: "-0.2" }],
]
```

#### Relative to start of previous animation
Pass a string starting with <+ or <- to start relative to the start of the previous animation:

```js
const sequence = [
  ["nav", { opacity: 1 }],
  
  // 0.5 seconds after the start animation (0.5 secs):
  ["nav", { x: 100 }, { at: "<0.5" }],
  
  // 0.2 seconds before the start of the previous animation (0.3 secs):
  ["nav li", { opacity: 1 }, { at: "<-0.2" }],
]
```

### onUpdate
A function that's provided the latest animation values.

> Currently works only for single value animations.

```js
animate("#fff", "#000", {
  duration: 2
  onUpdate: latest => console.log(latest)
})
```

## Controls
animate() returns animation playback controls. These can be used to pause, play, cancel, change playback speed and more.

```js
const animation = animate(element, { opacity: 1 })

animation.time = 0.5
animation.stop()
```

### duration
Returns the duration of the animation.

This is the duration of a single iteration of the animation, without delay or repeat options. It is read-only.

```js
const animation = animate(element, { opacity: 0 })

const duration = animation.duration
```

### time
Gets and sets the current time of the animation.

```js
const animation = animate(x, 100, { duration: 1 })

// Set animation time to 0.5 seconds
animation.time = 0.5

// Get animation time
console.log(animation.time) // 0.5
```

### speed
Gets and sets the current playback speed of the animation.

- 1 is normal rate.
- 0.5 is half rate.
- 2 doubles the playback rate.
- -1 reverses playback.

```js
const animation = animate(element, { opacity: 0 })

const currentSpeed = animation.speed

// Double current speed
animation.speed = currentSpeed * 2
```

### then()
A Promise-like API that resolves when the animation finishes:

```js
const animation = animate(element, { opacity: 0 })

// Async/await
await animation
console.log("Animation complete")

// Promise
animation.then(() => {
  console.log("Animation complete")
})
```

> When an animation finishes, a new Promise is created. If the animation is then replayed via the play() method, any old callbacks won't fire again.

### pause()
Pauses the animation until resumed with play().

```js
const animation = animate(element, { opacity: 0 })
animation.pause()
```

### play()
Plays an animation.

- If an animation is paused, it will resume from its current time.
- If an animation has finished, it will restart.

```js
animation.pause()

// Will resume from 1 second
animation.time = 1
animation.play()

// Will play from start
await animation
animation.play()
```

### complete()
Immediately completes the animation, running it to the end state.

```js
animation.complete()
```

### cancel()
Cancels the animation, reverting it to the initial state.

```js
const animation = animate(element, { opacity: 0 })
animation.cancel()
```

### stop()
Stops the animation.

Any values being animated via the Web Animations API will be committed to the element via style.

Stopped animations cannot be restarted.

```js
const animation = animate(element, { opacity: 0 })
animation.stop()
```

# Motion Values

## motionValue
Motion Values track the state and velocity of animated values.

They are composable, signal-like values that are performant because Motion throttles rendering with its optimised frameloop.

Motion Values are usually created automatically by the animate function or motion components. They aren't something you generally have to think about.

But, for advanced use cases, it's possible to create them manually.

```js
const x = motionValue(0)

x.on("change", latest => console.log(latest))

animate(x, 100)
```

- By manually creating motion values you can:
- Set and get their state.
- Subscribe to changes via the on method.
- Automatically end existing animations when starting new animations.

```js
const color = motionValue("#f00")

animate(color, "#0f0")

animate(color, "#333") // Will automatically end the existing animation
```

### Usage
Motion Values can be created with the motionValue function. The string or number passed to motionValue will act as its initial state.

```js
import { motionValue } from "motion"

const x = motionValue(0)
```

Changes to a Motion Value can be subscribed to with the .on method.

```js
x.on("change", latest => console.log(latest))
```

#### Set value
Motion Values can be updated with the set method.

```js
x.set(100)
```

#### Get value and velocity
The latest value of a Motion Value can be read with .get():

```js
const latest = x.get() // 100
```

It's also possible to get the velocity of the value via .getVelocity():

```js
const velocity = x.getVelocity()
```

Velocity is available for any number-like value, for instance 100, or unit types like "50vh" etc.

Velocity is intelligently calculated by using the value rendered during the previous animation frame (rather than the last value passed via set).

#### Render
Motion values can be passed to effects like styleEffect, attrEffect or propEffect to render the latest values once per animation frame.

```js
const x = motionValue(0)
const opacity = motionValue(1)

styleEffect("li", { x, opacity })

x.set(100) // Will apply to all <li> elements on the next frame
animate(opacity, 0) // Will animate all <li> opacity
```


### API


#### get()
Returns the latest state of the Motion Value.

#### getVelocity()
Returns the latest velocity of the motion value. Returns 0 if the value is non-numerical.

#### set()
Sets the Motion Value to a new state.

```js
x.set("#f00")
```

#### jump()
Jumps the Motion Value to a new state in a way that breaks continuity from previous values:

- Resets velocity to 0.
- Ends active animations.

```js
animate(x, 100)

x.jump(10)
x.getVelocity() // 0
```


#### isAnimating()
Returns true if the value is currently animating.

#### stop()
Stop the active animation.

#### on()
Subscribe to Motion Value events. Available events are:

- change
- animationStart
- animationCancel
- animationComplete

```js
import { motionValue, frame } from "motion"

const color = motionValue("#fff")

color.on("change", latest => {
  frame.render(() => element.style.backgroundColor = latest)
})
```

It returns a function that, when called, will unsubscribe the listener.

```js
const unsubscribe = x.on("change", latest => console.log(latest))
```

#### destroy()
Destroy and clean up subscribers to this Motion Value.

## springValue
springValue creates a new motion value that reacts to changes with a physics-based spring animation.


springValue either accepts a number:

```js
const x = springValue(0)
const y = springValue("100%")

// These will go to their new target with a spring animation
x.set(100)
y.set("0%")

styleEffect("div", { x, y })
```


Or another motion value:

```js
const pointerX = motionValue(0)
const x = springValue(pointerX)

document.addEventListener("pointerMove", (e) => {
  // x will animate these changes with a spring animation
  pointerX.set(e.clientX)
})

styleEffect("div", { x })
```

### Usage
springValue accepts either a number value or a motion value.

#### Number
A number can be provided with or without a unit:

```js
import { springValue } from "motion"

const scaleX = springValue(0)
const rotate = springValue("1turn")
```

When we've provided a number, we can animate the returned motion value by calling its .set()

```js
scaleX.set(1)
rotate.set("2turn")
```

#### Motion value

Alternatively, we can attach a spring onto another motion value by passing it to springValue:

```js
const opacity = motionValue(1)
const x = mapValue(opacity, [0, 1], [0, 100])
const xWithSpring = springValue(x)
```

### Options
All of the normal Motion spring options are supported via a second argument.

springValue(0, { stiffness: 1000 })
Although duration and visualDuration are accepted, it's recommended to define springs using the physics-based options stiffness, damping and mass. This is because these options incorporate the velocity of the value for the smoothest and most reactive motion.