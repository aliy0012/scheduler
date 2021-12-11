

import "components/Application.scss";
import DayList from "./DayList";
import React, { useState, useEffect } from "react";
import Appointment from "components/Appointment";

import axios from "axios";


export default function Application(props) {
 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

useEffect(() => {
  axios.get("/api/days")
}, []);

  //looping appointments mock data 

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map((appointment) => (
          <Appointment key={appointment.id} {...appointment} />
        ))}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}