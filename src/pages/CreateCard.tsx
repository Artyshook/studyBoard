import { Button, Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

export const CreateCard = () => {
  const styles = makeStyles({})

  return (
    <Container>
      <Typography variant={'h3'} color={'secondary'} align={'center'}>
        Enter question
      </Typography>
      <Button color={'primary'} variant={'contained'} type={'submit'} size={'large'}>
        Click
      </Button>
    </Container>
  )
}
