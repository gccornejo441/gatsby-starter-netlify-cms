import React from 'react'
import Head from 'next/head'

type Props = {
    title: string
}

const Housing_meta = ({title}: Props) => {
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />

        {/* OG */}
        <meta property="fb:app_id" content="254907099748012" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webworksdreams.com/" />
        <meta
          property="og:title"
          content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
          />
        <meta
          property="og:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
          />
        <meta property="og:image:alt" content="A web developer hard at work" />
        <meta
          property="og:description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
          />
        <meta
          name="description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
          />
        <meta property="og:site_name" content="WebWorks Dreams" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WebWorksDreams" />
        <meta
          name="twitter:title"
          content="Welcome to WebWorks Dreams where dreams come true | WebWorks Dreams"
          />
        <meta
          name="twitter:description"
          content="WebWorks Dreams is an outstanding web development and design company providing superior web services to non-profits &amp; startups for success in the digital age."
          />
        <meta
          name="twitter:image"
          content="https://www.webworksdreams.com/images/sharecard.jpg"
          />
        <meta name="twitter:image:alt" content="A web developer hard at work" />
        <title>{title}</title>
      </Head>
    );
}

export default Housing_meta;
