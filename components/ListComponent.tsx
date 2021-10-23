import React from "react";

type Props = {
  className?: string;
};

/*
This component has to show list of bookmared places by the user. And it has to be able to add and delete the bookmarked places.
Additonally when user clicks on the place it has to show the details of the place and zoom to the corresponding marker on the MapComponent.
*/
const ListComponent = (props: Props): JSX.Element => {
  return (
    <div className={props.className}>
      <h3>Bookmarked Place</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default ListComponent;
