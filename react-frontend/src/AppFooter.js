import React from "react";

export const AppFooter = (props) => {
    return (
        <div className="layout-footer">
            <img src={"assets/logo/cb-logo.svg"} alt="Logo" height="20" className="mr-2" />
            <small>
                powered
                <span className="font-bold ml-1">by CodeBridge for Group B</span>
            </small>
        </div>
    );
};
