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
import { Button } from '@mantine/core';

// import iconImage from "../../public/images/icon.png"
// import iconImage from "./icon.png"

const Header: FC = () => {
    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
      setOpen((prevState) => !prevState);
        console.log("toggleFunction")
      console.log(open)
    };
    
    if(open){return(
      <div className="fixed top-0 right-0 p-4">
            <Content open={open} setOpen={setOpen}/>
        </div>        
        )}

        return (
            <div className="fixed top-0 right-0 p-4">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={toggleFunction}
          >
            TedQuiz
          </button>
          </div>
        )}
  
  export default Header;
  