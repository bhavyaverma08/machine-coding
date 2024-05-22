import MachineProgress from "../../pages/MachineProgress/MachineProgress";
import PopOver from "../../pages/PopOver/PopOver";
import StarRating from "../../pages/StarRating/StarRating";
import StopWatch from "../../pages/StopWatch/StopWatch";

export const DemoData = [
  {
    id: 1,
    demoName: "Animated Progress bar",
    demoDescription: "Here comes the description",
    demoRoute: "/machine-progress",
    demoComponent: <MachineProgress />,
  },
  {
    id: 2,
    demoName: "5 Star rating",
    demoDescription: "Here comes the description",
    demoRoute: "/star-rating",
    demoComponent: <StarRating />,
  },
  {
    id: 3,
    demoName: "Stop Watch",
    demoDescription: "Here comes the description",
    demoRoute: "/stop-watch",
    demoComponent: <StopWatch />,
  },
  {
    id: 4,
    demoName: "Pop-Over Component",
    demoDescription: "Here comes the description",
    demoRoute: "/pop-over",
    demoComponent: <PopOver />,
  },
];

export default DemoData;
