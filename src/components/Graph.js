import { useState } from "react";
import { Bar } from "react-chartjs-2";

const Graph = () => {
    const [hoveredBar, setHoveredBar] = useState(null);

    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55, 50, 30, 60, 70, 54, 58],
                backgroundColor: (context) =>
                    hoveredBar === context.dataIndex ? "#5030cf" : "#f3effe",
                borderColor: "transparent",
                borderRadius: 10,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: "category",
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        onHover: (_, elements) => {
            if (elements.length > 0) {
                const hoveredIndex = elements[0].index;
                setHoveredBar(hoveredIndex);
            } else {
                setHoveredBar(null);
            }
        },
    };

    return (
        <div>
            {" "}
            <Bar data={data} options={options} />
        </div>
    );
};

export default Graph;
