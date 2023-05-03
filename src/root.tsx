import useAsset from 'ultra/hooks/use-asset.js'
// Twind
import App from './app/App.tsx'

export default function Root() {
  console.log('Hello world!')
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tim Kye - Portfolio" />
        <link rel="manifest" href={useAsset('/manifest.json')} />
        <link rel="manifest" href={useAsset('/manifest.json')} />
        <link rel="shortcut icon" href={useAsset('/favicon.ico')} />
        <link rel="stylesheet" href={useAsset('/css/reset.css')} />
        <link rel="stylesheet" href={useAsset('/css/app.css')} />
        <link rel="stylesheet" href={useAsset('/css/projects.css')} />
      </head>
      <body>
        <App />
      </body>
    </html>
  )
}
