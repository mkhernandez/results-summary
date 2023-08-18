# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
The goal is to create a result-summary component similar to the design provided. There should be hover affects for the button and for each skill. As a bonus, use the json file to fill the fields of each skill.

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](<Frontend Mentor Results summary component Desktop.png>)
![](<Frontend Mentor Results summary component mobile.png>)

### Links

- Solution URL: [Add solution URL here](https://mkhernandez.github.io/results-summary/)
- Live Site URL: [Add live site URL here](https://mkhernandez.github.io)

## My process
- I used a desktop first approach as this is what I am most comfortable with then continued
- with mobile approach. I wrote out a plan following the challenge. I stated a goal, 
- scope, and the approach I used. I wrote out a design for the component as well including
- layout and styles. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I should try a mobile first approach and see if that works any better. I learned that there
are many ways to implement everything. I feel better writing out a plan and design before starting any code. This actually helps visualize the project and processes needed to complete the task. 

To see how you can add code snippets, see below:

```html
Not a lot here. Pretty standard stuff
```
```css
/* So far not using much that I haven't learned.  */
.proud-of-this-css {
  box-shadow: 1px 1px 5px hsla(241, 100%, 82%, 0.20),
                8px 8px 10px hsla(125, 100%, 89%, 0.15),
                15px 15px 15px hsla(0, 100%, 100%, 0.05),
                25px 25px 25px hsla(241, 100%, 89%, 0.2);
}
```
```js
const proudOfThisFunc = () => {
  try {
        const data = await getData();
        data.forEach(element => {
            const result = element.category;
            const text = result.toLowerCase();
            const skills = document.getElementById('skills');
            const div = document.createElement('div');
            div.classList.add('skill-item', `${text}`);
            skills.appendChild(div);
            div.innerHTML = `<img src=${element.icon} class="icon"></img><span>${element.category}</span><span class="rating"><strong>${element.score}</strong>  / 100</span>`;
            console.log(div);
        });
    } catch (e) {
        console.log('ERROR: ', e);
    }
}
```

### Continued development

I will continue writine out a plan and design for future projects. The most frustrating part about the process was the bonus section. I had several ideas about doing it, but ultimately settled on one that was not at the top of my list and that was to create a new div and fill that div with innerHTML for each skill. I believe there is still another way to implement it than the one I settled on. I believe this is not the optimal way of doing this since I can visualize other approaches that would be better. I tried for hours and found for some reason my content was not filling the way it should. At times I had only one dive filled and other times 75% of the all divs filled so I know there are other ways.  

### Useful resources

- [ resource ](https://developer.mozilla.org/) - This helped me for understanding how to manipulate html elements better. I will continue using these docs.

## Author

- Website - [ Mark Hernandez ](https://mkhernandez.github.io)
- Frontend Mentor - [ @mkhernandez ](https://www.frontendmentor.io/profile/mkhernandez)

