import React from 'react';

import { studentGrades, person } from '../assets/data';

const StudentRecord = () => {
  return (
    <div>
        <h1>Student Record</h1>
        <div className="row">
            <div className="col-md-6 col-lg-3">
                <h2>Timetable</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">Course List</a>
                        <a href="#">Weekly Timetable</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <h2>Transcript</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">View Unofficial Transcript</a>
                        <a href="#">View Unofficial Transcript</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <h2>Graduation</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#" className="bg-primary">Apply to Graduate</a>
                        <a href="#">View Active Applications</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <h2>Transfer Credit</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">Apply for Transfer Credit</a>
                        <a href="#">Transfer Credit Status</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h2>Student Grades</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <label className="" style={{width:150}}>Select Term</label>
                            <select className="form-select">
                                {studentGrades.map((term) => (
                                    <option value={term.id} key={term.id}>{term.name}</option>
                                ))}
                            </select>
                        </div>
                        <hr/>
                        <div id="student-grades-result">
                            <div className="text-highlight pb-3">Summer 2022</div>
                            <div className="d-flex pb-2 text-muted">
                                <div>COMM 141 - Essential Comm Skills (ESL)
                                    <div className="text-small">CRN: 93142</div>
                                </div>
                                <div className="ms-auto" style={{width:25}}>B+</div>
                            </div>
                            <div className="d-flex pb-2 text-muted">
                                <div>COMP 100 - Programming 1
                                    <div className="text-small">CRN: 93610</div>
                                </div>
                                <div className="ms-auto" style={{width:25}}>A</div>
                            </div>
                            <div className="d-flex pb-2 text-muted">
                                <div>COMP 120 - Software Engineering Fundament
                                    <div className="text-small">CRN: 93662</div>
                                </div>
                                <div className="ms-auto" style={{width:25}}>A+</div>
                            </div>
                            <div className="d-flex pb-2 text-muted">
                                <div>COMP 100 - Web Interface Design
                                    <div className="text-small">CRN: 93690</div>
                                </div>
                                <div className="ms-auto" style={{width:25}}>A+</div>
                            </div>
                            <div className="d-flex pb-2 text-muted">
                                <div>GNED 127 - Intro to Personal Finance
                                    <div className="text-small">CRN: 94918</div>
                                </div>
                                <div className="ms-auto" style={{width:25}}>B</div>
                            </div>
                            <div className="d-flex pb-2 text-muted">
                                <div>MATH 175 - Functions &amp; Number Systems
                                    <div className="text-small">CRN: 95957</div>
                                </div>
                                <div className="ms-auto" style={{width:25}}>A+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h2>Academic Profile</h2>
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <label className="" style={{width:150}}>Select Term</label>
                            <select className="form-select">
                                {studentGrades.map((term) => (
                                    <option value={term.id} key={term.id}>{term.name}</option>
                                ))}
                            </select>
                        </div>
                        <hr/>
                        <div id="academic-profile-result">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td className="text-highlight">Class Standing:</td>
                                        <td className="text-muted">Classification - Semester 3</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Degree:</td>
                                        <td className="text-muted">Ontario College Diploma</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Level:</td>
                                        <td className="text-muted">Post Secondary</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Program:</td>
                                        <td className="text-muted">Software Eng Technician</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Admit Term:</td>
                                        <td className="text-muted">Fall 2021</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Catalog Term:</td>
                                        <td className="text-muted">Fall 2021</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">College:</td>
                                        <td className="text-muted">Eng. Tech. &amp; Applied Science</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Campus:</td>
                                        <td className="text-muted">Canada</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Major:</td>
                                        <td className="text-muted">Software Eng Technician</td>
                                    </tr>
                                    <tr>
                                        <td className="text-highlight">Advisors:</td>
                                        <td className="text-muted">Saranya Shastri</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h2>Academic Planning</h2>
                <div className="card">
                    <div className="card-body">
                        <ul className="list">
                            <li>Degree Audit<a href="" className="btn btn-outline-primary ms-auto">Degree Audit</a></li>
                            <li>What If Analysis<a href="" className="btn btn-outline-primary ms-auto">What If Analysis</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h2>Credential Verification</h2>
                <div className="card">
                    <div className="card-body text-small text-muted">
                    Centennial has partnered with AuraData to verify the credential completion status of Centennial graduates, for authorized employers and other third parties. <br/><br/>
                    AuraData is a Canadian company specializing in secure online education verification. Subscribers to AuraData are able to confirm the post-secondary education claims of Centennial graduates efficiently online, at any time.  <br/><br/>
                    Centennial College and AuraData are committed to the confidentiality of our student information. AuraData adheres to all federal and provincial privacy laws and a signed authorization from the Centennial graduate is required by AuraData before any information is released.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentRecord