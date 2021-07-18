# find-coach-vue

![vue-router 4.0.10](https://img.shields.io/badge/router-4.0.10-brightgreen.svg) ![vuex 4.0.2](https://img.shields.io/badge/vuex-4.0.2-skyblue.svg)

• A simple and basic Vue application to demonstrate the core concepts of Vue Js.

• It helps you in understanding of how **_components_**, **_routing_**, **_vuex_** and **_http_** works in Vue Projects.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Firebase API

• To Use the project with Firebase as Backend service then create a Project in [Firebase Console](https://console.firebase.google.com/)

• And set up Firebase Realtime Database rules as shown below.

```
{
  "rules": {
    "coaches": {
      ".read": true,
      ".write": "auth != null",
    },
    "requests": {
      ".read": "auth != null",
      ".write": true,
    },
  }
}
```

• To host the same app in Firebase, use **_Hosting_** tab in Firebase Project Console and follow the steps provided.

• Please do ⭐ the repository, if it helped you in anyway.
