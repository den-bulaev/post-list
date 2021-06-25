/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import PostList from './components/PostList/PostList';
import PostDetails from './components/PostDetails/PostDetails';
import NewPost from './components/NewPost/NewPost';

import './App.scss';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(0);

  return (
    <>
      <header className="App__header">
        <h1 className="App__title">Posts List</h1>
      </header>

      <main className="App__main">
        <div className="App__sidebar">
          <PostList
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
          />
        </div>

        <div className="App__details">
          {!!selectedPostId && (
            <PostDetails postId={selectedPostId} />
          )}
          <NewPost />
        </div>
      </main>
    </>
  );
}

export default App;
