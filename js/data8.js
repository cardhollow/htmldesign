MAIN.push({
    title: "Tables",
    description: "Common table layouts for presenting structured data clearly.",
    items: [
        {
            type: "sample",
            title: "Basic Table",
            description: "A simple table with borders and a header row.",
            html: `<table class="table"><thead><tr><th>Name</th><th>Status</th></tr></thead><tbody><tr><td>John</td><td>Active</td></tr><tr><td>Jane</td><td>Pending</td></tr></tbody></table>`,
            css: `
.table {
    /* Uses the full available width. */
    width: 100%;
    /* Removes the doubled gap between adjacent cell borders. */
    border-collapse: collapse;
    /* Uses a readable table font. */
    font: 14px Arial, sans-serif;
    /* Keeps the white surface consistent. */
    background: #ffffff;
}
.table th,
.table td {
    /* Adds readable cell spacing. */
    padding: 11px 13px;
    /* Creates row separators. */
    border: 1px solid #e2e8f0;
    /* Aligns text to the left. */
    text-align: left;
}
.table th {
    /* Slightly darker header background creates hierarchy. */
    background: #f8fafc;
    /* Stronger text identifies the column titles. */
    color: #334155;
    font-weight: 700;
}
.table td {
    /* Normal data uses a quieter text color. */
    color: #475569;
}
`
        },
        {
            type: "sample",
            title: "Striped Table",
            description: "Alternating row backgrounds make larger tables easier to scan.",
            html: `<table class="table"><thead><tr><th>Product</th><th>Price</th></tr></thead><tbody><tr><td>Keyboard</td><td>$50</td></tr><tr><td>Mouse</td><td>$25</td></tr><tr><td>Monitor</td><td>$180</td></tr></tbody></table>`,
            css: `
.table {
    /* Occupies the full container width. */
    width: 100%;
    /* Collapses adjacent borders into one line. */
    border-collapse: collapse;
    font: 14px Arial, sans-serif;
}
.table th,
.table td {
    /* Gives cells enough breathing room. */
    padding: 11px 13px;
    /* Defines row separation. */
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
}
.table th {
    /* Header surface identifies the column names. */
    background: #f8fafc;
    color: #334155;
}
.table tbody tr:nth-child(even) {
    /* Every second row gets a subtle background. */
    background: #f8fafc;
}
`
        },
        {
            type: "sample",
            title: "Compact Table",
            description: "A denser table for interfaces with limited vertical space.",
            html: `<table class="table"><thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead><tbody><tr><td>Pen</td><td>2</td><td>$4</td></tr><tr><td>Book</td><td>1</td><td>$12</td></tr></tbody></table>`,
            css: `
.table {
    /* Uses all available width. */
    width: 100%;
    /* Removes doubled borders. */
    border-collapse: collapse;
    font: 13px Arial, sans-serif;
}
.table th,
.table td {
    /* Smaller padding creates a denser layout. */
    padding: 7px 9px;
    border-bottom: 1px solid #e2e8f0;
    text-align: left;
}
.table th {
    background: #f8fafc;
    color: #334155;
}
`
        }
    ]
});
