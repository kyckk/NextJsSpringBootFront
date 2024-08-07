'use client'


import { useEffect, useRef, useState } from "react";
import { getSerach } from "../common/api/getSearch"
import Pageable from "../common/pageNation/Pageable";
import NoticeList from "../pages/[NoticePage]/NoticeList";
import Link from "next/link";


export default function Content(){
    
    const searhKeyword =useRef(''); 
    const [noticeList,setNoticeList] =useState([]); 
    const pageArray =useRef([]); 
    const handleChange = (event:any) => {
        
        searhKeyword.current =event.target.value
      };
      
    const  search = async(searchNum:number)=>{
      
       let res= await getSerach(searhKeyword.current,searchNum);
       pageArray.current= res
       console.log(res)
       setNoticeList(res.boards.content);
      
    }
    useEffect(()=>{
        search(1);
    },[])
    console.log(noticeList);
    
    return <>
             
        <div className="container">
       <h2 className="mt-5">게시판 </h2>   
    
        <div>총 건수 : <span ></span></div>
        <div className="d-flex mb-2  justify-content-end"  > 
        
                <label htmlFor= "seachText" className="sr-only"/>
                <input  id="seachText"  onChange={handleChange} name="seachText" className="form-control me-2 w-25 float-right"/>
                <button onClick={()=>{search(1)}} className="btn btn-primary btn-sm" id="searchButton">하이</button>
            
        </div>
  
        <table className="table table-striped">
            <thead >
                <tr>
                    <th scope="col"></th>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">내용</th>
                    <th scope="col">등록일자</th>
                </tr>
            </thead>
            <tbody id="noticeList">
                {
                    noticeList.map((el:any)=>{
                        return <tr key={el.noticeId}>
                                  <td><input className="form-check-input" type="checkbox" value="" id="checkBox"/></td>
                                  <td >{el.noticeId}</td>
                                  <td> <Link href={`/pages/${el.noticeId}`}>{el.title} </Link></td>
                                  <td >{el.content}</td>
                                  <td >{el.insertDt}</td>
                               </tr>
                    })
                }
            
               
            </tbody>
        </table>
        <Pageable page={pageArray} search={search}></Pageable>

    </div>
           </>
}