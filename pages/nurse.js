import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/router';
import data from '../data/index'

export default function Home() {
    const router = useRouter();

    const moveToHomePage = () => {
        router.push('/');
    };

    return (
        <div className="main">

            <header>
                <div className='top-bar'>
                    <h2>Qabulga yozilish</h2>
                </div>
            </header>


            <div class="container">
                <form className='form'>
                    <label>
                        <input type="checkbox" name="location" value="uyga" /> Uyga
                        <input type="checkbox" name="location" value="klinikaga" /> Klinikaga
                    </label>

                    <div>
                        <label>Sana va vaqtni</label>
                        <input type="datetime-local" name="datetime" />
                    </div>

                    <div>
                        <label>TTo‘lov turini belgilang </label>
                        <select name="payment">
                            <option value="naqd">Naqd</option>
                            <option value="plastik">Plastik karta</option>
                            <option value="bank">Bank o'tkazma</option>
                        </select>
                    </div>

                    <div>
                        <label> Ijoz:</label>
                        <textarea name="comments" rows="4" placeholder='Izoh qoldiring'></textarea>
                    </div>

                    <div>
                        <label>Ism Familiya </label>
                        <input type="text" name="name" />
                    </div>

                    <div>
                        <label>Telefon </label>
                        <input type="tel" name="phone" />
                    </div>

                    <button type="submit">Qabulga yozilish</button>
                </form>
            </div>

        </div >
    )
}
