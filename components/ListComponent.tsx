import React, { useContext } from "react";
import { BookmarksContext } from "../context/BookmarksContext";

type Props = {
  className?: string;
};

interface Bookmark {
  name: string;
  Lat: number;
  Lng: number;
}

/*
This component has to show list of bookmared places by the user. And it has to be able to add and delete the bookmarked places.
Additonally when user clicks on the place it has to show the details of the place and zoom to the corresponding marker on the MapComponent.
*/
const ListComponent = (props: Props): JSX.Element => {
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  const handleRemoveBookmark = (e: any) => {
    const bookmarkToRemove = e.target.parentElement.firstChild.textContent;

    setBookmarks(() =>
      bookmarks.filter(
        (bookmark: Bookmark) => bookmark.name !== bookmarkToRemove
      )
    );
  };

  return (
    <div className={props.className}>
      <h3>Bookmarked Place</h3>
      <ul>
        {bookmarks.map((bookmark: Bookmark, index: number) => {
          return (
            <li key={index}>
              {bookmark.name} |{" "}
              <span onClick={handleRemoveBookmark}>Remove</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComponent;
