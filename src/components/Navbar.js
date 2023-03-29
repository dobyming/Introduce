import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {
    const [expandNavbar,setExpandNavbar] = useState(false);
    const location = useLocation(); //링크 클릭 시, 이동되면서 탭 닫힐 수 있도록 구동
    
    useEffect(()=>{
        setExpandNavbar(false);
    },[location]); //location이 변하면 tab이 닫히도록

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}> 
        <div className='toggleButton'>
            <button onClick={()=> {
                setExpandNavbar((prev) => !prev)
                }}
            >
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to={'/'}> Home </Link>
            <Link to={'/projects'}> Projects </Link>
            <Link to={'/experience'}> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar