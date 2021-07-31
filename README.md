
# Crytics - [LIVE LINK](https://crytics.netlify.app)


It is a blog website specially targeted to young audience, where the users
can share their experience of their binge watched shows, web series, movies.
But here's the twist, you have to share your opinions in just **250** characters.
So show your creativity and writing skills 😉!

## Tech Stacks used:
    1. ReactJs -  Frontend
    2. MaterialUI - For UI Components
    3. Firebase - For Realtime Database, User Authentication, and Firebase Storage.
    4. React Router DOM - For setting routes for different pages.






## Run Locally

Clone the project

```bash
  git clone https://github.com/shubhamymodi/crytics.git
```

Go to the project directory

```bash
  cd crytics
```

Install dependencies

```bash
  npm install
```

Go to https://console.firebase.google.com/ and create a new project for Web App,
and register for Authentication, Realtime Database, and Storage Services.

Read Docs for implementation: https://firebase.google.com/
or you can also watch youtube tutorials.

On successfull registration you will receive Firebase configuration object containing keys and identifiers for your app.

Paste your keys and identifiers as values to the object:
```bash
var firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTHDOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
  };
```

Start the server

```bash
  npm start
```

  
## Screenshots

### Homepage
![image](https://res.cloudinary.com/shubhampersonal/image/upload/v1627720727/home_gkmf25.jpg)

### Signin
![image](https://res.cloudinary.com/shubhampersonal/image/upload/v1627720726/login_nwazfb.jpg)

### Signup
![image](https://res.cloudinary.com/shubhampersonal/image/upload/v1627720725/signup_cxzirr.jpg)

### Dashboard
![image](https://res.cloudinary.com/shubhampersonal/image/upload/v1627720728/dashboard_lenquw.jpg)




  