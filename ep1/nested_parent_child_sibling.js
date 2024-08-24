/*
    <div id="parent">
        <div id="child1">
            <h1>
                i am child1 nested H1 Element .
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis totam repellendus beatae. Illum possimus tempora praesentium veritatis. Eum molestiae repudiandae iste harum aut beatae, tempora obcaecati est reiciendis ad aspernatur sint aliquid ipsum excepturi corporis cum maxime, officia iusto suscipit aperiam error. Beatae eaque magni omnis ea est deleniti fugit reprehenderit fuga architecto soluta animi dolor nostrum deserunt officiis debitis vitae fugiat, tenetur quibusdam distinctio itaque voluptate provident, perferendis unde.</p>
        </div>
        <div id="child2">
            <h1>
                i am child1 nested H1 Element .
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis totam repellendus beatae. Illum possimus tempora praesentium veritatis. Eum molestiae repudiandae iste harum aut beatae, tempora obcaecati est reiciendis ad aspernatur sint aliquid ipsum excepturi corporis cum maxime, officia iusto suscipit aperiam error. Beatae eaque magni omnis ea est deleniti fugit reprehenderit fuga architecto soluta animi dolor nostrum deserunt officiis debitis vitae fugiat, tenetur quibusdam distinctio itaque voluptate provident, perferendis unde.</p>
        </div>
    </div>
*/
// Those react Elements are we creating are the object
// reactElement/object => convert into HTML( that understood by the browser)
const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            [
                React.createElement(
                    "h1",
                    {id:"heading1"},
                    'i am child1 nested Element'),
                React.createElement(
                    "p",
                    {id:"paragraph"},
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis totam repellendus beatae. Illum possimus tempora praesentium veritatis. Eum molestiae repudiandae iste harum aut beatae, tempora obcaecati est reiciendis ad aspernatur sint aliquid ipsum excepturi corporis cum maxime, officia iusto suscipit aperiam error. Beatae eaque magni omnis ea est deleniti fugit reprehenderit fuga architecto soluta animi dolor nostrum deserunt officiis debitis vitae fugiat, tenetur quibusdam distinctio itaque voluptate provident, perferendis unde.")
            ]),
        React.createElement(
            "div",
            {id:"child2"},
            [
                React.createElement(
                    "h1",
                    {id:"heading2"},
                    'i am child2 nested Element'),
                React.createElement(
                    "p",
                    {id:"paragraph"},
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis totam repellendus beatae. Illum possimus tempora praesentium veritatis. Eum molestiae repudiandae iste harum aut beatae, tempora obcaecati est reiciendis ad aspernatur sint aliquid ipsum excepturi corporis cum maxime, officia iusto suscipit aperiam error. Beatae eaque magni omnis ea est deleniti fugit reprehenderit fuga architecto soluta animi dolor nostrum deserunt officiis debitis vitae fugiat, tenetur quibusdam distinctio itaque voluptate provident, perferendis unde.")
            ]
        )
    ]
);
console.log(React.createElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
