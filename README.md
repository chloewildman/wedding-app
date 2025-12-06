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

I used React on the Itinerary page in a similar way to what I did for the Module 5 homework. I actually started using React Routing in my final project before completing the Module 6 homework, so I suppose Module 6 was inspired through my final project rather than the other way around!

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
  - Each page has at least 5 HTML5 semantic elements of various types, such as header, main, footer, nav, sections, articles, in addition to semantic elements like headings, paragraphs, and links.

- CSS 3 + layout & design
  - Consistent theming and styling in color and font family.
  - Use of combinators
    - Descendant combinator (space) -> home.css, location.css, story.css, style.css
    - Adjacent sibling combinator (+) -> style.css
  - Use of pseudo-classes
    - :hover -> form.css, gallery.css, location.css, style.css
    - :nth-child(n) -> story.css
    - :checked -> style.css
    - :visited -> home.css, story.css
  - Use of pseudo-elements
    - ::before -> itinerary.css, story.css, style.css
    - ::after -> itinerary.css, location.css
  - Use of media queries (see <b>How My Project Exceeds Minimum Requirements</b>)
  - Each page uses at least either flexbox or grid, if not both (see <b>How My Project Exceeds Minimum Requirements</b>)

- JavaScript
  - Itinerary -> JavaScript and JSX are used in the ItineraryContainer.jsx file. I used async await and fetch to pull the itinerary events from the schedule.json file, pass them as props to Itinerary(), which separates the events into day 1 and day 2 (by the day property in the data) and calls on ItineraryList() to render the event contents. Itinerary List() takes the events for each day and maps them into a rendered list (using list rendering from Module 5) by calling on ItineraryEvent(). Finally, ItineraryEvent() is given each event and takes its time and activity properties and renders the list element HTML. JSX is also in the Itinerary.jsx file, but only to render the rest of the page contents.

  - Gallery -> JavaScript and JSX are used in the Gallery.jsx file, and JavaScript is also used in the populateGallery.js file. First, all relevant elements from the DOM are taken in. I used async await and fetch to pull the images data from the imgs.json file, which are then assigned a random number, sorted by that random number (so that the order of the images in the gallery appears random), and then calls on the function from populateGallery.js to populate the image, sets the index data property, and appends the image as an item in the imgContainer element. The function from populateGallery.js is populateImage(), which creates an image element, assigns the src, title, alt text, ID, year, description, adds the class "galleryImages", and returns the element. Then, I pull all galleryImages and add the event listener so that openLightbox() is called and the index is set when the element is clicked. The openLightbox() function removes the default hidden property from the lightbox and updates the content with updateLightboxContent(). updateLighboxContent() responds when called to set the lightbox src and alt properties, and sets the caption for the image by pulling the year and description for the image. Event listeners are added to the close, previous, and next buttons. Selecting the previous or next button decrements/increments the index and displays the image content at that index using showImage(). The modulo function protects this from going past the last index, and will loop it back to 0. The showImage() function locates the image at the appropriate index, and as long as the image isn't null or undefined, updateLightboxContent() is called. When the close button is selected, closeLightbox() adds the hidden property back to the lightbox.

  - RSVP -> JavaScript and JSX are used in the Rsvp.jsx file. The purpose of the JavaScript code is to complete client-side form validation. At the start of this code, elements and form values are taken in, any errors messages are reset, and regex validation is set. Then, all relevant fields are run through the validateEntry() check, where the error message is generated when the value doesn't match the pattern or value expected. If all entries are valid, the form is hidden, and a success message is displayed. Then, JSX displays the form contents, and I used React's conditional rendering to only present the allergyExpField when the allergies field is "1, Yes"
    - Regex: My email validation checks for 1 character, @, 1 character, a period (.), followed by at least 2 characters, and first name/last name must be at least two characters. 

  - Location -> JavaScript and JSX are used in the Location.jsx file. I used JavaScript to call on getLocalData from locationScript (see <b>TypeScript</b>) and to request geolocation data using the Geolocation API when the "Check distance from venue" button is clicked (getLocRequest). The JSX is used to render the rest of the page.

- TypeScript
  - During Module 4, I found that I was most interested in using TypeScript for API calls, so it felt most appropriate to implement it on the Location page. I tried to use TS for my React portion, but ran into conflicts which were too time consuming to continue trying to resolve.
  - locationScript.ts
    - After getLocRequest() has been attempted in Location.jsx, it passes off the response to the TypeScript file, which contains successCallback() and errorCallback(). If they deny it or another error occurs, errorCallback() is called, which takes a parameter of type GeolocationPositionError, which is a predefined interface in the Geolocation API, and returns text to the user on the DOM to describe the error. If the user has permitted the app to use their location, then successCallback() can be called with a parameter of GelocationPosition, which is a predefined interface in the Geolocation API. This function creates a Google Maps link using the user's location coordinates and the venue coordinates, which is added to the onclick listener on the googleRef button which is produced after the user's coordinates are received. Additionally, it calls on getDistanceData(), which is a function that takes typed parameters (latitude and longitude of both locations), and calls on fetchDistanceData(). fetchDistanceData() takes in typed parameters and returns a DistanceData type (which is an interface defined in the script), and tries the API call to get the distance data. In the else condition, a safe fallback of an empty array is provided to avoid undefined. getDistanceData() takes that data, and if it 

- React
  - The minimum requirement is at least one React component. My header, footer, wedding countdown, pop-up, and the rendering of the itinerary data are all individual React components. Main content is swapped on each page through React Router.

- Website usability
  - All links are functional, page relationships are clear, form allows submission or writes clear errors to the DOM, speeds are normal
  - I used the WAVE browser extension to make sure there were not accessibility errors on each page
  - After implementing React for all pages, I noticed that the scroll position does not reset when routed to another "page", so I search online to make that experience more user-friendly.

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
