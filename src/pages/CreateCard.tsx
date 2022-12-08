import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'

type TaskType = {
  id: string
  title: string
  details: string
}

export const CreateCard = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([] as TaskType[])

  const handleClick = () => {
    const id = '123'
    setTask([...task, { id, title, details }])
  }

  return (
    <Container>
      <Typography variant={'h3'} color={'secondary'}>
        Enter question
      </Typography>
      <form noValidate autoComplete={'off'}>
        <MyTextField
          onChange={e => setTitle(e.currentTarget.value)}
          label={'No title'}
          variant={'outlined'}
          color={'secondary'}
          fullWidth
          required
        />
        <MyTextField
          onChange={e => setDetails(e.currentTarget.value)}
          label={'Details'}
          variant={'outlined'}
          color={'secondary'}
          multiline
          rows={4}
          fullWidth
          required
        />
      </form>
      <Button
        onClick={handleClick}
        color={'secondary'}
        variant={'contained'}
        type={'submit'}
        size={'large'}
      >
        Add
      </Button>
    </Container>
  )
}

const MyTextField = styled(TextField)`
  && {
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
  }
`
