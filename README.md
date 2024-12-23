# Netflix GPT

- Created react app using "npx create-react-app netflix-clone"
- Got some errors while creating react app, gone through it and resolved them
- Made necessary setup like deleting testing files & removing CSS code
- Installed & Configured TailwindCSS according to Framework guide
- Git Hub Repository
- created Header, Login & Signup form
- Routing setup
- Form Validation & useRef Hook
- Firebase setup
- Deploy Netflix-clone to prod
- Authentication for email/password in firebase
- Signup & Signin account
- Added user data to the redux store(created appStore, userSlice. Added userreducer in app store and provided app store in app.js)
- dispatch an action to store if user is added or removed
- Got the data from store using useSelector()
- onAuthStateChanged - called whenever userdetails changes
- Implemented Signout
- updated the Profile - updateProfile()

# Features

- Login/Signup Page

  - Signin/signup form
  - Redirect to browse page

- Browse Page (after authentication) - Logged in User

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - Movies List \* N

- Netfix GPT
  - Search Bar
  - Movie Suggestions
