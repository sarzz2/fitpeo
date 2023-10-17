function Tile({ title, earning, change, logoSrc }) {
    const arrowStyle = {
        color: change > 0 ? "green" : "red",
    };
    return (
        <div className="tile">
            <div className="tile-content">
                <div className="logo">
                    <img src={logoSrc} alt="Logo" />
                </div>
                <div className="text">
                    <p className="text-title">{title}</p>
                    <h2>${earning}</h2>
                    <p className="text-change">
                        {change > 0 ? (
                            <span style={arrowStyle}>&#9650;</span> // Up arrow in green
                        ) : (
                            <span style={arrowStyle}>&#9660;</span> // Down arrow in red
                        )}{" "}
                        {change}% this month
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tile;
