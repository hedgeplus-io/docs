import Link from "next/link"
import MenuButton from "./menu-button";
import { useState } from "react";
import DocsMenuPanel from "./docs_menu_panel";

export default function DocsHeader({ }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="font-sans relative bg-indigo z-10" style={{ position: 'sticky', top: '0' }}>
                <div className='px-4 py-8 max-w-7xl mx-auto flex flex-row items-center justify-between border-b border-indigo'>
                    <Link href="/">
                        <img
                            className="logo cursor-pointer"
                            src="/images/logo.png"
                            alt="hedgeplus logo"
                            width={200}
                            height={40}
                        />
                    </Link>
                    <div className='hidden md:flex flex-row items-center space-x-8'>
                        <Link href="/"><div className='text-2xl text-white cursor-pointer font-sim'>Home</div></Link>
                        <Link href="/docs"><div className='text-2xl text-white cursor-pointer font-sim'>Document</div></Link>
                        <Link href="https://discord.gg/hkqAHKUVGK"><div className='text-2xl text-white font-sim cursor-pointer'>Discord</div></Link>
                        <Link href="https://t.me/hedgeplus_io"><div className='text-2xl text-white cursor-pointer font-sim'>Telegram</div></Link>
                    </div>
                    <div className='hidden md:flex flex-row items-center space-x-4'>
                        <div className="mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                            <Link href='https://github.com/hedgeplus-io'>
                                <svg className="fill-current octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" fill='#fff'>
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:hidden flex-row items-center text-white">
                        <MenuButton handleMenu={handleMenu} isOpen={isOpen} />
                    </div>
                </div>
            </div>
            {isOpen && <DocsMenuPanel />}
        </>
    )
}