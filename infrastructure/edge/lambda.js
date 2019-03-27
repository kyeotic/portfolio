'use strict'

const targetHosts = ['kye.dev', 'tim.kye.dev']
const redirectTo = 'https://kye.dev'

exports.handler = (event, context, callback) => {
  console.log('received event', JSON.stringify(event, null, 2))
  const request = event.Records[0].cf.request
  const headers = request.headers

  callback(null, withRedirect(request))
}

function shouldRedirect(request) {
  if (
    !request.headers ||
    !request.headers.host ||
    !Array.isArray(request.headers.host)
  ) {
    return false
  }
  return request.headers.host.some(h => !targetHosts.includes(h.value))
}

function withRedirect(request) {
  if (!shouldRedirect(request)) return request
  let target =
    'https://kye.dev' +
    (request.uri || '/') +
    (request.querystring ? '?' + request.querystring : '')
  console.log('redirecting', target)
  return {
    status: '301',
    statusDescription: 'Moved Permanently',
    headers: {
      location: [
        {
          key: 'Location',
          value: target
        }
      ]
    }
  }
}
