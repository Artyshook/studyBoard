import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
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

  console.log(task)

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
    <Box_Wrapper
      component={'main'}
      flexDirection={{ xs: 'column', md: 'row' }}
      minHeight={'calc(100vh - 175px)'}
    >
      <Box
        display={'flex'}
        gap={'1.5rem'}
        justifyContent={'center'}
        flexDirection={'column'}
        width={'60%'}
      >
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
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />
          <MyFormControl>
            <FormLabel>Category</FormLabel>
            <RadioGroup value={category} onChange={e => setCategory(e.currentTarget.value)}>
              <FormControlLabel control={<Radio color={'secondary'} />} label={'1'} value={'1'} />
              <FormControlLabel control={<Radio color={'secondary'} />} label={'2'} value={'2'} />
              <FormControlLabel control={<Radio color={'secondary'} />} label={'3'} value={'3'} />
            </RadioGroup>
          </MyFormControl>

          <Button color={'secondary'} variant={'contained'} type={'submit'} size={'large'}>
            Add
          </Button>
        </form>
      </Box>
    </Box_Wrapper>
  )
}

const MyContainer = styled(Container)`
  && {
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const MyTextField = styled(TextField)`
  && {
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
const Box_Wrapper = styled(Box)`
  && {
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
