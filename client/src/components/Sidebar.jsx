import React from "react";
import {motion} from 'framer-motion';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Sidebar() {
  return (
    <div className="justify-end grid mt-20 mr-4">
      <motion.ul
      className="fixed right-5"
      initial={{x: "100vw"}}
      animate={{x: 0}}
      transition={{delay:2, duration:0.5, stiffness:50, type:"spring"}}
      >
        <li className="mt-10 cursor-pointer hover:opacity-60"><AlternateEmailIcon fontSize="large"/></li>
        <li className="mt-10 cursor-pointer hover:opacity-60"><GitHubIcon fontSize="large"/></li>
        <li className="mt-10 cursor-pointer hover:opacity-60"><LinkedInIcon fontSize="large"/></li>
      </motion.ul>
    </div>
  );
}
