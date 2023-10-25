import React from "react";
import { PostType } from "./Types";

type PropsType = {
  model: PostType;
};

function Post(props: PropsType) {
  return (
    <div className="post-item">
      <table border={1} width="400px" style={{ textAlign: "left" }}>
        <tbody>
          <tr>
            <td>{props.model.id}</td>
            <td>{props.model.title}</td>
            <td>userId: {props.model.userId}</td>
          </tr>
          <tr>
            <td colSpan={3}>{props.model.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Post;
