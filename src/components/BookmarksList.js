import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBookmarks } from "./../actions";

class BookmarksList extends Component {
  componentDidMount() {
    this.props.fetchBookmarks();
  }

  render() {
    const { bookmarks } = this.props;

    return (
      <ul>
        {bookmarks.map(bookmark => {
          return (
            <li key={`${bookmark.title}#${bookmark.url}`}>
              {bookmark.title} - {bookmark.url}
            </li>
          );
        })}
      </ul>
    );
  }
}

// const BookmarksList = props => {
//   const { bookmarks } = props;

//   return (
//     <ul>
//       {bookmarks.map(bookmark => {
//         return (
//           <li key={`${bookmark.title}#${bookmark.url}`}>
//             {bookmark.title} - {bookmark.url}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  };
};
// If a mapStateToProps function is specified, the new wrapper component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps. (https://react-redux.js.org/api/connect)

// As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It’s frequently referred to as just mapState for short.(https://react-redux.js.org/using-react-redux/connect-mapstate)

export default connect(mapStateToProps, { fetchBookmarks })(BookmarksList);
