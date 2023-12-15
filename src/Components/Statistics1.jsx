import React from "react";
import "../styles/statistics1.css";
import { useEffect } from "react";

const Statistics1 = () => {
    function startCountAnimation(targetId, targetValue, duration) {
        const targetElement = document.getElementById(targetId);
        const increment = targetValue / (duration * 1000);

        let currentValue = 0;

        const intervalId = setInterval(function () {
            if (currentValue < targetValue) {
                currentValue += increment;
                targetElement.textContent = Math.round(currentValue);
            } else {
                targetElement.textContent = targetValue;
                clearInterval(intervalId);
            }
        }, 1);
    }

    useEffect(() => {
        startCountAnimation("clientCount", 75, 1);
        startCountAnimation("orderCount", 95, 1);
        startCountAnimation("areaCount", 150, 1);
    }, []);
    return (
        <div className="statistics">
            <div className="stClient">
                <span id="clientCount">0</span>
                <br />
                Happy customers
            </div>
            <div className="stOrders">
                <span id="orderCount">0</span>
                <br />
                Orders Done
            </div>
            <div className="stArea">
                <span id="areaCount">0</span>
                <br />
                Areas reached
            </div>
        </div>
    );
};

export default Statistics1;