MAIN.push({
    title: "Responsive Design",
    description: "Common techniques for making interfaces adapt to smaller screens.",
    items: [
        {
            type: "sample",
            title: "Responsive Grid",
            description: "A grid that changes from three columns to one column on small screens.",
            html: `<div class="grid"><div>1</div><div>2</div><div>3</div></div>`,
            css: `
.grid {
    /* Enables CSS Grid. */
    display: grid;
    /* Creates three equal desktop columns. */
    grid-template-columns: repeat(3, 1fr);
    /* Keeps cards separated. */
    gap: 12px;
}
.grid div {
    padding: 18px;
    background: #f1f5f9;
    border-radius: 8px;
    text-align: center;
    font: 700 15px Arial, sans-serif;
}
@media (max-width: 600px) {
    /* On small screens, one column prevents cramped content. */
    .grid {
        grid-template-columns: 1fr;
    }
}
`
        },
        {
            type: "sample",
            title: "Responsive Text",
            description: "Uses a media query to reduce a heading size on narrow screens.",
            html: `<h2 class="title">Responsive Heading</h2>`,
            css: `
.title {
    /* Large desktop/tablet heading size. */
    font-size: 32px;
    /* Keeps the heading weight strong. */
    font-weight: 700;
    /* Sets the base text color. */
    color: #1f2937;
    /* Removes default heading spacing. */
    margin: 0;
}
@media (max-width: 600px) {
    /* Smaller phones get a smaller heading so it fits comfortably. */
    .title {
        font-size: 24px;
    }
}
`
        },
        {
            type: "sample",
            title: "Flexible Row",
            description: "Allows items to wrap onto another line when the container becomes too narrow.",
            html: `<div class="row"><span>A</span><span>Longer item</span><span>C</span></div>`,
            css: `
.row {
    /* Enables Flexbox. */
    display: flex;
    /* Allows children to move onto new lines when needed. */
    flex-wrap: wrap;
    /* Adds spacing between both rows and columns. */
    gap: 10px;
}
.row span {
    /* Gives each item a visible surface. */
    padding: 10px 14px;
    background: #dbeafe;
    border-radius: 6px;
    color: #1e3a8a;
    font: 600 14px Arial, sans-serif;
}
`
        }
    ]
});
