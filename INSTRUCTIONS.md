# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Navigate to the specific exercise folder you want to work with
3. For simple exercises (folders 02-07, 10):
   - Open `index.html` or the main HTML file directly in a browser
   - Or use a local development server (Live Server extension recommended)

4. For the Forkify project (folder 11):
   ```bash
   cd 11
   npm install
   npm start
   ```

## Project Structure

This repository contains exercises from "The Complete JavaScript Course 2021: From Zero to Expert!" by Jonas Schmedtmann.

### Exercise Folders

- **02/** - JavaScript Variables and Basics
  - Introduction to variables, data types, and basic operations

- **03/** - Advanced JavaScript Concepts
  - Hoisting, scope chain, this keyword, and execution contexts

- **04/** - Pig Game Project
  - Interactive dice game demonstrating DOM manipulation and game logic
  - Open `index.html` in browser to play

- **05/** - Advanced JavaScript Features
  - Function constructors, prototypes, and object-oriented JavaScript

- **06/** - Budgety Project
  - Budget calculator application with income/expense tracking
  - Demonstrates the Module Pattern and separation of concerns
  - Open `index.html` in browser to use

- **07/** - ES6 Features
  - let/const, arrow functions, template literals, and modern JavaScript
  - Includes Babel transpilation examples

- **10/** - Asynchronous JavaScript
  - Promises, async/await, and handling asynchronous operations

- **11/** - Forkify Project (Main Application)
  - Complete recipe search and management application
  - See detailed instructions below

## Forkify Application (Folder 11)

The Forkify project is a feature-rich recipe application built with modern JavaScript, Webpack, and Babel.

### Features

- 🔍 Search over 1,000,000 recipes from Food2Fork API
- 📖 View detailed recipe information with ingredients
- 🛒 Add ingredients to shopping list
- ❤️ Like/favorite recipes with persistent storage
- 🔢 Adjust serving sizes with automatic ingredient recalculation
- 📄 Pagination for search results

### Configuration

**Important:** The Food2Fork API requires an API key. Update the configuration:

1. Navigate to: `11/src/js/config.js`
2. Add your API key:
   ```javascript
   export const key = 'YOUR_API_KEY_HERE';
   ```

### Running the Forkify Project

#### Development Mode
```bash
cd 11
npm install
npm start
```
Opens automatically in your browser at `localhost:8080`

#### Build for Production
```bash
cd 11
npm run build
```
Creates optimized bundle in `dist/` folder

#### Development Build
```bash
cd 11
npm run dev
```
Creates development bundle without starting server

### Project Architecture (Forkify)

The application follows the MVC (Model-View-Controller) pattern:

```
11/src/
├── js/
│   ├── index.js           # Main controller
│   ├── config.js          # API configuration
│   ├── models/            # Data models
│   │   ├── Search.js      # Search functionality
│   │   ├── Recipe.js      # Recipe data handling
│   │   ├── List.js        # Shopping list management
│   │   └── Likes.js       # Favorites management
│   └── views/             # UI components
│       ├── base.js        # DOM elements and utilities
│       ├── searchView.js  # Search UI
│       ├── recipeView.js  # Recipe display
│       ├── listView.js    # Shopping list UI
│       └── likesView.js   # Likes UI
├── index.html
└── css/
    └── style.css
```

### How to Use the Forkify App

1. **Search for Recipes**
   - Enter a search term (e.g., "pizza", "pasta", "salad")
   - Click the search button or press Enter
   - Browse through paginated results

2. **View Recipe Details**
   - Click on any recipe from the search results
   - View cooking time, servings, and ingredients
   - Adjust serving size using +/- buttons

3. **Add to Shopping List**
   - Click "Add to shopping list" button
   - All ingredients are added to the list on the right
   - Modify quantities or delete items as needed

4. **Like/Favorite Recipes**
   - Click the heart icon to favorite a recipe
   - Access liked recipes from the dropdown menu
   - Favorites persist using localStorage

## Technology Stack

### Core Technologies
- **JavaScript (ES6+)** - Modern JavaScript features
- **Webpack** - Module bundler
- **Babel** - JavaScript compiler for backwards compatibility
- **Axios** - HTTP client for API requests

### Polyfills
- **babel-polyfill** - ES6+ features support in older browsers
- **es6-promise** - Promise implementation

## Development Notes

- All modern JavaScript features are transpiled to ES5 for browser compatibility
- The application uses webpack-dev-server for hot reloading during development
- Source maps are generated for easier debugging

## Troubleshooting

### API Issues
If recipes don't load:
- Verify your API key in `config.js`
- Check console for CORS or network errors
- Food2Fork API may have rate limits

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Browser Compatibility
The application supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
