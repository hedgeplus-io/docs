import Head from 'next/head'
import { pageProps, staticPaths } from '@opstrace/next-product-docs/serialize'
import Documentation from '@opstrace/next-product-docs'

import Sidebar from '../../components/Sidebar'
import Toc from '../../components/Toc'
import DocsHeader from "../../components/DocsHeader"
import theme from '../../utils/vsDark.js'

export default function Docs({ title, source, sidebarRoutes, tocHeadings }) {
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
      <DocsHeader></DocsHeader>
      <div className="pt-8 md:flex max-w-7xl mx-auto justify-center font-sans">
        <Sidebar routes={sidebarRoutes} />
        <main className="md:flex-1 ml-4 xl:ml-8 pr-4 sm:pr-0">
          <div className='mx-auto md:mx-0 docs prose max-w-prose md:max-w-xl lg:max-w-2xl main-docs-section'>
            <Documentation source={source} theme={theme} />
          </div>
        </main>
        <Toc contents={tocHeadings} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await staticPaths()
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  return {
    props: {
      ...(await pageProps(ctx))
    }
  }
}