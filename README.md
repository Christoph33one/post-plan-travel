Post, Plan & travel

 Designed to help users plan trips abroad by providing them with a unique perspective on various destinations. By browsing through photos and travel plans from other travelers, users can gain insights into popular and off-the-beaten-path locations. For adventure enthusiasts, Post Plan & travel offers inspiration to explore and experience new activities like cycling, hiking, and more. With Post Plan & travel, planning a trip has never been easier or more exciting.

 "Capturing the World: Exploring New Places and Moments Through the Lens"

<li><a href="#project-goal">Project goal</a></li>
<li><a href="#user-audience">User audience</a></li>
<li><a href="#"></a></li>
<li><a href="#"></a></li>
<li><a href="#design">Design</a></li>
<li><a href="#wire-frames">Wire frames</a></li>
<li><a href="#bugs">Bugs</a></li>

     


# User audience
Post, Plan & Travel is designed to cater to people of all ages as it believes that everyone has the potential to explore and enjoy the world. For younger people, the website can be an excellent resource to plan their first solo trips or adventurous holidays with friends. Meanwhile, the website can also provide inspiration for those in their middle ages who want to take a break from their busy lives and explore new destinations.

The website's comprehensive travel guides and suggestions cater to all budgets, so whether you're a backpacker or a luxury traveller, you'll find something that suits your needs. In summary, Post, Plan & Travel's all-encompass


---

# Design

### Navigation 
To provide users with a seamless and modern browsing experience, I have incorporated a simple yet effective navigation menu at the top of the website, which is displayed consistently across all pages. This feature allows users to easily access essential pages such as the Home page, Locations page, Sign Up, Sign In, and Sign Out, without having to search for them.

Moreover, to enhance the user's sense of personalization, I have implemented a unique feature in the Navigation bar. When users are signed in, they can view their login name prominently displayed on the Navigation bar, providing a sense of ownership and recognition to the user. This small yet significant touch adds a personal touch and makes the user feel valued, thereby improving their overall browsing experience.
![](src/assets/wireframes/nav%20bar%20design.png)
![](src/assets/logo.png)


---
### Registration 
To fully utilize the features of this site, users are required to register. The Navbar provides easy access to the registration form, where users can create a username, set a password, and confirm it by re-entering it.

Please note that all registration fields must be filled out before the registration process can be completed. The registration form incorporates built-in error handling to ensure that users cannot register without providing all the required information.

---
# Wire frames

### Home page
![](src/assets/wireframes/HOME%20PAGE%20WIRE%20FRAME.png)

### Registration & Sign in
![](src/assets/wireframes/reg%20%3A%20sign%20in%20wire%20frames.png)


---
# Bugs
### Navbar
Drop down menu was not functioning after custom hook was added and imported. 

ERROR
In the NavBar component, when passing the expanded prop to the Navbar component, you are assigning the setExpanded function instead of the expanded state value. The correct code should be:

PASS ERROR
Passed expanded prop to the navabr component

---
---
---
---






############################################################################################################################################################################################
![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome,

This is the Code Institute student template for React apps on the Codeanywhere IDE. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Codeanywhere and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **19th April, 2023**

## Codeanywhere Reminders

In Codeanywhere you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to _Account Settings_ in the menu under your avatar.
2. Scroll down to the _API Key_ and click _Reveal_
3. Copy the key
4. In Codeanywhere, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

---










Happy coding!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the required npm packages.

### `npm start`

Runs the app in the development mode.\
Open port 3000 to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
