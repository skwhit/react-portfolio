import eCommerce from "../assets/e-commerce-application.PNG";
import reactMedia from "../assets/react-media-app.PNG";
import travelDestinations from "../assets/travel-destinations-generator.PNG";
import messagingApp from "../assets/messaging-app-landing.PNG";
import currencyConverter from "../assets/react-currency-converter.PNG";
import technicalDoc from "../assets/technical-documentation-page.PNG";

export const projectData = [
  {
    title: "E Commerce Application",
    description: [
      "Online store application created with React.",
      "Uses an API for it's core functionality.",
      "Fetches data from the API using a get request.",
      "Application stores product data and displays on the page for user using the JavaScript map method.",
      "User can filter data by category so the application only displays specific products.",
      "Detail page included for each item where user can see specific information about the item and add it to the cart.",
      "Cart items are stored in the application context where they can be retrieved, updated, and deleted anywhere in the application.",
      "Saved cart items are then available to be purchased in the application checkout page.",
    ],
    link: "https://spencerwhitlow.com/e-commerce-application/",
    image: eCommerce,
    github: "https://github.com/skwhit/e-commerce-application",
    id: 0,
  },
  {
    title: "React Media Application",
    description: [
      "React application that utilizes an omdb API.",
      "User can filter by title and type.",
      "Details for movie or other media item then displayed at the click of a button.",
    ],
    link: "https://spencerwhitlow.com/react-omdb-api/",
    image: reactMedia,
    github: "https://github.com/skwhit/react-omdb-api",
    id: 1,
  },
  {
    title: "Travel Destinations",
    description: [
      "Javascript focused web application that will generate a random travel destination.",
      "Links to flight and hotel booking included for each corresponding destination.",
    ],
    link: "https://spencerwhitlow.com/Travel_Destinations_Generator/",
    image: travelDestinations,
    github: "https://github.com/skwhit/Travel_Destinations_Generator",
    id: 2,
  },
  {
    title: "Messaging Application",
    description: [
      "React Native application that uses an API for its core functionality.",
      "Communicates with the API for user authentication and retrieving and sending messages.",
    ],
    link: "https://spencerwhitlow.com/e-commerce-application/",
    image: messagingApp,
    github: "https://github.com/skwhit/messaging-app",
    id: 3,
  },
  {
    title: "React Currency Converter",
    description: [
      "React application that allows users to perform a quick currency conversion.",
      "The app performs an API request that give the user the latest data.",
    ],
    link: "https://spencerwhitlow.com/React_Currency_Converter/",
    image: currencyConverter,
    github: "https://github.com/skwhit/React_Currency_Converter",
    id: 4,
  },
  {
    title: "Technical Documentation",
    description: [
      "CSS documentation page where users can come to understand some of the CSS fundamentals.",
      "Navigation is organized by CSS topics.",
    ],
    link: "https://spencerwhitlow.co/Technical_Documentation_Page/",
    image: technicalDoc,
    github: "https://github.com/skwhit/Technical_Documentation_Page",
    id: 5,
  },
];
