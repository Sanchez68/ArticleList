import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ListArticles from './components/ListArticles';
import ArticlesDetails from './components/ArticleDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ArticleList" element={<ListArticles />} />
        <Route path="/ArticleList/article/:id" element={<ArticlesDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
