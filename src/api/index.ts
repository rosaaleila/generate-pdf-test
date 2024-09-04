import axios from "axios";

const apiUrl = 'http://localhost:3000/v1'

const requestApi = async (data: FormData) => {
    try {
        await axios.post(apiUrl, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

      } catch (error) {
        console.error(error);
      }
}

export default requestApi; 