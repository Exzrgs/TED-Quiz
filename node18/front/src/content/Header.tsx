import 'webextension-polyfill';
import 'construct-style-sheets-polyfill';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { debounce } from 'lodash-es';
import { twind, config, cssom, observe, stringify } from './twind';
import { proxyStore } from '../app/proxyStore';
import Content from './Content';
import '@mantine/core/styles.css';
import { MantineProvider,createTheme } from '@mantine/core';
import { FC, useState } from "react";
import { ToggleButton } from "./ToggleButton";
import { Navigation } from './Navigation';
import "./styles.css";
// import iconImage from "../../public/images/icon.png"
import iconImage from "./icon.png"


const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
  
    return (
<div className="fixed z-[999] bottom-2 right-2 w-full max-w-md h-screen overflow-y-auto shadow-xl border-[1px] bg-black bg-opacity-50">
        {/* <button onClick={toggleFunction}>TedQuiz</button> */}

    <img src={iconImage} onClick={toggleFunction}/>
    <Content open={open}/>
    </div>
    
    );
    

};
export default Header;