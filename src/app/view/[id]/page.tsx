
'use client'

import { useRouter,useParams} from "next/navigation"

export default function view(){
    const router = useRouter();
    ///router.push('/pages/NoticePage')
    // 현재 페이지의 경로를 가져옴
    //const currentPath = router.;
  
    // 쿼리 파라미터를 가져옴
    const query = useParams();
console.log(query)
    // 라우트 매개변수를 가져옴
    //const { id } = router.query;
    return <h1>리턴:{query.id}</h1>
}