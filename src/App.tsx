import './App.css'

function App() {
  return (
    <div>
      <header>
        <a href='/'>MOVIE EXPLORER</a>
        <button className='favorite'>
          myFavorites
        </button>
      </header>
      <main>
        <div className='main'>
          <h1 className='title'>오늘은 어떤 영화를 찾아볼까요?</h1>
          <p className='subtitle'>새로운 이야기와 오래 기억될 장면을 만나보세요</p>
          <label className="search">
            <input type='search' placeholder='영화제목을 입력하세요' />
            <button>검색</button>
          </label>
        </div>
        <div className='content'>
          <p className='subtitle'>추천영화</p>
          <div className='movieList'>
            <p className='movie'>인터스텔라</p>
            <p className='movie'>인셉션</p>
            <p className='movie'>라라랜드</p>
            <p className='movie'>어벤져스: 엔드게임</p>
            <p className='movie'>센과 치히로의 행방불명</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
