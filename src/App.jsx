/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import { getPosts } from './Api/posts';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';

import './App.scss';

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => getPosts(setPosts), []);

  return (
    <>
      <header className="App__header">
        <h1 className="App__title">Posts List</h1>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <PostList
            posts={posts}
            setPost={setPost}
          />
        </div>

        <div className="App__details">
          {!!post && (
            <PostDetails {...post} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
