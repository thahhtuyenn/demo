import axios from 'axios';

const URL_API = "https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos";

export const fetchTodosApi = async () => {
  const response = await axios.get(URL_API + '?completed=false');
  return response.data;
};

export const updateData = async (id, bodyChange) => {
    try {
        const response = await axios.put(`${URL_API}/${id}`, bodyChange)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const addData = async (body) => {
    try {
        const response = await axios.post(URL_API, body)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}