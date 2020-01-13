import React, { Component } from "react";
import { connect } from "react-redux";
import { createBookmarks } from "./../../actions";
import { Field, reduxForm } from "redux-form";

class BookmarksForm extends Component {
  state = {
    errorMessage: null
  };

  onFormSubmit = async formValues => {
    // event.preventDefault();  //redux form: auto prevent form from submmit
    const { title, url } = formValues;
    const { createBookmarks } = this.props;

    try {
      await createBookmarks({ title, url });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    const { errorMessage } = this.state;
    const { handleSubmit } = this.props; //from redux form
    return (
      <>
        {errorMessage}
        {/* put 'onSubmit' on the form tag, instead of the submit button (coz you
        can also submit the form with enter key) */}
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <label>Title</label>
            <Field name="title" component="input" type="text" />
            {/* <input name="title" value={title} onChange={this.onInputChange} /> */}
          </div>
          <div>
            <label>Url</label>
            <Field name="url" component="input" type="text" />
            {/* <input name="url" value={url} onChange={this.onInputChange} /> */}
          </div>
          <input type="submit" value="Create New Bookmark" />
        </form>
      </>
    );
  }
}

const WrappedBookmarkForm = reduxForm({
  form: "bookmark" // required property: form, and we call it bookmark
})(BookmarksForm); //higher order component for BookmarkForm

export default connect(null, { createBookmarks })(WrappedBookmarkForm);
//1st: any piece of global state from redux: null (doesn't need)
//action creator from redux: setBookmarks
