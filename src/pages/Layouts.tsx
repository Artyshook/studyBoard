import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateCard } from './CreateCard'
import { DashBoard } from './DashBoard'
import { NotesApp } from './NotesApp'
import { SideBar } from '../components/SideBar'
import React from 'react'

export const Layouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/dashboard'} element={<DashBoard />} />
        <Route path={'/notes'} element={<NotesApp />} />
        <Route path={'/create'} element={<CreateCard />} />
      </Routes>
    </BrowserRouter>
  )
}
