import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import Approval from "./Approval";

const App = () => {
  return (
    <div className="ui container comments">
      <Approval>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 5:42PM"
          avatar={faker.image.avatar()}
        />
      </Approval>
      <Approval>
        <CommentDetail
          author="John"
          timeAgo="Today at 6.00AM"
          avatar={faker.image.avatar()}
        />
      </Approval>
      <Approval>
        <CommentDetail
          author="Rees"
          timeAgo="Today at 4.30PM"
          avatar={faker.image.avatar()}
        />
      </Approval>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
