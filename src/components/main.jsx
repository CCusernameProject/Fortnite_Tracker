import React, { useState } from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import fetchData from './fetchdata';

const MainComponent = () => {
    const [pseudo, setPseudo] = useState('');
    const [winsSeason, setWinsSeason] = useState(0)
    const [winsRankedSeason, setWinsRankedSeason] = useState(0)
    const [killRankedSeason, setKillRankedSeason] = useState(0)
    const [ratioSeason, setRatioSeason] = useState(0)
    const [deathSeason, setDeathSeason] = useState(0)
    const [matchesSeason, setMatchesSeason] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        const getData = fetchData(pseudo);
        getData.then((data) => {
            setWinsSeason(data.data.stats.keyboardMouse.overall.wins)
            setKillRankedSeason(data.data.stats.keyboardMouse.overall.kills)
            setWinsRankedSeason(data.data.stats.keyboardMouse.ltm.wins)
            let rs = (data.data.stats.keyboardMouse.overall.kills / data.data.stats.keyboardMouse.overall.matches)
            setRatioSeason(rs.toFixed(2))
            setDeathSeason(data.data.stats.keyboardMouse.overall.deaths)
            setMatchesSeason(data.data.stats.keyboardMouse.overall.matches)
        })
    };

    const handleInputChange = (event) => {
        setPseudo(event.target.value);
    };

    return (
        <main>
            <form className='Form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="PseudoEntry"
                    placeholder="Entrer un pseudo"
                    value={pseudo}
                    onChange={handleInputChange}
                />
                <div className='Submit-Design'>
                    <SearchIcon className="Icon" />
                    <button id='submit-button' type="submit" />
                </div>
            </form>

            <div className='Info'>
                <div className='CardWin'>
                    <h1>Total Season Wins</h1>
                    <p>{winsSeason}</p>
                </div>
                <div className='CardWin'>
                    <h1>Total Ranked Season Wins</h1>
                    <p>{winsRankedSeason}</p>
                </div>
                <div className='CardWin'>
                    <h1>Total Season Kill</h1>
                    <p>{killRankedSeason}</p>
                </div>
                <div className='CardWin'>
                    <h1>Total Kill Per Game</h1>
                    <p>{ratioSeason}</p>
                </div>
            </div>
            <div className='Info'>
                <div className='CardWin'>
                    <h1>Total Season Deaths</h1>
                    <p>{deathSeason}</p>
                </div>
                <div className='CardWin'>
                    <h1>Total Season Matches</h1>
                    <p>{matchesSeason}</p>
                </div>
            </div>
        </main>
    );
};

export default MainComponent;
