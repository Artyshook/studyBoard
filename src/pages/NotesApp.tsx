import { TaskType } from './CreateCard'
import { useAsyncComponentDidMount } from '../helpers/UseComponentDidMount'
import { useLocalStorage } from '../helpers/functions'
import React, { useEffect, useState } from 'react'

export const NotesApp = () => {
  const [data, setData] = useState([] as TaskType[])

  useEffect(() => {
    const value = localStorage.getItem('task')
    if (typeof value === 'string') {
      const parse = JSON.parse(value)
      setData(parse)
    }
  }, [])

  return (
    <div>
      <div>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </div>
    </div>
  )
}
