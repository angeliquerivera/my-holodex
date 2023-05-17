# 1. Holopro Talent CRUD App

- [1. Holopro Talent CRUD App](#1-holopro-talent-crud-app)
  - [1.1. Tech stack](#11-tech-stack)
  - [1.2. Dependencies](#12-dependencies)
    - [1.2.1. Regular](#121-regular)
    - [1.2.2. Development](#122-development)
  - [1.3. Project goals](#13-project-goals)
  - [1.4. Planned Idol Entry Fields](#14-planned-idol-entry-fields)
    - [1.4.1. Required](#141-required)
    - [1.4.2. Optional extras](#142-optional-extras)
  - [1.5. Initialize project](#15-initialize-project)
  - [1.6. Connecting Express](#16-connecting-express)
  - [1.7. Establishing index route](#17-establishing-index-route)
  - [1.8. Rendering templates by setting the view engine](#18-rendering-templates-by-setting-the-view-engine)
  - [1.9. Rendering the index view page](#19-rendering-the-index-view-page)
  - [1.10. Establishing first route](#110-establishing-first-route)
  - [1.11. Passing talent data from express to ejs template](#111-passing-talent-data-from-express-to-ejs-template)
  - [1.12. Mocking talent data](#112-mocking-talent-data)
  - [1.13. Importing Bootstrap as our CSS framework](#113-importing-bootstrap-as-our-css-framework)
    - [1.13.1. What is bootstrap?](#1131-what-is-bootstrap)
  - [1.14. Assembling the basic index landing page header section](#114-assembling-the-basic-index-landing-page-header-section)
  - [1.15. Iterating through `talents` data set to render each element](#115-iterating-through-talents-data-set-to-render-each-element)
  - [1.16. Fleshing out the talent card layout with more components](#116-fleshing-out-the-talent-card-layout-with-more-components)
  - [1.17. Extracting and re-sourcing our test data](#117-extracting-and-re-sourcing-our-test-data)
  - [1.18. Converting _that_ large number into a readable `Date`](#118-converting-that-large-number-into-a-readable-date)
  - [1.19. Adding the talent's tagline](#119-adding-the-talents-tagline)
  - [1.20. Creating the `/new` Talents route](#120-creating-the-new-talents-route)
  - [1.21. Refactoring to reflect the talents index](#121-refactoring-to-reflect-the-talents-index)
  - [1.22. Building the `/talents/new` template base](#122-building-the-talentsnew-template-base)
  - [1.23. Adding the talent info submission form wrapper](#123-adding-the-talent-info-submission-form-wrapper)
  - [1.24. Routing `/talents/new`](#124-routing-talentsnew)
  - [1.25. Partial views: reusable components](#125-partial-views-reusable-components)
    - [1.25.1. What is a partial view?](#1251-what-is-a-partial-view)
    - [1.25.2. DRY and Partials](#1252-dry-and-partials)
    - [1.25.3. Partials Syntax](#1253-partials-syntax)
  - [1.26. Determining the input types for each required field](#126-determining-the-input-types-for-each-required-field)
    - [1.26.1. Name](#1261-name)
    - [1.26.2. Date](#1262-date)
    - [1.26.3. Unit Name](#1263-unit-name)
    - [1.26.4. YT Page Link](#1264-yt-page-link)
    - [1.26.5. Twitter Page Link](#1265-twitter-page-link)
    - [1.26.6. Talent Bio Blurb](#1266-talent-bio-blurb)
    - [1.26.7. Form buttons](#1267-form-buttons)
  - [1.27. Building the `_form_fields.ejs` partial view](#127-building-the-_form_fieldsejs-partial-view)
    - [1.27.1. Wrapped vs Unwrapped Elements](#1271-wrapped-vs-unwrapped-elements)
      - [1.27.1.1. Wrapped](#12711-wrapped)
      - [1.27.1.2. Unwrapped](#12712-unwrapped)
    - [1.27.2. Talent Name](#1272-talent-name)
    - [1.27.3. Debut Date](#1273-debut-date)
    - [1.27.4. Unit Name](#1274-unit-name)
    - [1.27.5. YouTube Page](#1275-youtube-page)
    - [1.27.6. Twitter Page](#1276-twitter-page)
    - [1.27.7. Talent Bio Blurb](#1277-talent-bio-blurb)
    - [1.27.8. Form submission buttons](#1278-form-submission-buttons)
    - [1.27.9. All put together](#1279-all-put-together)
  - [1.28. Using the `_form_fields` partial](#128-using-the-_form_fields-partial)
    - [1.28.1. Wrapping the (unwrapped) partial view](#1281-wrapping-the-unwrapped-partial-view)
  - [1.29. Establishing our app's connection to MongoDB via `mongoose`](#129-establishing-our-apps-connection-to-mongodb-via-mongoose)
  - [1.30. Defining the `Talent` model](#130-defining-the-talent-model)
    - [1.30.1. Our form fields (the required ones)](#1301-our-form-fields-the-required-ones)
    - [1.30.2. Adding `createdAt` & `updatedAt` document timestamps](#1302-adding-createdat--updatedat-document-timestamps)
  - [1.31. `POST`ing to `/`; steps of the a new `Talent` document submission](#131-posting-to--steps-of-the-a-new-talent-document-submission)
    - [1.31.1. Giving `express` the ability to read data from forms](#1311-giving-express-the-ability-to-read-data-from-forms)
    - [1.31.2. Reading the submitted form data (seeing `.urlencoded()` in action)](#1312-reading-the-submitted-form-data-seeing-urlencoded-in-action)
    - [1.31.3. New `Talent` prep & deconstructing this `POST`'s `req.body`](#1313-new-talent-prep--deconstructing-this-posts-reqbody)
    - [1.31.4. Converting the `year`, `month`, and `day` values to a single `Date` value for `debutDate`](#1314-converting-the-year-month-and-day-values-to-a-single-date-value-for-debutdate)
    - [1.31.5. Creating a new `Talent`](#1315-creating-a-new-talent)
  - [1.32. Handling the success/failure of the new `Talent` entry](#132-handling-the-successfailure-of-the-new-talent-entry)
    - [1.32.1. PASS: `POST`ing a new `Talent`](#1321-pass-posting-a-new-talent)
      - [1.32.1.1. Saving & Redirecting to a new `Talent` page](#13211-saving--redirecting-to-a-new-talent-page)
      - [1.32.1.2. Redirecting to a new `Talent` page](#13212-redirecting-to-a-new-talent-page)
      - [1.32.1.3. Creating a param based `/:id` route](#13213-creating-a-param-based-id-route)
      - [1.32.1.4. Testing our PASS event flow](#13214-testing-our-pass-event-flow)
    - [1.32.2. FAIL: Re-populating the failed form with previously submitted data](#1322-fail-re-populating-the-failed-form-with-previously-submitted-data)
      - [1.32.2.1. Re-rendering the submission form](#13221-re-rendering-the-submission-form)
      - [1.32.2.2. Passing the failed submission's data to the `_form_fields`](#13222-passing-the-failed-submissions-data-to-the-_form_fields)
      - [1.32.2.3. Populating the submission form fields with the failed data](#13223-populating-the-submission-form-fields-with-the-failed-data)
      - [1.32.2.4. Handling the error on first time visit to `/talents/new`](#13224-handling-the-error-on-first-time-visit-to-talentsnew)
      - [1.32.2.5. Telling the user that missing fields are required](#13225-telling-the-user-that-missing-fields-are-required)
        - [1.32.2.5.1. `<input>`](#132251-input)
        - [1.32.2.5.2. `<select>`](#132252-select)
        - [1.32.2.5.3. `<textarea>`](#132253-textarea)
        - [1.32.2.5.4. All together](#132254-all-together)
    - [1.32.3. Further form guidance (number input limiting, url validation)](#1323-further-form-guidance-number-input-limiting-url-validation)
  - [1.33. `<select>` field - refactoring, passing values after failed submissions, mapping `<option>`s using JSON data](#133-select-field---refactoring-passing-values-after-failed-submissions-mapping-options-using-json-data)
    - [1.33.1. Examining the _`selected`_ attribute](#1331-examining-the-selected-attribute)
    - [1.33.2. Programmatically creating `<option>`s from JSON data](#1332-programmatically-creating-options-from-json-data)
    - [1.33.3. Mapping out the `<option>`s](#1333-mapping-out-the-options)
      - [1.33.3.1. Just the mapped `<select>`](#13331-just-the-mapped-select)
      - [1.33.3.2. The entire `<select> 'form-group'`](#13332-the-entire-select-form-group)
    - [1.33.4. Testing with a failed `Talent` submission](#1334-testing-with-a-failed-talent-submission)
    - [1.33.5. BONUS: Organizing groups of options into `<optgroup>`](#1335-bonus-organizing-groups-of-options-into-optgroup)
      - [1.33.5.1. Before the `branch` addition](#13351-before-the-branch-addition)
      - [1.33.5.2. Adding `branch` data, and restructuring](#13352-adding-branch-data-and-restructuring)
      - [1.33.5.3. Modifying the `_form_fields <option>` map](#13353-modifying-the-_form_fields-option-map)
        - [1.33.5.3.1. Before `branch` map](#133531-before-branch-map)
        - [1.33.5.3.2. Before `branch` map](#133532-before-branch-map)
  - [1.34. Rendering a `Talent` document on `/talents/:id`](#134-rendering-a-talent-document-on-talentsid)
    - [1.34.1. Updated `/:id` route code](#1341-updated-id-route-code)
    - [1.34.2. Talent Page Base Template](#1342-talent-page-base-template)
  - [1.35. Rendering `Talent`s on the index route](#135-rendering-talents-on-the-index-route)
  - [1.36. Sorting our `Talent`s by `debutDate`](#136-sorting-our-talents-by-debutdate)
  - [1.37. Refactoring Index `Talent` cards](#137-refactoring-index-talent-cards)
  - [1.38. Add a link to each `Talent` page](#138-add-a-link-to-each-talent-page)
  - [1.39. Adding the `marked` & `slugify` libraries](#139-adding-the-marked--slugify-libraries)
    - [1.39.1. `marked` npm page](#1391-marked-npm-page)
    - [1.39.2. `slugify` npm page](#1392-slugify-npm-page)
      - [1.39.2.1. What is a slug?](#13921-what-is-a-slug)
      - [1.39.2.2. Is There a Difference Between a URL Slug and a URL?](#13922-is-there-a-difference-between-a-url-slug-and-a-url)
  - [1.40. Using `marked` & `slugify`](#140-using-marked--slugify)
  - [1.41. Adding `.pre()` middleware to create a slug](#141-adding-pre-middleware-to-create-a-slug)
  - [1.42. Changing the `/:id` param routes to use the `slug` field](#142-changing-the-id-param-routes-to-use-the-slug-field)
    - [1.42.1. Old `GET '/:id'` param routing](#1421-old-get-id-param-routing)
    - [1.42.2. New `GET '/:slug'` param routing](#1422-new-get-slug-param-routing)
  - [1.43. Changing the redirect from `talent.id` to `talent.slug`](#143-changing-the-redirect-from-talentid-to-talentslug)
    - [1.43.1. Before - using `id`](#1431-before---using-id)
    - [1.43.2. After - using `slug`](#1432-after---using-slug)
  - [1.44. Viewing `Talent`s using the new `slug`-based link](#144-viewing-talents-using-the-new-slug-based-link)
    - [1.44.1. Before - using `id`](#1441-before---using-id)
    - [1.44.2. After - using the new `slug` schema field](#1442-after---using-the-new-slug-schema-field)
  - [1.45. Creating a `DELETE '/:id'` route](#145-creating-a-delete-id-route)
    - [1.45.1. Installing `method-override`](#1451-installing-method-override)
    - [1.45.2. Importing and using `method-override`](#1452-importing-and-using-method-override)
  - [1.46. Adding a button to `DELETE` a `Talent`](#146-adding-a-button-to-delete-a-talent)
  - [1.47. Enabling markdown on our pages](#147-enabling-markdown-on-our-pages)
    - [1.47.1. What is HTML sanitization?](#1471-what-is-html-sanitization)
    - [1.47.2. What is the DOM?](#1472-what-is-the-dom)
    - [1.47.3. How we're going to sanitize our markdown](#1473-how-were-going-to-sanitize-our-markdown)
      - [1.47.3.1. `dompurify`](#14731-dompurify)
        - [1.47.3.1.1. What does it do?](#147311-what-does-it-do)
      - [1.47.3.2. `jsdom`](#14732-jsdom)
  - [1.48. Creating our DOM purifier and DOM Handler](#148-creating-our-dom-purifier-and-dom-handler)
  - [1.49. Creating a field for our sanitized HTML](#149-creating-a-field-for-our-sanitized-html)
  - [1.50. Parsing our markdown to be sanitized](#150-parsing-our-markdown-to-be-sanitized)
    - [1.50.1. Test Markdown](#1501-test-markdown)
  - [1.51. Adding our sanitized HTML to the `Talent` page](#151-adding-our-sanitized-html-to-the-talent-page)
  - [1.52. Adding edit route functionality](#152-adding-edit-route-functionality)
  - [1.53. Creating the `edit` view](#153-creating-the-edit-view)
  - [1.54. Understanding the `PUT` route; Extracting common functionality](#154-understanding-the-put-route-extracting-common-functionality)
  - [1.55. Refactoring `Talent.create` to an `await .save()` function to handle both `'new/edit'` cases](#155-refactoring-talentcreate-to-an-await-save-function-to-handle-both-newedit-cases)
    - [1.55.1. Extracting `Talent` values assignment to its own function](#1551-extracting-talent-values-assignment-to-its-own-function)
  - [1.56. Passing `saveTalentAndRedirect` as middleware to `POST '/'`](#156-passing-savetalentandredirect-as-middleware-to-post-)
  - [1.57. Building the `PUT '/'` route](#157-building-the-put--route)
  - [1.58. Adding a button to edit `Talent` from their page](#158-adding-a-button-to-edit-talent-from-their-page)

## 1.1. Tech stack

- NodeJS
- Express
- MongoDB
- Mongoose
- HTML via EJS
- Bootstrap

## 1.2. Dependencies

### 1.2.1. Regular

- express
- mongoose
- ejs

### 1.2.2. Development

- nodemon

## 1.3. Project goals

- Create a page that showcases all the talents
- Be able to add new talent entries
- Be able to edit existing talent entries
- Be able to delete existing talents

## 1.4. Planned Idol Entry Fields

### 1.4.1. Required

- Name
- Debut Date
- Unit Name
- YT page link
- Twitter page link
- Talent bio blurb

### 1.4.2. Optional extras

- Birthday
- Height
- HoloBranch (JP, EN, ID)
- Illustrator
- FanName
- Hashtags
  - Stream
  - Fan Art
- Current Sub Count
- Current View Total
- Unit Members (5-star challenge)

## 1.5. Initialize project

- Start npm project
- Initialize git repo
- Create repo `.gitignore`
- Create `devStart` command and `server.js`
  - `"scripts": { "devStart": "nodemon server.js"},`

## 1.6. Connecting Express

- Create base `server.js` file
- Import Express
- Create Express instance
- Listen to app on port of choice
- Visit `localhost:3001` to view error on index route

```js
// server.js

const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Markdown server listening on port 3001");
});
```

## 1.7. Establishing index route

Add a GET index route, `/`, where the response sends back basic text.

```js
// server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Holo talent server listening on port 3001");
});
```

## 1.8. Rendering templates by setting the view engine

We want to render more than just basic text so we need to set a view engine to render templates that we will create. Set the view engine to `ejs`.

```js
// server.js

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Holo talent server listening on port 3001");
});
```

## 1.9. Rendering the index view page

Create the folder `views` and within, create `index.ejs`. In that file, if you have the `EJS` VSCode extension already installed, typing `!` should bring up the emmet for HTML5 to give boilerplate code.

```js
// views/index.ejs

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holo Talent Server</title>
  </head>
  <body>
    <h1>This is the rendered HTML index page.</h1>
  </body>
</html>
```

Update the index GET route callback to `render` index instead of just `send`ing plaintext. Remember, `express` knows to look for a `views` folder, so no `views/` path prefix needed; nor a file extension!

```js
// server.js

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log("Holo talent server listening on port 3001");
});
```

## 1.10. Establishing first route

Create a `routes` folder and within, create `talentsRouter.js`. We want to create a `Router` instance for all `/talents/` routes; all of that logic will be placed here. Export this router for use in the server.

```js
// /routes/talentsRouter.js

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("on talents index page");
});

module.exports = router;
```

In `server.js`, we can import the newly created router and tell express to `use` it for routes mounted to `/talents`. Confirm that the router is mounted properly by visiting `/talents` index.

```js
// server.js

const express = require("express");
const talentsRouter = require("./routes/talentsRouter"); // <- the import

const app = express();

app.set("view engine", "ejs");

app.use("/talents", talentsRouter); // <- Imported router is now mounted to /talents/

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log("Markdown server listening on port 3001");
});
```

## 1.11. Passing talent data from express to ejs template

In `server.js`, we can pass an additional argument to the index render, the talents data (which has not yet been established). This second render argument is an object with an `talents` variable that serves as both key name and key-value.

```js
// server.js

app.get("/", (req, res) => {
  res.render("index", { text: "Talents Index Page" }); // <- the server variable and corresponding data
});
```

That `text` variable and data will now be available in the `index.ejs` file for use and rendering. We can output the variable using the ejs format `<%= variableNameHere %>` in the ejs file. Afterwards, refresh the index route to view the server data in actions.

```html
// views/index.ejs

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holo Talent Server</title>
  </head>
  <body>
    <h1><%= text %></h1>
    <!-- ejs expression; `text` variable called -->
  </body>
</html>
```

## 1.12. Mocking talent data

In `server.js`, create mock talent data within the index route callback. The `talents` data we'll be expecting to receive will be an array of objects, each of which will contain at least `name`, `debuted`, and `tagline` key-value pairs.

Next, replace the `text` server variable in the `res.render()` call with this new `talents` variable. You can use shorthand object assignment here to designate `'talents'` to be both the key name and the variable you're using to assign its value.

```js
// server.js

app.get("/", (req, res) => {
  const talents = [
    {
      name: "Test Talent",
      debuted: new Date(), // <- change from static method output to instance
      tagline: "A short blurb describing this first test talent.",
    },
    {
      name: "Test Talent 2",
      debuted: Date.now()
      tagline: "A short blurb describing this second test talent.",
    },
  ];

  res.render("index", { talents }); // shorthand for { talents: talents }
});
```

We can reflect this new data in `index.ejs` by replacing the variable. Note that when you save and refresh the index, what's rendered now is `[object Object]`. That's because HTML needs to _ULTIMATELY_ render the correct data type (strings or numbers) for the appropriate HTML tags, and attributes. We can iterate over arrays and select from objects to get to these basic data types.

```html
<!-- views/index.ejs -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holo Talent Server</title>
  </head>
  <body>
    <h1><%= talents %></h1>
    <!-- EJS outputting the `talents` variable; will currently render `[object Object]` -->
  </body>
</html>
```

## 1.13. Importing Bootstrap as our CSS framework

We will import bootstrap via a `link` tag that we'll place in the `head` tag in `index.ejs`.

```html
<!-- views/index.ejs -->
<!-- <head> tag snippet -->

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- the link tag containing the external bootstrap CSS info -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />

  <title>Holo Talent Server</title>
</head>
```

### 1.13.1. What is bootstrap?

According to Wikipedia:

> Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.

## 1.14. Assembling the basic index landing page header section

Bootstrap provides us with built-in components accessible via class names we assign in our HTML. See the `bootstrap-project-components` file for more detailed information and links to each component's corresponding docs. Try navigating to the Bootstrap docs site and learning what the

We will be calling upon the `container`, `margin (m)`, and `button (btn)` Bootstrap classes to begin styling our index landing header.

```html
<!-- views/index.ejs -->
<!-- <body> snippet -->

<body>
  <div class="container">
    <h1 class="mb-4">Our Talents</h1>
    <a href="/talents/new" class="btn btn-success"> New Talent </a>
  </div>
</body>
```

## 1.15. Iterating through `talents` data set to render each element

We can render a collection of data in `ejs` by wrapping Javascript code in `<% someJSCodeHere %>` blocks.

**NB:** take care to close each `<% %>` , and `<%= %>` on the same line you opened it!

```html
<!-- views/index.ejs -->
<!-- <div class="container"> snippet -->

  <div class="container">
    <h1 class="mb-4">Blog talents</h1>
    <a href="/talents/new" class="btn btn-success">New Talent</a>

    <!-- Wrapping the .forEach() in an expression, not an output! -->
    <!-- Iterating over the `talents` data array using .forEach and then using the single talent object element to grab data values using its keys -->
    <!-- Notice the closing of each tag, per line -->

    <% talents.forEach(talent => { %>
    <div class="card mt-4"><%= talent.name %></div>
    <% }) %>
  </div>
</div>
```

## 1.16. Fleshing out the talent card layout with more components

The `card` component offered by Bootstrap has multiple sub-components available to use. Let's use

```html
<!-- views/index.ejs -->
<!-- expanded card snippet -->

<% talents.forEach(talent => { %>
<div class="card mt-4">
  <div class="card-body">
    <div class="card-title"><%= talent.name %></div>
    <div class="card-subtitle text-muted mb-2"><%= talent.debutDate %></div>
  </div>
</div>
<% }) %>
```

Our output is a card component that features the `name`, and `date` values from our test `talents` data we created in the index `GET` route.

## 1.17. Extracting and re-sourcing our test data

Now that we've rendered out our test talent's names to the page, it's a good idea to move the test data from that `app.get('/')` call to a place more easily managed.

Create the folder `__test__`, and then create a file, `test_talents.js`. In that file, copy over the talents variable then export it for use in our server file.

```js
// __test__/test_talents.js

const talents = [
  {
    name: "Test Talent",
    debuted: Date.now(),
    tagline: "A short blurb describing this first test talent.",
  },
  {
    name: "Test Talent 2",
    debuted: Date.now(),
    tagline: "A short blurb describing this second test talent.",
  },
];

module.exports = talents;
```

Now that it's been exported, we can import it back in `server.js`.

```js
// server.js

const express = require("express");
const talentsRouter = require("./routes/talentsRouter");
const talents = require("./__test__/test_talents");

const app = express();

app.set("view engine", "ejs");

app.use("/talents", talentsRouter);

app.get("/", (req, res) => {
  res.render("talents/index", { talents });
});

app.listen(3001, () => {
  console.log("Holo talent server listening on port 3001");
});
```

## 1.18. Converting _that_ large number into a readable `Date`

You might notice that the date value is a rather large number; that's because `Date.now()` [static method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) outputs the _the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC._

We need to convert to something human-readable, we need to do two things:

1. First, we need to have a `Date` instance available to operate on, instead of the `Number` that `Date.now` outputs; for this we change our test `debuted` value to a `new Date()` instance.

```js
// __test__/test_talents.js

const talents = [
  {
    name: "Test Talent",
    debuted: new Date(), // <- change from static method output to instance
    tagline: "A short blurb describing this first test talent.",
  },
  {
    name: "Test Talent 2",
    debuted: new Date(), // <- change from static method output to instance
    tagline: "A short blurb describing this second test talent.",
  },
];

module.exports = talents;
```

2. Now that we have a `Date` object instead of a `Number`, we can convert it to something human-readable using the `Date` instance method, [`.toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString), a function that formats and outputs the date portion of the datetime value based on the user's locale.

```js
// index.ejs
// the `talents` forEach loop

<% talents.forEach(talent => { %>
  <div class="card mt-4">
    <div class="card-body">
      <div class="card-title">
        <%= talent.name %>
      </div>
      <div class="card-subtitle text-muted mb-2">
        <%= talent.debutDate.toLocaleDateString() %>
      </div>
    </div>
  </div>
<% }) %>
```

## 1.19. Adding the talent's tagline

Bootstrap has a `card-text` component we can use to render a talent's tagline. We'll also be adding a margin to the bottom using the `mb-2` class.

```html
<!-- index.ejs -->

<% talents.forEach(talent => { %>
<div class="card mt-4">
  <div class="card-body">
    <div class="card-title"><%= talent.name %></div>
    <div class="card-subtitle text-muted mb-2">
      <%= talent.debutDate.toLocaleDateString() %>
    </div>
    <div class="card-text mb-2"><%= talent.tagline %></div>
    <!-- tagline added -->
  </div>
</div>
<% }) %>
```

## 1.20. Creating the `/new` Talents route

It's time to add some functionality to the `New Talent` button.

We will program the route, `/talents/new`, and also create the ejs template for the route.

Remember that `talentsRouter` is mounted on `/talents`, so the route path string is simply `/new`. We then a standard `req/res` callback to `.render()` the desired template; we'll create it in a sec.

```js
// routes/talentsRouter.js

const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("talents/new");
});

module.exports = router;
```

## 1.21. Refactoring to reflect the talents index

Now, in the `views` folder, we want to create a `talents` sub-directory, and then create `new.ejs` within. But before we build that template, we should move `index.ejs` into the `views/talents` folder as it's the page that lists all the talents available.

Change the base `app.get` index route to render `talents/new` instead.

```js
// server.js

app.get("/", (req, res) => {
  res.render("talents/index", { talents }); // <- changed render target
});
```

## 1.22. Building the `/talents/new` template base

Copy the index template over and remove all code nested **within** the `container` div, except the `<h1>` tag (change its text to `Add a new talent`). Edit the page title as well.

Once complete, visit `/talents/new` to see the base template render.

```js
// views/talents/new.ejs

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <title>Add a new talent</title>
  </head>
  <body>
    <div class="container">
      <h1>Add a new talent</h1>
    </div>
  </body>
</html>
```

## 1.23. Adding the talent info submission form wrapper

Under the `<h1>` tag, add a `<form>` tag with `action` and `method` attributes.

- The `action` attribute details which route the method acts on.
- The `method` attribute details the HTTP method to use. We use `POST` because we are creating something; posting a new Idol document to our database.

```html
<!-- views/talents/new -->

<body>
  <div class="container">
    <h1>Add a new talent</h1>

    <form action="/talents" method="POST">
      <!-- form fields to be nested within -->
    </form>
  </div>
</body>
```

## 1.24. Routing `/talents/new`

As built in `/views/talents/new`, we're `POST`ing to `/talents`; we can leave the `req/res` callback empty for now.

```js
// routes/talentsRouter.js

const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("talents/new");
});

router.post("/", (req, res) => {}); // cover POST to `talents` index

module.exports = router;
```

## 1.25. Partial views: reusable components

### 1.25.1. What is a partial view?

Partials are components that allow you to reuse the same HTML across multiple views. Think of partials as functions, they make large websites easier to maintain as you don’t have to go and change a piece of text in every page it appears in. Instead, you define that reusable bundle of code in a file andinclude it wherever you need it.

### 1.25.2. DRY and Partials

We can use this fact to reduce the amount of code we need to handle by creating a reusable component, aka a partial (view).

### 1.25.3. Partials Syntax

**File Names:** Best practice is to denote a partial with a starting `_` in its file name; in this case, we'll name this partial, `_form_fields.ejs`.

**EJS Syntax:** The way you tell EJS to render out the HTML of a partial view is like so:

```js
<%- include("./relative/filePath/here") %>
```

## 1.26. Determining the input types for each required field

Going back to project goals, we see that there are a lot of fields that _each_ talent will have to fill out to build their profile in our app.

> #### Required
>
> - Name
> - Debut Date
> - Unit Name
> - YT page link
> - Twitter page link
> - Talent bio blurb
>
> _Optional fields omitted for now; can be added later on as bonus features._

That means that every talent will have these seven core fields.

### 1.26.1. Name

- expecting a regular string
- single `<input>` field of type `'text'`

### 1.26.2. Date

- we can form dates using `new Date(YYYY, MM - 1, DD)` as shown in the test talent data
- a input group made of 3 `<input>` fields of type `'number'`
  - we can add attributes for `min` and `max` number values (stringified), per month, day, year limitations

OR

- we can use a single `<input>` of type `'date'`

### 1.26.3. Unit Name

- string type
- choosing a predefined option would be best
- single `<select>` element listing all current holopro units

### 1.26.4. YT Page Link

- expecting a regular string
- single `<input>` field of type `'text'`

OR

- single `<input>` field of type `'URL'` to verify url pattern

### 1.26.5. Twitter Page Link

- expecting a regular string
- single `<input>` field of type `'text'`

OR

- single `<input>` field of type `'URL'` to verify url pattern

### 1.26.6. Talent Bio Blurb

- expecting a regular string
- single `<textarea>`

### 1.26.7. Form buttons

- two buttons, one to submit form data, one to return to home page
- one `button` of type `submit`
- one `a` link _styled_ as a `button` that takes you back to `/`

## 1.27. Building the `_form_fields.ejs` partial view

It's best practice to denote partials with a preceding `_` in their name.

This file will contain different _unwrapped_ HTML elements that make up the fields of our form. This is because we will be wrapping them in a `<form>` tag on each page that will `include()` this `_form_fields` partial file.

### 1.27.1. Wrapped vs Unwrapped Elements

HTML elements are considered **wrapped** when a parent element contains child elements. They are **unwrapped** when two or more elements are on the same level; they are sibling elements.

This idea of wrapped vs unwrapped is extremely important and applied everywhere through the use of partials in template systems like `ejs`, among others, and through the use of `Component`s and `Fragment`s in `React`, a major front-end framework library.

#### 1.27.1.1. Wrapped

```html
<div>
  <h1>This heading and paragraph are wrapped by their parent `<div>` tag.</h1>
  <p>Any valid HTML tags can wrap any correspondingly valid child tags.</p>
</div>
```

#### 1.27.1.2. Unwrapped

```html
<p>
  These two paragraphs are unwrapped; they are not nested within a parent tag.
</p>
<p>These two tags are on the same document level.</p>
```

---

Each `group` will contain a `label` and a corresponding `input` element, with certain groups handling additional fields.

### 1.27.2. Talent Name

A `form-group` wrapping a `label` for a required `input` of type `text`.

```html
<div class="form-group">
  <label for="name" class="form-label">Talent Name</label>
  <input required type="text" name="name" id="name" class="form-control" />
</div>
```

### 1.27.3. Debut Date

A `form-group` wrapping three sets of `label` for a required `input` of type `number`.

```html
<div class="form-group">
  <label for="debut-month" class="form-label">Debut Month</label>
  <input
    required
    type="number"
    name="month"
    id="debut-month"
    class="form-control"
  />

  <label for="debut-day" class="form-label">Debut Day</label>
  <input
    required
    type="number"
    name="day"
    id="debut-day"
    class="form-control"
  />

  <label for="debut-year" class="form-label">Debut Year</label>
  <input
    required
    type="number"
    name="year"
    id="debut-year"
    class="form-control"
  />
</div>
```

### 1.27.4. Unit Name

A `form-group` wrapping a `label` for a required `select` dropdown menu that itself contains the different Holopro unit names as `option` to select from.

```html
<div class="form-group">
  <label for="unitName" class="form-label">Talent's Unit</label>
  <select name="unitName" id="unitName" class="form-select">
    <option value="5th Gen - NePoLaBo">5th Gen - NePoLaBo</option>
  </select>
</div>
```

### 1.27.5. YouTube Page

A `form-group` wrapping a `label` for a required `input` of type `text`.

```html
<div class="form-group">
  <label for="youtube" class="form-label">YouTube Page</label>
  <input
    required
    type="text"
    name="youtube"
    id="youtube"
    class="form-control"
  />
</div>
```

### 1.27.6. Twitter Page

A `form-group` wrapping a `label` for a required `input` of type `text`.

```html
<div class="form-group">
  <label for="twitter" class="form-label">Twitter Page</label>
  <input
    required
    type="text"
    name="twitter"
    id="twitter"
    class="form-control"
  />
</div>
```

### 1.27.7. Talent Bio Blurb

A `form-group` wrapping a `label` for a required `textarea`.

```html
<div class="form-group">
  <label for="bioBlurb" class="form-label">Talent Bio Blurb</label>
  <textarea name="bioBlurb" id="bioBlurb" class="form-control"></textarea>
</div>
```

### 1.27.8. Form submission buttons

A `form-group` wrapping a `button` to `submit` all the form field data and a `link` to return back to the `index` page.

```html
<div class="form-group">
  <button type="submit" class="btn btn-primary">Save</button>
  <a href="/" class="btn btn-secondary">Cancel</a>
</div>
```

### 1.27.9. All put together

```html
<!-- views/talents/_form_fields.ejs -->

<div class="form-group">
  <label for="name" class="form-label">Talent Name</label>
  <input required type="text" name="name" id="name" class="form-control" />
</div>

<div class="form-group">
  <label for="month" class="form-label">Debut Month</label>
  <input required type="number" name="month" id="month" class="form-control" />
</div>

<div class="form-group">
  <label for="day" class="form-label">Debut Day</label>
  <input required type="number" name="day" id="day" class="form-control" />
</div>

<div class="form-group">
  <label for="year" class="form-label">Debut Year</label>
  <input required type="number" name="year" id="year" class="form-control" />
</div>

<div class="form-group">
  <label for="unitName" class="form-label">Talent's Unit</label>
  <select name="unitName" id="unitName" class="form-select">
    <option value="5th Gen - NePoLaBo">5th Gen - NePoLaBo</option>
  </select>
</div>

<div class="form-group">
  <label for="youtube" class="form-label">YouTube Page</label>
  <input
    required
    type="text"
    name="youtube"
    id="youtube"
    class="form-control"
  />
</div>

<div class="form-group">
  <label for="twitter" class="form-label">Twitter Page</label>
  <input
    required
    type="text"
    name="twitter"
    id="twitter"
    class="form-control"
  />
</div>

<div class="form-group">
  <label for="bioBlurb" class="form-label">Talent Bio Blurb</label>
  <textarea name="bioBlurb" id="bioBlurb" class="form-control"></textarea>
</div>

<div class="form-group">
  <button type="submit" class="btn btn-primary">Save</button>
  <a href="/" class="btn btn-secondary">Cancel</a>
</div>
```

## 1.28. Using the `_form_fields` partial

We can now use our `_form_fields` partial inside the `<form>` tag in `talents/new`:

### 1.28.1. Wrapping the (unwrapped) partial view

```html
<!-- talents/new.ejs -->

<!-- the <form> wrapper -->
<form action="/talents" method="POST">
  <%- include("_form_fields") %>
  <!-- ejs render tags pointed at `_form_fields` -->
  <!-- Notice how there's no root `./` in the path, nor .ejs extension -->
</form>
```

Visiting `/talents/new` should render the `new` page's `<form>` using the `_form_fields` partial view.

## 1.29. Establishing our app's connection to MongoDB via `mongoose`

Since this is a MongoDB interaction, we'll need to import `mongoose` for use. We can set up a `connection` by creating a DB, `holoproTalents`, and passing a callback that will let us know when we are connected to the DB, and when the DB has encountered an error.

```js
// server.js

const express = require("express");
const mongoose = require("mongoose"); // top level library import

const talentsRouter = require("./routes/talentsRouter");
const talents = require("./__test__/test_talents");

const app = express();

/**
 * The connection to the db with subsequent connection notification
 * and error handling.
 * We add the extra DB error line to help us differentiate
 * a DB from any other should multiple things go wrong at once.
 */
mongoose.connect("mongodb://localhost/holoproTalents", () => {
  console.log("Connected to holoproTalents DB!"),
    (err) => {
      console.error("holoproTalents DB error:");
      console.error(err);
    };
});

app.set("view engine", "ejs");

app.use("/talents", talentsRouter);

app.get("/", (req, res) => {
  res.render("talents/index", { talents });
});

app.listen(3001, () => {
  console.log("Holo talent server listening on port 3001");
});
```

## 1.30. Defining the `Talent` model

Make a top-level directory, `models/`, and create the `Talent.js` model file. To define a model, import `mongoose`, and then define a schema with field names based off the required inputs we've covered so far.

### 1.30.1. Our form fields (the required ones)

- Name: `String`, required
- Debut Date: `Date`, required
- Unit Name: `String`, required
  - enum (one of the following): [`"<whichever gen corresponds to selected Talent>"`]
- YT page link: `String`, required
- Twitter page link: `String`, required
- Talent bio blurb: `String`, required

### 1.30.2. Adding `createdAt` & `updatedAt` document timestamps

Instead of manually designating and managing these fields, we can pass in an additional `{ timestamps: true }` object as the second argument, after the schema object definitions:

---

Finally, compile `talentSchema` into a model, name it `Talent`, and export it for use throughout this project.

```js
const mongoose = require("mongoose");

const talentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    debutDate: { type: Date, required: true },
    unitName: { type: String, required: true, enum: ["5th Gen - NePoLaBo"] },
    youtube: { type: String, required: true },
    twitter: { type: String, required: true },
    bioBlurb: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Talent", talentSchema);
```

## 1.31. `POST`ing to `/`; steps of the a new `Talent` document submission

To recap, we have a `<form>` wrapper on `new.ejs` with an `action` pointed to the `talents` index, a Save submit `<button>` in the `_form_fields` partial, and a placeholder `POST` route in `talentsRouter`:

```html
<!-- new.ejs -->

<form action="/talents" method="POST"><%- include("_form_fields") %></form>
```

```html
<!-- _form_fields.ejs -->

<button type="submit" class="btn btn-primary">Save</button>
```

```js
// routes/talentsRouter.js
// remember that `/` here is `/talents`

router.post("/", (req, res) => {});
```

There are a number of steps that need to be completed here in order for a submission to be properly completed.

1. Giving `express` the ability to read data from forms
2. Reading the submitted form data
3. Pre-processing certain form fields to match the `Talent` model's types

   1. Converting the three separate string `year`, `month`, and `day` values to a single `Date` value for `debutDate`

4. Creation of a `new` `Talent` instance using its model (not a `.create()` call!)

---

### 1.31.1. Giving `express` the ability to read data from forms

All the pieces are now in place for the `/talents` POST route. Since we're using the form's submitted data to talk to the DB, we need to tell Express to use `.urlencoded()` so that we can ready that data off of the `body` of the request.

**NB: Remember that the order of declarations matters! Add the `app.use(express.urlencoded())` call _before_ any router mounts or index routes!**

```js
// server.js

const express = require("express");
const mongoose = require("mongoose");
const talentsRouter = require("./routes/talentsRouter");
const talents = require("./__test__/test_talents");

const app = express();

app.set("view engine", "ejs");

/**
 * Note its place in the server file; !
 * now we can read off of `req.body`
 * the { extended: false } means that it does not handle `application/json`,
 * only `application/x-www-form-urlencoded`;
 * for that we can use `app.use(express.json())`
 */
app.use(express.urlencoded({ extended: false })


app.get("/", (req, res) => {
  res.render("talents/index", { talents });
});

app.use("/talents", talentsRouter);

app.listen(3001, () => {
  console.log("Holo talent server listening on port 3001");
});

mongoose.connect("mongodb://localhost/holoproTalents", () => {
  console.log("Connected to holoproTalents DB!"),
    (err) => {
      console.error("holoproTalents DB error:");
      console.error(err);
    };
});
```

### 1.31.2. Reading the submitted form data (seeing `.urlencoded()` in action)

Let's try seeing a sample submitted form's data before proceeding with creating a new `Talent` document.

```js
// routes/talentRouter

const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("talents/new");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;


// outputs to console...
[Object: null prototype] {
  name: 'Momosuzu Nene',
  month: '10',
  day: '2',
  year: '2020',
  unitName: '5th Gen - NePoLaBo',
  youtube: 'https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA',
  twitter: 'https://twitter.com/momosuzunene',
  bioBlurb: "Hololive 5th generation's orange representative, Momosuzu Nene aru~"
}
```

### 1.31.3. New `Talent` prep & deconstructing this `POST`'s `req.body`

Import the `Talent` model into `talentRouter`. In the `/talents` index `POST` route, we're gonna be interacting with the DB, so make sure to convert this to an `async` function.

The console output tells us that `req.body` is an `Object`. In Javascript, we can deconstruct collections, like arrays and objects, to make variable creation and value assignment easier.

In this case, deconstruction will allow us omit the leading `req.body` we'd normally use to use the values of the form object.

First, declare a placeholder variable for the new `Talent` to be created; then assign a `const` object using the keys of `req.body`.

```js
// routes/talentRouter

const express = require("express");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("talents/new");
});

router.post("/", async (req, res) => {
  const { name, month, day, year, unitName, youtube, twitter, bioBlurb } =
  req.body
});

module.exports = router;


// outputs to console...
[Object: null prototype] {
  name: 'Momosuzu Nene',
  month: '10',
  day: '2',
  year: '2020',
  unitName: '5th Gen - NePoLaBo',
  youtube: 'https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA',
  twitter: 'https://twitter.com/momosuzunene',
  bioBlurb: "Hololive 5th generation's orange representative, Momosuzu Nene aru~"
}
```

Now we can call values using the key as the variable, like `name`, instead of the full `req.body.name`, `month` instead of `req.body.month`, etc.

`newTalent` will come into play later on.

### 1.31.4. Converting the `year`, `month`, and `day` values to a single `Date` value for `debutDate`

Examining the console output, we can see that `month`, `day`, and `year` submitted values are strings. `debutDate` is expecting a value of type `Date`, meaning that we have to use these values to create a `Date`.

There are couple of ways to do this; we're going to convert the form strings to `Numbers` and feed those values into a `new Date()` instance.

According to the [`Date()` MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date), there are five basic forms for the `Date()` constructor:

1. No params, `new Date();`
2. Time value/timestamp number (milliseconds since 1/1/1970 or UNIX epoch), `new Date(value);`
3. Timestamp string, `new Date(dateString);`
4. An existing `Date` object, `new Date(existingDateObj)`
5. Individual date and time values (in differing specificities)

```js
// Variations of 5
// Note that months are INDEXED, so 0-11, NOT 1-12

new Date(year, monthIndex);
new Date(year, monthIndex, day);
//...there are other variants that accept hour, minute, second as well
```

The 5th form is expecting three `Number` inputs; convert each form value from `String` to `Number` by passing each into `Number()`. Remember to pay special care to to `month`, as we need to subtract by `1` to get the month to match its **monthIndex**. Pass each of those values to a `new Date()` instance and we have a `Date` value for `debutDate`.

```js
let debutDate = new Date(Number(year), Number(month) - 1, Number(day));
```

### 1.31.5. Creating a new `Talent`

First, try creating a `newTalent` using data fields from `req.body` and the processed `debutDate`.

We can now check to see the output of the `Talent` before trying any `.save()` operations by placing a `console.log(newTalent)`.

```js
let newTalent = new Talent({
  name,
  debutDate,
  unitName,
  youtube,
  twitter,
  bioBlurb,
});
console.log(newTalent);
```

...creates the following `Talent`...

```js
// keep in mind this has not yet been `.save()`d to the DB!

{
  name: 'Momosuzu Nene',
  debutDate: 2020-10-02T04:00:00.000Z,
  unitName: '5th Gen - NePoLaBo',
  youtube: 'https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA',
  twitter: 'https://twitter.com/momosuzunene',
  bioBlurb: "Hololive 5th generation's orange representative, Momosuzu Nene aru~",
  _id: new ObjectId("6219630bcdfcb38a4187bb0f")
}
```

## 1.32. Handling the success/failure of the new `Talent` entry

### 1.32.1. PASS: `POST`ing a new `Talent`

If the new `Talent` document is created successfully, we want to:

1. `.save()` this document to the DB; convert to `Talent.create`
2. redirect to newly created Talent's page, using grabbed id
3. create `param` based `:id` route in `talentsRouter`
   - no res/req actions yet

#### 1.32.1.1. Saving & Redirecting to a new `Talent` page

In the `try` portion of the `try/catch`, we will `await` the `.save()` operation's completion, and then use the `_id` of the new `Talent` to redirect to a page dedicated to them.

```js
// routes/talentsRouter.js

router.post("/", async (req, res) => {
  // ... omitted setup

  try {
    newTalent = await newTalent.save();

    // OR

    let newTalent = await Talent.create({
      name,
      debutDate,
      unitName,
      youtube,
      twitter,
      bioBlurb,
    });
  } catch (error) {
    // TODO: code on error
  }
});
```

#### 1.32.1.2. Redirecting to a new `Talent` page

We can use the new `Talent`'s `_id` to redirect to their page.

```js
// routes/talentsRouter.js

router.post("/", async (req, res) => {
  // ... omitted setup

  try {
    newTalent = await newTalent.save();
    res.redirect(`/talents/${newTalent.id}`); // <- the redirect
  } catch (error) {
    // TODO: code on error
  }
});
```

#### 1.32.1.3. Creating a param based `/:id` route

Now we build a placeholder param-based route after our `POST '/'` route that will tell us what the id of the `Talent` we are viewing is. We will be fully building out this route later on.

```js
// routes/talentRouter.js

router.get("/:id", (req, res) => {
  res.send(`Current talent id is ${req.params.id}`);
});
```

#### 1.32.1.4. Testing our PASS event flow

With the events of our PASS sequence set up, we can now test the form to see if everything works properly. Fill the form out, hit the `Submit` button, and if it all works, you should get redirected to a new page:

```
Page URL: http://localhost:3001/talents/6219684211690313d16cc8ec

Page Response Text: Current talent id is 6219684211690313d16cc8ec
```

### 1.32.2. FAIL: Re-populating the failed form with previously submitted data

When we fail to successfully create a `Talent`, we want to:

1. re-render submission page, passing down `newTalent` variable as local to express for the EJS to use.
2. modify `_form_fields` to use `talent` submission fields as default values, keeping the form populated on failed creation

#### 1.32.2.1. Re-rendering the submission form

For debug purposes, we're going to add two `console.error` at the start of the `catch` of the `try/catch` section.

One will tell us that there is an error specifically relating to the creation of a new talent, a useful statement because we will be reusing the `_form_fields` partial and constantly clicking the `Submit` button.

The second will tell us the creation error.

```js
// routes/talentRouter.js

// setup omitted...

try {
  newTalent = await newTalent.save();
  res.redirect(`/talents/${newTalent.id}`);
} catch (error) {
  console.error(
    "There has been has an error in trying to create a new Talent."
  );
  console.error(error);
}
```

#### 1.32.2.2. Passing the failed submission's data to the `_form_fields`

To prevent the user from needing to enter everything once more, we will pass down the previous submission's data to the page.

```js
// routes/talentRouter.js

// setup omitted...

try {
  newTalent = await newTalent.save();
  res.redirect(`/talents/${newTalent.id}`);
} catch (error) {
  console.error(
    "There has been has an error in trying to create a new Talent."
  );
  console.error(error);
  res.render("talents/new", { talent: req.body });
}
```

#### 1.32.2.3. Populating the submission form fields with the failed data

**NB: One exception here, the `<select>` dropdown; must work out how to pass down value to `<option>` tag.**

In `_form_fields.ejs`, we can use the `{ talent: req.body }` data passed down to `/talents/new` at render time by adding `value` fields to each form input field and assigning each their corresponding submitted form data field.

```html
<!-- views/talents/_form_fields -->

<div class="form-group">
  <label for="name" class="form-label">Talent Name</label>
  <input
    type="text"
    name="name"
    id="name"
    class="form-control"
    value="<%= talent.name %>"
  />
</div>

<div class="form-group">
  <label for="month" class="form-label">Debut Month</label>
  <input
    type="number"
    name="month"
    id="month"
    class="form-control"
    value="<%= talent.month %>"
  />
</div>

<div class="form-group">
  <label for="day" class="form-label">Debut Day</label>
  <input
    type="number"
    name="day"
    id="day"
    class="form-control"
    value="<%= talent.day %>"
  />
</div>

<div class="form-group">
  <label for="year" class="form-label">Debut Year</label>
  <input
    type="number"
    name="year"
    id="year"
    class="form-control"
    value="<%= talent.year %>"
  />
</div>

<div class="form-group">
  <label for="unitName" class="form-label">Talent's Unit</label>
  <select name="unitName" id="unitName" class="form-select">
    <option value="5th Gen - NePoLaBo">5th Gen - NePoLaBo</option>
  </select>
</div>

<div class="form-group">
  <label for="youtube" class="form-label">YouTube Page</label>
  <input
    type="text"
    name="youtube"
    id="youtube"
    class="form-control"
    value="<%= talent.youtube %>"
  />
</div>

<div class="form-group">
  <label for="twitter" class="form-label">Twitter Page</label>
  <input
    type="text"
    name="twitter"
    id="twitter"
    class="form-control"
    value="<%= talent.twitter %>"
  />
</div>

<div class="form-group">
  <label for="bioBlurb" class="form-label">Talent Bio Blurb</label>
  <textarea name="bioBlurb" id="bioBlurb" class="form-control">
    <%= talent.bioBlurb %>
  </textarea>
</div>

<div class="form-group">
  <button type="submit" class="btn btn-primary">Save</button>
  <a href="/" class="btn btn-secondary">Cancel</a>
</div>
```

#### 1.32.2.4. Handling the error on first time visit to `/talents/new`

With everything saved, refresh or go to `/talents/new`; you'll see an `ReferenceError` similar to this:

```js
ReferenceError: C:\Users\Colombo\Programming\teaching-js\markdown-blog-lesson\views\talents\new.ejs:22
    20|
    21|       <form action="/talents" method="POST">
 >> 22|         <%- include("_form_fields") %>
    23|       </form>
    24|     </div>
    25|   </body>


C:\Users\Colombo\Programming\teaching-js\markdown-blog-lesson\views\talents\_form_fields.ejs:8
    6|     id="name"
    7|     class="form-control"
 >> 8|     value="<%= talent.name %>"
    9|   />
    10| </div>
    11|


talent is not defined
```

What this means is that `talent` is **not defined** when we first load the new `Talent` submission page, only after a failed submission. To fix this, pass down a new, blank `Talent` as local data to `/talents/new`.

```js
// routes/talentRouter.js

router.get("/new", (req, res) => {
  res.render("talents/new", { talent: new Talent() });
});
```

Save and reload; the form on `/talents/new` now renders correctly with initial blank fields.

#### 1.32.2.5. Telling the user that missing fields are required

Currently, if we try to `submit` a blank form, we receive a number of errors on the validation side in the console. These errors are generated by `mongoose`.

```shell
There has been has an error in trying to create a new Talent.
Error: Talent validation failed: name: Path `name` is required., youtube: Path `youtube` is required., twitter: Path `twitter` is required.

... more error text here
```

However, the end user, the person using the site who should never see these console message, nor understand them, simply sees the page refresh with no input as to what happened or why their submission failed.

We can provide them some on-page feedback by adding the `required` attribute to each of the form fields.

This becomes especially important later down the road, if we expand the form and decide to make those new fields optional inputs.

##### 1.32.2.5.1. `<input>`

```html
<input
  required
  type="text"
  name="twitter"
  id="twitter"
  class="form-control"
  value="<%= talent.twitter %>"
/>
```

##### 1.32.2.5.2. `<select>`

```html
<select required name="unitName" id="unitName" class="form-select">
  <option value="5th Gen - NePoLaBo">5th Gen - NePoLaBo</option>
</select>
```

##### 1.32.2.5.3. `<textarea>`

```html
<textarea required name="bioBlurb" id="bioBlurb" class="form-control">
  <%= talent.bioBlurb %>
</textarea>
```

##### 1.32.2.5.4. All together

```html
<div class="form-group">
  <label for="name" class="form-label">Talent Name</label>
  <input
    required
    type="text"
    name="name"
    id="name"
    class="form-control"
    value="<%= talent.name %>"
  />
</div>

<div class="form-group">
  <label for="month" class="form-label">Debut Month</label>
  <input
    required
    type="number"
    name="month"
    id="month"
    class="form-control"
    value="<%= talent.month %>"
  />
</div>

<div class="form-group">
  <label for="day" class="form-label">Debut Day</label>
  <input
    required
    type="number"
    name="day"
    id="day"
    class="form-control"
    value="<%= talent.day %>"
  />
</div>

<div class="form-group">
  <label for="year" class="form-label">Debut Year</label>
  <input
    required
    type="number"
    name="year"
    id="year"
    class="form-control"
    value="<%= talent.year %>"
  />
</div>

<div class="form-group">
  <label for="unitName" class="form-label">Talent's Unit</label>
  <select name="unitName" id="unitName" class="form-select">
    <option value="5th Gen - NePoLaBo">5th Gen - NePoLaBo</option>
  </select>
</div>

<div class="form-group">
  <label for="youtube" class="form-label">YouTube Page</label>
  <input
    required
    type="text"
    name="youtube"
    id="youtube"
    class="form-control"
    value="<%= talent.youtube %>"
  />
</div>

<div class="form-group">
  <label for="twitter" class="form-label">Twitter Page</label>
  <input
    required
    type="text"
    name="twitter"
    id="twitter"
    class="form-control"
    value="<%= talent.twitter %>"
  />
</div>

<div class="form-group">
  <label for="bioBlurb" class="form-label">Talent Bio Blurb</label>
  <textarea required name="bioBlurb" id="bioBlurb" class="form-control">
    <%= talent.bioBlurb %>
  </textarea>
</div>

<div class="form-group">
  <button type="submit" class="btn btn-primary">Save</button>
  <a href="/" class="btn btn-secondary">Cancel</a>
</div>
```

### 1.32.3. Further form guidance (number input limiting, url validation)

## 1.33. `<select>` field - refactoring, passing values after failed submissions, mapping `<option>`s using JSON data

Currently, we have one `<select>` dropdown that contains only one `<option>`.

```html
<div class="form-group">
  <label for="unitName" class="form-label">Talent's Unit</label>
  <select name="unitName" id="unitName" class="form-select">
    <option value="5th Gen - NePoLaBo">5th Gen - NePoLaBo</option>
  </select>
</div>
```

### 1.33.1. Examining the _`selected`_ attribute

In `_form_fields.ejs`, comment out the exist `<select>` block, and then add the following in its place:

```html
<!-- views/talents/_form_fields.ejs -->

<select>
  <option>This option is displayed.</option>
  <option>This option is viewable when the dropdown is active.</option>
</select>
```

The default `<option>` displayed when a `<select>` is rendered is the **top** `<option>` within the `<select>`:

This can be overridden though; if an `<option>` has the `selected` attribute, it'll be displayed on the **first render** of a page. Subsequent renders will display the first `<option>`.

```html
<!-- views/talents/_form_fields.ejs -->

<select>
  <option>
    This option is not shown on the first render, but second render after, it'll
    be shown, even though it's the top `option`.
  </option>
  <option>This option is viewable when the dropdown is active.</option>
  <option selected>
    This option has the `selected` attribute, so it'll be shown on first render.
  </option>
  <option>This option is viewable when the dropdown is active.</option>
</select>
```

That's fine though, since all we need to is display the `<option>` that was chosen during the latest failed `Talent` submission; we can assume that any further renders of the `Talent` submission page would be the result of additional failed submissions.

### 1.33.2. Programmatically creating `<option>`s from JSON data

We can look back at `index.ejs` to see an example of how we can map over data to create parts of a template.

```html
<!-- views/talents/index -->

<div class="row">
  <% talents.forEach(talent => { %>
  <div class="col-4">
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title"><%= talent.name %></h5>
        <div class="card-subtitle text-muted mb-2"><%= talent.unitName %></div>
      </div>
      <div class="card-footer">
        <a href="/talents/<%= talent.id %>" class="card-link">View Talent </a>
      </div>
    </div>
  </div>
  <% }) %>
</div>
```

Here, we called on the `talents` data passed down by `express` into this route to create each `talent` card.

We will create a new data source from a new folder, `/data/holopro_units.json`, to pull from and pass down to the `_form_fields` template to create `<option>` elements with the correct value, display text, and `selected` status.

```json
// data/holopro_units.json

[
  "Gen 0",
  "1st Gen",
  "2nd Gen",
  "hololive GAMERS",
  "3rd Gen -Fantasy-",
  "4th Gen -holoForce",
  "5th Gen -NePoLaBo-",
  "6th Gen -Secret Society holoX-",
  "ID 1st Gen -AREA 15-",
  "ID 2nd Gen -holoro-",
  "EN 1st Gen -Myth-",
  "EN 2nd Gen -Council-"
]
```

Import this into `talentRouter.ejs` and pass it down as another key-data pair into two places:

- The form's first-time render: `GET "/new"`
- The form's render-on-fail: the `catch` side render argument of the `POST "/"` route.

```js
// routes/talentRouter

// import up top
const holoUnits = require("../data/holopro_units.json");


// updated first-time render
router.get("/new", (req, res) => {
  res.render("talents/new", { talent: new Talent(), holoUnits });
});

// passing to re-render on fail submission
catch (error) {
  console.error(
    "There has been has an error in trying to create a new Talent."
  );
  console.error(error);
  res.render("talents/new", { talent: req.body, holoUnits });
}
```

### 1.33.3. Mapping out the `<option>`s

Now that we have access to the array of units, we can map the options in `_form_fields.ejs`. There are three fields on each `<option>` we need to handle:

1. `value`
2. `selected`
3. `option text`

Replace the test `<select>` and add an `ejs` for-each like so:

#### 1.33.3.1. Just the mapped `<select>`

```js
// views/talents/_form_fields

<select name="unitName" id="unitName" class="form-select">
  <% holoUnits.forEach(holounit => { %>
  <option
    value="<%= holounit %>"
    <%= talent.unitName === holounit ? "selected" : "" %>
  >
    <%= holounit %>
  </option>
  <% }) %>
</select>
```

#### 1.33.3.2. The entire `<select> 'form-group'`

```js
// views/talents/_form_fields

<div class="form-group">
  <label for="unitName" class="form-label">Talent's Unit</label>
  <select name="unitName" id="unitName" class="form-select">
    <% holoUnits.forEach(holounit => { %>
    <option
      value="<%= holounit %>"
      <%= talent.unitName === holounit ? "selected" : "" %>
    >
      <%= holounit %>
    </option>
    <% }) %>
  </select>
</div>
```

### 1.33.4. Testing with a failed `Talent` submission

Open up the inspector, click on the `<select>` and see that none of the `<option>`s have the _`selected`_ attribute.

Try submitting a bad `Talent`, then check again. The `unitName` previously chosen for submission will now have the _`selected`_ attribute, and be rendered with the other failed submission data.

### 1.33.5. BONUS: Organizing groups of options into `<optgroup>`

We have successfully created 12 `<option>`s, 8 are HoloJP, 2 are Holo ID, 2 are Holo EN. It would be good if we could provide further group information to break up the solid block of 12 options. We can do this by adding `branch` info and restructuring `holopro_units.json`.

#### 1.33.5.1. Before the `branch` addition

```json
[
  "Gen 0",
  "1st Gen",
  "2nd Gen",
  "hololive GAMERS",
  "3rd Gen -Fantasy-",
  "4th Gen -holoForce",
  "5th Gen -NePoLaBo-",
  "6th Gen -Secret Society holoX-",
  "ID 1st Gen -AREA 15-",
  "ID 2nd Gen -holoro-",
  "EN 1st Gen -Myth-",
  "EN 2nd Gen -Council-",
  "Stars 1st Gen",
  "Stars 2nd Gen -SunTempo-",
  "Stars 3rd Gen -TriNero-"
]
```

#### 1.33.5.2. Adding `branch` data, and restructuring

```json
[
  {
    "branch": "hololive",
    "units": [
      "Gen 0",
      "1st Gen",
      "2nd Gen",
      "hololive GAMERS",
      "3rd Gen -Fantasy-",
      "4th Gen -holoForce",
      "5th Gen -NePoLaBo-",
      "6th Gen -Secret Society holoX-"
    ]
  },
  {
    "branch": "hololive Indonesia",
    "units": ["ID 1st Gen -AREA 15-", "ID 2nd Gen -holoro-"]
  },
  {
    "branch": "hololive English",
    "units": ["EN 1st Gen -Myth-", "EN 2nd Gen -Council-"]
  },
  {
    "branch": "HOLOSTARS",
    "units": [
      "Stars 1st Gen",
      "Stars 2nd Gen -SunTempo-",
      "Stars 3rd Gen -TriNero-"
    ]
  }
]
```

#### 1.33.5.3. Modifying the `_form_fields <option>` map

##### 1.33.5.3.1. Before `branch` map

```js
  <select name="unitName" id="unitName" class="form-select">
    <% holoUnits.forEach(holounit => { %>
    <option
      value="<%= holounit %>"
      <%= talent.unitName === holounit ? "selected" : "" %>
    >
      <%= holounit %>
    </option>
    <% }) %>
  </select>
```

##### 1.33.5.3.2. Before `branch` map

```js
<select name="unitName" id="unitName" class="form-select">
  <% holoUnits.forEach(({branch, units}) => { %>
    <optgroup label="<%= branch %>">
      <% units.forEach(holounit => { %>
        <option
          value="<%= holounit %>"
          <%= talent.unitName === holounit ? "selected" : "" %>
        >
          <%= holounit %>
        </option>
      <% }) %>
    </optgroup>
  <% }) %>
</select>
```

Now we have `<optgroup>`s in place to better organizes the plethora of `unitName`s.

## 1.34. Rendering a `Talent` document on `/talents/:id`

With both the **PASS** and **FAIL** `Talent` submissions handled, we can modify our **param based `/:id` route** to render the data of the document created by the successful submission.

To do this, we need to:

1. Make the `/:id` route's `(req, res)` callback `async`.
2. Fetch the `Talent` using the `/:id` param in a Model `findById` query
3. Redirect to home page if there is NO `Talent` document with the searched `_id`
4. Render the single `Talent` EJS template and pass that fetched `Talent` data to it
5. Create the basic `Talent` EJS layout

### 1.34.1. Updated `/:id` route code

```js
// routes/talentRouter.js

router.get("/:id", async (req, res) => {
  try {
    const talent = await Talent.findById(req.params.id);

    if (talent === null) {
      res.redirect("/");
    }

    res.render("talents/show", { talent });
  } catch (error) {
    console.error(error);
  }
});
```

### 1.34.2. Talent Page Base Template

```html
<!-- views/talents/show -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title><%= talent.name %></title>
  </head>
  <body>
    <div class="container">
      <h2 class="display-4"><%= talent.name %></h2>
      <p class="lead mb-4">
        <%= talent.unitName %>, Debuted <%=
        talent.debutDate.toLocaleDateString() %>
      </p>

      <div class="mb-4"><p><%= talent.bioBlurb %></p></div>

      <h5>Social Media</h5>
      <div class="row mb-4">
        <div class="col">
          <a
            href="<%= talent.youtube %>"
            class="btn btn-danger btn-block"
            target="_blank"
            >Youtube Page</a
          >
        </div>
        <div class="col">
          <a
            href="<%= talent.twitter %>"
            class="btn btn-primary btn-block"
            target="_blank"
            >Twitter Page</a
          >
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <a href="/" class="btn btn-secondary">All Talents</a>
          <a href="/talents/edit/<%= talent.id %>" class="btn btn-info"
            >Edit this Talent</a
          >
        </div>
      </div>
    </div>
  </body>
</html>
```

## 1.35. Rendering `Talent`s on the index route

We can get rid of the test `Talent` data that we used in the `GET /` route by importing the `Talent` model and `.find()`ing all available `Talent`s to render onto the page.

Additionally, we need to remove the test data we used to populate the index page with placeholder layouts.

Remember that DB interactions are `async`, so make the `(req, res)` index route callback `async` and `await` the `.find()` call.

**NB: old property name change; `talent.debuted` is now `talent.debutDate`**

```js
// server.js

// const talents = require("./__test__/test_talents"); <- Remove this local import!

app.get("/", async (req, res) => {
  const talents = await Talent.find();
  res.render("talents/index", { talents });
});
```

```html
<!-- views/talents/index -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <title>Holo Talent Server</title>
  </head>
  <body>
    <div class="container">
      <h1 class="mb-4">Our Talents</h1>
      <a href="/talents/new" class="btn btn-success">New Talent</a>

      <% talents.forEach(talent => { %>
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title"><%= talent.name %></h5>
          <div class="card-subtitle text-muted mb-2">
            <%= talent.debutDate.toLocaleDateString() %>
          </div>
          <div class="card-text mb-2"><%= talent.tagline %></div>
        </div>
      </div>
      <% }) %>
    </div>
  </body>
</html>
```

## 1.36. Sorting our `Talent`s by `debutDate`

We can chain a `.sort()` call to our `await Talent.find()` and sort by `debutDate`, from earlier to latest, by passing in `"asc"` as its sort key-value.

```js
// server.js

app.get("/", async (req, res) => {
  const talents = await Talent.find().sort({ debutDate: "asc" });
  res.render("talents/index", { talents });
});
```

## 1.37. Refactoring Index `Talent` cards

We should take a second to modify the layout of our `Talent` cards on the index route. Let's do the following:

1. Wrap the `talents.forEach()` call in a `<div class="row">`
2. Contain an individual `Talent` card's width to one-third (4cols/12cols) of this row
3. Reduce the size of the `Talent`'s name in each card
4. Replace each `Talent`'s `debutDate` with their `unitName`
5. Prune the unused `talent.tagline` value from the card

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <title>Holo Talent Server</title>
  </head>
  <body>
    <div class="container">
      <h1 class="mb-4">Our Talents</h1>
      <a href="/talents/new" class="btn btn-success">New Talent</a>

      <div class="row">
        <% talents.forEach(talent => { %>
        <div class="col-4">
          <div class="card mt-4">
            <div class="card-body">
              <h5 class="card-title"><%= talent.name %></h5>
              <div class="card-subtitle text-muted mb-2">
                <%= talent.unitName %>
              </div>
            </div>
          </div>
        </div>
        <% }) %>
      </div>
    </div>
  </body>
</html>
```

## 1.38. Add a link to each `Talent` page

Within each card on the index route, add a link to under the `<div class="card-body">`.

```html
<!-- views/talents/index -->
<!-- <row> snippet -->

<div class="row">
  <% talents.forEach(talent => { %>
  <div class="col-4">
    <div class="card mt-4">
      <div class="card-body">
        <h5 class="card-title"><%= talent.name %></h5>
        <div class="card-subtitle text-muted mb-2"><%= talent.unitName %></div>
      </div>
      <div class="card-footer">
        <a href="/talents/<%= talent.id %>" class="card-link"> View Talent </a>
      </div>
    </div>
  </div>
  <% }) %>
</div>
```

## 1.39. Adding the `marked` & `slugify` libraries

It's now time to add the `marked` and `slugify` libraries to our project.

```shell
npm i marked slugify
```

### 1.39.1. `marked` [npm page](https://www.npmjs.com/package/marked)

From their [docs](https://marked.js.org/):

> 1. built for speed
> 2. a low-level markdown compiler for parsing markdown without caching or blocking for long periods of time
> 3. light-weight while implementing all markdown features from the supported flavors & specifications
> 4. available as a command line interface (CLI) and running in client- or server-side JavaScript projects

### 1.39.2. `slugify` [npm page](https://www.npmjs.com/package/slugify)

Removes unsupported characters from URLs to use as slugs.

#### 1.39.2.1. What is a slug?

A URL slug is the part of the URL after the last backslash.

Sometimes you may see a webpage URL with a chain of characters, letters, or numbers. These slugs can be confusing to users, and they may hesitate before clicking. Those kinds of slugs don’t look very trustworthy.

A good URL slug also helps the Google crawl bots understand how to get to your page and confirms the content on it.

#### 1.39.2.2. Is There a Difference Between a URL Slug and a URL?

- The URL **slug** is the last part of a full URL.
- The URL itself is the entire web address for the page.

## 1.40. Using `marked` & `slugify`

In `Talent.js`, import `marked` and `slugify` for use in our `talentSchema`

Next, add a new field `slug` to the `talentSchema`. It will be a `String`, that is `required`, and will also be `unique`.

```js
// models/Talent.js

const mongoose = require("mongoose");
const marked = require("marked");
const slugify = require("slugify");

const talentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    debutDate: { type: Date, required: true },
    unitName: { type: String, required: true },
    youtube: { type: String, required: true },
    twitter: { type: String, required: true },
    bioBlurb: { type: String, required: true },
    slug: { type: String, required: true, unique: true }, // <-- added to the schema
  },
  { timestamps: true }
);

module.exports = mongoose.model("Talent", talentSchema);
```

## 1.41. Adding `.pre()` middleware to create a slug

We can use a `.pre()` middleware before validation to `talentSchema` to handle slug creation. We'll use the `Talent`'s name to create the slug. Pass the `name` into the `slugify` function, as well as an `options` object that:

- makes the slug lowercase
- applies `strict` rules; stripping special characters like `:` from the slug

Remember that all `.pre()` and `.post()` middleware needs to accept a `next` parameter in order to move to the next function in the chain when `next()` is called.

```js
// models/Talent.js

talentSchema.pre("validate", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }

  next();
});

module.exports = mongoose.model("Talent", talentSchema);
```

**NB: Create a new `Talent` that will have this new `slug` field code is complete so future examples work!**

## 1.42. Changing the `/:id` param routes to use the `slug` field

Instead of `findById`, we will by searching using the new `slug` field get the `Talent` data.

### 1.42.1. Old `GET '/:id'` param routing

```js
// routes/talentRouter

router.get("/:id", async (req, res) => {
  try {
    const talent = await Talent.findById(req.params.id);

    if (talent === null) {
      res.redirect("/");
    }

    res.render("talents/show", { talent });
  } catch (error) {
    console.error(error);
  }
});
```

### 1.42.2. New `GET '/:slug'` param routing

```js
// routes/talentRouter

router.get("/:slug, async (req, res) => {
  try {
    const talent = await Talent.findOne({ slug: req.params.id });

    if (talent === null) {
      res.redirect("/");
    }

    res.render("talents/show", { talent });
  } catch (error) {
    console.error(error);
  }
});
```

**Question: Why do we use `Talent.findOne` instead of `Talent.find()` here?**

## 1.43. Changing the redirect from `talent.id` to `talent.slug`

In our `POST '/'` route, we redirect using the `Talent`'s `_id` when a successful submission is completed; we can change this to use the `slug`.

### 1.43.1. Before - using `id`

```js
res.redirect(`/talents/${newTalent.id}`);
```

### 1.43.2. After - using `slug`

```js
res.redirect(`/talents/${newTalent.slug}`);
```

## 1.44. Viewing `Talent`s using the new `slug`-based link

Head back to the index page, refresh, and try to visit a `Talent` and the page should fail.

To get it working, we need to change the link in the `index` template to point to the `slug`-based link.

### 1.44.1. Before - using `id`

```html
<div class="card-footer">
  <button href="/talents/<%= talent.id %>" class="btn btn-primary btn-sm">
    View Talent
  </button>
</div>
```

### 1.44.2. After - using the new `slug` schema field

```html
<div class="card-footer">
  <button href="/talents/<%= talent.slug %>" class="btn btn-primary btn-sm">
    View Talent
  </button>
</div>
```

Notice the new nice looking slug in action.

## 1.45. Creating a `DELETE '/:id'` route

On the index page, notice that the links for the current `Talents` don't work, because these `Talents` were added to the DB _before_ the `slug` was created, and thus cannot link to their page using the new `slug` based link.

We need to a way to delete these bad `Talent` entries from the front-end.

There's a caveat here; the method we need is `DELETE`, but:

- `<a>` links can only `GET`
- `<form>` can only `GET` or `POST`

So we need an override of a sort if we want to **use our form to `DELETE`**.

### 1.45.1. Installing `method-override`

```shell
npm i method-override
```

### 1.45.2. Importing and using `method-override`

```js
// server.js

// imports
const methodOverride = require("method-override");

/**
 * Express settings
 */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
```

```js
// routes/talentRouter

router.delete("/:id", async (req, res) => {
  await Talent.findByIdAndDelete(req.params.id);
  res.redirect("/");
});
```

## 1.46. Adding a button to `DELETE` a `Talent`

Since Google would crawl over every link in our page, it would be terrible simply placed a button to `DELETE` in each `Talent` card, since it would delete every `Talent` when that link button is accessed. Instead we need to place a delete button inside **a nested `<form>`.**

We give that `<form>` an action that contains a URL query, `"?"` with the method override string we detailed in `server.js`, and finally pass the `DELETE` method.

```html
<!-- index.ejs -->
<!-- the card footer snippet -->

<div class="card-footer">
  <button href="/talents/<%= talent.slug %>" class="btn btn-primary btn-sm">
    View Talent
  </button>

  <form
    action="/talents/<%= talents.id %>?_method=DELETE"
    method="POST"
    class="d-inline"
  >
    <button type="submit" class="btn btn-danger btn-sm">Delete Talent</button>
  </form>
</div>
```

## 1.47. Enabling markdown on our pages

Looking at our newly slugged `Talent`s, we can see that even though we're inputting `bioBlurb` as multiple lines, it's all being combined into one large paragraph.

That's because our form's `bioBlurb` is stringified and has not been compiled to markdown.

The process of compiling `bioBlurb` to markdown will create HTML that we can render on each `Talent` page.

The big problem lies here lies in malicious HTML code. To address we need to sanitize our HTML output before we render it to our page.

### 1.47.1. What is HTML sanitization?

From [Wikipedia](https://en.wikipedia.org/wiki/HTML_sanitization):

> In data sanitization, HTML sanitization is the process of examining an HTML document and producing a new HTML document that preserves only whatever tags are designated "safe" and desired. HTML sanitization can be used to protect against attacks such as cross-site scripting (XSS) by sanitizing any HTML code submitted by a user.
>
> #### Details
>
> Basic tags for changing fonts are often allowed, such as `<b>`, `<i>`, `<u>`, `<em>`, and `<strong>` while more advanced tags such as `<script>`, `<object>`, `<embed>`, and `<link>` are removed by the sanitization process. Also potentially dangerous attributes such as the onclick attribute are removed in order to prevent malicious code from being injected.
>
> Sanitization is typically performed by using either a whitelist or a blacklist approach. Leaving a safe HTML element off a whitelist is not so serious; it simply means that that feature will not be included post-sanitation. On the other hand, if an unsafe element is left off a blacklist, then the vulnerability will not be sanitized out of the HTML output. An out-of-date blacklist can therefore be dangerous if new, unsafe features have been introduced to the HTML Standard.
>
> Further sanitization can be performed based on rules which specify what operation is to be performed on the subject tags. Typical operations include removal of the tag itself while preserving the content, preserving only the textual content of a tag or forcing certain values on attributes.

### 1.47.2. What is the DOM?

From [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction):

> The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.

Visit the [Introduction to the DOM page](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) for more details.

### 1.47.3. How we're going to sanitize our markdown

We're going to need a few more libraries:

```shell
npm i dompurify jsdom
```

#### 1.47.3.1. [`dompurify`](https://github.com/cure53/DOMPurify)

> DOMPurify is a DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.

##### 1.47.3.1.1. What does it do?

> DOMPurify sanitizes HTML and prevents XSS attacks. You can feed DOMPurify with string full of dirty HTML and it will return a string (unless configured otherwise) with clean HTML. DOMPurify will strip out everything that contains dangerous HTML and thereby prevent XSS attacks and other nastiness. It's also damn bloody fast. We use the technologies the browser provides and turn them into an XSS filter. The faster your browser, the faster DOMPurify will be.

#### 1.47.3.2. [`jsdom`](https://github.com/jsdom/jsdom)

> jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js.
>
> In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.

## 1.48. Creating our DOM purifier and DOM Handler

Import the DOM purifier and just the JSDOM portion of `jsdom` for use in `Talent`. Then create the purifier by passing in a `new JSDOM` window object

```js
// Talent.js

const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");

// purifier
const dompurify = createDomPurify(new JSDOM().window);
```

## 1.49. Creating a field for our sanitized HTML

We can now create a `sanitizedHTML` field on `Talent` to render our markdown form input:

```js
// Talent.js

const talentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    debutDate: { type: Date, required: true },
    unitName: { type: String, required: true },
    youtube: { type: String, required: true },
    twitter: { type: String, required: true },
    bioBlurb: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    sanitizedHTML: { type: String, required: true }, // <- added new field
  },
  { timestamps: true }
);
```

## 1.50. Parsing our markdown to be sanitized

**IMPORT CHANGE: `const marked = require("marked")` becomes `const { marked } = require("marked")`**

In the `.pre("validate")` function we wrote, add a section to parse our markdown in 3 steps:

1. Parse the markdown input first
2. Sanitize the parsed markdown
3. Assign the sanitized markdown to the `sanitizedHTML` field on `Talent` schema

**NB: Create a new `Talent` to verify the changes!**

```js
// Talent.js

talentSchema.pre("validate", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }

  // Parse, sanitize, and store our markdown HTML
  if (this.bioBlurb) {
    const parsedMarkdown = marked.parse(this.bioBlurb);
    const sanitizedMarkdown = dompurify.sanitize(parsedMarkdown);
    this.sanitizedHTML = sanitizedMarkdown;
  }

  next();
});
```

### 1.50.1. Test Markdown

```
*星街すいせい*

## "It's your shooting star, your diamond in the rough, idol VTuber Hoshimachi Suisei!"

A forever18 VTuber who deeply loves singing and idols.

Her dream is to one day hold a live concert in Tokyo Budokan.
```

We get as an output:

```
*星街すいせい* ## "It's your shooting star, your diamond in the rough, idol VTuber Hoshimachi Suisei!" A forever18 VTuber who deeply loves singing and idols. Her dream is to one day hold a live concert in Tokyo Budokan.
```

## 1.51. Adding our sanitized HTML to the `Talent` page

In `show.ejs`, output the raw, unescaped value to the page:

```js
// show.ejs

<div class="mb-4"><p><%- talent.sanitizedHTML %></p></div>
```

## 1.52. Adding edit route functionality

Copy the `"/new"` route as a base, and change to `edit`. Find the `Talent` by its id, then pass it to a new, `edit` view template.

```js
// talentRouter.js

router.get("/edit/:id", async (req, res) => {
  const talent = await Talent.findById(req.params.id);
  res.render("talents/edit", { talent, holoUnits });
});
```

## 1.53. Creating the `edit` view

Copy over the `new` view, then change the titling to reflect its purpose.

In the `<form>` action, make sure to add an `PUT` method override:

```html
<!-- edit.ejs -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <title>Edit <%= talent.name %> data</title>
  </head>
  <body>
    <div class="container">
      <h1>Edit <%= talent.name %> data</h1>

      <form action="/talents/<%= talent.id %>?_method=PUT" method="POST">
        <%- include("_form_fields") %>
      </form>
    </div>
  </body>
</html>
```

## 1.54. Understanding the `PUT` route; Extracting common functionality

Create a base `PUT` route that will use `/:id` as a param:

```js
// talentRouter.js

router.put("/:id", (req, res) => {});
```

This route will share a lot of the logic that the `GET /:id` route does, so let's create a function at the end of `talentsRouter` to consolidate all the common functionality.

It's going to return the `(req, res)` middleware function present in **BOTH routes.**

```js
// talentsRouter.js

function saveArticleAndRedirect(path) {
  return (req, res) => {};
}
```

Copy the logic from `GET '/:id'`, and pass the `path` to the fail render, where `path` will be one of `'new'` or `'edit'`.

The idea is to get the `Talent` from the request, save it to the DB, and then hit the `try/catch` block to determine next step.

```js
// talentsRouter.js

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    const { name, month, day, year, unitName, youtube, twitter, bioBlurb } =
      req.body;

    let debutDate = new Date(Number(year), Number(month) - 1, Number(day));

    try {
      let newTalent = await Talent.create({
        name,
        debutDate,
        unitName,
        youtube,
        twitter,
        bioBlurb,
      });
      res.redirect(`/talents/${newTalent.id}`);
    } catch (error) {
      console.error(
        "There has been has an error in trying to create a new Talent."
      );
      console.error(error);
      res.render(`talents/${path}`, { talent: req.body, holoUnits });
    }
  };
}
```

## 1.55. Refactoring `Talent.create` to an `await .save()` function to handle both `'new/edit'` cases

In our `try/catch` currently, we're using a `Talent.create()`. The problem now is that we're creating blank `Talent` to use in our extracted middleware function that makes part of `Talent.create()` redundant.

We need to change it to an `await .save()` function.

### 1.55.1. Extracting `Talent` values assignment to its own function

```js
//talentRouter.js

function assignTalentValues(oldTalent, newTalentVals) {
  const { name, month, day, year, unitName, youtube, twitter, bioBlurb } =
    newTalentVals;

  const debutDate = new Date(Number(year), Number(month) - 1, Number(day));

  oldTalent.name = name;
  oldTalent.debutDate = debutDate;
  oldTalent.unitName = unitName;
  oldTalent.youtube = youtube;
  oldTalent.twitter = twitter;
  oldTalent.bioBlurb = bioBlurb;

  // final talent
  return oldTalent;
}
```

## 1.56. Passing `saveTalentAndRedirect` as middleware to `POST '/'`

Since we've just extracted the logic out to a separate middleware function to run in `POST '/'`, we need to modify that route to go on this new middleware after the initial blank `req.talent` is created.

First, pass that function with the `'new'` param, as a callback.

```js
// talentRouter.js
// POST '/' refactor
router.post(
  "/",
  async (req, res, next) => {
    req.talent = new Talent();
    next();
  },
  saveTalentAndRedirect("new")
);

//
```

## 1.57. Building the `PUT '/'` route

With all the logic in place, we can replicate a similar flow as `POST '/'` route. The difference is that this route:

- is `/:id` param-based
- will perform a search for the `Talent` using that `id`
- pass `'edit'` to the `saveTalentAndRedirect` middleware function

```js
// talentRouter.js

router.put(
  "/:id",
  async (req, res, next) => {
    req.talent = await Talent.findById(req.params.id);
    next();
  },
  saveTalentAndRedirect("edit")
);
```

## 1.58. Adding a button to edit `Talent` from their page

Check the route as it changes on-click.

```js
// show.ejs

<a href="/talents/edit/<%= talent.id %>" class="btn btn-info">
  Edit this Talent
</a>
```
