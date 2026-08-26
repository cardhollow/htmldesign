MAIN.push({
    title: "Spacing",
    description: "Common spacing techniques using margin, padding, gap, and sizing patterns.",
    items: [
        {
            type: "sample",
            title: "Padding",
            description: "Adds space inside an element between its content and border.",
            html: `<div class="box">Content</div>`,
            css: `
.box {
    /* Adds 20px of space on every side inside the element. */
    padding: 20px;
    background: #dbeafe;
    color: #1e3a8a;
    font: 600 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Margin",
            description: "Adds space outside an element, separating it from neighboring elements.",
            html: `<div class="wrap"><div class="box">Box</div></div>`,
            css: `
.wrap {
    /* Gives the outer example a visible reference surface. */
    background: #f1f5f9;
}
.box {
    /* Creates 20px space outside the box on all sides. */
    margin: 20px;
    padding: 14px;
    background: #2563eb;
    color: #ffffff;
    border-radius: 6px;
    font: 600 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Gap",
            description: "Creates consistent spacing between children in Flexbox or Grid.",
            html: `<div class="row"><div>A</div><div>B</div><div>C</div></div>`,
            css: `
.row {
    /* Creates a Flexbox row. */
    display: flex;
    /* Inserts 16px between each child without affecting the outside edges. */
    gap: 16px;
}
.row div {
    padding: 12px 16px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font: 600 14px Arial, sans-serif;
}
`
        }
    ]
});
