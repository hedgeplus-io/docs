import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from "next/router";
import useWindowSize from "../hooks/useWindowSize";

function ListItems({ routes }) {
  console.log('routes', routes)
  if (routes) {
    return routes.map((r) => {
      if (!r.path) {
        return (
          <li key={r.title}>
            <h4 className="text-docblue text-xl font-normal cursor-pointer font-Catamaran">{r.title}</h4>
            <ul>
              <ListItems routes={r.routes} />
            </ul>
          </li>
        )
      } else {
        return (
          <li key={r.title}>
            <div key={r.path}>
              <a href={`https://www.hedgeplus.io/docs/${r.path}`} className="pl-2 flex text-gray hover:text-docblue text-lg py-2 transition ease-in-out duration-150 w-full font-Catamaran">
                {r.title}
              </a>
            </div>
          </li>
        )
      }
    })
  } else {
    return <></>
  }
}

export default function Sidebar({ routes }) {
  const router = useRouter();
  const { width } = useWindowSize();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (width < 768) {
      setNavOpen(false);
    }
  }, [width])

  useEffect(() => {
    setNavOpen(false);
  }, [router.pathname])

  return (
    <div className='flex-none md:max-w-xs md:block'>
      <div className='sticky top-4 flex flex-col pb-4'>
        <div className='flex items-center flex-shrink-0 px-4'>
          <aside className='flex-grow flex flex-col'>
            <div>
              <button className='md:hidden px-2 py-3 font-bold text-gray flex flex-row items-center' onClick={() => setNavOpen(!navOpen)}>
                <span className="font-normal block transform mr-1 w-6">
                  {
                    navOpen ? (
                      <span className="text-gray-400 font-normal block transform mr-1 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                          </path>
                        </svg>
                      </span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                        </path>
                      </svg>
                    )
                  }
                </span>
                <span className='font-Catamaran'>Menu</span>
              </button>
              {
                navOpen && (
                  <div className='pl-8 md:hidden'>
                    {routes &&
                      Object.keys(routes).map((route, idx) => {
                        const obj = routes[route]
                        return (
                          <div key={`sidebar-${idx}`}>
                            <h3 className="text-docblue text-lg mt-4 font-Catamaran">
                              {obj.title}
                            </h3>
                            <ul>
                              <ListItems routes={obj.routes} />
                            </ul>
                          </div>
                        )
                      })}
                  </div>
                )
              }
              <nav className='sidebar__nav mt-8 flex-1 px-4 space-y-1'>
                <div className='hidden md:block'>
                  {routes &&
                    Object.keys(routes).map((route, idx) => {
                      const obj = routes[route]
                      return (
                        <div key={`sidebar-${idx}`}>
                          <h3 className="text-docblue text-lg mt-4 font-Catamaran">
                            {obj.title}
                          </h3>
                          <ul>
                            <ListItems routes={obj.routes} />
                          </ul>
                        </div>
                      )
                    })}
                  <div>
                    <a href={`https://discord.gg/XpqkTbNcKM`} className="pl-2 flex text-gray hover:text-docblue text-lg py-2 transition ease-in-out duration-150 w-full font-Catamaran">
                      <div className='w-full flex flex-row items-center justify-between'>
                        <div>Discord</div>
                        <svg x="0px" y="0px" viewBox="0 0 100 100" width="20" height="20" className="-mt-1 css-19vhmgv">
                          <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                          <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                        </svg>
                      </div>
                    </a>
                    <a href={`https://t.me/hedgeplus_io`} className="pl-2 flex text-gray hover:text-docblue text-lg py-2 transition ease-in-out duration-150 w-full font-Catamaran">
                      <div className='w-full flex flex-row items-center justify-between'>
                        <div>Telegram</div>
                        <svg x="0px" y="0px" viewBox="0 0 100 100" width="20" height="20" className="css-19vhmgv">
                          <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                          <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                        </svg>
                      </div>
                    </a>
                    <a href={`https://twitter.com/hedgeplus_io`} className="pl-2 flex text-gray hover:text-docblue text-lg py-2 transition ease-in-out duration-150 w-full font-Catamaran">
                      <div className='w-full flex flex-row items-center justify-between'>
                        <div>Twitter</div>
                        <svg x="0px" y="0px" viewBox="0 0 100 100" width="20" height="20" className="css-19vhmgv">
                          <path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                          <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
