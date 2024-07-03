import React from 'react'
import Navbar from './Navbar'

const AddSubscriber = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Subscribers Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Phone No</label>
                        <input type="text" className="form-control" placeholder='Enter phno' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Pincode</label>
                      <input type="text" className="form-control" placeholder='Enter pincode' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">District</label>
                      <select name="" id="" className="form-select">
                        <option value="Select District">Select District</option>
                        <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                        <option value="Pathanamthitta">Pathanamthitta</option>
                        <option value="Alappuzha">Alappuzha</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Kollam">Kollam</option>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Palakkad">Palakkad</option>
                        <option value="Kannur">Kannur</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Kozhikode">Kozhikode</option>
                        <option value="Kasaragod">Kasaragod</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Idukki">Idukki</option>
                        <option value="Wayanad">Wayanad</option>
                      </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Village Office</label>
                      <input type="text" className="form-control" placeholder='Enter Village Office' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Email Id</label>
                      <input type="text" className="form-control" placeholder='Enter Email Id' />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddSubscriber 
