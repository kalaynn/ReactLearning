import React from 'react';
import { Meme } from './Meme';

export default function MemeGenerator() {
    const [memes, setMemes] = React.useState([]);
    const [currentMeme, setCurrentMeme] = React.useState({});
    const [topText, setTopText] = React.useState("");
    const [bottomText, setBottomText] = React.useState("");

    React.useEffect(() => {
        async function retrieveMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes");
            const jsonData = await response.json();
            setMemes(jsonData.data.memes);
        };

        if (memes === undefined || memes.length == 0) {
            retrieveMemes();
        }
    });

    function handleTopTextChange(event) {
        setTopText(event.target.value);
    }

    function handleBottomTextChange(event) {
        setBottomText(event.target.value);
    }

    function getNewMemeImage() {
        setCurrentMeme(memes[Math.floor(Math.random()*100)]);
    }

    return (
        <div>
            <div className="mb-8">
                <div className="flex mb-4 text-sm">
                    <input
                        type="text"
                        placeholder="Top text"
                        onChange={handleTopTextChange}
                        value={topText}
                        className="border border-gray-400 rounded w-full p-2 m-2"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        onChange={handleBottomTextChange}
                        value={bottomText}
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
                {...currentMeme}
                topText={topText}
                bottomText={bottomText}
            />
        </div>
    );
}