
import React from "react";
import './styles.scss';


export default function Appointment(props) {
  return (
    <article className="appointment">
      <p time = {props.time}>Appointment {props.time}</p>
    </article>
  );
}