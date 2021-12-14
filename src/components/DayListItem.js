import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  //give classes to list by passing dayClass
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  //component that will format the props.spots to make our tests pass
  const formatSpots = function () {
    let text;
    if (props.spots === 0) {
      text = "no spots remaining";
    } else if (props.spots > 0) {
      text = `${props.spots}${
        props.spots === 1 ? " spot " : " spots "
      } remaining`;
    }
    return text;
  };

  return (
    <li className={dayClass} onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
