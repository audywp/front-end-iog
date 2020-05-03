import React from 'react'
import { Spinner } from 'reactstrap'
export default function LoadingScreen() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <Spinner color="white" />
    </div>
  )
}
