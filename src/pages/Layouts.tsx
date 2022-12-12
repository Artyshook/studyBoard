import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateCard } from './CreateCard'
import { NotesApp } from './NotesApp'
import React from 'react'

export const Layouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/notes'} element={<NotesApp />} />
        <Route path={'/create'} element={<CreateCard />} />
      </Routes>
    </BrowserRouter>
  )
}
