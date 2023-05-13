import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import ClaimPage from "../ClaimPage/ClaimPage";

const UserDashboard = (props) => {
    const history = useHistory();
    // const user = useSelector((state) => state.auth.user);
    // // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    // useEffect(() => { console.log(user.role); }, [user]);

    // const [checked, setChecked] = useState(false);
    const [city, setCity] = useState(null);
    const citySelectItems = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    return (

        <div className="grid">
            <div className="col-12">
                <Button label="Submit New Claim" icon="pi pi-plus" className="p-button-text"  onClick={() => history.push("/claim")}  />
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3"><Link to="/foodClaim">Food Claim</Link></span>
                            <div className="text-900 font-medium text-xl">2</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">1  </span>
                    <span className="text-500">pending claim</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3"><Link to="/transClaim">Transportation Claim</Link></span>
                            <div className="text-900 font-medium text-xl">4</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">2  </span>
                    <span className="text-500">pending claim</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3"><Link to="/subsClaim">Subscription Claim</Link></span>
                            <div className="text-900 font-medium text-xl">4</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">2  </span>
                    <span className="text-500">pending claim</span>
                </div>
            </div>
            <div className="col-12 md:col-6 lg:col-3">
                <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3"><Link to="/otherClaim">Other Claim</Link></span>
                            <div className="text-900 font-medium text-xl">4</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-inbox text-cyan-500 text-xl"></i>
                        </div>
                    </div>
                    <span className="text-green-500 font-medium">2  </span>
                    <span className="text-500">pending claim</span>
                </div>
            </div>
            {/* <div className="col-12 md:col-6 lg:col-3">
                <Button label="Submit New Claim" icon="pi pi-plus" className="p-button-text" disabled />



                <span>Submit New Claim</span>
                <br></br><br></br>
                <Dropdown value={city} options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City" />
            </div> */}
        </div>
    );
};
const mapState = (state) => {
    //
    return {};
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(UserDashboard);
