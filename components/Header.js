import Head from 'next/head'

export const Header = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
    </Head>
  )
}