import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { SubjectOutlined } from '@mui/icons-material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import LineAxisIcon from '@mui/icons-material/LineAxis'
import React from 'react'
import styled from 'styled-components'

export const SideBar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <LineAxisIcon color={'secondary'} />, path: '/' },
    { text: 'My Notes', icon: <SubjectOutlined color={'secondary'} />, path: '/notes' },
    { text: 'Create Note', icon: <AddCircleOutlineIcon color={'secondary'} />, path: '/create' },
  ]
  return (
    <div>
      <MyDrawer variant={'permanent'} anchor={'left'} PaperProps={{ sx: { width: '240px' } }}>
        <div>
          <Typography variant='h5'>Links</Typography>
        </div>
        <List>
          {menuItems.map(link => (
            <MyLink to={link.path} key={link.text}>
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </MyLink>
          ))}
        </List>
      </MyDrawer>
    </div>
  )
}

const MyDrawer = styled(Drawer)`
  width: 240px;
`
const MyLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
