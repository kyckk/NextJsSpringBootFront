import axios from "axios";

export const  getDetail=async(idx:string)=>{

        const headers = {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          };
        let formData = {
            idx:idx
        }
        
            const response=await axios.post('http://localhost:8080/pages',formData,{headers})
           
}