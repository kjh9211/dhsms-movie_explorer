import './App.css'
import { lazy, Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
const HomePage=lazy(()=>import('./pages/HomePage'))
const MovieDetailPage=lazy(()=>import('./pages/MovieDetailPage'))
const NotFoundPage=lazy(()=>import('./pages/NotFoundPage'))
function App(){return <Layout><Suspense fallback={<p className="content">페이지를 불러오는 중입니다.</p>}><Routes><Route path="/" element={<HomePage/>}/><Route path="/movies/:movieId" element={<MovieDetailPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></Suspense></Layout>}
export default App
