import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

function Dougnut() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(70);

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
        cutout: `${zoomLevel}%`, // Adjust this to control the size of the central hole
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
                setZoomLevel(hoveredIndex === null ? 0 : 60); // Adjust the zoom level as needed
            } else {
                setHoveredIndex(null);
                setZoomLevel(70);
            }
        },
    };

    const getMiddleText = () => {
        if (hoveredIndex === null) {
            return `${data.labels[0]}% Total new customers`;
        } else {
            return `${data.labels[hoveredIndex]}% old customers`;
        }
    };

    return (
        <div className="rounded-chart-container">
            <Doughnut data={data} options={options} />
            <span className="middle-text">{getMiddleText()}</span>
        </div>
    );
}

export default Dougnut;
