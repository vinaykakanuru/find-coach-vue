# find-coach-vue

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

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Firebase Realtime Database rules used for this project

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
