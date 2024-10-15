# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Design Preview](#design-preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Design Preview

![](design/desktop-design-home-light.jpg)
![](design/desktop-design-detail-dark.jpg)

### Links

- Live Site URL: [https://on-the-earth.netlify.app](https://on-the-earth.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- javaScript

### What I learned

One of the pivotal skills I acquired was the ability to fetch data from an external API and then process and utilize it within the web application. This involved understanding asynchronous JavaScript and employing methods like fetch to retrieve and handle the data.

Example,

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process and use the received data
  })
  .catch(error => {
    // Handle any errors
  });
```

A significant achievement was the implementation of a search feature that enabled users to conveniently look for specific information within the displayed dataset. This involved creating an input field and then applying search logic to filter and display the relevant results based on user input.

## Author

- Frontend Mentor - [@ab00s1](https://www.frontendmentor.io/profile/ab00s1)
- Twitter - [@Abhinav_0i](https://www.twitter.com/Abhinav_0i)
- Instagram - [@_myself_abhinav](https://www.instagram.com/_myself_abhinav)

## Acknowledgments

- Guidance - [@procodrr](https://www.youtube.com/@procodrr)
