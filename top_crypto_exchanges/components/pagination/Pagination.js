import { useRouter } from 'next/router'
import React from 'react'

const Pagination = (props) => {
    const router=useRouter();
    const {page}=router.query;
    const setPage=(page)=>{
        router.push({
            pathname: router.pathname, // Replace '/your-page' with your actual page route
            query: { page: page }, // Specify your query parameters here
          });
    }
  return (
    <div>
        <div className="row w-100 mt-4">
            <div className="col-4"></div>
            <div className="col-4 d-flex justify-content-around">
                <button className="btn btn-outline-dark btn-sm rounded-pill px-3" disabled={+page===1 ? true :false} onClick={()=>setPage(+page-1)}>{"<"} Prev</button>
                <button className="btn btn-dark btn-sm" disabled={props?.length<10 ? true : false} onClick={()=>setPage(1)}>1</button>
                <button className="btn btn-dark btn-sm" disabled={props?.length<10 ? true : false} onClick={()=>setPage(2)}>2</button>
                <button className="btn btn-dark btn-sm" disabled={props?.length<10 ? true : false} onClick={()=>setPage(3)}>3</button>
                ...
                <button className="btn btn-dark btn-sm" disabled={props?.length<10 ? true : false} onClick={()=>setPage(+page<4 ? 4 : page)}>{page>4 ? page : 4}</button>
                <button class="btn btn-primary btn-sm rounded-pill px-3" disabled={props?.length<10 ? true : false} onClick={()=>setPage(+page+1)}>Next {">"}</button>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}

export default Pagination