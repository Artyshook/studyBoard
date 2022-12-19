import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { TaskType } from '../pages/CreateCard'
import { blue } from '@mui/material/colors'
import React from 'react'
import styled from 'styled-components'

type NoteProps = {
  note: TaskType
  handleDelete: (id: string) => void
}

export const NoteCard = (props: NoteProps) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <CategoryAvatar category={props.note.category}>
              {props.note.category[0].toUpperCase()}
            </CategoryAvatar>
          }
          action={
            <IconButton onClick={() => props.handleDelete(props.note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={props.note.title}
          subheader={props.note.category}
        />
        <CardContent>
          <Typography variant={'body2'} color={'textSecondary'}>
            {props.note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

const CategoryAvatar = styled(Avatar)<{ category: string }>`
  background-color: ${props => {
    if (props.category === 'work') return '#00FD1EFF'
  }};
`
