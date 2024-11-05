import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}?completed=false`)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        // axios({
        //     method: "GET",
        //     url: "https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos?completed=false",
        // })
        //     .then((response) => {
        //         setTodos(response.data)
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    const updateData = async (id, bodyChange) => {
        try {
            const response = await axios.put(`${url}/${id}`, bodyChange)
            fetchData()
        } catch (error) {
            setError(error)
        }

        // axios({
        //     data: bodyChange,
        //     method: "PUT",
        //     url: "https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos/" + id,
        // })
        //     .then((response) => {

        //         fetchData();

        //         ToastAndroid.show("Đã hoàn thành " + bodyChange.title, ToastAndroid.SHORT);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // fetch("https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos/" + id, {
        //     method: "PUT",
        //     headers: { 
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(bodyChange),
        // }).then(() => {
        //     fetchData();
        // })


    }

    const addData = async (body) => {
        try {
            const response = await axios.post(url, body)
            fetchData()
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, error, updateData, addData, fetchData, setData }
}


export default useApi;