import { useState } from "react";
import PlayerBoard from "./PlayerBoard";

export default function Player() {
    const [players, setPlayers] = useState([<PlayerBoard key={0} />]);

    function handleAddPerson(e) {
        e.preventDefault();
        setPlayers([...players, <PlayerBoard key={players.length} />]);
    }

    return (
        <>
            {players}

            <footer>
                <button onClick={handleAddPerson}>+ Add Player</button>
            </footer>
        </>
    );
}
