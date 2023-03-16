import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OrthoFe BV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Header title="OrthoFe BV" />
    
        <p className="description" style={{textAlign: 'center'}}>
         BTW. nr. <span>BE0788.677.009</span><br/>
         KBC <span>BE75 7370 6282 7751</span><br/><br/>
          Dorp 41 bus 2<br/>
          3221 Nieuwrode<br/><br/>
          <a href="mailto:feline@orthofe.be">feline@orthofe.be</a><br/>
        </p>
      </main>

      <Footer />
    </div>
  )
}
