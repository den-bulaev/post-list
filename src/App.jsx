/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';
import NewPost from './components/NewPost/NewPost';
import { getPosts } from './Api/posts';

import './App.scss';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response));
  }, []);

  return (
    <>
      <header className="App__header">
        <h1 className="App__title">Posts List</h1>
      </header>

      <main className="App__main">
        <section className="App__sidebar">
          <PostList
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
            setPosts={setPosts}
            posts={posts}
          />
        </section>

        <section className="App__details">
          {!!selectedPostId && (
            <PostDetails postId={selectedPostId} />
          )}
          <NewPost setPosts={setPosts} />
        </section>
      </main>
    </>
  );
}

export default App;
