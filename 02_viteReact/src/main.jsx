import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return <h1>Hello World!</h1>
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: '_blank'
//   },

// children: "Click Me"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>
    Click Me!
  </a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click Me Again',
)

createRoot(document.getElementById('root')).render(
  <App />
)


