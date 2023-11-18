import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Pagination from '../pagination/Pagination';

const Exchanges = () => {
    const [data,setData]=useState([]);

    const router=useRouter();
    const {page,name}=router.query;

    useEffect(()=>{
        getExchanges();
    },[page,name])

    const getExchanges=async()=>{
        try{
            let response=await axios.get(`http://localhost:5000/exchanges/get-exchanges-list?page=${page}&name=${name}`);
            let {data}=response;
            setData(data);
        }catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <div className='mt-4'>
        <div className="row w-100">
          <div className="col-2"></div>
         <h6 className="col-6 "><small> EXCHANGES</small></h6>
         <h6 className="col-4 text-center"> <small>24H TRADE VOLUME</small></h6>
        </div>
         {data?.length===0 ? <h5 className="text-center fw-bold mt-4">Not Found</h5> : data?.map((d1,index)=>{
         let indexing=((page || 1) - 1) * 10;
         let number=(d1?.volume_1day_usd/1e9).toFixed(2);
         return(
        <div className="row w-100 border p-1">
         <div className="col-2"></div>
         <div className="col-6 d-flex"><div style={{width: "30px"}}>{indexing+index+1}</div> <div style={{width:"40px" ,height:"26px"}}>{d1.iconUrl ? <img src={d1.iconUrl} width={25} height={25}  alt='' /> : ""}</div> <div className='fw-bold'> {d1?.name}</div></div>
         <div className="col-4 text-center fw-bold">$ {number} billion</div>
        </div>
          ) }
         )}
    </div>
    <div className="mt-4">
        <Pagination length={data?.length} />
    </div>
    </>
  )
}

export default Exchanges