import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { SubjectOutlined } from '@mui/icons-material'
import { format } from 'date-fns'
import LineAxisIcon from '@mui/icons-material/LineAxis'
import React from 'react'
import styled from 'styled-components'

export const SideBar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <LineAxisIcon color={'secondary'} />, path: '/' },
    { text: 'My Notes', icon: <SubjectOutlined color={'secondary'} />, path: '/notes' },
    // { text: 'Create Note', icon: <AddCircleOutlineIcon color={'secondary'} />, path: '/create' },
  ]
  const avatar = require('../helpers/icons/Lion.png')
  return (
    <div>
      <MyAppBar elevation={0} style={{ background: 'white' }}>
        <Toolbar>
          <DateTypography fontSize={'20px'} style={{ color: 'black' }}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </DateTypography>
          <Typography style={{ color: 'black' }}>Helena</Typography>
          <MyAvatar src={avatar}></MyAvatar>
        </Toolbar>
      </MyAppBar>
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
const MyAppBar = styled(AppBar)`
  max-width: calc(100% - 240px);
`
const DateTypography = styled(Typography)`
  flex-grow: 1;
`
const MyAvatar = styled(Avatar)`
  margin-left: 8px;
`
