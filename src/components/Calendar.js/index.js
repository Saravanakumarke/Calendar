import styles from "./style.module.css";
import Slider from "../slider/ProductSlider";
import ShoeOne from "../slider/images/shoe1.jpg";
import ShoeTwo from "../slider/images/shoe2.jpg";
import ShoeThree from "../slider/images/shoe3.jpg";
import ShoeFour from "../slider/images/shoe4.jpg";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

export default function Calendarapp() {
  const data = [
    {
      id: 1,
      name: "Diary  Appointment",
      StartTime: "2021-12-1",
      EndTime: "2021-12-1",
    },
    {
      id: 2,
      name: "Appointment",
      StartTime: "2021-12-7",
      EndTime: "2021-12-7",
    },
  ];
  const slideimages = [
    {
      imgurl: ShoeOne,
      rating: [1, 2, 3, 4],
      legends: [
        {
          name: "W",
          color: "rgb(208, 170, 243)",
        },
        {
          name: "DC",
          color: "rgb(243, 236, 170)",
        },
      ],
    },
    {
      imgurl: ShoeTwo,
      rating: [1, 2, 3],
      legends: [
        {
          name: "W",
          color: "rgb(208, 170, 243)",
        },
        {
          name: "DC",
          color: "rgb(243, 236, 170)",
        },
        {
          name: "Pr",
          color: "rgb(170, 243, 176)",
        },
      ],
    },
    {
      imgurl: ShoeThree,
      rating: [1, 2, 3, 4, 5],
      legends: [
        {
          name: "C",
          color: "rgb(243, 170, 186)",
        },
      ],
    },
    {
      imgurl: ShoeFour,
      rating: [1, 2],
      legends: [
        {
          name: "W",
          color: "rgb(208, 170, 243)",
        },
        {
          name: "DC",
          color: "rgb(243, 236, 170)",
        },
        {
          name: "Pr",
          color: "rgb(170, 243, 176)",
        },
      ],
    },
  ];

  const editorwindowTemplate = () => {
    return (
      <div>
        <Slider size="sm" slideimages={slideimages} dot={true} />
      </div>
    );
  };

  const celltemplate = () => {
    return <div className={styles.template_wrap}>{data[0].name}</div>;
  };

  return (
    <div>
      <ScheduleComponent
        eventSettings={{ dataSource: data, template: celltemplate }}
        editorTemplate={editorwindowTemplate}
      >
        <ViewsDirective>
          <ViewDirective option="Month"></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
       <div className={styles.demo}>
        <Slider size="sm" slideimages={slideimages} dot={true} />
      </div> 
    </div>
  );
}
