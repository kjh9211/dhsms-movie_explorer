import { useState } from 'react';
import './App.css'
import { Header } from './components/Header';
import { MovieGrid } from './components/MovieGrid';
import { SearchBar } from './components/SearchBar';
import { movies } from './data/movies';

function App() {

  return (
    <div>
      {Header()}
      <main>
        <div className='main'>
          <h1 className='title'>오늘은 어떤 영화를 찾아볼까요?</h1>
          <p className='subtitle'>새로운 이야기와 오래 기억될 장면을 만나보세요</p>
          {SearchBar()}
        </div>
        <div className='content'>
          <p className='subtitle'>추천영화</p>
          {MovieGrid({ movies })}
        </div>
      </main>
    </div>
  );
}

export default App
