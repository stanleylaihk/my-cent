import React from 'react'

import LibraryImage from '../assets/library.jpg';

const CollegeService = () => {
  return (
    <div>
      <h1>College Service</h1>
      <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-5">
                <h2>Parking</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">Parking information</a>
                        <a href="#">Purchase a Parking Permit</a>
                    </div>
                </div>
              </div>
              <div className="col-5">
                <h2>Locker</h2>
                  <div className="card">
                      <div className="card-link">
                          <a href="#">Locker information</a>
                          <a href="#">Rent and select a Locker</a>
                      </div>
                  </div>
              </div>
              <div className="col-12">
                <h2>Book an Appointment With Your Success Advisor</h2>
                <div className="card">
                  <div className="card-body">
                      <ul className="list">
                          <li>
                              <div>School of Business Success Advisor</div>
                              <a className="btn btn-outline-primary ms-auto">Book Now</a>
                          </li>
                          <li>
                              <div>School of Community &amp; Health Studies Success Advisor</div>
                              <a className="btn btn-outline-primary ms-auto">Book Now</a>
                          </li>
                          <li>
                              <div>School of Engineering Technology and Applied Science Advisor</div>
                              <a className="btn btn-outline-primary ms-auto">Book Now</a>
                          </li>
                          <li>
                              <div>School of Hospitality, Tourism and Culinary Arts Advisor</div>
                              <a className="btn btn-outline-primary ms-auto">Book Now</a>
                          </li>
                      </ul>
                  </div>
                </div>
                <h2>English Centre for Academic English</h2>
                <div className="card">
                  <div className="card-body">
                      <ul className="list">
                          <li>
                              <div>Book an English Tutor or an English Workshop</div>
                              <a className="btn btn-outline-primary ms-auto">Book Now</a>
                          </li>
                      </ul>
                      <hr />
                      <div className="text-small text-muted">The first time you request a tutor or workshop, you will be required to register onto the booking system. For further information contact 289-5000 ext. 6150 or email to cae@centennialcollege.ca</div>
                  </div>
                  <div className="card-footer">
                    <a href="" className="btn btn-outline-primary">Booking Instructions</a>
                    <a href="" className="btn btn-outline-primary ms-2">Waiting List Instructions</a>
                    <a href="" className="btn btn-outline-primary ms-2">Online Tutoring Guide</a>
                  </div>
                </div>
                
                <h2>Centre for Accessible Learning and Counselling Services</h2>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">ASOP</div>
                      <div className="col-10"><a href="#">Email/Print my ISP (Individual Student Profile)<i className="bi bi-link-45deg"></i></a></div>
                      <div className="col-2">ATOMS</div>
                      <div className="col-10"><a href="#">Book an Accommodated Assessment with CALS<i className="bi bi-link-45deg"></i></a></div>
                    </div>
                  </div>
                </div>

                <h2>Centennial Resources</h2>
                <div className="card">
                  <div className="card-body">
                    <ul className="list text-small">
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>ACCEL Entrepreneurship Service</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Alumni</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Athletics</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Bookstore</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Calendar of Important Dates</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Career Services</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>CCSAI</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Child Care</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>College Policies</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Financial Aid</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Global Experience</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>IT Service Desk Self-Service Portal</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>International Centre</a>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Part-time Learning</a>
                      </li>
                      <li>
                          <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Project Management Centre (PMC)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h2>Library Services</h2>
            <div className="card">
                <img src={LibraryImage} style={{width: '100%', height: 'auto'}} />
                <div className="card-link">
                    <a href="#">Visit Library Website</a>
                    <a href="#">Book a Study Room</a>
                    <a href="#">Book a Tutor</a>
                    <a href="#">Math Learning Centre</a>
                    <a href="#">Library Job Opportunities</a>
                </div>
            </div>
            <h2>Microsoft Academic Discounts</h2>
            <div className="card">
                <div className="card-link">
                    <a href="#">Microsoft eStore</a>
                    <a href="#">Microsoft Office Certification Exams</a>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CollegeService