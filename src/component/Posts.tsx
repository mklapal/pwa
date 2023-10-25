import React, { useState, useEffect } from "react";
import Post from "./Post";
import { PostType } from "./Types";
import { PostService } from "../storage/post";

type PropsType = {};

function Posts(props: PropsType) {
  const [coll, setColl] = useState([] as any);

  const service = new PostService();

  useEffect(() => {
    // get recent data
    if (navigator.onLine === true) {
      // do API call
      var req = new XMLHttpRequest();
      req.open("GET", "https://jsonplaceholder.typicode.com/posts", false);

      req.onload = function () {
        var jsonResponse = JSON.parse(req.responseText);
        // do something with jsonResponse
        setColl(jsonResponse);

        // save into database
        /*
        addPost({
          id: 123,
          userId: 111,
          title: "Title",
          body: "body text body text",
        });
        */
      };
      req.send(null);
    } else {
      // set collection from database
      loadPosts().then(function (data) {
        setColl(data);
      });
    }
  }, []);

  async function loadPosts() {
    try {
      const posts = await service.getPosts();
      return posts;
    } catch (err: any) {
      alert(err.message);
      console.error(err);
    }
  }

  async function addPost(item: PostType) {
    var post = {
      id: item.id,
      userId: item.userId,
      title: item.title,
      body: item.body,
    };

    try {
      const p = await service.addPost(post);
    } catch (err: any) {
      alert(err.message);
      console.error(err);
    }
  }

  return (
    <div className="post-collection">
      {coll.map(function (item: PostType) {
        return <Post key={item.id} model={item} />;
      })}
    </div>
  );
}

export default Posts;
