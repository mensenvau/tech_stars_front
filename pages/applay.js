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
        const message = `Input values doctor:\n${JSON.stringify(inputValues, null, 2)}`;

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
