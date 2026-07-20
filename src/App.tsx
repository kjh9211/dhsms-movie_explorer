import './App.css'
import { lazy, Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { PageLoadingFallback } from './components/PageLoadingFallback'
const HomePage=lazy(()=>import('./pages/HomePage'))
const MovieDetailPage=lazy(()=>import('./pages/MovieDetailPage'))
const NotFoundPage=lazy(()=>import('./pages/NotFoundPage'))
function App(){return <Layout><Suspense fallback={<PageLoadingFallback/>}><Routes><Route path="/" element={<HomePage/>}/><Route path="/movies/:movieId" element={<MovieDetailPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></Suspense></Layout>}
export default App
