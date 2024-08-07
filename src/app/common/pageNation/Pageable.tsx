'use client'

import Link from "next/link";

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }

export default function Pageable(Props: any) {
 console.log(Props.page.current)
    
    const currentPage: string = Props.page.current.searchNum;
        const startPage: number = Props.page.current.startPage;
        const endPage: number = Props.page.current.endPage;
        const pageSize: number = Props.page.current.pagesize;
        const arrsize = (endPage != null && startPage !=null )? (endPage-startPage)+1 : 0;
    const searchClick=(search:number)=>{
        Props.search(search);
    }   
    
  return (<>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {currentPage=="1" && (<li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>)}
                {currentPage!="1" && (<li className="page-item"><a className="page-link" href="#">Previous</a></li>)}
                {[...Array(arrsize)].map((el, index) => {
                    return <li className="page-item"><Link className="page-link" href="#" onClick={()=>searchClick(index+1)} key={index+1}>{index + 1}</Link></li>
                }

                )}
                 {parseInt(currentPage)==endPage && (<li className="page-item disabled"><a className="page-link" href="#">Next</a></li>)}
                {parseInt(currentPage)!=endPage && (<li className="page-item"><a className="page-link" href="#">Next</a></li>)}
                
            </ul>
        </nav>
        <div className="text-end">
            <Link href={`/pages/NoticePage`} type="button" className="btn btn-primary" >쓰기</Link>
            <a type="button" className="btn btn-danger" >삭제</a>
        </div>

    </>)
}