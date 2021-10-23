# Software Intern Hiring Assignment
This a React app assignment for UrbanMatrix software intern hiring. This assignment is to evaluate skills that include:
1. Proficiency in `React` and `JavaScript`/`TypeScript`.
2. Understanding of state management.
3. Code quality.
4. Readability.
5. Documentation (if required).

## Objective
To create a single page application using React and Next.js, where users can add markers to their favorite places on a map.

## Required Features
1. Add Marker: The users must be able to add marker their favorite places on a map by clicking on the map. 
2. View All Markers: All the marked places should be visible on the map as markers and also on a list seperately.
3. Delete Marker: The users should be easily delete the markers from the list.

## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). We have already provided the starter code for you inorder to save your time. You can refer the links below for documnetation. 

First clone the repository
```bash git clone https://github.com/urbanmatrix/frontend-react-assignment.git```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Guide
This starter code has two components, a Map component and a List component. Both of these components are available in the `components` directory, you would have to edit them accordingly.
1. `MapComponent`: This component is responsible for rendering the map. This component has to show the map and markers by the users.
2. `ListComponent`: This component has to show list of bookmared places by the user. And it has to be able to add and delete the marked places.
Additonally when the user clicks on the place it has to show the details of the place and zoom to the corresponding marker on the MapComponent.

Even though the starter code has TypeScript, you are not required to write code in TypeScript.

## Help

1. To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
2. TypeScript resources:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) - learn basics of TypeScript for beginners.
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/) - cheatsheets for experienced React developers getting started with TypeScript.
3. `react-map-gl`: This is the libary we use at UrbanMatrix for map related purpose. You are free to use this library to display markers on the map. Do give the documentation a read [here](https://visgl.github.io/react-map-gl/docs).

## Bonus Points
We will also be awarding bonus points based on your:
1. Git commit style
2. UX design

## Advice
The assignments above are meant to test your ability to write code in a modular and reusable way while creating abstractions at the right level. The main goal is for your app to work well. But, as a front-end developer, you are also expected to build UIs that look good, too. You are free to take advantage of component libraries like [MaterialUI](https://mui.com/getting-started/usage/) or [ChakraUI](https://chakra-ui.com/).  But if you believe that there is a good reason to deviate, don't hesitate to do so. Just be prepared to explain why your solution is better.

Once you are done completing the assignment please email `ajaykarthik@urbanmatrix.co.in` with the link to your github repository (Please make sure it's set public so that we can go through your code). Please feel free to contact us for additional info.
