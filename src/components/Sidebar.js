import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBox,
    faPerson,
    faMoneyBill,
    faMoneyBillWave,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    const [activeButton, setActiveButton] = useState("dashboard");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div className="sidebar">
            <h2 className="sidebar-heading">Dashboard</h2>
            <div className="content">
                <div className="menu">
                    <button
                        className={
                            activeButton === "dashboard"
                                ? "menu-item active"
                                : "menu-item"
                        }
                        onClick={() => handleButtonClick("dashboard")}
                    >
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        Dashboard
                    </button>
                    <button
                        className={
                            activeButton === "product"
                                ? "menu-item active"
                                : "menu-item"
                        }
                        onClick={() => handleButtonClick("product")}
                    >
                        <FontAwesomeIcon icon={faBox} className="icon" />
                        Product
                        <span className="arrow">&#8594;</span>
                    </button>
                    <button
                        className={
                            activeButton === "customers"
                                ? "menu-item active"
                                : "menu-item"
                        }
                        onClick={() => handleButtonClick("customers")}
                    >
                        <FontAwesomeIcon icon={faPerson} className="icon" />
                        Customers
                        <span className="arrow">&#8594;</span>
                    </button>
                    <button
                        className={
                            activeButton === "income"
                                ? "menu-item active"
                                : "menu-item"
                        }
                        onClick={() => handleButtonClick("income")}
                    >
                        <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                        Income
                        <span className="arrow">&#8594;</span>
                    </button>
                    <button
                        className={
                            activeButton === "promote"
                                ? "menu-item active"
                                : "menu-item"
                        }
                        onClick={() => handleButtonClick("promote")}
                    >
                        <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className="icon"
                        />
                        Promote
                        <span className="arrow">&#8594;</span>
                    </button>
                    <button
                        className={
                            activeButton === "help"
                                ? "menu-item active"
                                : "menu-item"
                        }
                        onClick={() => handleButtonClick("help")}
                    >
                        <FontAwesomeIcon icon={faQuestion} className="icon" />
                        Help
                        <span className="arrow">&#8594;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
