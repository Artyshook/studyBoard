import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateCard } from './CreateCard'
import { Layout } from '../components/Layout'
import { NotesApp } from './NotesApp'
import React from 'react'
import styled from 'styled-components'

export const Layouts = () => {
  return (
    <BrowserRouter>
      <MyContainer>
        <Layout />
        <Routes>
          <Route path={'/notes'} element={<NotesApp />} />
          <Route path={'/create'} element={<CreateCard />} />
        </Routes>
      </MyContainer>
    </BrowserRouter>
  )
}

const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
`
