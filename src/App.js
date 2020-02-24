import React from 'react';
import { connect } from 'react-redux'
import Header from './components/partials/header/header'
import Footer from './components/partials/footer/footer'
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

        <Footer />
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