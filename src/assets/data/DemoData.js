import MachineProgress from "../../pages/MachineProgress/MachineProgress";
import StarRating from "../../pages/StarRating/StarRating";

export const DemoData = [
  {
    id: 1,
    demoName: "Animated Progress bar",
    demoDescription: "Here comes the description",
    demoRoute: "/machine-progress",
    demoComponent: <MachineProgress />,
  },
  {
    id: 1,
    demoName: "5 Star rating",
    demoDescription: "Here comes the description",
    demoRoute: "/star-rating",
    demoComponent: <StarRating />,
  },
];

export default DemoData;
