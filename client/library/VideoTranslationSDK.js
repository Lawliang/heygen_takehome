export default class VideoTranslationSDK {
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error('API key is required for authentication.')
        }
        this.baseUrl = 'http://localhost:8000'
        this.apiKey = apiKey;
        this.cache = 
            {
                status: null, 
                jobId: null
            };
        this.cacheExpiration = 0;
        this.pendingTTL = 10000;
    }

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
            throw new Error(`Failed to retrieve job status`);
        } 
    }

    async getStatus(jobId) {
        if ((this.cache.jobId === jobId) && this.isCacheValid()) {
            console.log('cache hit!')
            return this.cache.status;
        } else {
            return await this.fetchStatus(jobId);
        }
    }

    async createJob() {
        try {
            const response = await fetch(`${this.baseUrl}/api/create-job/`);
            if (!response.ok) {
                throw new Error(`Error fetching job status: ${response.statusText}`);
            }
            const data = await response.json()
            console.log('data:', data)
            return data.job_id
        } catch (error) {
            console.error(`Failed to create job: ${error.message}`);
            throw new Error(`Failed to create new job`);
        }
    }

    // cache helper functions
    updateCache(status, jobId) {
        this.cache = {status, jobId};
        if (status.result === "pending") {
            this.cacheExpiration = Date.now() + this.pendingTTL;
        } else {
            this.cacheExpiration = Infinity;
        }
    }

    isCacheValid() {
        return Date.now() < this.cacheExpiration;
    }

}