# News App Project

## Project Overview

This project is a simple news app built with HTML, CSS, JavaScript, and a third-party news API. I created this website to learn JavaScript, specifically focusing on fetching data from an external API, handling errors, and dynamically displaying information on a webpage. The project helped me gain hands-on experience with modern JavaScript practices and client-server interactions.

### Why I Created This Project

As a beginner in JavaScript, I wanted to build a practical application that would enhance my understanding of how to interact with external data sources and manipulate the DOM. A news app seemed like an ideal project to practice these concepts since it involves fetching live data, handling user input, and updating the UI dynamically based on that data.

---

## Features

- **Dynamic News Fetching**: Users can search for news articles based on different topics like politics, finance, and sports.
- **Error Handling**: The app handles errors gracefully, displaying error messages when something goes wrong with the data fetching.
- **Responsive Design**: The website is designed to be mobile-friendly and adjusts well to different screen sizes.

---

## Challenges Faced

### 1. **CORS Issues**: 
   During development, I encountered CORS (Cross-Origin Resource Sharing) issues when trying to fetch data from the News API. The error message I received was something like:
   ```
   CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
   ```
   This occurred because the News API did not allow direct requests from the browser for security reasons.

   **Solution**: 
   I used a proxy service (like CORS Anywhere) to bypass the CORS restriction by appending the proxy URL before the actual API endpoint. This allowed me to fetch the data successfully, even though it wasn’t a permanent solution.

### 2. **Node Fetch Issue on Vercel**:
   When deploying the project on Vercel, I received an error like:
   ```
   Cannot find module 'node-fetch'
   ```
   This was because `node-fetch` was not installed in the environment by default.

   **Solution**: 
   I added `node-fetch` as a dependency in my `package.json` and set up the Vercel environment to correctly install the necessary packages during deployment. This fixed the issue and allowed the app to work correctly.

### 3. **Handling Asynchronous JavaScript**:
   I had to learn how to properly handle asynchronous JavaScript, especially when making API requests using `fetch()`. Managing the asynchronous flow, understanding `Promises`, and using `async/await` for cleaner code were key aspects of this project.

---

**Future Improvements** 🌟

**Authentication** 🔐:
I will implement user authentication using the Django framework, allowing users to securely register, log in, and personalize their experience on the platform.

**UI/UX Improvements** 🎨:
I plan to improve the user interface by adding more interactive features like categories or sorting options to enhance usability and the overall look and feel.

**Django Backend Integration** ⚙️:
I will integrate a Django backend, enabling users to create accounts on the platform. This feature will allow users to search for news and stay updated on what's happening around them. Currently, the News API only provides 200 API hits per day, which limits the number of searches users can perform. I plan to address this limitation by working on a more flexible solution with the Django backend to manage search functionality and provide a better experience for users.

This version explains that the News API's 200 hits limit is a current constraint, and you're working on a more flexible solution to overcome this in the future.


## Conclusion

This project was a great learning experience that helped me improve my JavaScript skills. It gave me a deeper understanding of working with external APIs, handling CORS issues, and deploying a project to a serverless platform like Vercel. Despite facing some challenges along the way, I was able to overcome them through research, experimentation, and problem-solving.

---

