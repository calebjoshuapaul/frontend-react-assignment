import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import React, { useContext } from "react";
import { BookmarksContext } from "../context/BookmarksContext";
import styles from "./ListComponent.module.css";

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
  const { bookmarks, setBookmarks, setTravelTo } = useContext(BookmarksContext);

  const handleRemoveBookmark = (e: any) => {
    const bookmarkToRemove = e.target.parentElement.firstChild.textContent;

    setBookmarks(() =>
      bookmarks.filter(
        (bookmark: Bookmark) => bookmark.name !== bookmarkToRemove
      )
    );
  };

  const handleCameraTransition = (e: any) => {
    const [travelTo] = bookmarks.filter(
      (bookmark: Bookmark) => bookmark.name === e.target.textContent
    );

    setTravelTo(travelTo);
  };

  return (
    <div className={props.className}>
      <h3>Bookmarked Place</h3>
      <List>
        {bookmarks.map((bookmark: Bookmark, index: number) => {
          return (
            <React.Fragment key={index}>
              <ListItem className={styles.listItem}>
                <span
                  onClick={handleCameraTransition}
                  style={{ cursor: "pointer" }}
                >
                  {bookmark.name}
                </span>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={handleRemoveBookmark}
                >
                  Remove
                </Button>
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default ListComponent;
