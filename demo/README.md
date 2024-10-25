# VideoTranslationSDK React Demo

## Overview

This is the demo application to show how third-party applications may use the Heygen Video Translation SDK in their own projects.

## How To Run The Demo

** ATTENTION: BEFORE YOU START **
Before starting the demo, please check that you have followed all the instructions in the parent directory's README.md in order to set up your environment.

1. Simply navigate your current working directory to 'demo' in terminal.
2. Run 'npm install' to download all modules from the demo app. Then, run 'npm run dev' to launch the development server locally.
3. Open a web browser (recommended Chrome) and navigate to localhost:5173 where the server is being hosted. Open the console.
4. Select the 'create new translation job' button.
    - the console should return a job ID with a unique UUID value saved to your local DB.
5. Copy/paste the job ID value into the input below and select 'get job status'.
    - the console should return the current status of the job specified.
    - if the console logs ('cache hit!'), that means that status was taken from the cache instead of making an unnecessary API call to the server.