import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { TaskType } from '../pages/CreateCard'
import React from 'react'

type NoteProps = {
  note: TaskType
  handleDelete: (id: string) => void
}

export const NoteCard = (props: NoteProps) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
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
