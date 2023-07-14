import React from 'react';
import { accountSummary } from '../assets/data';

const Home = () => {
  var total = 0;
  
  return (
    <div>
        <h1>Good everning, Stanley Lai</h1>
        <div className="row">
            <div className="col-lg-8">
                <h2>Announcement</h2>
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr><td>Date</td><td>Title</td></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="80">Apr 28</td>
                                    <td>2022-2023 Ontario Student Assistance Program (OSAP) Online application is now opened</td>
                                </tr>
                                <tr>
                                    <td width="80">Apr 26</td>
                                    <td>Campus Tour Thursdays – Book Your Virtual Experience Today</td>
                                </tr>
                                <tr>
                                    <td width="80">Apr 23</td>
                                    <td>
                                        <div className="text-highlight">Accessing your campus for the Summer 2022 Semester</div>
                                        <div>As of April 23, 2022 student, staff and visitors are no longer required to show proof of 
vaccination or complete daily health screening. All entrances to the college buildings 
will be open and will no longer be limited to specific entrance/exit points.
Masks are required to be worn while indoors in all college buildings. Out of an abundance 
of caution and to allay any concerns colleagues and students may have around returning 
to campus, we will, subject to close monitoring and regular review, extend the mask 
mandate through the summer semester.</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2>CASS – Centennial Access to Student Services</h2>
                <div className="card">
                    <div className="card-body">
                        <p>How can we assist you?</p>
                        <ul className="bullet">
                            <li>Apply for a program transfer or re-admission into a program</li>
                            <li>Request a <span className="text-highlight">domestic student</span> enrolment letter</li>
                            <li>Request a form to be completed by the College</li>
                            <li>OSAP (<span className="text-highlight">domestic students only</span>), Scholarships, Bursaries and Other Student Financial Services</li>
                            <li>Academic Advising from school advisors (<span className="text-highlight">domestic students</span>)</li>
                            <li>International Students - Study/Work Permits and Visa Support</li>
                            <li>International Students - Promissory Notes Requests</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary">CASS</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <h2>Account Summery</h2>
                <div className="card account-summary">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <tbody>
                                    {accountSummary.map((term) => {
                                        total = total + term.amount;
                                        return (
                                            <tr key={term.id}><td>{term.name}</td><td>$ {term.amount}</td></tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr><td>Total</td><td>$ {total}</td></tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <h2>Upcoming Event</h2>
                <div className="card upcoming-event">
                    <div className="event-item">
                        <div className="date">June 27 – July 1 inclusive</div>
                        <div className="description">Engagement Week (Reading Week)</div>
                    </div>
                    <div className="event-item">
                        <div className="date">July 1</div>
                        <div className="description">Canada Day – COLLEGE CLOSED</div>
                    </div>
                    <div className="event-item">
                        <div className="date">July 8</div>
                        <div className="description">Program Transfer Deadline for Fall 2022 Semester</div>
                    </div>
                    <div className="event-item">
                        <div className="date">July 15*</div>
                        <div className="description">Withdrawal without academic penalty deadline</div>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-outline-primary">More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home