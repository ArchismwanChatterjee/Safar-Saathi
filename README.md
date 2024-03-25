![logo](https://i.imgur.com/XP34GTX.png)
# Safar Saathi
## Your personal AI-tour planner to make travel planning simple.


Safar Saathi is all you need if you plan to travel in India,
- Enter the location you have in mind.
- Choose the places you wish to visit in that place.
- See the ✨Magic ✨ Happen.
- Other exciting features are virtual tour experience, blogs.

Check it out here: [safar_saathi](https://safar-saathi1.web.app/)

## Techstack used:

- Design using Figma, Adobe Photosop.
- Front-end using React js with Vite & Tailwind CSS.
- Python script to generate your itinerary.
- Serverless Backend for storing data/ Creating users etc using AWS DynamoDB and Lambda
- Node.js as package manager & runtime environment.
- Dataset: we are currently using an [opensource dataset](https://www.kaggle.com/datasets/naqibahmedkadri/famous-indian-tourist-places?select=Places.csv)

## Installation:

- fork and clone this repository

- Safar Saathi requires [Node.js](https://nodejs.org/) v21+ to run.

- Install the dependencies and devDependencies:

```sh
npm i
```
- Remember to use your own firebase_credentials here, otherwise you will face some errors:
```jsx
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_AUTH_DOMAIN,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGE_ID,
  appId: process.env.VITE_AP_ID,
  measurementId: process.env.VITE_MEASUREMENT_ID,
};
```
- If you want to customise Virtual Tour remember to use your own google_maps api:
```html
    <script
      defer
      src="https://maps.googleapis.com/maps/api/js?key=<YourAPI_KEY>&amp;callback=initMap&libraries=places"
    ></script>
```
- Start the development server:
```bash
npm run dev
```

## Development:

Want to contribute? Great!

Safar Saathi uses React + Vite for faster developing experience.It uses npm for managing dependencies and scripts.
Buid once, make a change in your file and instantaneously see your updates!

checkout *Installation* above to set it up locally.

make sure all changes you make are in the testing branch

## Deployment:

Our website is deployed using both firebase hosting and netlify the links are available ⬇️

[Link1](https://safar-saathi1.web.app/)  and  [Link2](http://safarsaathi.netlify.app/)


# License

MIT

**Free Software, Hell Yeah!**
