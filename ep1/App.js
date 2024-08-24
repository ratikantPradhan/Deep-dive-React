//createElement() takes 3 arguments
/*
    <div id="root">
        <h1 id="heading" value="greet">
            hello from React js
        </h1>
    </div>;
*/ 
const heading = React.createElement(
    "h1", 
    {id : "heading", value:"greet"}, 
    'hello from React js'
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
