import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import Link from "@material-ui/core/Link";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
         <Link href = "https://www.instagram.com/da_min1025/" target="_blank">
            <InstagramIcon/>
         </Link>
         <Link href = "https://www.linkedin.com/in/damin-kim/" target="_blank">
            <LinkedInIcon/>
         </Link>
        </div>
        <p> &copy; 2023 Damin-Kim</p>
    </div>
  )
}

export default Footer