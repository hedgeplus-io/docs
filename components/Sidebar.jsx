import React from 'react'
import Link from 'next/link'

function ListItems({ routes }) {
  if (routes) {
    return routes.map((r) => {
      if (!r.path) {
        return (
          <li key={r.title}>
            <h4 className=" text-docblue text-xl font-normal cursor-pointer">{r.title}</h4>
            <ul>
              <ListItems routes={r.routes} />
            </ul>
          </li>
        )
      } else {
        return (
          <li key={r.title}>
            <Link key={r.path} href={r.path}>
              <a className="flex text-gray hover:text-docblue text-lg py-2 transition ease-in-out duration-150 font-medium w-full">
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
  return (
    <div className='flex-none md:max-w-xs md:block'>
      <div className='sticky top-4 flex flex-col flex-grow pb-4 overflow-y-auto'>
        <div className='flex items-center flex-shrink-0 px-4'>
          <aside className='flex-grow flex flex-col'>
            <div>
              <nav className='sidebar__nav mt-8 flex-1 px-2 space-y-1 overflow-y-scroll'>
                <div className='hidden md:block'>
                  {routes &&
                    Object.keys(routes).map((route, idx) => {
                      const obj = routes[route]
                      return (
                        <div key={`sidebar-${idx}`}>
                          <h3 className="text-docblue text-lg font-medium mt-4">
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
