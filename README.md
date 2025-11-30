# Chloe Wildman's Final Project - Chloe and Michael's Wedding Site

To meet the assignment requirements, I built a wedding web application.

## Inspiration/Acknowledgements/Previous Experience

### Module 1 Assignment & Feedback

The RSVP page took inspiration and base code from my Module 1 assignment, which was improved by implementing feedback received from that assignment. The fields were modified to suit an RSVP form, and I combined it with React to hide the descriptive allergies field when a user says "yes" to having allergies. I had originally gone with a JS solution suggested earlier in the semester, but this seems cleaner!

### Module 2 Assignment

The async API call structure is used in the Location, Gallery, and Itinerary pages. The Gallery page most closely resembles my Module 2 assignment.

### Module 3

### Module 4

### Module 5 & 6

### WAD100 Course

The use of reset.css and some CSS was inspired by the WAD100 course. Here are the key items I used as inspiration:
- The use of reset.css (not really able to make this one unique!)

### Online resources
https://www.w3schools.com/howto/howto_js_topnav.asp
https://stackoverflow.com/questions/11787665/making-sure-at-least-one-checkbox-is-checked
https://giscience.github.io/openrouteservice/api-reference/endpoints/matrix/
https://openrouteservice.org/dev/#/api-docs/v2/matrix/{profile}/post
https://www.bing.com/videos/riverview/relatedvideo?q=how+to+make+a+timeline+on+a+website&mid=0F83AC76DEA17225DF270F83AC76DEA17225DF27&FORM=VIRE -> wow this method did not work for me and I spent a few hours trying to understand why, but it also just felt clunky and a bit hyper-specific (lots of hard coding pixels). Working on my own grid solution.
https://www.w3schools.com/howto/howto_js_lightbox.asp
https://dev.to/jinn_khan/react-17-vs-react-18-root-render-changes-4e11
https://www.freecodecamp.org/news/build-a-countdown-timer-with-react-step-by-step/
https://www.w3schools.com/howto/howto_js_countdown.asp
https://www.youtube.com/watch?v=i8fAO_zyFAM&t=881s - build a popup component in react JS

I tried very hard to use TS for my React portion, but ran into conflicts which were too time consuming to continue trying to resolve

After first using Vite, and only having the one HTML document, I realized the styling was conflicting since it was global in the HTML doc and went back though my modularized css to make everything unique, then realized it was better practice to import the css into the components.

## How My Project Meets Minimum Requirements


### Validity
- Valid: 
    - https://validator.w3.org/
    - http://jigsaw.w3.org/css-validator/ 


## How My Project Exceeds Minimum Requirements
- Flexbox
- Grid
- React	
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
    - OpenRoute
    - Geoapify Places API
