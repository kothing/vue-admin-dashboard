# Vue Admin Dashboard

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/kothing/vue-admin-dashboard.svg)](https://github.com/kothing/vue-admin-dashboard/issues?q=is%3Aopen+is%3Aissue) [![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/kothing/vue-admin-dashboard.svg?maxAge=259200)](https://github.com/kothing/vue-admin-dashboard/issues?q=is%3Aissue+is%3Aclosed) 


**Vue Admin Dashboard** is a beautiful resource built over [Vuetify](https://vuetifyjs.com/en/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vuejs](https://vuejs.org/). It will help you get started developing dashboards in no time. Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vuejs](https://vuejs.org/v2/guide/) and [Vue-Router](https://router.vuejs.org/en/).


**Vuetify** is developed exactly according to Material Design spec. Every component is handcrafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.

**Vuex** is a state management pattern + library for **Vue.js** applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export/import.

Let us know what you think and what we can improve below. And good luck with development!

## Getting Started
- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser

You can also run additional npm tasks such as
- `npm run build` to build your app for production
- `npm run lint` to run linting.

## Vuetify
Vuetify is developed exactly according to Material Design spec. Every component is hand crafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.


## Vuex
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools](https://github.com/vuejs/vue-devtools) extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js`, `.eslintrc.js` and `.postcssrc.js`.

Let us know what you think and what we can improve below. And good luck with development!


#### Special thanks
During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:
- [Vuetify](https://vuetifyjs.com/en/) for the wonderful framework


Let us know your thoughts below. And good luck with development!

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)


## Demo

- [Start page](vue-admin-dashboard-beta.vercel.app)



## Quick start

Quick start options:

- Download from [Kothing](https://github.com/kothing/vue-admin-dashboard)


## Documentation
The documentation for the **Vue Admin Dashboard** is hosted on vuetify [website](https://vuetifyjs.com/).


## File Structure

Within the download you'll find the following directories and files:

```
vuetify-material-dashboard
├── README.md
├── CHANGELOG.md
├── babel.config.js
├── cypress.json
├── jest.config.js
├── now.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── vuetify.svg
│   ├── components
│   │   └── base
│   │       ├── Card.vue
│   │       ├── Item.vue
│   │       ├── ItemGroup.vue
│   │       ├── ItemSubGroup.vue
│   │       ├── MaterialAlert.vue
│   │       ├── MaterialCard.vue
│   │       ├── MaterialChartCard.vue
│   │       ├── MaterialSnackbar.vue
│   │       ├── MaterialStatsCard.vue
│   │       ├── MaterialTabs.vue
│   │       ├── MaterialTestimony.vue
│   │       ├── Subheading.vue
│   │       └── VComponent.vue
│   ├── i18n.js
│   ├── locales
│   │   └── en.json
│   ├── main.js
│   ├── plugins
│   │   ├── base.js
│   │   ├── chartist.js
│   │   ├── vee-validate.js
│   │   └── vuetify.js
│   ├── router
│   ├── sass
│   │   ├── main.scss
│   │   ├── overrides.sass
│   │   └── vuetify-material
│   │       └── _sidebar.sass
│   ├── store
│   └── views
│       └── dashboard
│           ├── Charts.vue
│           ├── Dashboard.vue
│           ├── Index.vue
│           ├── Widgets.vue
│           ├── component
│           │   ├── Buttons.vue
│           │   ├── Grid.vue
│           │   ├── Icons.vue
│           │   ├── Notifications.vue
│           │   ├── Tabs.vue
│           │   └── Typography.vue
│           ├── components
│           │   └── core
│           │       ├── AppBar.vue
│           │       ├── Drawer.vue
│           │       ├── Footer.vue
│           │       ├── Settings.vue
│           │       └── View.vue
│           ├── maps
│           │   └── GoogleMaps.vue
│           ├── pages
│           │   └── UserProfile.vue
│           └── tables
│               └── RegularTables.vue
├── tests
│   ├── e2e
│   │   ├── plugins
│   │   │   └── index.js
│   │   ├── specs
│   │   │   └── test.js
│   │   └── support
│   │       ├── commands.js
│   │       └── index.js
│   └── unit
│       └── example.spec.js
├── vue.config.js
```


## Reporting Issues
We use GitHub Issues as the official bug tracker for the **Vue Admin Dashboard**. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the **Vue Admin Dashboard**. Check the **CHANGELOG** from your dashboard on our [website](https://github.com/kothing/vue-admin-dashboard).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2099 Kothing (https://github.com/kothing)
- Kothing [license](https://github.com/kothing/license)
