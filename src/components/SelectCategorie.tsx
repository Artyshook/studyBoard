import { Box } from '@mui/system'
import { IconButton, MenuItem, Select, TextField } from '@mui/material'
import { TaskType } from '../pages/CreateCard'
import { Theme, useTheme } from '@mui/material/styles'
import { styled } from '@mui/styles'
import { useLocalStorage } from '../helpers/functions'
import AddIcon from '@mui/icons-material/Add'
import Chip from '@mui/material/Chip'
import ClearIcon from '@mui/icons-material/Clear'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import React, { Dispatch, SetStateAction, useState } from 'react'

const ITEM_HEIGHT = 45
const ITEM_PADDING_TOP = 5
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

// function getStyles(algo: string, algorithm: string | any[], theme: Theme) {
//   return {
//     fontWeight:
//       algorithm.indexOf(algo) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   }
// }

const categoriesList = ['Work', 'School', 'Self Education']

type PropsType = {
  setCategory: Dispatch<SetStateAction<string>>
}

export const SelectCaterogie = (props: PropsType) => {
  const [category, setCategory] = useState([])
  const [newCategory, setNewCategory] = useState('')
  const [categories, setCategories] = useLocalStorage('category', categoriesList as string[])

  const handleNewCategory = () => {
    setCategories([...categories, newCategory])
  }

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event
    setCategory(typeof value === 'string' ? value.split(',') : value)
    props.setCategory(value)
  }

  const deleteCategory = (value: string) => {
    setCategories(categories.filter(el => el !== value))
  }

  return (
    <Container>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id='demo-multiple-chip-label'>Category</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          value={category}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label='Category' />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(value => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map(algo => (
            <MenuItem key={algo} value={algo}>
              {algo}
              <IconButton>
                <ClearIcon onClick={() => deleteCategory(algo)} />
              </IconButton>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <TextField
          onChange={e => setNewCategory(e.currentTarget.value)}
          fullWidth
          id='standard-bare'
          variant='outlined'
          defaultValue='Add category'
          InputProps={{
            endAdornment: (
              <IconButton>
                <AddIcon onClick={handleNewCategory} />
              </IconButton>
            ),
          }}
        />
      </Box>
    </Container>
  )
}

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'flex-start',
  paddingBottom: '10px',
  gap: '10px',
  width: '100%',
})
