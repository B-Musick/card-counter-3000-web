# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

# Setting up tests
https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07

## Run tests
```
npm run test
```

# Material UI

# React Testing Libraries

# JSON Server
https://www.freecodecamp.org/news/json-server-for-frontend-development/

# Publishing to GH pages
- Use a deploy script
https://www.youtube.com/watch?v=XhoWXhyuW_I&ab_channel=EK-developer

- Base directory found looking at
https://github.com/B-Musick/b-musick.github.io/blob/main/vite.config.ts

- How to do it through vite
https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf

- Other gh-pages
https://blog.logrocket.com/deploying-react-apps-github-pages/
https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/

- Remember have to make public and make github pages branch
https://medium.com/@karinamisnik94/deploying-react-vite-with-routing-on-github-pages-68385676b788

- Form images to work, add PUBLIC
https://stackoverflow.com/questions/51002481/images-not-loading-when-deploying-to-github-pages

