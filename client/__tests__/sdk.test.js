import VideoTranslationSDK from '../src/VideoTranslationSDK';
import path from 'path';
import { spawn } from 'child_process';
import { validate } from 'uuid';


let serverProcess;
let sdk;

beforeAll((done) => {
    process.chdir(path.join(process.cwd(), '../backend'));
    // Start Django server using spawn
    serverProcess = spawn('python', ['manage.py', 'runserver']);
    // Wait 3s for the server to start
    setTimeout(() => {
        sdk = new VideoTranslationSDK('Demo123'); // Initialize sdk after server starts
        if (serverProcess) console.log('Successfully spun up server.');
        done();
    }, 2000);
});

afterAll(() => {
    // Terminate Django server
    if (serverProcess) {
        serverProcess.kill();
        console.log('Successfully terminated server.');
    }
});

// Test Suites
describe('getStatus method', () => {
    it('returns the current status of a job (ex. pending, completed, or error)', async () => {
        const jobId = await sdk.createJob();
        // Get status of existing job
        const response = await sdk.getStatus(jobId);
        expect(typeof response).toBe('object');
        expect(response).toHaveProperty('result');
        expect(["pending", "completed", "error"]).toContain(response.result);
    });
})

describe('createJob method', () => {
    it('returns a valid job ID (ex. uuid)', async () => {
        // Create a new job
        const jobId = await sdk.createJob();
        expect(validate(jobId)).toBe(true);
    });
});
