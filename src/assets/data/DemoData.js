import Accordion from "../../pages/Accordion/Accordion";
import MachineProgress from "../../pages/MachineProgress/MachineProgress";
import PopOver from "../../pages/PopOver/PopOver";
import StarRating from "../../pages/StarRating/StarRating";
import StopWatch from "../../pages/StopWatch/StopWatch";
import GamePage from "../../pages/TicTacToe/GamePage";

export const DemoData = [
  {
    id: 1,
    demoName: "Animated Progress bar",
    demoDescription:
      "A visual indicator that shows the completion status of a task or process, typically represented as a horizontal bar filling up from 0% to 100%.",
    demoRoute: "/machine-progress",
    demoComponent: <MachineProgress />,
  },
  {
    id: 2,
    demoName: "5 Star rating",
    demoDescription:
      "An interactive element that allows users to rate items, such as products or services, by selecting a number of stars, usually on a scale from 1 to 5.",
    demoRoute: "/star-rating",
    demoComponent: <StarRating />,
  },
  {
    id: 3,
    demoName: "Stop Watch",
    demoDescription:
      "A timekeeping device designed to measure the amount of time elapsed from a particular time when activated to when it is deactivated.",
    demoRoute: "/stop-watch",
    demoComponent: <StopWatch />,
  },
  {
    id: 4,
    demoName: "Pop-Over Component",
    demoDescription:
      "A small overlay window that appears upon user interaction, providing additional information or options related to the current view without navigating away from the page.",
    demoRoute: "/pop-over",
    demoComponent: <PopOver />,
  },
  {
    id: 5,
    demoName: "Accordion Component",
    demoDescription:
      "A UI element that allows users to expand and collapse sections of content, enabling efficient information display by showing only the relevant details when needed.",
    demoRoute: "/accordion",
    demoComponent: <Accordion />,
  },
  {
    id: 6,
    demoName: "Tic Tac Toe Game",
    demoRoute: "/tictactoe",
    demoComponent: <GamePage />,
    demoDescription:
      "Tic Tac Toe is a two-player game where players take turns marking a 3x3 grid with X or O. The goal is to be the first to get three of their symbols in a row, either horizontally, vertically, or diagonally. The game is simple and often ends in a draw if neither player wins.",
  },
];

export default DemoData;
