'use client'
import getSave from "@/app/common/api/getSave";
import Top from "@/app/component/Top";
import { useReducer, useRef, useState,useEffect } from "react";
import { useRouter ,useParams} from "next/navigation";
import axios from "axios";
import FileUploadList from "./FileUploadList";
import { getDetail } from "@/app/common/api/getDetail";


export default function NoticeForm() {
    const [files, setFiles] = useState<File[]>([]);
    const [image, setImage] = useState("");
     //const [arrayCount , dispatch] =useReducer(reducer,intialState);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [noticeId, setNoticeId] = useState("");
    const router =useRouter();
    const [arr, setArr] = useState<Array<any>>([]);
   
    const Params=useParams();

    const idx:string =String(Params.NoticePage);
    useEffect(()=>{
        
      getDetail(idx);
        
    },[])
   
    console.log(Params) // URL에서 idx 매개변수에 액세스
    const titleChangeHandler = (e: any) => {
        setTitle(e.target.value);
        console.log("Title changed!");
    };

    const contentChangeHandler = (e: any) => {
        setContent(e.target.value);
        console.log("content changed!");
    };
    const noticeIdChangeHandler = (e: any) => {
        setNoticeId(e.target.value);
        console.log("content changed!");
    };
   
   const createInput=()=>{
    console.log(arr.length)
    
    console.log(arr)
    if(arr.length > 2 ){
        alert ("파일을 3개이상 업로드 할 수 없습니다.")
        return;
    }
   
    setArr ([...arr,{id:arr.length+1}])
   
   }
   
    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
      
        const  file: File = e.target.files![0];
        setFiles(prefiles=>[...prefiles,file]);
        console.log(files);
        const reader = new FileReader();
        reader.onload = (e:any) => {
            // 읽어온 값을 갱신하기
            console.log(e.target!.result);
            setImage(e.target!.result)
            
          };
          reader.readAsDataURL(file);
       
         
    }
    const save = async () => {
        console.log("content changed!");
        const formdata = {
            title: title,
            content: content,
            noticeId: noticeId,
        }
        let res = await getSave(formdata);
        console.log("formdata=" + formdata);
        console.log("res="+res);
        res == "sucess"? router.push("/"):console.log("저장실패했습니다")
    }
    const deleteFile= (index:number)=>{
        console.log(index);
        console.log(arr);
        setArr(pre => pre.filter(a=>a.id != index))
       
    }
    const fileSave= async() =>{
        console.log(files)
        
        const formData = new FormData()
        files.forEach((fileEl) =>{
            formData.append('uploadFile', fileEl)
        })

        try {
        
            const imageRes = await axios.post('http://localhost:8080/board/image', formData, {
              // 헤더에 보낼 파일의 타입이 multipart라 말해줘야 한다. 이미지 파일은 크기 때문에 부분으로 나눠서 보내기 때문
                headers: { "Content-Type": "multipart/form-data" }
            })
            // 반환받은 이미지 URL, 원하는 곳에 사용하면 된다. 나 같은 경우 회원가입 할 때, 회원정보와 같이 한 번에 서버로 보내줬다.
            //const image_URL = imageRes.data.imageURL
        } catch (e:any) {
            console.error(e.response)
        }
    }
    return <>
        <Top />
        <div className="container">

            <h2 className="mt-5  py-2">게시판 </h2>
            <form className="row g-3">
                <div className="col-mb-4">
                    <label htmlFor="title" className="form-label">제목</label>
                    <input type="text" onChange={titleChangeHandler} className="form-control" id="title" required />

                </div>
                <div className="col-mb-4">
                    <label htmlFor="content" className="form-label">내용</label>
                    <textarea className="form-control is-valid" onChange={contentChangeHandler} id="content" required></textarea>
                    <div className="valid-feedback" >
                        제목 에러 메세지
                    </div>
                </div>
                <div className="col-mb-5">
                    <label htmlFor="input-file" className="form-label">이미지 선택</label>
                    {arr.map((el,index)=>(<>
                    <div className="d-flex">
                    <input   key={el.id}  type="file"  onChange={handleImage} name="uploadFile" className="form-control" multiple />
                    <button key={index}  type="button" className="btn btn-outline-secondary" onClick={()=>deleteFile(index)}>x</button> 
                    </div> 
                    </>))}   
                </div>
            
                <button type="button" onClick={createInput} className="btn btn-outline-secondary">파일추가</button> 
                
             {/* <FileUploadList files={files} onChangeFile={handleImage} ></FileUploadList> */}
                <input type="hidden" onChange={noticeIdChangeHandler} className="form-control" id="noticeId" />
            </form>
            <div className="text-end py-2">
                <a type="button" className="btn btn-primary" >취소</a>
                <button onClick={() => { save() }} className="btn btn-primary">확인</button>
                <button onClick={() => { fileSave() }} className="btn btn-primary">test</button>
            </div>

        </div>
    </>
}