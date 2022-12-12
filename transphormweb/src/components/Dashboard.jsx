import React from "react";
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid mb-5 py-5">
                <div class="row">
                    <nav
                        id="sidebarMenu"
                        class="col-md-3 col-lg-2 d-md-block bg-light
                    sidebar collapse"
                    >
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi-bi-house-door"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                        </svg>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-file-earmark-text"
                                            aria-hidden="true"
                                        >
                                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                        </svg>
                                        Orders
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-cart4"
                                            aria-hidden="true"
                                        >
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        Product
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-people-fill"
                                            aria-hidden="true"
                                        >
                                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                        </svg>
                                        Customers
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-bar-chart"
                                            aria-hidden="true"
                                        >
                                            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                        </svg>
                                        Reports
                                    </NavLink>
                                </li><br />
                                <li class="nav-item">

                                    <div>Saved Reports &nbsp;&nbsp;&nbsp;
                                        {/* <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-bar-chart"
                                            aria-hidden="true"
                                        >
                                            <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                        </svg>
                                        Reports
                                    </NavLink> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="22"
                                            height="24"
                                            fill="currentColor"
                                            class="bi bi-plus-circle"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                        </svg>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="20"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-file-text"
                                            aria-hidden="true"
                                        >

                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />

                                        </svg>
                                        Current Month
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="20"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-file-text"
                                            aria-hidden="true"
                                        >

                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />

                                        </svg>
                                        Last Quarter
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="20"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-file-text"
                                            aria-hidden="true"
                                        >

                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />

                                        </svg>
                                        Social Engagement
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link active"
                                        aria-current="page" to="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="20"
                                            viewbox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="bi bi-file-text"
                                            aria-hidden="true"
                                        >

                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />

                                        </svg>
                                        Year-end Sale
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main class="col-md-8 ms-sm-auto col-lg-8 px-md-4">
                        <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                                <div class=""></div>
                            </div>
                            <div class="chartjs-size-monitor-shrink">
                                <div class=""></div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between flex-wrap
                        flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group me-2">
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-success">
                                        Share
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-sm btn-outline-success">
                                        Export
                                    </button>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-6 form-group">
                                                <div class="input-group" id="DateDemo">
                                                    <input type='text' id='weeklyDatePicker' placeholder="Select Week" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>Products</h4>
                        <table class="table">
                                <thead>
                                    <tr>
                                       <th scope="col">Part Number</th>
                                       <th scope="col">Vds(V) min</th>
                                       <th scope="col">Rds typ</th>
                                       <th scope="col">Rds max</th>
                                       <th scope="col">Id max</th>
                                       <th scope="col">Package</th>
                                       <th scope="col">Package Variation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TP90H050WS</td>
                                        <td>900</td>
                                        <td>50</td>
                                        <td>63</td>
                                        <td>34</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H480G4JSG</td>
                                        <td>650</td>
                                        <td>480</td>
                                        <td>560</td>
                                        <td>3.6</td>
                                        <td>PQFN56</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H300G4LSG</td>
                                        <td>650</td>
                                        <td>240</td>
                                        <td>312</td>
                                        <td>6.5</td>
                                        <td>PQFN88</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H150LSG</td>
                                        <td>650</td>
                                        <td>150</td>
                                        <td>180</td>
                                        <td>15</td>
                                        <td>PQFN88</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H150G4PS</td>
                                        <td>650</td>
                                        <td>150</td>
                                        <td>180</td>
                                        <td>13</td>
                                        <td>TO-220</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H150G4LSG</td>
                                        <td>650</td>
                                        <td>150</td>
                                        <td>180</td>
                                        <td>13</td>
                                        <td>PQFN88</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H070LSG</td>
                                        <td>650</td>
                                        <td>72</td>
                                        <td>85</td>
                                        <td>25</td>
                                        <td>PQFN88</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H070LDG</td>
                                        <td>650</td>
                                        <td>72</td>
                                        <td>85</td>
                                        <td>25</td>
                                        <td>PQFN88</td>
                                        <td>Drain</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H050WSQA</td>
                                        <td>650</td>
                                        <td>50</td>
                                        <td>60</td>
                                        <td>36</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H050WS</td>
                                        <td>650</td>
                                        <td>50</td>
                                        <td>60</td>
                                        <td>36</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H050G4WS</td>
                                        <td>650</td>
                                        <td>50</td>
                                        <td>60</td>
                                        <td>34</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H050G4BS</td>
                                        <td>650</td>
                                        <td>50</td>
                                        <td>60</td>
                                        <td>34</td>
                                        <td>TO-263</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H035WSQA</td>
                                        <td>650</td>
                                        <td>35</td>
                                        <td>41</td>
                                        <td>47</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H035WS</td>
                                        <td>650</td>
                                        <td>35</td>
                                        <td>41</td>
                                        <td>46.5</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H035G4WSQA</td>
                                        <td>650</td>
                                        <td>35</td>
                                        <td>41</td>
                                        <td>46.5</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H035G4WS</td>
                                        <td>650</td>
                                        <td>35</td>
                                        <td>41</td>
                                        <td>46.5</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                    <tr>
                                        <td>TP65H015G5WS</td>
                                        <td>650</td>
                                        <td>15</td>
                                        <td>18</td>
                                        <td>95</td>
                                        <td>TO-247</td>
                                        <td>Source</td>
                                    </tr>
                                </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;