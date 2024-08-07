
import axios from "axios";
import { seacrhType } from "../Type/CommonRequest";

interface search  extends seacrhType{

}
export const getSerach = async (SearchKeyword:string,searchNum:number)  =>{


    const headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      };
    let formData:search = {
        title:SearchKeyword,
        searchNum:searchNum,
    }
    const resposne = await axios.post('http://localhost:8080/board/test',formData,{headers});
    console.log(resposne.data);
    //let arr08: Array<object> =
    return resposne.data
};
