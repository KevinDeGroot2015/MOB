import { useState } from "react";

export default function PlayerBoard() {
    const [lifeInterval, setLifeInterval] = useState(null);
    const [playerName, setPlayerName] = useState("");
    const [life, setLife] = useState(20);
    const [editState, setEditState] = useState(true);

    const lifeIntervalDisplay =
        lifeInterval > 0 ? (
            <span className="positive">+{lifeInterval}</span>
        ) : (
            <span className="negative">{lifeInterval}</span>
        );

    const lifeStatus =
        life >= 13
            ? "green-info"
            : life >= 7
            ? "orange-info"
            : life >= 0 && "red-info";

    function inputChangeHandler(e) {
        setPlayerName(e.target.value);
    }

    function buttonChangeHandler() {
        if (playerName.length > 1) {
            setEditState(!editState);
        }
    }

    function lifeTriggerHandlerMinus() {
        setLifeInterval((oldAmountInterval) => oldAmountInterval - 1);
    }

    function lifeTriggerHandlerPlus() {
        setLifeInterval((oldAmountInterval) => oldAmountInterval + 1);
    }

    function confirmLifeTriggerHandlerResolver() {
        setLife((oldAmountTotalLife) => oldAmountTotalLife + lifeInterval);
        setLifeInterval(null);
    }

    function resetLifehandler() {
        setLife(20);
        setLifeInterval(null);
    }

    return (
        <div className="playerCard">
            {editState ? (
                <div className="playerContent">
                    <input
                        value={playerName}
                        placeholder="Player name"
                        onChange={inputChangeHandler}
                    />
                    <button onClick={buttonChangeHandler} className="nameBtn">
                        ✓
                    </button>
                </div>
            ) : (
                <>
                    <div className="playerContent">
                        <h2>{playerName}</h2>
                        <button
                            onClick={buttonChangeHandler}
                            className="nameBtn editBtn"
                        >
                            ✎
                        </button>
                        <button
                            onClick={resetLifehandler}
                            className="nameBtn resetBtn"
                        >
                            ↻
                        </button>
                    </div>
                    <div className="playerBoard">
                        <div className={`totalLife ${lifeStatus}`}>
                            <div className="mainLife">{life}</div>{" "}
                            {lifeIntervalDisplay}
                        </div>
                    </div>
                    <div className="buttonBoard">
                        <button
                            onClick={lifeTriggerHandlerMinus}
                            className="red"
                        >
                            -1 Life
                        </button>
                        <button
                            onClick={lifeTriggerHandlerPlus}
                            className="green"
                        >
                            +1 Life
                        </button>

                        <button
                            onClick={confirmLifeTriggerHandlerResolver}
                            className={
                                lifeInterval != null
                                    ? "confirm"
                                    : "confirm inactive"
                            }
                        >
                            ✓
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
