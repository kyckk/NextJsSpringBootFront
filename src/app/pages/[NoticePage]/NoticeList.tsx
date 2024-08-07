
'use client'
import { noticeListType } from "@/app/common/Type/CommonRequest";


type Props ={
    item:[];
}

export default function NoticeList({item}:Props){
    console.log(item)
    return (<>
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
                    item.map((el:any)=>{
                        return <tr key={el.noticeId}>
                                  <td><input className="form-check-input" type="checkbox" value="" id="checkBox"/></td>
                                  <td >{el.noticeId}</td>
                                  <td><a>{el.title}</a></td>
                                  <td >{el.content}</td>
                                  <td >{el.insertDt}</td>
                               </tr>
                    })
                }
            
               
            </tbody>
        </table>
            </>)
}