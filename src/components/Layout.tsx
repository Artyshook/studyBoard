import { Drawer, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <div>
      <MyDrawer variant={'permanent'} anchor={'left'}>
        <div>
          <Typography variant='h5'>Links here</Typography>
        </div>
      </MyDrawer>
    </div>
  )
}

const MyDrawer = styled(Drawer)`
  width: 240px;
`
