import { SliceZone } from "@prismicio/react";
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { PageProps } from '../common/types';
import { fetchGlobalComponents } from '../common/utils';
import { createClient } from "../prismicio";
import { components } from "../slices/index.js";

const Layout = dynamic(() => import('../components/Layout/Layout'), {
  suspense: true,
})

const ColourPalette = dynamic(() => import('../components/Helpers/ColourPalette'), {
  suspense: true,
})

const Home: NextPage<PageProps> = ({ slices, seo, colourPalette, header, footer }) => {
  return (
    <>
      <Suspense fallback={`Loading...`}>
        <Layout seo={seo} header={header} footer={footer}>
          <SliceZone
            slices={slices}
            components={components}
          />
        </Layout>
        <ColourPalette palette={colourPalette} />
      </Suspense>
    </>
  )
}

export async function getStaticProps({ previewData }: { previewData: any }) {
  const client = createClient({ previewData });
  const { header, footer, colourPalette } = await fetchGlobalComponents(client)
  const page = await client.getByUID('page', 'home')

  const seo = {
    title: page.data?.title ? page.data?.title : 'Ollie Taylor: Web Developer',
    description: page.data?.description ? page.data?.description : 'Ollie Taylor is a Frontend developer and designer passionate about building modern web applications using React.',
    ogImage: page.data?.ogImage,
  }

  return {
    props: {
      slices: page.data?.slices,
      colourPalette: colourPalette,
      header: header,
      footer: footer,
      seo: seo,
    },
  };
}

export default Home
