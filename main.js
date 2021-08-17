import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame/BoardGame";
import PlayerName from "./src/Components/PlayerName";

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML(
    "beforeend",`
        ${PlayerName("Player1")}
        ${PlayerName("Player2")}
        ${BoardGame(6)}
    `
);