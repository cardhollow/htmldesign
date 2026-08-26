MAIN.push({
    title: "Layout",
    description: "Fundamental Flexbox and Grid patterns for positioning elements and building page structure.",
    items: [
        {
            type: "sample",
            title: "Flex Row",
            description: "Places elements in a horizontal row with controlled spacing.",
            html: `<div class="flex"><div>A</div><div>B</div><div>C</div></div>`,
            css: `
.flex {
    /* Turns the container into a Flexbox layout. */
    display: flex;
    /* Creates 12px space between each child. */
    gap: 12px;
}
.flex div {
    /* Gives each item a visible surface. */
    padding: 14px 18px;
    background: #dbeafe;
    color: #1d4ed8;
    border-radius: 6px;
    font: 700 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Centered Flex",
            description: "Centers content both horizontally and vertically inside a container.",
            html: `<div class="center"><span>Centered</span></div>`,
            css: `
.center {
    /* Enables Flexbox. */
    display: flex;
    /* Centers the child along the horizontal axis. */
    justify-content: center;
    /* Centers the child along the vertical axis. */
    align-items: center;
    /* Gives the container enough height to demonstrate vertical centering. */
    min-height: 120px;
    background: #f1f5f9;
}
.center span {
    padding: 10px 14px;
    background: #2563eb;
    color: #ffffff;
    border-radius: 6px;
    font: 600 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Grid Columns",
            description: "Creates equal-width columns using CSS Grid.",
            html: `<div class="grid"><div>A</div><div>B</div><div>C</div></div>`,
            css: `
.grid {
    /* Enables CSS Grid. */
    display: grid;
    /* Creates three equal-width columns. */
    grid-template-columns: repeat(3, 1fr);
    /* Adds space between grid items. */
    gap: 12px;
}
.grid div {
    padding: 18px;
    background: #f1f5f9;
    color: #334155;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    text-align: center;
    font: 600 14px Arial, sans-serif;
}
@media (max-width: 600px) {
    /* Reduces the number of columns on narrow screens. */
    .grid {
        grid-template-columns: 1fr;
    }
}
`
        },
        {
            type: "sample",
            title: "Two-Column Layout",
            description: "A common main-content plus sidebar arrangement.",
            html: `<div class="layout"><main>Main content</main><aside>Sidebar</aside></div>`,
            css: `
.layout {
    /* Creates a two-column Grid layout. */
    display: grid;
    /* Main content gets more space; sidebar gets 240px. */
    grid-template-columns: 1fr 240px;
    /* Separates the two regions. */
    gap: 16px;
}
.layout main,
.layout aside {
    /* Gives each area an obvious visual surface. */
    padding: 18px;
    border-radius: 8px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    font: 14px Arial, sans-serif;
}
@media (max-width: 700px) {
    /* Stacks the columns on smaller screens. */
    .layout {
        grid-template-columns: 1fr;
    }
}
`
        }
    ]
});
