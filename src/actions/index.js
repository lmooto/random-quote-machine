import { FETCH_QUOTES, NEW_QUOTE } from "../constants";

export const fetchQuotes = () => dispatch => {
  fetch(
    "https://gist.githubusercontent.com/lmooto/01ddaf971d3af5953b71cdbf11b239f1/raw/e98b4b29ae3e81e1733c61b3b79a64c9cda4530b/quotes.json"
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log("ok");
      return response.json();
    })
    .then(data => {
      //   this.setState({ loading: false, error: false, posts: data });
      dispatch({ type: FETCH_QUOTES, payload: data.quotes });
    })
    .catch(error => {
      console.log(error);
      //   this.setState({ loading: false, error: true });
    });
};

export const newQuote = randomNo => {
  return {
    type: NEW_QUOTE,
    payload: randomNo
  };
};
