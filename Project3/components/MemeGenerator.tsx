import React from 'react';
import { Meme } from './Meme';

export default function MemeGenerator() {
    const [memePool, setMemePool] = React.useState([]);
    const [meme, setMeme] = React.useState({id: "", name: "", url: "", topText: "", bottomText: ""});

    React.useEffect(() => {
        async function retrieveMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes");
            const jsonData = await response.json();
            setMemePool(jsonData.data.memes);
        };

        if (memePool === undefined || memePool.length == 0) {
            retrieveMemes();
        }
    });

    function handleChange(event) {
        setMeme(
            prevValue => ({
                ...prevValue,
                [event.target.name]: event.target.value
            })
        );
    }

    function getNewMemeImage() {
        setMeme(
            prevValue => ({
                ...prevValue,
                ...memePool[Math.floor(Math.random()*100)]
            })
        );
    }

    return (
        <div>
            <div className="mb-8">
                <div className="flex mb-4 text-sm">
                    <input
                        type="text"
                        placeholder="Top text"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                        className="border border-gray-400 rounded w-full p-2 m-2"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                        className="border border-gray-400 rounded w-full p-2 m-2"
                    />
                </div>
                <button
                    onClick={getNewMemeImage}
                    className="bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-bold tracking-tight rounded py-3 w-full"
                >
                    Get a new meme image  🖼
                </button>
            </div>
            <Meme
                {...meme}
            />
        </div>
    );
}