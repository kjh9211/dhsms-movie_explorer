import type { ReactNode } from 'react'
import { useEffect,useState } from 'react'
import { Header } from './Header'
import { CommandPalette } from './CommandPalette'
interface LayoutProps { children:ReactNode }
export function Layout({children}:LayoutProps){const [open,setOpen]=useState(false);useEffect(()=>{const handleKey=(event:KeyboardEvent)=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();setOpen(true)}};window.addEventListener('keydown',handleKey);return()=>window.removeEventListener('keydown',handleKey)},[]);return <div><Header onOpenSearch={()=>setOpen(true)}/><main>{children}</main><CommandPalette open={open} onClose={()=>setOpen(false)}/></div>}
