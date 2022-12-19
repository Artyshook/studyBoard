import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateCard } from '../pages/CreateCard'
import { DashBoard } from '../pages/DashBoard'
import { NotesApp } from '../pages/NotesApp'
import { SideBar } from './SideBar'
import React from 'react'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <MyContainer>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path={'/'} element={<DashBoard />} />
          <Route path={'/notes'} element={<NotesApp />} />
          <Route path={'/create'} element={<CreateCard />} />
        </Routes>
      </BrowserRouter>
    </MyContainer>
  )
}

const MyContainer = styled.div`
  display: flex;
  padding-top: 100px;
`
