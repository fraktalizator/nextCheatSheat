import TableRow from "@/components/TableRow";

export default function Page() {
    const gridContainer = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        backgroundColor: "#2196F3",
        padding: "10px",
        margin: "5px",
        borderRadius: "20px",
    }

    const gridItem = {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(0, 0, 0, 0.8)",
        padding: "20px",
        textAlign: 'center' as const,
        fontSize: "30px",
        margin: "3px",
    }
    return (
        <div style={gridContainer}>
            <div style={{...gridItem, gridRow: "1/3"}}>1</div>
            <div style={gridItem}>2</div>
            <div style={gridItem}>3</div>
            <div style={gridItem}>4</div>
            <div style={gridItem}>5</div>
            <div style={gridItem}>6</div>
            <div style={gridItem}>7</div>
            <div style={{...gridItem, gridColumn: "1/3"}}>8</div>
            <div style={{...gridItem, gridColumnStart: 1, gridColumnEnd: 3}}>9</div>
        </div>
    );
}

// <div className="m-6 grid-container bg-amber-400">
//     <div className="w-1/5 h-16 bg-emerald-400 m-2 grid-item-1"></div>
//     <div className="w-1/5 h-16 bg-emerald-400 m-2 grid-item-2"></div>
//     <div className="w-1/5 h-16 bg-emerald-400 m-2 grid-item-3"></div>
//     <div className="w-1/5 h-16 bg-emerald-400 m-2 grid-item-4"></div>
// </div>