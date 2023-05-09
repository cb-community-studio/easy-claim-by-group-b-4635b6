import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "primereact/button";
// import { auth } from "../../models/authModel";

const Dashboard = () => {
    const history = useHistory();
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    useEffect(() => { console.log(user.role); }, [user]);

    return (
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
            {isLoggedIn ? (
                <div>
                {/* render the appropriate dashboard based on user role */}
                {user.role === "admin" ? (
                    <div>Admin Dashboard</div>
                ) : (
                    <div>User Dashboard</div>
                )}
            </div>
            ) : (
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-700 text-center">
                        <div className="text-red-600 font-bold mb-3">&nbsp;WEBSITE FOR CLAIM MANAGEMENT</div>
                        <div className="text-900 font-bold text-5xl mb-3">Login to Continue</div>
                        <div className="text-700 text-xl mb-5">Please contact Administrator at <a href="mailto:admin@claim.com">admin@claim.com</a> for registration.</div>
                        <Button label="Login" className="font-bold px-5 py-3 p-button-raised p-button white-space-nowrap" onClick={() => history.push("/login")}></Button>
                    </div>
                </div>
            )}
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

export default connect(mapState, mapDispatch)(Dashboard);
