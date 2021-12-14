import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // mapping over days array
  return (
    <ul>
      {props.days.map((day) => (
        <DayListItem
          key={props.id}
          name={props.name}
          spots={props.spots}
          selected={props.name === props.value}
          setDay={props.onChange}
        />
      ))}
    </ul>
  );
}
