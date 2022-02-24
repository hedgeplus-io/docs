import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from "next/router";
import useWindowSize from "../hooks/useWindowSize";

function ListItems({ routes }) {
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
            <Link key={r.path} href={r.path}>
              <a className="pl-2 flex text-gray hover:text-docblue text-lg py-2 transition ease-in-out duration-150 w-full font-Catamaran">
                {r.title}
              </a>
            </Link>
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
              <button className='md:hidden px-2 py-3 font-bold text-gray flex' onClick={() => setNavOpen(!navOpen)}>
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
                Menu
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
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
