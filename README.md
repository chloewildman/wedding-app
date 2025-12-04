# Chloe Wildman's Final Project - Chloe and Michael's Wedding Site

To meet the assignment requirements, I built a wedding web application.

## Inspiration/Acknowledgements/Previous Experience

### Module 1

The RSVP page took inspiration and base code from my Module 1 assignment, which was improved by implementing feedback received from that assignment. The fields were modified to suit an RSVP form, and I combined it with React to hide the descriptive allergies field when a user says "yes" to having allergies. I had originally gone with a JS solution suggested earlier in the semester, but this seems cleaner!

### Module 2

The async API call structure is used in the Location, Gallery, and Itinerary pages. The Gallery page most closely resembles my Module 2 assignment.

### Module 3

The styling of my header and footer are very similar to my Module 3 assignment. The use of flex and grid in this module also inspired its use throughout this final project.

### Module 4

### Module 5 & 6

### WAD100 Course

The use of reset.css and some CSS was inspired by the WAD100 course. Here are the key items I used as inspiration:
- The use of reset.css (not really able to make this one unique!)

### Online resources
- Thread which informed client side validation on RSVP of the checkbox item (at least one is selected): 
https://stackoverflow.com/questions/11787665/making-sure-at-least-one-checkbox-is-checked

- Links informing the Open Route API code:
https://openrouteservice.org/dev/#/api-docs/v2/directions/

- Links informing the Geoapify Places API code:
https://apidocs.geoapify.com/playground/places/
https://apidocs.geoapify.com/docs/places/

- Video inspiring the Our Story animated timeline:
https://www.bing.com/videos/riverview/relatedvideo?q=how+to+make+a+timeline+on+a+website&mid=0F83AC76DEA17225DF270F83AC76DEA17225DF27&FORM=VIRE 
This method did not work for me and I spent a few hours trying to understand why, but it also just felt clunky and a bit hyper-specific (lots of hard coding pixels). I ended up working on my own grid solution where the timeline existed on one side with year categories.

- Creating a lightbox in Gallery
https://www.w3schools.com/howto/howto_js_lightbox.asp

- Making a countdown timer in React
https://www.freecodecamp.org/news/build-a-countdown-timer-with-react-step-by-step/
https://www.w3schools.com/howto/howto_js_countdown.asp

- Building a popup in React
https://www.youtube.com/watch?v=i8fAO_zyFAM&t=881s

- Make the scroll position return to top when the route changes in React
https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn
This wasn't significantly modified as it seems to be a standard strategy with little room for individuality.

- Conditionally render form fields with React
https://react.dev/learn/conditional-rendering

## How My Project Meets Minimum Requirements
On Nov 1st, I requested that my final project topic could be a wedding website with a fake date and location which was approved by Josh Hanson. This is a Single Page Application but contains 6 content "pages". This meets the requirement of 5-10 pages. In this application, I showcase the skills I learned in this course, including HTML5, CSS 3, JavaScript, TypeScript, React, and layout and design (such as flex and grid). The application demonstrates client side validation of a web form and manages updates to the DOM.

- HTML5
- CSS 3 + layout & design
- JavaScript
- TypeScript
  - TypeScript is used on the Location page (locationScript.ts)
  - During Module 4, I found that I was most interested in using TypeScript for API calls, so it felt most appropriate to implement it for this page. I tried very hard to use TS for my React portion, but ran into conflicts which were too time consuming to continue trying to resolve.
- React
  - The minimum requirement is at least one React component. My header, footer, wedding countdown, pop-up, and the rendering of the itinerary data are all individual React components. Main content is swapped on each page through React Router.
- Website usability

### Validity
- Valid: 
    - https://validator.w3.org/
    - http://jigsaw.w3.org/css-validator/ 


## How My Project Exceeds Minimum Requirements
- Flexbox
  - Home
  - Header, Nav, Footer
  - Itinerary
  - Location
- Grid
  - Our Story
  - RSVP
  - Gallery
  - Itinerary
- React	
  - Each page is a React component that is swapped out in main
  - Individual components:
    - Header, Footer, Countdown, Popup, ToTop, ItineraryContainer
- CSS Media Queries
  - Every page contains media queries to make the page responsive on mobile
    - Home
    - Our Story
    - Location
    - Itinerary
    - Gallery
    - RSVP
- External API calls
  - Location page
    - Geolocation
    - OpenRoute
    - Geoapify Places API
