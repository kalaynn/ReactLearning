import React from "react";
import Confetti from "react-confetti";
import Die from "./components/Die";

export default function App() {
    const [dice, setDice] = React.useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]);
    const [isWon, setIsWon] = React.useState(false);

    React.useEffect(() => {
        intializeGame();
    }, []);

    React.useEffect(() => {
        // check that all dice are held and have the same number
        let firstValue = dice[0]?.value;
        if (dice.every(die => die.held) &&
            dice.every(die => die.value === firstValue)) {
            setIsWon(true);
        }
    }, [dice]);

    function intializeGame() {
        let id = 0;

        setDice((prevValue) => (
            prevValue.map((die) => ({
                id: id++,
                value: randomD6(),
                held: false,
            }))
        ));

        setIsWon(false);
    }

    function randomD6() {
        //random number between 1 and 6
        return Math.floor(Math.random() * 6) + 1;
    }
    
    function toggleHeld(dieId) {
        setDice((prevValue) => (
            prevValue.map((die) => ({
                ...die,
                held: die.id === dieId ? ! die.held : die.held,
            }))
        ));
    }

    function rollDice() {
        setDice((prevValue) => (
            prevValue.map((die) => ({
                ...die,
                value: die.held ? die.value : randomD6(),
            }))
        ));

    }

    return (
        <div>
            {isWon && <Confetti />}
            <h1 className="text-center font-medium text-3xl mb-2   ">
                Tenzies
            </h1>
            <p className="text-center mb-4">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="flex justify-center">
                <div className="grid grid-cols-5 mb-8">
                    {
                        dice.map((die) => (
                            <Die
                                {...die}
                                toggleHeld={toggleHeld}
                                key={die.id}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-indigo-600 text-white text-xl rounded-lg py-2 px-4"
                    onClick={isWon ? intializeGame : rollDice}
                >
                    {isWon ? "Reset Game" : "Roll"}
                </button>
            </div>
        </div>
    )
}
