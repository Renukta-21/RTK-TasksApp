import axios from "axios";

const baseURL = 'http://localhost:3001/tasks'

const getAll=async()=>{
    const response = await axios.get(baseURL)
    return response.data
}
const postNew=async(task)=>{
    const response = await axios.post(baseURL, task)
    return response.data
}

export default {getAll, postNew}