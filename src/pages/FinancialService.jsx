import React from 'react'

import { accountSummary } from '../assets/data';
import myCard from '../assets/myCard.jpg';

const FinancialService = () => {
  var total = 0;

  return (
    <div>
        <h1>Financial Service</h1>
        <div className="row">
            <div className="col-lg-8">
                <h2>Your Tax Form</h2>
                <div className="row">
                    <div className="col-4 col-md-3">
                        <a href="">
                        <div className="card mb-2">
                            <div className="card-body text-center">
                            <i className="bi bi-file-earmark-text" style={{fontSize: 40}}></i><br/>
                            T2202A From
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-4 col-md-3">
                        <a href="">
                        <div className="card mb-2">
                            <div className="card-body text-center">
                            <i className="bi bi-file-earmark-text" style={{fontSize: 40}}></i><br/>
                            T4A From
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="">
                        <div className="card mb-2">
                            <div className="card-body text-center">
                            <i className="bi bi-file-earmark-text" style={{fontSize: 40}}></i><br/>
                            Releve8 Tax Form
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
                <a className="text-small"><i className="bi bi-box-arrow-up-right"></i> More tax information</a>
                <br/><br/>
                <h2>Scholarships &amp; Bursaries</h2>
                <div className="card mb-3">
                    <div className="card-body">
                        <ul className="list">
                            <li>
                                <div>Apply for Scholarships, Bursaries, and Awards
                                    <div className="text-small">See scholarships and/or bursaries that you are eligible to apply for</div>
                                </div>
                                <a className="btn btn-outline-primary ms-auto">Apply Now</a>
                            </li>
                            <li>
                                <div>View your imcomplete application
                                    <div className="text-small">See scholarships and/or bursaries that you are eligible to apply for</div>
                                </div>
                                <a className="btn btn-outline-primary ms-auto">View</a>
                            </li>
                            <li>
                                <div>View application approval status
                                    <div className="text-small">View outstanding documents requirement and the result of application.</div>
                                </div>
                                <a className="btn btn-outline-primary ms-auto">View</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-small mb-4">
                    Note: You must first complete the <span className="text-highlight">Doorway to Dollars Questionnaire</span> 
                    at least once per academic year to gain access to all Centennial College Scholarships, bursaries and/or awards 
                    to which you are eligible via   your myCentennial email. <a href="" className="text-highlight"><i className="bi bi-box-arrow-up-right"></i>Click here to complete</a></div>

                <h2>External Scholarships</h2>
                <div className="card mb-3">
                    <div className="card-body">
                        <ul className="list text-small">
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>The Bill 7 Award</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>The Russell Alexander Law Scholarship</a>
                            </li>
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Oakwood Health Network Scholarship</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>The BOLT Financial Awards</a>
                            </li>
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>North American Van Lines Logistics Scholarship</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Canadian Association of Women in Construction Bursary</a>
                            </li>
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>The National Police Federation Benevolent Foundation Bursary Program</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Canadian Insurance Claims Education Benevolent Foundation Scholarship</a>
                            </li>
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Net Solutions Scholarship</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>The Foster Children Bursary Program</a>
                            </li>
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>The Garry Douglas Memorial Award</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Allied Van Lines Scholarship</a>
                            </li>
                            <li>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>CAEL Scholarship</a>
                                <a style={{flex:1}} ><i className="bi bi-link-45deg"></i>Sixsurgery Scholarship</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-small mb-4">
                    Note: Please be advised external scholarships and external programs are listed for your information. 
                    Although Centennial College reviews every posting for legitimacy we assume no responsibility for 
                    individual eligibility, processes or outcomes of selection, website links or information contained therein
                </div>
                <h2>Financial Literacy</h2>
                <div className='card'>
                    <div className='card-body'>
                        <div className='text-small'>Listed below are a list of websites with lots of information about Financial Literacy. There are also 
videos, quizzes, and infographics that will assist you in becoming more Financially Literate</div>
                        <ul className="list text-small pt-4">
                            <li>Education funding <a href="" className="ms-auto btn btn-outline-primary text-small">View Detail</a></li>
                            <li>Provincial and territorial information for 
Canada Student Loans and Grants <a href="" className="ms-auto btn btn-outline-primary text-small">View Detail</a></li>
                        </ul>
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
                <h2>Parking</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">Parking information</a>
                        <a href="#">Purchase a Parking Permit</a>
                    </div>
                </div>
                <h2>Locker</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">Locker information</a>
                        <a href="#">Rent and select a Locker</a>
                    </div>
                </div>
                <h2>Add fund to myCard</h2>
                <div className="card">
                <img src={myCard} style={{width: '100%', height: 'auto'}} />
                    <div className="card-body">
                        <a href="#" className="text-highlight text-small">Where to use myCard</a>
                        <ul className="bullet">
                            <li>credit card or debit card</li>
                            <li>$5 minimum applies</li>
                            <li>balance is carried forward to the next semester automatically</li>
                        </ul>
                        <div className="text-center"><a href="#" className="btn btn-primary">Add Now</a></div>
                    </div>
                </div>
                <h2>International Recipe</h2>
                <div className="card">
                    <div className="card-link">
                        <a href="#">View Recipe</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinancialService