# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
goit-react-hw-08
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ components
│  │  ├─ App
│  │  │  ├─ App.jsx
│  │  │  └─ App.module.css
│  │  ├─ AppBar
│  │  │  ├─ AppBar.jsx
│  │  │  └─ AppBar.module.css
│  │  ├─ AuthNav
│  │  │  ├─ AuthNav.jsx
│  │  │  └─ AuthNav.module.css
│  │  ├─ Contact
│  │  │  ├─ Contact.jsx
│  │  │  └─ Contact.module.css
│  │  ├─ ContactForm
│  │  │  ├─ ContactForm.jsx
│  │  │  └─ ContactForm.module.css
│  │  ├─ ContactList
│  │  │  ├─ ContactList.jsx
│  │  │  └─ ContactList.module.css
│  │  ├─ DocumentTitle.jsx
│  │  ├─ Layout.jsx
│  │  ├─ LoginForm
│  │  │  ├─ LoginForm.jsx
│  │  │  └─ LoginForm.module.css
│  │  ├─ Navigation
│  │  │  ├─ Navigation.jsx
│  │  │  └─ Navigation.module.css
│  │  ├─ PrivateRoute.jsx
│  │  ├─ RegisterForm
│  │  │  ├─ RegisterForm.jsx
│  │  │  └─ RegisterForm.module.css
│  │  ├─ RestrictedRoute.jsx
│  │  ├─ SearchBox
│  │  │  ├─ SearchBox.jsx
│  │  │  └─ SearchBox.module.css
│  │  └─ UserMenu
│  │     ├─ UserMenu.jsx
│  │     └─ UserMenu.module.css
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ ContactsPage
│  │  │  └─ ContactsPage.jsx
│  │  ├─ HomePage
│  │  │  ├─ HomePage.jsx
│  │  │  └─ HomePage.module.css
│  │  ├─ LoginPage
│  │  │  └─ LoginPage.jsx
│  │  └─ RegisterPage
│  │     └─ RegisterPage.jsx
│  ├─ redux
│  │  ├─ auth
│  │  │  ├─ operations.js
│  │  │  ├─ selectors.js
│  │  │  └─ slice.js
│  │  ├─ contacts
│  │  │  ├─ operations.js
│  │  │  ├─ selectors.js
│  │  │  └─ slice.js
│  │  ├─ filters
│  │  │  ├─ selectors.js
│  │  │  └─ slice.js
│  │  └─ store.js
│  └─ util
│     └─ numberNormalize.js
├─ vercel.json
└─ vite.config.js

```