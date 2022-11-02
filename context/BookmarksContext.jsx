const { createContext, useState } = require("react");

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([
    {
      name: "Bangalore",
      Lat: 12.9603,
      Lng: 77.59728,
    },
    {
      name: "Chennai",
      Lat: 13.05044,
      Lng: 80.27437,
    },
  ]);

  const value = { bookmarks, setBookmarks };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
};
