
![](src/assets/readme-images/I%20am%20responsive%20image.png)

 ADD DEPLOYED FRONT-END ISTE
 ADD DEPLOYED API 
 ADD API REPO
 ADD FRONT-END REPO

 "Capturing the World: Exploring New Places and Moments Through the Lens"
<ul>Structure
<li><a href="#project-purpose">Project purpose</a></li>
<li><a href="#user-audience">User audience</a></li>
<li><a href="#structure">Structure</a></li>
<li><a href="#project-planning">Project planning</a></li>
<li><a href="#data-structure">Data structure</a></li>
</ul>

<ul>User experience (ux)
<li><a href="#design">Design</a></li>
<li><a href="#authentication">Authentication</a></li>
<li><a href="#profile-page">Profile page</a></li>
<li><a href="#landing-page">Landing page</a></li>
<li><a href="#create-post">Create a post</a></li>
<li><a href="#travel-posts">Travel post</a></li>
<li><a href="#popular-profiles">Popular profiles</a></li>
<li><a href="#search-bar">Search bar</a></li>
<li><a href="#following">Follow / unfollow</a></li>
<li><a href="#comments">Comments</a></li>
</ul>

<li><a href="#wire-frames">Wire frames</a></li>
<li><a href="#colours">Colour</a></li>
<li><a href="#colour-scheme">Colour scheme</a></li>
</ul>

<ul>Testing
<li><a href="#bugs">Bugs</a></li>
<li><a href="#manual-testing">Manual tests</a></li>
<li><a href="#frontend-testing">Front-end testing</a></li>
</ul>

Deplyment
<li><a href="#deployment">Deplyment</a></li>

Credits
<li><a href="#credits">Credits</a></li>

---
# Project purpose

### Post, Plan & travel

Designed to help users plan trips abroad by providing them with a unique perspective on various destinations. By browsing through photos and travel experiences from other travelers, users can gain insights into popular and off-the-beaten-path locations. For adventure enthusiasts, Post Plan & travel offers inspiration to explore and experience new activities. With Post Plan & travel, planning a trip has never been easier or more exciting.

To fully immerse yourself in the website's offerings and access its complete range of features, signing up for a free account is required. Once registered, a world of possibilities opens up before you. You can delve into a wealth of captivating posts created by fellow users, engage in meaningful discussions by adding your own comments, and even showcase your personal travel experiences.

This platform is a haven for those with a keen eye for photography. It provides an ideal space to upload your mesmerizing images and narrate the stories behind them. By sharing your photos, you can capture the essence of your travel adventures and captivate the community with your visual storytelling.

Don't miss out on the chance to join this vibrant community of explorers, storytellers, and photography enthusiasts. Sign up today and unlock a world of travel inspiration, connection, and creativity.

---

# User audience
Post, Plan & Travel is designed to cater to people of all ages, genders, and backgrounds, embracing diversity and inclusivity. We firmly believe that everyone, regardless of their gender, should have equal opportunities to explore and enjoy the world. Whether you identify as male, female, non-binary, or any other gender, our platform welcomes and supports you in your travel endeavors.
For younger individuals, Post, Plan & Travel serves as an invaluable resource to plan their first solo trips or embark on adventurous holidays with friends. We understand the unique needs and interests of the younger generation and provide tailored content that appeals to their sense of exploration, adventure, and discovery.

However, our platform is not limited to any specific age group. We recognize that people in their middle ages may seek a well-deserved break from their busy lives and yearn to explore new destinations. Post, Plan & Travel offers a wealth of travel guides, itineraries, and suggestions that cater to the interests and preferences of individuals in different stages of life. Whether you're seeking relaxation, cultural immersion, or thrilling experiences, our platform has something to inspire and guide you.

One of the core principles of Post, Plan & Travel is accessibility. We believe that travel should be accessible to everyone, regardless of their budget. Our comprehensive travel guides and suggestions cover a wide range of budgets, ensuring that whether you're a budget-conscious backpacker or a luxury traveler, you'll find valuable information and recommendations that suit your needs.

In summary, Post, Plan & Travel is an all-encompassing platform that embraces diversity, caters to people of all ages and genders, and provides a wide range of travel resources and inspiration. We are committed to empowering individuals from all walks of life to explore the world, create unforgettable memories, and embrace the joy of travel.

---

# Project planning

For project requirements and project planning I followed the agile methodologies and best practices. I used a scrum board which is a built in feature in the projects repository with GitHub. 

