# Vite + Typescript + React Project

This project is a React application bootstrapped with [Vite](https://vitejs.dev/). Vite is a fast build tool and development server for modern web projects, offering fast Hot Module Replacement (HMR) and an optimized build process.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. It's recommended to use the latest LTS version.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kumardennis/football-data-reactjs.git
   ```

2. Navigate to the project directory:

   ```sh
   cd football-data-reactjs
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

Start the development server:

```sh
npm run dev
```

### For making a production build

```sh
npm run build
```

and then

```sh
npm run preview
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
