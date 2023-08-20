import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send inputValues to Telegram bot using fetch
        const botToken = '6581441206:AAG4cDzBWgWC8uvwMOMjFl6ZJyrAxbP0cMk';
        const chatId = '1910849547'; // You can find this by messaging your bot and checking the updates API
        const message = `Input values:\n${JSON.stringify(inputValues, null, 2)}`;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });

        router.push('/done');

        if (response.ok) {
            console.log('Message sent successfully to Telegram bot.');
        } else {
            console.error('Failed to send message to Telegram bot.');
        }
    };


    return (
        <div className="main">

            <header>
                <div className='top-bar'>
                    <h2>Qabulga yozilish</h2>
                </div>
            </header>

            <div class="container">
                <form className='form' onSubmit={handleSubmit}>
                    <label>
                        <input type="radio" name="Holat" value="uyga" onChange={handleInputChange} required /> Uyga
                        <input type="radio" name="Holat" value="klinikaga" onChange={handleInputChange} required /> Klinikaga
                    </label>

                    <div>
                        <label>Sana va vaqtni</label>
                        <input type="datetime-local" name="Sana" onChange={handleInputChange} required />
                    </div>

                    <div>
                        <label>Xizmat turini tanlang</label>
                        <select name="Xizmat Turi" onChange={handleInputChange} required>
                            <option value="Ukol qilish">Ukol qilish</option>
                            <option value="Kapinisa">Kapinisa</option>
                            <option value="Massaj">Massaj</option>
                        </select>
                    </div>

                    <div>
                        <label>Klinikani tanlang</label>
                        <select name="Klinika" onChange={handleInputChange} required>
                            <option value="Shifo Nur">Shifo Nur</option>
                            <option value="plastik">Carmen Plus</option>
                            <option value="Carmen Plus">Ibn sino medical</option>
                            <option value="1 - sonli poliklinka">1 - sonli poliklinka</option>
                            <option value="2 - sonli poliklinka">2 - sonli poliklinka</option>
                            <option value="3 - sonli poliklinka">3 - sonli poliklinka</option>
                        </select>
                    </div>

                    <div>
                        <label>To'lov turini belgilang </label>
                        <select name="Tolov turi" onChange={handleInputChange} required>
                            <option value="Naqd">Naqd</option>
                            <option value="Plastik karta">Plastik karta</option>
                            <option value="Bank o'tkazma">Bank o'tkazma</option>
                        </select>
                    </div>

                    <div>
                        <label> Ijoz:</label>
                        <textarea
                            rows="4"
                            placeholder='Izoh qoldiring'
                            name="Izoh"
                            onChange={handleInputChange}
                            required
                        ></textarea>

                    </div>

                    <div>
                        <label>Ism Familiya </label>
                        <input
                            type="text"
                            name="Fio"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Telefon </label>
                        <input
                            type="tel"
                            name="Telefo raqam"
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit">Qabulga yozilish</button>
                </form>
            </div>

        </div >
    )
}
