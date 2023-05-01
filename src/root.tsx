import useAsset from 'ultra/hooks/use-asset.js'
// Twind
import { tw } from './twind/twind.ts'
import App from './App.tsx'

export default function Root(): JSX.Element {
  console.log('Hello world!')
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href={useAsset('/manifest.json')} />
        <link rel="shortcut icon" href={useAsset('/favicon.ico')} />
        <link rel="stylesheet" href={useAsset('/css/reset.css')} />
        <link rel="stylesheet" href={useAsset('/css/app.css')} />
        <link rel="stylesheet" href={useAsset('/css/vestigial.css')} />
        <title>Tim Kye</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  )
}
