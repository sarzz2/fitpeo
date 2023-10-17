import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

function Dougnut() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const data = {
        labels: ["65", "40"],
        datasets: [
            {
                data: [65, 40],
                backgroundColor: ["#5a39e1", "#e04a98"],
                hoverBackgroundColor: ["#5a39f2", "#e04aa9"], // Colors on hover
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        cutout: "70%", // Adjust this to control the size of the central hole
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        onHover: (_, elements) => {
            if (elements.length > 0) {
                const hoveredIndex = elements[0].index;
                setHoveredIndex(hoveredIndex);
            } else {
                setHoveredIndex(null);
            }
        },
    };

    const getMiddleText = () => {
        if (hoveredIndex === null) {
            return `${data.labels[0]} % Total new customers`;
        } else {
            return `${data.labels[hoveredIndex]} % Total new customers`;
        }
    };
    return (
        <div className="rounded-chart-container">
            <Doughnut data={data} options={options} />
            <div className="middle-text">{getMiddleText()}</div>
        </div>
    );
}

export default Dougnut;
