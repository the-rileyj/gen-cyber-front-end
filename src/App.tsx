import React from 'react';
import './App.css'

import { Deck, Markdown, Slide } from "spectacle"

import MarkdownSlides from "spectacle/lib/utils/preloader"

import createTheme from "spectacle/lib/themes/default"
import Google from './google.png';

require('prismjs/components/prism-python')

const publicURL = window.location.hostname

const slidesTheme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
)

const markdownSlides = [
    {
        text: `
# Front-End Web Development
---
### with Riley
`
    },
    {
        text: `
# What is the "Front-End"?
---
The front end of websites is what you see in your browser when you visit a website
![Google Homepage](${Google})
`
    },
    {
        text: `
# What is HTML?
---

1. HTML stands for "HyperText Markup Language"

2. A series of tags (the things that look like \`<{text}>\`), opening (ex. \`<html>\`) and matching closing (ex. \`</html>\`) tags make up an HTML element

~~~html
<html>
    <head>
        <title>Neat</title>
    <head/>
    <body>
        <ol>
            <li>
                1
            </li>
            <li>
                2
            </li>
            <li>
                3
            </li>
        </ol>
    </body>
</html>
~~~
`
    }
]

const App: React.FC = () => {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <Deck theme={slidesTheme}>
            {
                markdownSlides.map((markdownSlide, index) => (
                    <Slide>
                        <Markdown key={index} source={markdownSlide.text} />
                    </Slide>
                ))
            }
        </Deck>
    );
}

export default App;
