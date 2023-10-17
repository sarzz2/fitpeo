import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import money from "./money.png";
import order from "./order.png";
import sales from "./sales.png";
import balance from "./balance.png";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import Graph from "../components/Graph";
import Dougnut from "../components/Doughnut";
import Sidebar from "../components/Sidebar";
import Tile from "../components/Tile";

function Home() {
    Chart.register(CategoryScale);

    const products = [
        {
            id: 1,
            name: "Product 1",
            stock: "100 in stock",
            price: 20.0,
            totalSales: 500,
            thumbnail: money,
            description: "Description for Product 1 goes here.",
        },
        {
            id: 2,
            name: "Product 2",
            stock: "50 in stock",
            price: 30.0,
            totalSales: 300,
            thumbnail: money,
            description: "Description for Product 2 goes here.",
        },
        {
            id: 3,
            name: "Product 3",
            stock: "50 in stock",
            price: 30.0,
            totalSales: 300,
            thumbnail: money,
            description: "Description for Product 2 goes here.",
        },
        // Add more products as needed
    ];

    return (
        <div>
            <Sidebar />
            <div className="main-content-wrapper">
                {/* Navbar */}
                <div className="navbar">
                    <div className="greeting">
                        Hello Sarthak,
                        <FontAwesomeIcon icon={faHand} className="icon" />
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                    </div>
                </div>
                {/* main content 4 tiles */}
                <div className="tile-container">
                    <Tile
                        title="Earning"
                        earning="198k"
                        logoSrc={money}
                        change={37.8}
                    />
                    <Tile
                        ttitle="Orders"
                        earning="2.4k"
                        logoSrc={order}
                        change={-2}
                    />
                    <Tile
                        title="Balance"
                        earning="2.4k"
                        logoSrc={balance}
                        change={-2}
                    />
                    <Tile
                        title="Total Sales"
                        earning="89k"
                        logoSrc={sales}
                        change={11}
                    />
                </div>
                <div className="tile-container">
                    <div className="overview-tile">
                        <h2 className="stile-heading">Overview</h2>
                        <p className="stile-text">Monthly earning</p>
                        <div className="overview-graph">
                            <Graph />
                        </div>
                    </div>
                    <div className="customers-tile">
                        <h2 className="stile-heading">Customers</h2>
                        <p className="stile-text">
                            Customers that buy products
                        </p>
                        <Dougnut />
                    </div>
                </div>
                <div className="tile-container">
                    <div className="product-tile">
                        <h2 className="stile-heading">
                            Product Sell
                            {/* <div className="search-bar">
                                <input type="text" placeholder="Search..." />
                            </div> */}
                        </h2>

                        <table className="product-table2">
                            <thead>
                                <tr className="product-name-heading">
                                    <th>Product Name</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Total Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="product-name-body"
                                    >
                                        <td className="product-name">
                                            <div className="product-info">
                                                <img
                                                    src={product.thumbnail}
                                                    alt={`Thumbnail for ${product.name}`}
                                                    className="thumbnail"
                                                />
                                                <div className="product-description">
                                                    <h3>{product.name}</h3>
                                                    <p>{product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ width: "10%" }}>
                                            {product.stock}
                                        </td>
                                        <td style={{ width: "10%" }}>
                                            <b>${product.price.toFixed(2)}</b>
                                        </td>
                                        <td style={{ width: "10%" }}>
                                            {product.totalSales}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
