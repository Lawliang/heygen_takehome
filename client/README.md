# VideoTranslationSDK

## Overview

The `VideoTranslationSDK` is a client library designed to interact with Heygen's video translation service. It provides an easy-to-use interface for creating video translation jobs and fetching their statuses, with built-in caching to minimize API calls.

## Features

- **Create Video Translation Jobs**: Easily initiate new video translation jobs.
- **Fetch Job Status**: Retrieve the current status of a video translation job.

## Installation

To use the `VideoTranslationSDK`, you need to include it in your project. You can do this by importing the library directly from your local setup:

1. Clone the repository at https://github.com/Lawliang/heygen_takehome or download the `VideoTranslationSDK.js` file.
2. Place the file in your project's directory.
3. Import the SDK into your JavaScript or TypeScript file.

## API Documentation

### Methods

#### `createJob()`

- Description: Initiates a new video translation job on the server, returns the job ID.
- Inputs: None
- Outputs: A promise that resolves to a string representing the job ID (UUID).

#### `getStatus(jobId)`

- Description: Takes in the job ID as the first parameter and returns the current status of a specific job.
- Inputs: (jobId: string)
- Outputs: A promise that resolves to an object containing the job status.

## Demo Application

To see how a third-party application might use the `VideoTranslationSDK`, please refer to App.jsx in the 'demo' folder as an example. 
This demo is a simple React application that utilizes both methods to access the status for specific jobs.
