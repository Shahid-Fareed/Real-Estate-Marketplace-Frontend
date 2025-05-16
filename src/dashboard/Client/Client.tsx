import React from 'react'
import MyHelmet from '../../components/MyHelmet'
import Sidebar from '../../components/dashboard/Sidebar'
import PageTitle from '../../components/dashboard/PageTitle'

const Client = () => {
  return (
    <>
    <MyHelmet title="Clients" body="" />
    <Sidebar />
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title  */}
          <div className="row">
            <PageTitle pagename="Clients" />

            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Client