# persistent-monitoring-demo

Helping geospatial analysts search for hard-to-find objects in satellite imagery.

# To set up your local environment, run these commands.

npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 npm install react-chartjs-2 chart.js 

npm install --save font-awesome 

npm install react-table npm i @chakra-ui/react @chakra-ui/icons @mui/icons-material

npm install react-scripts

npm install react-router-dom --save

# Quick start

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Overview
![Argus as of 1/14/2024](https://github.com/lisayan/argus-systems/blob/main/persistent-monitoring-demo/readme_updates/home_1_14_25.png)

![Argus as of 1/14/2024](https://github.com/lisayan/argus-systems/blob/main/persistent-monitoring-demo/readme_updates/indicators_1_14_25.png)

![Argus as of 1/14/2024](https://github.com/lisayan/argus-systems/blob/main/persistent-monitoring-demo/readme_updates/chat_1_14_25.png)

This is what Argus' home page looks like.

### How it works

App.js is where the web app is deployed. When we add multiple pages, those are called `Routes` and we define a new path for each of them (Home is the default so the path is just `\`).

The `pages` folder defines the 3 pages we're building this summer. You'll mainly be working on `Home.js` and `ExistingDataset.js`.

The `components` folder defines Javascript elements that you want to use in these pages. As an example, `HomeNavigationBar` is one feature that is on the `Home` page. If you expand the `HomeNavigationBar` folder, you can see that it is also made up of smaller Javascript components. You can add as many components as you want (I even encourage it), just make sure your `index.js` file exports the main file that you want to display as the component.

To get you started, I've commented `// Fill in code here.` in a couple of places where you can begin.

### Tools

We are using [Chakra UI](https://v2.chakra-ui.com/docs/components) which provides prebuilt components to build cleaner and faster. If possible, try to build components as a combination of Chakra UI elements. ChatGPT also knows Chakra UI if you specifically ask for it.

[ChatGPT](https://chatgpt.com) will be your best friend this summer and I almost always have it open to copy code snippets rather than writing from scratch.

Here are some examples of prompts I used to write the navigation bar:
- This is my Home.js code. *pastes code file here*. Write NavigationBar.js that is a header bar that has 3 elements: the logo, "My datasets", "dataset".
- How do I insert the Google Material left pointing arrow into NavigationBar.js

### Debugging

After running `npm start`, if your code doesn't build correctly you'll see the error output in your terminal. If it's running but the web app window isn't showing what you expect, try `Inspect Element` in your browser window. I'd also paste your code to ChatGPT to provide context and ask for possible fixes. If all else fails, go bother Lisa! Don't spend more than 1hr stuck on something without talking to a human :)