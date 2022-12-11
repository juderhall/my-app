import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
            rel="stylesheet"
        />
        <link 
            // hrefs="css/globals.css"
            hrefs="../public/css/globals.css"
            rel="stylesheet"
        />
      </Head>
      <body>
        <div className="container">
            <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}