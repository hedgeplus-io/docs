import Link from "next/link"
import Head from 'next/head'
import { pageProps, staticPaths } from '@opstrace/next-product-docs/serialize'
import Documentation from '@opstrace/next-product-docs'


import Sidebar from '../components/Sidebar'
import Toc from '../components/Toc'

import theme from '../utils/vsDark.js'
// index.js
const Index = ({ title, source, sidebarRoutes, tocHeadings }: any) => {
  if (source === null) {
    source = ''
  }

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center mt-20 pb-24">
        <div className="md:flex max-w-7xl mx-auto justify-center">
          <Sidebar routes={sidebarRoutes} />
          <main className="md:flex-1 ml-4 xl:ml-8 pr-4 sm:pr-0">
            <div className='mx-auto md:mx-0 docs prose max-w-prose md:max-w-md lg:max-w-prose main-docs-section'>
              <Documentation source={source} theme={theme} />
            </div>
          </main>
          <Toc contents={tocHeadings} />
        </div>
      </div>
    </>
  )
}
export default Index;

export async function getStaticPaths() {
  const paths = await staticPaths()
  return { paths, fallback: false }
}

export async function getStaticProps(ctx: any) {
  return {
    props: {
      ...(await pageProps(ctx))
    }
  }
}