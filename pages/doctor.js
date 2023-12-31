import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import data from '../data/index'

export default function Home() {
    const router = useRouter();

    const moveToHomePage = () => {
        router.push('/');
    };


    const moveToDoctorPage = () => {
        router.push('/applay');
    };


    function getStar(num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(<i class="fa fa-star" aria-hidden="true"></i>)
        }
        return arr;
    }

    return (
        <div className="main">

            <header>
                <div className='top-bar'>
                    <button onClick={moveToHomePage}><i className="fa fa-chevron-left"></i> </button>
                    <h2>Shifokorlar ro'yxati</h2>
                    <button><i class="fa fa-share" aria-hidden="true"></i></button>
                </div>

                <img src='https://b.link/w5zyxy' className='disable' />
            </header>

            <div className="category-cards">
                {
                    data.map((item) => {
                        return <div className="card" key={item.name} onClick={moveToDoctorPage}>
                            <img src={item.img} alt="Doctor" />
                            <div key={item.name} >
                                <p className="name"> {item.name}</p>
                                <p className="category">{item.category}</p>
                                <p className="rating">{getStar(item.rating)}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    )
}
