import React, { useState } from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import SearchIcon from '@mui/icons-material/Search';
import style from "./search.module.css";
import { useRouter } from 'next/router';

const Search = () => {
  const [search,setSearch]=useState("");
  const router=useRouter();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  };

  const handleSearch=()=>{
    router.push({
      pathname: router.pathname, 
      query: { page: 1, name: search },
    });
  }

  return (
    <div className="d-flex justify-content-center mt-5">
    <div className={style.form_group}>
      <div className={style.input_with_icon}>
      <BusinessIcon className={style.icon_inside_input} />
        <input type="text" className='form-control rounded-pill' placeholder='Find an exchnage' name="search" value={search} onKeyPress={handleKeyPress} onChange={(e)=>setSearch(e.currentTarget.value)} />
        <SearchIcon className={style.icon_inside_input1} onClick={handleSearch} />
        </div>
    </div>
    </div>
  )
}

export default Search