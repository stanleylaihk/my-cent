import React from 'react'

const Registration = () => {
  return (
    <div>
        <h1>Registration</h1>
        <div className="row">
            <div className="col-lg-8">
                <h2>Web Registration</h2>
                <div className="card web-registration">
                    <div className="card-body">
                        Important Web Registration Dates
                        <div className="text-small">Your program and semester will be available for web registration on April 20, 2022</div>
                        <br/>
                        Web Registration Mode
                        <div className="text-small">Block Based to Course Based Registration Mode. Your registration mode will move to Course based Registration as of 02-MAY-2022</div>
                        <br/>
                        Important Note
                        <div className="text-small">The Block Based to Course Based Registration date has changed to Monday, May 2 (from Wednesday, April 27) due to ongoing Web Registration system issue</div>
                        <hr/>
                        <div className=" d-flex">
                            <button className="btn btn-outline-primary me-3">View Fee Estimate</button>
                            <button className="btn btn-outline-primary">Make a payment</button>
                            <button className="btn btn-primary ms-auto">Register Now</button>
                        </div>
                    </div>
                </div>
                <h2>General Education (GNED) Course Descriptions</h2>
                <div className="card">
                    <div className="card-body">
                        <ul className="list">
                            <li>4x4 GNED Informational <a className="btn btn-outline-primary ms-auto">View Detail</a></li>
                            <li>Summer 2022 GNED Elective Course descriptions <a className="btn btn-outline-primary ms-auto">View Detail</a></li>
                            <li>Summer 2022 Humanities and Social Sciences Course Listing <a className="btn btn-outline-primary ms-auto">View Detail</a></li>
                        </ul>
                    </div>
                </div>
                <h2>Guide and Assistance</h2>
                <div className="card">
                    <div className="card-body">
                        <ul className="list">
                            <li>Block Based Registration Guide <a className="btn btn-outline-primary ms-auto">pdf</a><a className="btn btn-outline-primary">Video</a></li>
                            <li>Course Based Registration Guide <a className="btn btn-outline-primary ms-auto">pdf</a><a className="btn btn-outline-primary">Video</a></li>
                            <li>Phone Support <a className="ms-auto">416-289-5300</a></li>
                            <li>Registration Status <a className='btn btn-outline-primary ms-auto'>View Detail</a></li>
                            <li>How to run a degree audit <a className='btn btn-outline-primary ms-auto'>pdf</a></li>
                            <li>Learn other ways to track your academic success <a className='btn btn-outline-primary ms-auto'>View Detail</a></li>
                            <li>eCentennial Navigation Guide<a className='btn btn-outline-primary ms-auto'>pdf</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <h2>International Student</h2>
                <div className="card international-student">
                    <div className="card-body">
                        New students
                        <div className="text-small">upload admissions documents</div>
                        <a href="#" className="btn btn-primary">Upload</a>
                    </div>
                    <div className="card-body">
                        New students
                        <div className="text-small">upload IRCC documents</div>
                        <a href="#" className="btn btn-primary">Upload</a>
                    </div>
                    <div className="card-body">
                        Important contact information<br/>
                        <a href="#" className="btn btn-outline-primary">View detail</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration