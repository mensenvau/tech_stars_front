import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import a1 from '../public/1_img1.png'
import a2 from '../public/1_img2.png'
import a3 from '../public/1_img3.png'
import a4 from '../public/1_img4.png'
import a5 from '../public/1_img5.png'
import a6 from '../public/1_img6.png'

export default function Home() {
  const router = useRouter();

  const moveToDoctorPage = () => {
    router.push('/doctor');
  };

  return (
    <div className="main" >
      <Head>
        <title>DoctorMe</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <header> <h2> Mutaxassislikni tanlang </h2> </header>

      <div className="category-cards">
        {/* first */}
        <div className="card" onClick={moveToDoctorPage}>
          <Image src={a1} alt="..." width={70} height={70} priority />
          <div>
            <h2>Pediator</h2>
            <p>Bolalar sog'lig'i va ularni parvarish qilish bo'yicha mutaxassis.</p>
          </div>
        </div>
        {/* second */}
        <div className="card" onClick={moveToDoctorPage}>
          <Image src={a2} alt="..." width={70} height={70} priority />
          <div>
            <h2>Kardiolog</h2>
            <p>Yurak kasalligi bo'yicha mutaxassis.</p>
          </div>
        </div>
        {/* 3th */}
        <div className="card" onClick={moveToDoctorPage}>
          <Image src={a3} alt="..." width={70} height={70} priority />
          <div>
            <h2>Psixolog</h2>
            <p> Ruhiy salomatlik bo'yicha mutaxassis
            </p>
          </div>
        </div>
        {/* 4th */}
        <div className="card" onClick={moveToDoctorPage}>
          <Image src={a4} alt="..." width={70} height={70} priority />
          <div>
            <h2>Allergolog</h2>
            <p> Allergik kasalliklarni aniqlash va davolashga ixtisoslashgan shifokor. </p>
          </div>
        </div>

        {/* 5th */}
        <div className="card" onClick={moveToDoctorPage}>
          <Image src={a5} alt="..." width={70} height={70} priority />
          <div>
            <h2>Lor</h2>
            <p>Quloq, tomoq, burun kasalliklarini davolash va oldini olish bo'yicha mutaxassis
            </p>
          </div>
        </div>

        {/* 6th */}
        <div className="card" onClick={moveToDoctorPage}>
          <Image src={a6} alt="..." width={70} height={70} priority />
          <div>
            <h2>Endokrinolog</h2>
            <p> Gormonal buzilishlar bo'yicha mutaxassis
            </p>
          </div>
        </div>


      </div>
    </div >
  )
}
