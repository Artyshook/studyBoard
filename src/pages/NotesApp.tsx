import { Box, Button, Container, IconButton, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import { NoteCard } from '../components/NoteCard'
import { TaskType } from './CreateCard'
import { styled } from '@mui/styles'
import { useLocalStorage } from '../helpers/functions'
import Masonry from 'react-masonry-css'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'

export const NotesApp = () => {
  const [noteData, setNoteData] = useLocalStorage('task', [] as TaskType[])

  const handleDelete = (id: string) => {
    setNoteData(noteData.filter(note => note.id !== id))
  }

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <Container>
      <Header>
        <MyLink to={'/create'}>
          <MyButton>Add note</MyButton>
        </MyLink>
        <SearchBar
          fullWidth
          id='standard-bare'
          variant='outlined'
          defaultValue='Search'
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Header>
      <Masonry
        breakpointCols={breakPoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {noteData.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: 'white',
  padding: '10px',
  fontSize: '15px',
  height: '52px',
})

const MyLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  paddingBottom: '10px',
})

const Header = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'flex-start',
  paddingBottom: '10px',
  gap: '10px',
  width: '100%',
})

const SearchBar = styled(TextField)({
  maxWidth: '50%',
})