Please click the [link](https://github.com/users/Christoph33one/projects/30/views/1) to view the project Kanban board


I created a list of project goals using agile user stories method. A user Story is a small, self-contained unit of development work designed to accomplish a specific goal within a product and articulate the value proposition for the work and drive the development work. 

With agile it is advised to use a team velocity approach. Team velocity represents how many story points the development team can manage to finish in one iteration of a particular length.

As I am the only one planning this project and not using a team, I will not be using the team velocity approach and point score system.

Using agile's MOSCOW method, each user story has been highlighted with the importance of the projects acceptance criteria. I used labels to indicate the importance of each user story and it's involvment with the project.

Please visit the [build log](https://github.com/Christoph33one/post-plan-travel/issues) 

---

# Data structure
Data Structure (models)
All of the data structuring was completed when creating my backend API. The repository and accompanying README can be found here: Click [here](https://github.com/Christoph33one/post-planner-api/blob/main/assets/data%20structure%20.png) to view.

---

# Design


# Authentication


### Sign up
To fully utilize the features of this site, users are required to register. The Navbar provides easy access to the registration form, where users can create a username, set a password, and confirm it by re-entering the pasword for varifction.

Please note that all registration fields must be filled out before the registration process can be completed. The registration form incorporates built-in error handling to ensure that users cannot register without providing all the required information and a pasword with a minimum of 8 characters.

![](src/assets/readme-images/signnup%20formpage.png)
![](src/assets/readme-images/sign%20up%20form%20apge%20mobile%20size.png)

---

### Sign in
Upon signing in, users are presented with a user-friendly form that allows them to enter their credentials, including their username and a secure password. The password input field provides hidden feedback as the user types, ensuring a secure and seamless experience.

To enhance clarity, a prominent submit button is positioned below the input fields, clearly indicating where users should submit their sign-in information. By prioritizing user-friendliness and security in the sign-in form, we aim to establish trust and respect for our site's users.

In addition, I have incorporated an image to enhance the visual appeal of the form. The image is positioned to the right of the form in larger browser views, and for smaller screen sizes, it gracefully transitions below the form. This welcoming image aligns with the travel theme, aligning with the overall goals of the site.

To provide a convenient reminder for registered users and facilitate easier navigation for non-signed-in users, I have incorporated a message and a link below the form. This serves as a helpful prompt, directing users to the sign-in page and enabling them to access their accounts effortlessly.

![](src/assets/readme-images/sign%20in%20form.png)
![](src/assets/readme-images/sign%20ion%20form%20mobile%20size.png)

### Change user name & password
The purpose of this function is to enable users to change their passwords and usernames without the need to request assistance from a site administrator. By offering this functionality directly to the users, we aim to enhance the sign-in experience by providing a more efficient and streamlined process for resolving password-related issues.

Empowering users with the ability to change their passwords not only simplifies the response to sign-in problems but also instills a greater sense of security. By allowing users to take control of their own accounts and update their valuable information, we prioritize their privacy and provide them with a more secure environment.

![](src/assets/readme-images/new%20username%20form.png)
![](src/assets/readme-images/new%20password%20form.png)

---

# Profile page
When exploring the profile page, I aimed to create a delightful and engaging experience for users. The profile serves as a hub for users to curate their favorite activities from a diverse selection of popular travel options. To add a touch of personalization and align with contemporary design trends, I included the option for users to upload a vibrant avatar, giving their profile a unique flair that reflects their personality.

Additionally, I incorporated a bio section where users can freely express themselves and share compelling information about their interests and experiences. Recognizing the importance of individual identity, a preset title or name is provided to ensure a meaningful profile representation.

On the profile page, users can conveniently access and manage all their posts on the site. By providing a comprehensive view of their latest posts and all other contributions, users can stay updated with their own content as well as the wider community. To enhance the user experience, we have made a subtle improvement by displaying the post count just below the user's name. This feature allows users to effortlessly track the number of posts they have created, offering a simple and intuitive way to gauge their contribution.

By blending simplicity, creativity, and user-centric design, the profile page becomes a captivating canvas where users can showcase their favorite activities and tell their travel story with enthusiasm.

![](src/assets/readme-images/profile%20page.png)
![](src/assets/readme-images/profile%20mobile.png)

### Profile edit form

This form is designed to prioritize the security of the profile and is only visible to the owner. At the top of the profile page, there is a dropdown menu represented by a three-dot icon, adhering to modern design principles and functionality. When the user clicks on the dropdown menu, three options are presented: username change, password change, and edit profile.

For the username and password change options, the user is redirected to separate forms where they can update their username and password securely.

The edit profile function provides the user with a pre-populated form that allows them to update their avatar, title, bio, and activities. Once the user has made the desired changes and submits the form, they are redirected to their newly updated profile.

By implementing these measures, we ensure that the owner has full control over their profile while maintaining a user-friendly and secure experience.

The profile page is designed to have a responsive layout, adapting seamlessly to various browser screen sizes, including a minimum width of 360px. This ensures that users can access and navigate the profile page comfortably regardless of the device or screen size they are using. By optimizing the layout for responsiveness, we prioritize a consistent and user-friendly experience across different platforms and screen resolutions.

![](src/assets/readme-images/profile%20edit%20form.png)
![](src/assets/readme-images/profile%20form%20mobile.png)

---
### Navigation 
To provide users with a seamless and modern browsing experience, I have incorporated a simple yet effective navigation menu at the top of the website, which is displayed consistently across all pages. This feature allows users to easily access essential pages such as the Home page, Locations page, Sign Up, Sign In, and Sign Out, without having to search for them.

Moreover, to enhance the user's sense of personalization, I have implemented a unique feature in the Navigation bar. When users are signed in, they can view their login name prominently displayed on the Navigation bar, providing a sense of ownership and recognition to the user. This small yet significant touch adds a personal touch and makes the user feel valued, thereby improving their overall browsing experience.

![](src/assets/readme-images/nav%20nav%20broswer%20design.png)
![](src/assets/readme-images/nav%20bar%20mobile%20design%2021.19.45.png)

Icon provider - [logo generator](https://favicon.io/logo-generator/)
![](src/assets/logo.png)

---

# Landing page

Drawing inspiration from the homepage of [trip Advisor](https://www.tripadvisor.com/), I have incorporated essential features to enhance the user experience and facilitate access to relevant external links related to travel. Additionally, I have included a donations link to remind users about the importance of responsible travel and encourage them to contribute to the provided cause.

To create a captivating visual impact, I have strategically incorporated a hero image in two key areas of the site, evoking a sense of wanderlust and adventure for the users.

For visually pleasing design, I have utilized various shades of blue throughout the site. This color scheme ensures a soothing and harmonious aesthetic that complements the images without creating any clashing color combinations.

To cater to mobile screen sizes, including a minimum width of 360px, the landing page has been meticulously designed to respond to different breakpoints. This approach ensures that the layout remains user-friendly and adapts seamlessly to varying screen sizes, providing an optimal viewing experience for mobile users.

![](src/assets/readme-images/home%20page.png)
![](src/assets/readme-images/home%20page%20donationns%20page.png)

---
# Create post

![](src/assets/readme-images/create%20a%20post%20page.png)
![](src/assets/readme-images/create%20a%20post%20mobile.png)
---

# Travel posts
![](src/assets/readme-images/posts%20page.png)
![](src/assets/readme-images/posts%20page%20mobile.png)


### Travel posts edit form
 ![](src/assets/readme-images/travel%20post%20edit%20form.png)

--- 
# Popular profiles
![](src/assets/readme-images/popular%20profiles.png)
![](src/assets/readme-images/popular%20profiles%20mobile%20size.png)

---
# Search bar
![](src/assets/readme-images/search%20bar%20.png)

---
# Following
![](src/assets/readme-images/following%20list.png)
![](src/assets/readme-images/following%20count.png)
___

# Comments
![](src/assets/readme-images/comments.png)

![](src/assets/readme-images/comments%20form.png)

### Comments edit form
![](src/assets/readme-images/comment%20edit%20form.png)
--- 

--------------------------------
# Wire frames

### Home page
![](src/assets/readme-images/HOME%20PAGE%20WIRE%20FRAME.png)

### Registration & Sign in
![](src/assets/readme-images/reg%20%3A%20sign%20in%20wire%20frames.png)

### Create a travel plan page
![](src/assets/readme-images/post%20page%20wire%20frame.png)

### Posted travel plan page
![](src/assets/readme-images/posting%20travel%20plan%20wire%20frame.png)

### Edit travel plan page
![](src/assets/readme-images/edit%20travel%20plan%20wire%20frame.png)

---

# Typography
All font family styling was used with an open source - [google fonts](https://fonts.google.com/?preview.text=POST,%20PLAN%20%26%20TRAVEL&preview.text_type=custom)

Font family used for H1 - Oswald "regular 400" 

Default setting - "sans serif"

Font family used for H3, H4 & P - Roboto"light 300"

Defaul setting - "sans serif"

All icons are taken from an open source - [Font awesome ](https://fontawesome.com/)

---

# Colour scheme 

All colours where picked with design industry colours which are trusted within communities of website design. I used an Wilderness colour plate in Adobe Color Wheel. using shades of blue  are used. For when using the shade of black I used #0D0D0D. This shade gives a deeper colour and more detail to text.

The reason I have not used many colours, is for the images to produce the colour to the site. As the images are full of colour, I wanted them to stand out and make an impression to the user.

All colours are taken from an open source - [Adobe Color Wheel ](https://color.adobe.com/trends/Wilderness?page=4)

![](src/assets/readme-images/color%20scheme.png)

---

# Bugs
### Navbar
ERROR
In the NavBar component, when passing the expanded prop to the Navbar component, you are assigning the setExpanded function instead of the expanded state value. The correct code should be:

PASS ERROR
Passed expanded prop to the navabr component

### Post Page 
ISSUE:
Data base not being updated. Error 400 in the console.

SOLUTION:
After reviewing the Network in the console, I could read that the Error was that I did not add the locations field from the api model as an object and call it the in useState Hook. Once adding this, all data was being saved in the database.

ISSUE:
When implementing the search feature to allow users to search for travel plans by location, I encountered an error in the PostsPage function. Despite using the filter method and a try-catch block with axiosReq (request) to fetch data from the travelplanposts/ URL, the posts data was not being displayed on the /locations page.

SOLUTION:
Upon reviewing the API for fetching the posts data, I discovered a typing error in the URL within the catch block. This mistake prevented the data from being fetched, causing the spinner component to continue running without rendering any results. After correcting the typing error, the posts data was successfully rendered on the page.

### MoreDropDown component
ISSUE:
While implementing the handleDelete prop into the onClick function within the return statement of the MoreDropdown component, I encountered difficulty in getting the delete function to successfully delete a post associated with the current user.

SOLUTION:
Upon careful examination, I identified a typing error within the handleDelete prop when it was used inside the onClick function. After correcting the value, I performed a test and confirmed that the delete function is now functioning properly.

### PostEditFrom page
ISSUE: While implementing the edit function for users to update their travel plans, I encountered a problem where a single image would not update correctly. Instead, I was redirected to the page with the original image.

SOLUTION:
Upon testing, I found that I could only update all the images at once and not a single image. This issue was down to having the if statement that checks the condition was wraped around all the image files to be appended. To address this, I restructured the if statement to apply to each image individually. After conducting further tests, I am now able to successfully update a single image.

### Travel post page
ISSUE: When implementing comments, I used the map method to iterate over the comments results. However, when running the project in the browser, a blank page was displayed.

SOLUTION: Upon reviewing the error in the console, I realized that I was mistakenly mapping over the incorrect value of results. After correcting the value, the page rendered correctly.

### ProfilePage

Issue:

While attempting to render all posts by a user from their profile page, I encountered a problem where the page would appear blank and an error would be logged in the console for fetchMoreData.

Solution:
Upon reviewing the console error, I identified a type error in the hasMore={!!profilePosts.next} code. It was discovered that I had removed the second exclamation mark (!), which resulted in the incorrect rendering of images within fetchMoreData. By rectifying this issue, the images were displayed correctly.

---

# Manual testing

### Authentication:

SIGN UP
-  As a user I can view a registration point and view a form to add my credentials.
- The form is well displayed and gives simple instructions on where to add my credentials.
- The form gives good user security practice known as "password confirmation" or "password verification.
- If I select a password with less then 8 characters, I am displayed a notification to add a lager password.
- Once signed up, I am redirected to the sign in form.
- I can view the form is nicely responsive in all screen sizes. 
---

SIGN IN
- As a user I can view a navigation point to sign in. 
- I can view a well displayed form to add my sing in credentials. 
- As a user I can view password security as my password is not displayed back to me when adding.
- When signing in, I am redirected to the home page as intended.
- When using the wrong credentials, I am not able to log in and returned a message to notify me.
- I can view the form is nicely responsive in all screen sizes 
---

SIGN OUT
- As a user can view the sign out navigation point 
- When signing out I am redirected to the home page as expected 
- When signed out I can sign back in when intended
---

PROFILE PAGE
- As a user I can view a Navigation point to my profile page when logged in.
- When viewing my profile and page I can see all the posts I have created starting with the most recent one first.
- I can view how many posts I have created with a posts count.
- I can view how many users are following my profile and how many I follow in return.
- I can view my name, avatar, bio and an activity that I enjoy doing.
- As a profile owner I can view a drop down menu to edit my profile.
- Upon viewing the edit profile function, with a per-populated form, I can edit my details and avatar image.
- After submitting the edited profile I am returned back to my profile page with the changes made.

----

### HOME PAGE:
- As a user I can view the home page and its responsiveness on all screen sizes.
-  As a user viewing the home page I can click on all links and be redirected to a new tab and view the information relating to the link
- As a user I can read and understand all the content written and view the images easily 
- As a user I can view a navigation point to navigate me to tother resources in the website 
-  As a user I can view all the content on all screen sizes and to its responsive functions 

---
### Create a travel post
- As a user I can easily view a Navigation point to the page for adding a travel post.
- I can see an early to follow form with well written text to follow when writing a post.
- I can write a title, description, location and a caption.
- When doing more than the required amount of letters, I will be returned a message to notify me to make corrections with my text length.
- I can upload is images by clicking on the upload icon which returns me my files.
- I can view a submit button and a cancel button.
- Once my post is submitted, I am redirected to the posts page to view my post.
- If I decide to cancel my post, and click the cable button, I am returned to the landing page.
---

### Travel plan page
TRAVEL PLAN PAGE
- As a registered user I can navigate to the travel plan page to view all the post
- When viewing the posts, I can see the newest created first
- As a user I can clearly see the profile who created the post, the images are nice and clear and well organised on all screen sizes
- As a user I can see a title, created at date, the users content about the post and images.
- A caption is present to keep the post fun!
- Icons are placed in the correct areas to view a better IX feel
- A link to view the post as a single post, which redirects the user to a new page for just that post.
- When logged out I can not view any posts.

### Travel plan edit

---
### Popular profiles
- As a user I can also see a clear and well designed most followed profiles list with the user name and avatar.
- I can easily view and click on a user to view their profile.
- On a smaller screen size the list is nicely positioned above the post images and search bar, also reduced to give better readability and UX.
- when logged out, I can noit view the list of popular profiles

---

### Comments
- As a user I can view a comment count at the bottom of each comment.
- As a user I can click on the view a single post and view all the comments and images related to the post.
- As a user I can see the user who created the comment with their name and avatar visible, plus a created at date.
- As a user I clearly add my very own comment and image with a easy to follow form that is validted on request.
- As a user I can view the comment and image I had added.
- If I want to edit my very own comment, I can view a Navigation point for editing the comment text and image. 
- Once my edited comment is submitted, I can view it in the list of comments.
- When logged out, I cannot  add, view, edit or delete a comment.
- When viewing other users comments, I can not edit or delete a comment not owned be myself 

---

### FOLLOW / FOLLOWING
- As a user I can view a list of profile from the popular profiles list and view a follow button
- When selecting to follow a profile, I can view the button text change from follow to unfollow.
- When selecting to follow a user, I can view the following count on my profile increase when folling a profile or decrease if I choose to unfollow a user
- When being followed by other profiles, I can view the number of followers in my profile.
- If logged out, I can not view follow or unfollow a user. 

---

### CHANGE USER NAME / PASSWORD
- As a user I can select to change me user name and view a pre-populated form with the current username
- When adding a user that already exist, I am returned a notification message to use a different username
- When using a new user name, I can Log in with that user name and the user old username dose not work
- When changing my password, I can view a form with two inputs fields. The form gives good user security practice known as "password confirmation" or "password verification.
- Once submitted I can login in with the new password.
- I can not log in with the old password.

--- 

# Frontend testing

### CSS validation tests
No errors or warnings were found when the deployed Happening URL was passed through the W3C CSS Validation checker.

![](src/assets/readme-images/css%20validation%20test.png)

---

### HTML Validation tests
![](src/assets/readme-images/html%20validation%20tests.png)

The deployed URL was successfully validated using the W3C CSS validation checker without any errors. However, during the validation process, some informational messages were generated regarding the standard Meta code present in the index.html file.

### Automated tests

I conducted four automated testing on the NavBar component by implementing test protocols that initially caused the tests to fail and then ensuring that they passed successfully. However, I must admit that testing is an area where I feel less confident, and given more time, I would have liked to delve deeper into it to gain a better understanding. Unfortunately, due to time constraints, I had to prioritize other tasks.

Sign in
![](src/assets/readme-images/automated%20test%20sign%20in.png)

Sign in / sign up return render log out
![](src/assets/readme-images/automated%20test%20sign%20in%20%3Aout%20buttons.png)

Home page renders
![](src/assets/readme-images/automated%20tests%20home%20page.png)

Profile render if logged in
![](src/assets/readme-images/automated%20test%20profile.png)

---

# Deployment 

### Forking the GitHub Repository

- Go to the project [repository ](https://github.com/Christoph33one/post-plan-travel)
- In the right most top menu, click the "Fork" button.
- There will now be a copy of the repository in your own GitHub account.

### Running the project locally
- Go to the project [repository ](https://github.com/Christoph33one/post-plan-travel)
- Click on the "Code" button.
- Choose one of the three options (HTTPS, SSH or GitHub CLI) and then click copy.
- Open the terminal in you IDE program.
- Type git clone and paste the URL that was copied in step 3.
- Press Enter and the local clone will be created.

### Alternatively by using Gitpod:
- Go to the project [repository ](https://github.com/Christoph33one/post-plan-travel)
- Click the green button that says "Gitpod" and the project will now open up in Gitpod.

### Deploying with [heroku ](https://dashboard.heroku.com/)
- Go to Heroku.com and log in; if you do not already have an account then you will need to create one.
- Click the New dropdown and select Create New App.
- Enter a name for your new project, all Heroku apps need to have a unique name, you will be prompted if you need to change it.
- Select the region you are working in.

### Heroku Deployment
- In the Deploy tab:

1. Connect your Heroku account to your Github Repository following these steps:
    - Click on the Deploy tab and choose Github-Connect to Github.
    - Enter the GitHub repository name and click on Search.
    -  Choose the correct repository for your application and click on Connect.

2. You can then choose to deploy the project manually or automatically, automatic deployment will generate a new application every time you push a change to Github, whereas manual deployment requires you to push the Deploy Branch button whenever you want a change made.

3. Once you have chosen your deployment method and have clicked Deploy Branch your application will be built and you should now see the View button, click this to open your application.

---

# Credits
A thank you to:
- The Code Institute walkthrough project 'Moments' for providing some structure and direction for my personal project.
My mentor Lauren Nicole who has accomodated me along the way, supporting with queries 'on the fly' and providing invaluable guidance during project milestone meetings.
- Code Institute tutors for helping to guide me through some difficult debugging (this process was often what caused the most retained learning for me).
- I also want to thank  [Chris.F ](https://github.com/Chrisfaherty) & [Nick Coles ]( https://github.com/NickdevC/)
 (fellow Code Institute students). By joining together and engaging in remote study sessions your conversation and input kept me on track and motivated to push myself with regards to the project. Constructive venting and questioning, both contributed to much needed progress!
- The slack community for going through any Q&A.

# Websites

[Trip Adivsor ](https://www.tripadvisor.com/) - Where all trips are planned and made, for design inspiration.

[Logo generator ](https://favicon.io/logo-generator/) - Creating simple logos for free

[Font awesome  ](https://fontawesome.com/) - Font awesome - Icon generator

[Uizard.io ](https://app.uizard.io/) - Wire frame creator

[Drawsql.app ](https://drawsql.app/)  - Design data model structure

[ Pixels ](https://www.pexels.com/) - Supplying free downloadable images

[ Google fonts](https://fonts.google.com/?preview.text=POST,%20PLAN%20%26%20TRAVEL&preview.text_type=custom) - Pre generated fonts for all text.

[React Bootstrap Docs ](https://react-bootstrap-v4.netlify.app/) - The official docs for React Bootstrap components.

[Stack Overflow](https://stackoverflow.com/) - Supported me in understanding: try/catch blocks, Routes in React, and adding custom fields to models in Django Rest.

[ djangoproject.com](https://www.djangoproject.com/start/overview/) - Officially React documentation and functions


[ cloudinary.com](https://console.cloudinary.com/console/c-bc29bdd73130ab10f676494e4e2a13/getting-started-dam) - Image file source and image storage tool





############################################################################################################################################################################################
!

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
