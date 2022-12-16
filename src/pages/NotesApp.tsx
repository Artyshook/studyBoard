import { Container, Grid, Paper } from '@mui/material'
import { NoteCard } from '../components/NoteCard'
import { TaskType } from './CreateCard'
import { useLocalStorage } from '../helpers/functions'
import React, { useEffect, useState } from 'react'

export const NotesApp = () => {
  const [data, setData] = useLocalStorage('task', [] as TaskType[])

  const handleDelete = (id: string) => {
    setData(data.filter(note => note.id !== id))
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {data.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
