import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const getTasks = async () => {   
  return (await instance.get("/tasks")).data;    
}

export const getTask = async <T>(taskId: T) => {
  return (await instance.get(`/tasks/${taskId}`)).data;
}

export const insertTask = async <T>(payload: T) => {
  return (await instance.post(`/tasks`, payload)).data;
}
  
export const updateTask = async <T,U>(taskId: T, payload: U) => {
  return (await instance.put(`/tasks/${taskId}`, payload)).data;
}

export const removeTask = async <T>(taskId: T) => {  
  return (await instance.delete(`/tasks/${taskId}`)).data;
}