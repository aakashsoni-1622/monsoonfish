import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "../constants/events";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import AddEvent from "./addEvent";


export default function EventCalender() {

    //When component is intialize, setting the event holiday properties to local storage
    React.useEffect(() => {
        localStorage.setItem('data', JSON.stringify(events));
    }, [])

    //fetching the properties from local storage
    const data = JSON.parse(localStorage.getItem('data'));

    //initialize the day
    let firstDay = 1;

    return (
        <div>
            <FullCalendar
                defaultView="dayGridMonth"
                firstDay={firstDay}
                locale="en"
                header={{
                    left: "prev,next",
                    center: "title",
                }}
                themeSystem="Simplex"
                plugins={[dayGridPlugin]}
                events={data}
            />
            <AddEvent event={data} />
        </div>
    );
}
