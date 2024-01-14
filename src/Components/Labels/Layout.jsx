import React from 'react'
import Headerr from './Headerr'
import Footerr from './Footerr'

function Layout(props) {
  return (
    <>
    <Headerr></Headerr>

        <main>{props.children}</main>
        
        <Footerr></Footerr>
    </>
  )
}

export default Layout
