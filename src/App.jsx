/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import request from './Api/request';
import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';

import './App.scss';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const options = { method: 'GET' };

    request('posts', options)
      .then((response) => setPosts(response));
  }, []);

  return (
    <>
      <header className="App__header">
        <h1 className="App__header-text">Posts List</h1>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <PostList posts={posts} setSelectedPostId={setSelectedPostId} />
        </div>

        <div className="App__details">
          {!!selectedPostId && (
            <PostDetails selectedPostId={selectedPostId} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
