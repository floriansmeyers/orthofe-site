import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SFLOW BV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <img style={{width: '90px'}} src='LOGO.png'></img>

        <Header title="SFLOW BV" />
    
        <p className="description" style={{textAlign: 'center'}}>
         BTW. nr. <span>BE0785.972.390</span><br/>
         KBC <span>BE79 7340 5938 5833</span><br/><br/>
          Polderstraat 37<br/>
          2491 Balen-Olmen<br/><br/>
          <a href="mailto:florian@sflow.be">florian@sflow.be</a><br/>
          +32 473 49 20 81
        </p>
      </main>

      <Footer />
    </div>
  )
}
