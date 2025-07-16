import { useEffect, useState } from "react";
import Player from "../player/Player";


const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className="mb-60">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Available Players</h2>
                <div className="flex border-1 border-gray-300 rounded-xl ">
                    <p className="font-bold bg-lime-400 px-4 py-2 rounded-l-xl">Available</p>
                    <p className="px-4 py-2">Select(0)</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 ">
                {
                    players.map(player => <Player 
                    player={player}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;