export default class VideoTranslationSDK {
    constructor(apiKey) {
        // Checks to see if an API key exists
        if (!apiKey) {
            throw new Error('An API key is required for authentication.');
        }
        // This should always point to the backend server's URL
        this.baseUrl = 'http://localhost:8000';
        this.apiKey = apiKey;
        this.cache = {
            status: null,
            jobId: null
        };
        this.cacheExpiration = 0;
        this.cachedTTL = 10000;
    }

    // Fetches the status of a job from the server
    async fetchStatus(jobId) {
        try {
            const response = await fetch(`${this.baseUrl}/api/status/${jobId}/`);
            if (!response.ok) {
                throw new Error(`Error fetching job status: ${response.statusText}`);
            }
            const status = await response.json();
            this.updateCache(status, jobId);
            return status;
        } catch (error) {
            console.error(`Failed to fetch job status: ${error.message}`);
            throw new Error('Failed to retrieve job status');
        }
    }

    // Retrieves the status of a job, using cache if valid
    async getStatus(jobId) {
        if (this.cache.jobId === jobId && this.isCacheValid()) {
            console.log('cache hit!');
            return this.cache.status;
        } else {
            return await this.fetchStatus(jobId);
        }
    }

    // Creates a new job on the server
    async createJob() {
        try {
            const response = await fetch(`${this.baseUrl}/api/create-job/`);
            if (!response.ok) {
                throw new Error(`Error fetching job status: ${response.statusText}`);
            }
            const data = await response.json();
            return data.job_id;
        } catch (error) {
            console.error(`Failed to create job: ${error.message}`);
            throw new Error('Failed to create new job');
        }
    }

    // Updates the cache with the latest job status
    updateCache(status, jobId) {
        this.cache = { status, jobId };
        if (status.result === "pending") {
            this.cacheExpiration = Date.now() + this.cachedTTL;
        } else {
            this.cacheExpiration = Infinity;
        }
    }

    // Checks if the cache is still valid
    isCacheValid() {
        return Date.now() < this.cacheExpiration;
    }
}
