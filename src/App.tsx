import React from 'react';
import './App.css'

import { Deck, Markdown, Slide } from "spectacle"

import createTheme from "spectacle/lib/themes/default"

import Google from './google.png'
import html1 from "./html1.png"
import html2 from "./html2.png"
import bay from "./bay.png"

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
# Web Dev Overview
---
At a high level, Web Dev breaks down into two categories, **Front-End** and **Back-End** web development. This talk, as you may have inferred from the name is about the **Front-End**. If you want to learn more about the **Back-End**, come to ***Back-End Web Dev*** tomorrow.
`
    },
    {
        text: `
# What is the "Front-End"?
---
The **Front-End** of websites is what you see in your browser when you visit a website. Created with the markup language **HTML**.
![Google Homepage](${Google})
`
    },
    {
        text: `
# What is HTML?
---

1. **HTML** stands for "HyperText Markup Language"

2. A series of tags, opening (ex. \`<html>\`) and matching closing (ex. \`</html>\`) tags make up an HTML element

3. **HTML** provides the structure of websites, the skeleton

~~~html
<html>
    <head>
        <title>Neat</title>
    <head/>
    <body>
        <div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </div>
    </body>
</html>
~~~
`
    },
    {
        text: `
# Looks like?
---

1. [HTML Basics](https://www.w3schools.com/html/html_basic.asp)

~~~html
<html>
    <head>
        <title>Neat</title>
    <head/>
    <body>
        <div>
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
        </div>
    </body>
</html>
~~~

![html1](${html1})
`
    },
    {
        text: `
# Styling the HTML
---

~~~html
<html>
    <body style="background-color: #004165">
        <div style="background-color: grey; margin: 1%; overflow: auto">
            <div style="background-color: white; margin: 1%; overflow: auto">
                1
            </div>
            <div style="background-color: white; margin: 1%; overflow: auto">
                2
            </div>
            <div style="background-color: white; margin: 1%; overflow: auto">
                3
            </div>
        </div>
    </body>
</html>
~~~

![html2](${html2})
`
    },
    {
        text: `
# Styling the HTML
---

1. [CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)

~~~html
<html>
    <head>
        <style>
            body {
                background-color: #004165;
            }
            div#main {
                background-color: grey;
                margin: 1%;
                overflow: auto;
            }
            div.numbers {
                background-color: white;
                margin: 1%;
                overflow: auto;
            }
        </style>
    </head>
    <body>
        <div id="main">
            <div class="numbers"> 1 </div>
            <div class="numbers"> 2 </div>
            <div class="numbers"> 3 </div>
        </div>
    </body>
</html>
~~~
`
    },
    {
        text: `
# Adding HTML Programmatically
---

1. [Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

~~~html
<html>
    <body style="background-color: #004165">
        <div id="main" style="background-color: grey; margin: 1%; overflow: auto"></div>
        <script>
            var mainDiv = document.getElementById("main");

            for (var i = 1; i <= 3; i++) {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";
            }
        </script>
    </body>
</html>
~~~

![html2](${html2})
`
    },
    {
        text: `
# Handling Element Click Events
---

~~~html
<html>
    <body style="background-color: #004165">
        <div id="main" style="background-color: grey; margin: 1%; overflow: auto"></div>
        <script>
            var mainDiv = document.getElementById("main");

            var i = 1

            for (i = 1; i <= 3; i++) {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";
            }

            mainDiv.addEventListener("click", function() {
                mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";

                i++
            })
        </script>
    </body>
</html>
~~~
`
    }, {
        text: `
# Handling Global Click Events
---

~~~html
<html>
<body style="background-color: #004165">
    <div id="main" style="background-color: grey; margin: 1%; overflow: auto"></div>
    <script>
        var mainDiv = document.getElementById("main");

        var i = 1

        for (i = 1; i <= 3; i++) {
            mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";
        }

        document.addEventListener("click", function() {
            mainDiv.innerHTML += '<div  style="background-color: white; margin: 1%; overflow: auto" >' + i + "</div>";

            i++
        })
    </script>
</body>
</html>
~~~
`
    }, {
        text: `
# Get it to the Internet

---

1. [Host with Amazon Web Services](https://medium.com/@kyle.galbraith/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38)
`
    }, {
        text: `
# Cool, What Next?

---

1. Creat your own website!

2. Learn about the **Back-End** of websites

![bay](${bay})
`
    }, {
        text: `
# What would you like to see? Questions?

---
`
    }
]

const App: React.FC = () => {
    return (
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
