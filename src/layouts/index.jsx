import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './../router/router'

export default function index() {
  return (
    <BrowserRouter>
      <div>
        <AppRoute />
      </div>
    </BrowserRouter>
  )
}
