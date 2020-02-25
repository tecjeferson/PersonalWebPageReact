import React from 'react';
import { connect } from 'react-redux'
import Header from './components/partials/header/header'

import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { Template } from './components/MainComponents'

import './App.css'


const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header />

        <Routes />


      </Template>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)