import React from "react";
import { connect } from "react-redux";
import { Button } from "primereact/button";
// import { BreadCrumb } from 'primereact/breadcrumb';

// const home = { icon: 'pi pi-home', url: 'http://localhost:3000/' } // this is hard code

const Account = (props) => {
    
    // const items = [
    //     {label: 'Computer'},
    //     {label: 'Notebook'},
    //     {label: 'Accessories'},
    //     {label: 'Backpacks'},
    //     {label: 'Item'}
    // ];

    return (
        <div className="surface-0">
            {/* <BreadCrumb model={items} home={home}/> */}
            {/* <div className="font-medium text-3xl text-900 mb-3">User Information</div> */}
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Name</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{props.user?.name}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" disabled/>
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{props.user?.email}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" disabled/>
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Phone Number</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{props.user?.phoneNumber}</div>
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" disabled/>
                    </div>
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 border-300 flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Password</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{props.user?.password}</div> {/*Need to figure out how to get the password - might be due to the encrypt*/}
                    <div className="w-6 md:w-2 flex justify-content-end">
                        <Button label="Edit" icon="pi pi-pencil" className="p-button-text" disabled/>
                    </div>
                </li>
            </ul>
        </div>

    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(Account);
