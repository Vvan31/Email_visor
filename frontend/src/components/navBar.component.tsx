"use client";
import React from 'react';
import { useEffect } from 'react';  

import { LogoutButton } from "./buttons.component";
import Link from "next/link";
import Image from "next/image";
/* import {
AppBar,
Toolbar,
IconButton,
Typography,
} from "@mui/material"; */

import {
  Sidenav,
  initTE,
} from "tw-elements";

// images
import chart from "../../public/navBar/chart.png";
import mail from "../../public/navBar/mail.png";
import openMail from "../../public/navBar/mailOpen.png";
import open from "../../public/navBar/arrow.png";
import logout from "../../public/navBar/logout.png";
import { signOut } from 'next-auth/react';
export const NavBar = () => {

    useEffect(() => {
        initTE({ Sidenav });
    
        const handleClick = () => {
          const sidenavElement = document.getElementById("sidenav-4");
          if (sidenavElement) {
            const instance = Sidenav.getInstance(sidenavElement);
            instance.toggleSlim();
          }
        };
    
        const slimTogglerElement = document.getElementById("slim-toggler");
        if (slimTogglerElement) {
          slimTogglerElement.addEventListener("click", handleClick);
        }
    
        return () => {
          if (slimTogglerElement) {
            slimTogglerElement.removeEventListener("click", handleClick);
          }
        };
      }, []);

return (
<>
    <nav id="sidenav-4"
        className="group fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden 
        bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-slim='true']:hidden 
        data-[te-sidenav-slim-collapsed='true']:w-[77px] data-[te-sidenav-slim='true']:w-[77px] 
        data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800 
        [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='false']]:hidden 
        [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='true']]:[display:unset]"
        data-te-sidenav-init data-te-sidenav-hidden="false" data-te-sidenav-mode="side" data-te-sidenav-slim="true"
        data-te-sidenav-content="#slim-content" data-te-sidenav-slim-collapsed="true">
        <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
            <li className="relative">
                <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 
                py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear 
                hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit 
                focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref>
                    <span className=" [&>svg]:h-5 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                        <Image src={chart} alt="chart" className="h-5 w-7 mr-2"  width={18} height={20}  />
                    </span>
                    <span className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                        data-te-sidenav-slim="false">Charts</span>
                        
                </a> 
                
            </li>
            <li className="relative">
                <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 
                text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear 
                hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit 
                focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref>
                    <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                        data-te-sidenav-slim="false">Category 1</span>
                    <span
                        className="absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 
                        ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </a>
                <ul className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                    data-te-sidenav-collapse-ref>
                    <li className="relative">
                        <a className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] 
                        pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear 
                        hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit 
                        focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                        data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                        motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            data-te-sidenav-link-ref>Link 2</a>
                    </li>
                    <li className="relative">
                        <a className="flex h-6 cursor-pointer items-center truncate rounded-[5px] 
                        py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition 
                        duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none 
                        focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit 
                        active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                        motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            data-te-sidenav-link-ref>Link 3</a>
                    </li>
                </ul>
            </li>
            <li className="relative">
                <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] 
                px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 
                ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 
                focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit 
                active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref>
                    <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                        data-te-sidenav-slim="false">Category 2</span>
                    <span
                        className="absolute right-0 ml-auto mr-[0.5rem] transition-transform 
                        duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300"
                        data-te-sidenav-rotate-icon-ref>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </a>
                <ul className="show !visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block "
                    data-te-sidenav-collapse-ref>
                    <li className="relative">
                        <a className="flex h-6 cursor-pointer items-center truncate rounded-[5px] 
                        py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition 
                        duration-300 ease-linear 
                        hover:bg-slate-50 
                        hover:text-inherit 
                        hover:outline-none 
                        focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 
                        active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit 
                        data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none 
                        dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            data-te-sidenav-link-ref>Link 4</a>
                    </li>
                    <li className="relative">
                        <a className="flex h-6 cursor-pointer items-center truncate rounded-[5px] 
                        py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition 
                        duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none 
                        focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 
                        active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit 
                        data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 
                        dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                            data-te-sidenav-link-ref>Link 5</a>
                    </li>
                </ul>
            </li>
            <li className="relative">
                <a className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 
                py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear 
                hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit 
                focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none 
                data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none 
                motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                    data-te-sidenav-link-ref 
                    onClick={(() => signOut())} >
                    <span className=" [&>svg]:h-5 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                        <Image src={logout} alt="chart" className="h-5 w-7 mr-2"  width={18} height={20}  />
                    </span>
                    <span className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                        data-te-sidenav-slim="false">Log out</span>
                </a> 
                
            </li>
        </ul>
    </nav>
    {/* <!-- Sidenav --> */}

    <div id="slim-content" className="flex  h-screen !pl-[77px]">
        <button
            className="inline-block rounded bg-primary px-6 transform -translate-x-1/2 
                       text-xs font-medium uppercase leading-tight text-white 
                       transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-primary-800 "
            aria-haspopup="true" id="slim-toggler">
            <div className="position: relative bg-blue-500 rounded-full p-2 hover:shadow-lg focus:shadow-lg z-index-50">
                <Image src={open} alt="arrow-left" width={20} height={20} />
            </div>
        </button>
    </div>
</>
);

}