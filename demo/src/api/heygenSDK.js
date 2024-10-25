import VideoTranslationSDK from "../../../client/src/VideoTranslationSDK"
// initialize the client library
const heygenSDK = new VideoTranslationSDK('Demo123') // Demo123 is being passed in because it is a valid API key set in the backend. Any other string would unauthenticate the request. Try it!

export default heygenSDK;