/*
    <div id="parent">
        <div id="child">
            <h1>
                nested H1 Element .
            </h1>
        </div>
    </div>
*/
// Those react Elements are we creating are the object
// reactElement/object => convert into HTML( that understood by the browser)
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1", 
            { id: "heading" },
            'nested H1 Element')
    )
);
console.log(React.createElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
