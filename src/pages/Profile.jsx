import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1>Profile</h1>
        <div className="row">
            <div className="col-lg-6">
                <h2>My account</h2>
                <div className="card">
                    <div className="card-link">
                        <a>Email Address: stanleylai@my.centennialcollege.ca</a>
                        <a>Student ID: 301234567</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h2>SIN Collection</h2>
                <div className="card mb-1">
                    <div className="card-body">
                        <ul className="list mb-1">
                            <li>Social Insurance Number (SIN)<a href="" className="btn btn-primary ms-auto text-small">Update</a></li>
                            <li>SIN Collection FAQs<a href="" className="btn btn-outline-primary ms-auto text-small">View Detail</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h2>Update profile</h2>
                <div className="card">
                    <div className="card-body">
                        <ul className="list mb-1">
                            <li className="d-flex">Language 
                                <select className="form-select ms-auto w-auto">
                                    <option value="en_US1">English (United States)</option>
                                    <option value="fr_FR">français (France)</option>
                                    <option value="ar_SA">العربية (السعودية)</option>
                                    <option value="es_MX">español (México)</option>
                                    <option value="pt_BR">português (Brasil)</option>
                                </select>

                            </li>
                            <li>Time Zone 
                                <select className="form-select ms-auto w-auto">                                    
                                   <option value="Pacific/Midway">(UTC -11:00) Samoa Standard Time</option>
                                    <option value="Pacific/Honolulu">(UTC -10:00) Hawaii Standard Time</option>
                                    <option value="America/Anchorage">(UTC -08:00) Alaska Daylight Time</option>
                                    <option value="America/Los_Angeles">(UTC -07:00) Pacific Daylight Time</option>
                                    <option value="America/Phoenix">(UTC -07:00) Mountain Standard Time</option>
                                    <option value="America/Denver">(UTC -06:00) Mountain Daylight Time</option>
                                    <option value="America/Chicago">(UTC -05:00) Central Daylight Time</option>
                                    <option value="America/Caracas">(UTC -04:00) Venezuela Time</option>
                                    <option value="America/New_York">(UTC -04:00) Eastern Daylight Time</option>
                                    <option value="America/Puerto_Rico">(UTC -04:00) Atlantic Standard Time</option>
                                    <option value="America/St_Johns">(UTC -02:30) Newfoundland Daylight Time</option>
                                    <option value="America/Noronha">(UTC -02:00) Fernando de Noronha Time</option>
                                    <option value="America/Sao_Paulo">(UTC -03:00) Brasilia Time</option>
                                    <option value="Atlantic/Azores">(UTC) Azores Summer Time</option>
                                    <option value="UTC">(UTC) Coordinated Universal Time</option>
                                    <option value="Europe/Lisbon">(UTC +01:00) Western European Summer Time</option>
                                    <option value="Europe/Paris">(UTC +02:00) Central European Summer Time</option>
                                    <option value="Asia/Baghdad">(UTC +03:00) Arabia Standard Time</option>
                                    <option value="Asia/Jerusalem">(UTC +03:00) Israel Daylight Time</option>
                                    <option value="Europe/Istanbul">(UTC +03:00) Eastern European Time</option>
                                    <option value="Asia/Dubai">(UTC +04:00) Gulf Standard Time</option>
                                    <option value="Asia/Kabul">(UTC +04:30) Afghanistan Time</option>
                                    <option value="Asia/Tehran">(UTC +04:30) Iran Daylight Time</option>
                                    <option value="Asia/Karachi">(UTC +05:00) Pakistan Time</option>
                                    <option value="Asia/Calcutta">(UTC +05:30) India Standard Time</option>
                                    <option value="Asia/Katmandu">(UTC +05:45) Nepal Time</option>
                                    <option value="Asia/Dhaka">(UTC +06:00) Bangladesh Time</option>
                                    <option value="Asia/Rangoon">(UTC +06:30) Myanmar Time</option>
                                    <option value="Asia/Saigon">(UTC +07:00) Indochina Time</option>
                                    <option value="Asia/Shanghai">(UTC +08:00) China Standard Time</option>
                                    <option value="Asia/Seoul">(UTC +09:00) Korea Standard Time</option>
                                    <option value="Asia/Tokyo">(UTC +09:00) Japan Standard Time</option>
                                    <option value="Australia/Darwin">(UTC +09:30) Australian Central Standard Time (Northern Territory)</option>
                                    <option value="Australia/Sydney">(UTC +10:00) Australian Eastern Standard Time (New South Wales)</option>
                                    <option value="Pacific/Guadalcanal">(UTC +11:00) Solomon Is. Time</option>
                                    <option value="Pacific/Auckland">(UTC +12:00) New Zealand Standard Time</option>
                                    <option value="Pacific/Enderbury">(UTC +13:00) Phoenix Is. Time</option>
                                    <option value="Pacific/Kiritimati">(UTC +14:00) Line Is. Time</option>
                                </select>
                            </li>
                            <li>Password<a href="" className="btn btn-outline-primary ms-auto text-small">Change</a></li>
                            <li>Challenge questions and answers<a href="" className="btn btn-outline-primary ms-auto text-small">Update</a></li>
                            <li>Phone and Address<a href="" className="btn btn-outline-primary ms-auto text-small">Update</a></li>
                            <li>Email Address<a href="" className="btn btn-outline-primary ms-auto text-small">Update</a></li>
                            <li>Emergency Contacts<a href="" className="btn btn-outline-primary ms-auto text-small">Update</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;