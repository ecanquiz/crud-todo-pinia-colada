import axios from 'axios'
 import useHttp from '@/useHttp';

const {
  data,
  errors,
  pending
} = useHttp();

const instance = axios.create({
  baseURL: 'http://localhost:8000/api'
});

const useQuery = async (url: string) => {
  try { data.value = (await instance.get(url)).data; }
  catch (e) { errors.value = e as Error }
  finally { pending.value = false; }
  return { data, errors, pending }; 
}

export const getTasks = async () => {
  return await useQuery("/tasks")
}

/*export const getTasks = async () => {
   try { data.value = (await instance.get("/tasks")).data; }
   catch (e) { errors.value = e as Error }
   finally { pending.value = false; }
   return { data, errors, pending }; 
}*/

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