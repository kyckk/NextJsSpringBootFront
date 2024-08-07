import axios from "axios";

export default async function getSave(formData: object){

    console.log(formData);
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      };
    const resposne = await axios.post('http://localhost:8080/board/reactForm',formData,{headers});
    return resposne.data

}