import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import Link from "@material-ui/core/Link";
import '../styles/Home.css'
import 'animate.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2 class="animate__animated animate__fadeInLeft">Hi, my name is Damin</h2>
                <div className="prompt">
                    <p>A Front-End developer who is constantly enjoying learning</p>
                    <Link href = "https://www.linkedin.com/in/damin-kim/" target="_blank">
                        <LinkedInIcon/>
                    </Link>
                    <Tooltip title = "damin1025@naver.com" arrow>
                        <EmailIcon/>
                    </Tooltip>
                    <Link href = "https://github.com/dobyming" target="_blank">
                        <GithubIcon/>
                    </Link>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, React Native, Redux, HTML, CSS, NPM,
                            Babel, ESLint, Prettier, eXbuilder6, MaterialUI
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span> 
                            NodeJS, ExpressJS, MySQL, Ajax, Axios, AWS S3
                        </span>
                    </li>
                    <li className='item'>
                        <h2>DevOps</h2>
                        <span> 
                            AWS EC2, AWS CodeDeploy, Nginx, Docker, Redis, Firebase,
                            Git, Github, AWS CodeCommit 
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span> 
                            JavaScript, TypeScript, Python
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;