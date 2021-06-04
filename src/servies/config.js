const devBaseURL = "http://123.207.32.32:9001"
const proBaseURL = "http://123.207.32.32:9001"
export const baseURL = process.env.NODE_ENV === 'developement' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000