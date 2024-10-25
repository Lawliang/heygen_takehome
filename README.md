### TABLE OF CONTENTS

If you would like to use the demo application to see how the SDK works via development server, please see README.md in demo folder.

If you would like to see the API documentation and instructions on how to use the SDK, please see README.md in client folder.

### ENVIRONMENT SETUP (REQUIRED!)

Please follow the instructions below upon downloading this repo in order to set up your development environment.

1. Create your virtual environment for Python:
    a. Make sure you have Python installed (run python --version in terminal to check)
    b. Navigate to the 'heygen_takehome' project directory in terminal
    c. Run 'python -m venv .venv' in terminal
    d. Run either 'source .venv/bin/activate' (mac) or '.\.venv\Scripts\activate' (windows)
        - You should now see the virtual environment in your terminal prompt! 
    e. Navigate to the 'backend' subdirectory in terminal (cd backend)
    f. Run 'pip install -r requirements.txt'
2. Navigate to both client and demo folders and run 'npm install' to download all modules.
3. TO RUN THE TRANSLATION SERVER: Navigate to the 'backend' folder, then run 'python manage.py runserver'
4. TO RUN THE DEMO APP: Open a new terminal, navigate to the 'demo' folder, then run 'npm run dev'.

Both servers need to be run in order to simulate the full process.

You can also run the integration tests in the 'client' folder, but make sure to close both existing servers so that Jest can use them to run tests. The command to run the tests is 'npm test'.

### GENERAL

Hello Heygen Team, thank you for giving me the opportunity to work on this takehome! It was pretty fun.

My workflow for building this project was pretty much the following:
    1. Define the user story
    2. Determine requirements/basic file structure
    3. Backend development (backend)
        - Initialized Django project & SQL
        - Write the model/endpoints
        - Test if endpoints are returning expected values
    4. Frontend development (client)
        - Initialized JS project (vite)
        - Write SDK's methods
        - Impliment strategy to reduce unnecessary API calls (caching)
        - Write Jest integration tests to test if methods are returning expected values
    5. Demo development (demo)
        - Initialized React project (vite)
        - Build out App.jsx to produce a simple React app that calls the SDK's methods
    6. Build Readme's

### USER STORY

One of Heygen's clients (user) wants to import the Video Translation service onto their own application. 
Heygen's team provides a Javascript SDK that allows users to import the library and call on it's methods to interact with Heygen's remote Video Translation server.

### REQUIREMENTS

- User must be able to initialize the client with their API key for authentication
- Get Status Function **added**
    -- Receives the job ID and returns the status of the job (pending/completed/error)
- Status Caching **added**
    -- Limits the number of repeated requests if the status does not change within certain intervals
- Integration tests **added**
    -- Use Jest integration tests to test expected values of Get Status. Need to figure out how to spin up a Python server via Javascript file.

### STRETCH FEATURES

- Add authentication based on API key when user first spins up their class instance of the SDK. This will validate whether they are permission by Heygen to use the endpoints. **added**
- Add individual job IDs via a create Job function that allows each server to handle multiple requests rather than a single one. **added**
- Add a min/max cached TTL value depending on whether 80% of the expected processing time for a video has passed. The processing time should be based on video length. This way, jobs that are nowhere close to finishing will cache their status longer than jobs that are close to completing. 
    -- While doing some research, I uploaded 3 videos (10s, 1min, and 3min) to Heygen with varying lengths to test how the processing speed varies based on video duration. THe processing took 4min, 12min, and 35min respectfully. By taking the average of those times, my assumption was that I could predict how long a job could take, and then change the cached TTL accordingly as the completion time nears. This is based on my assumption that video duration is the largest factor that impacts processing speed, which was true in my own findings.
