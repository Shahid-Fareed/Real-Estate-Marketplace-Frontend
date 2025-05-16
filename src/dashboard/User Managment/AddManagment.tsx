import React from 'react'
import MyHelmet from '../../components/MyHelmet'
import PageTitle from '../../components/dashboard/PageTitle'
import Sidebar from '../../components/dashboard/Sidebar'

const AddManagment = () => {
  return (
    <>
    <MyHelmet title="Add Members" body="" />
    <Sidebar />
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title  */}
          <div className="row">
            <PageTitle pagename="Add Members" />

            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AddManagment