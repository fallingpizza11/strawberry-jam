
// this is cool, but not for this project :(

declare module 'https://*'

declare module 'https://cdn.skypack.dev/react' {
  import react = require('react')
  export {react}
}
declare module 'https://cdn.skypack.dev/react-dom' {
  export * from 'react-dom'
}