
import React, { FC, Fragment, ReactNode } from "react";
import Button from '../components/Button';
import { useScrollHandler } from "../hooks/useScrollHandler";

interface HeaderProps {
    logoText: string,
    navItem: any[]
}

const Header: FC<HeaderProps> = ({logoText, navItem}) => {
    const scroll = useScrollHandler();
    console.log({scroll});
	let navPos = 'top-[0]'
    
    return(
        <header className="flex flex-row items-center h-20  fixed top-0 left-0  z-20 w-full">
            <div className={`px-10 z-0  py-5 overflow-hidden  container max-w-screen-xl m-auto   flex flex-row items-center   h-full ${navPos} transition-[top] duration-300 justify-between`}>
                <div className="wrap">
                <h1 className="flex flex-row text-xl" >&#123;<span className="flex flex-row" > {logoText}	</span>&#125;</h1>
                </div>
                <nav className="">
                    <ul className="flex flex-row gap-12">

                    {navItem.map((item, i)=>{
                        return(
                            <li key={i}>
                                <Button actionTarget={item.target}   currentPage='' target='' textFirst classList={'relative z-10 '} style={item.style !== null ? item.style : 'default'}  text={item.text} type={item.action !== null ? item.action : 'link'} content={item.content} />
                            </li>
                        )
                    })}
                    </ul>

                </nav>
            </div>

        </header>
    )
}

export default Header;