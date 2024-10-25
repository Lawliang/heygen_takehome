# VideoTranslationSDK React Demo

## Overview

This is the demo application to show how third-party applications may use the Heygen Video Translation SDK in their own projects.

## How To Run The Demo

1. Simply navigate your current working directory to 'demo' in terminal, and then type 'npm run dev' to spin up your development server.
1. Open a web browser (recommended Chrome) and navigate to localhost:5173 where the server is being hosted. Open the console.
2. Select the 'create new translation job' button.
    - the console should return a job ID with a unique UUID value saved to your local DB.
3. Copy/paste the job ID value into the input below and select 'get job status'.
    - the console should return the current status of the job specified.
    - if the console logs ('cache hit!'), that means that status was taken from the cache instead of making an unnecessary API call to the server.