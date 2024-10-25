import { useRef } from "react"
import './App.css'
import VideoTranslationSDK from "../../client/src/VideoTranslationSDK"

// initialize the client library
const heygenSDK = new VideoTranslationSDK(
  'http://localhost:8000/status',
  'your-api-key-here',
)

function App() {
  const inputRef = useRef(null)

  const handleGetStatus = async (jobId) => {
    try {
      const status = await heygenSDK.getStatus(jobId);
      console.log(`Job Status: ${status.result}`)
    } catch (error) {
      console.error(`Failed to get job status: ${error}`)
    }
  }
  const handleCreateJob = async () => {
    try {
      const jobId = await heygenSDK.createJob();
      console.log(`Created job with ID: ${jobId}`);
    } catch (error) {
      console.error(`Failed to create job: ${error}`)
    }
  }

  return (
    <>
      <div className="context-box">
        <h1>Heygen SDK Tester App</h1>
        <div className="buttons-container">
          <button onClick={handleCreateJob}>
            create new video translation job
          </button>
          <div className="input-button-container">
            <input placeholder="job ID" ref={inputRef}/>
            <button onClick={() => {handleGetStatus(inputRef.current.value)}}>
              get job status
            </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
