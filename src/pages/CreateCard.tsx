import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import { useLocalStorage } from '../helpers/functions'
import { useNavigate } from 'react-router-dom'
import { v1 } from 'uuid'
import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'

export type TaskType = {
  id: string
  title: string
  details: string
  category: string
}

export const CreateCard = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [category, setCategory] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [task, setTask] = useLocalStorage('task', [] as TaskType[])
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    } else if (title && details) {
      setTask([...task, { id: v1(), title, details, category }])
      setTimeout(() => {
        navigate('/notes')
      })
    }
  }

  return (
    <>
      <Grid
        container
        display={'flex'}
        flexDirection={'column'}
        minHeight={'150vh'}
        justifyContent={'space-between'}
      >
        <Grid item flexGrow={1} paddingBottom={'10px'}>
          <Container>
            <Typography variant={'h3'} color={'secondary'}>
              Enter question
            </Typography>
            <form noValidate autoComplete={'off'} onSubmit={handleSubmit}>
              <MyTextField
                onChange={e => setTitle(e.currentTarget.value)}
                label={'No title'}
                variant={'outlined'}
                color={'secondary'}
                fullWidth
                required
                error={titleError}
              />
              <MyTextField
                onChange={e => setDetails(e.currentTarget.value)}
                label={'Details'}
                variant={'outlined'}
                color={'secondary'}
                fullWidth
                multiline //error react to many re-renders???
                rows={4}
                required
                error={detailsError}
              />
              <MyFormControl>
                <FormLabel>Category</FormLabel>
                <RadioGroup value={category} onChange={e => setCategory(e.currentTarget.value)}>
                  <FormControlLabel
                    control={<Radio color={'secondary'} />}
                    label={'1'}
                    value={'1'}
                  />
                  <FormControlLabel
                    control={<Radio color={'secondary'} />}
                    label={'2'}
                    value={'2'}
                  />
                  <FormControlLabel
                    control={<Radio color={'secondary'} />}
                    label={'3'}
                    value={'3'}
                  />
                </RadioGroup>
              </MyFormControl>

              <Button color={'secondary'} variant={'contained'} type={'submit'} size={'large'}>
                Add
              </Button>
            </form>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

const MyTextField = styled(TextField)`
  && {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
  }
`
const MyFormControl = styled(FormControl)`
  && {
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
  }
`
