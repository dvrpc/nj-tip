/*** ACTIONS ***/
const GET_COMMENTS = "GET_COMMENTS";
const POSTED_COMMENT_RESPONSE = "POSTED_COMMENT_RESPONSE";

/*** ACTION_CREATORS ***/
const get_comments = comments => ({ type: GET_COMMENTS, comments });
const posted_comment_response = response => ({
  type: POSTED_COMMENT_RESPONSE,
  response
});

/*** REDUCERS ***/
export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case GET_COMMENTS:
      return Object.assign({}, state, { comments: action.comments });
    case POSTED_COMMENT_RESPONSE:
      return Object.assign({}, state, { response: action.response });
    default:
      return state;
  }
}

/*** DISPATCHERS ***/
export const resetCommentBool = bool => dispatch =>
  dispatch(posted_comment_response(false));

export const submitComment = comment => dispatch => {
  fetch("https://www.dvrpc.org/data/tip/2020/comments", {
    method: "post",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify(comment)
  })
    .then(response => {
      if (response.ok) {
        dispatch(posted_comment_response(true));
      } else {
        alert("Failed to post comment to database. Please try again.");
        console.log("comment post failed with status: ", response.status);
      }
    })
    .catch(err => console.log(err));
};

export const getGeneralComments = () => dispatch => {
  fetch("https://www.dvrpc.org/data/tip/2020/comments/null")
    .then(response => response.json())
    .then(response => dispatch(get_comments(response)))
    .catch(err => console.log(err));
};