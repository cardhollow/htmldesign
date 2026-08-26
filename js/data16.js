MAIN.push({
    title: "Typography",
    description: "CSS properties that control font size, weight, spacing, alignment, and text presentation.",
    items: [
        {
            type: "sample",
            title: "Letter Spacing",
            description: "Controls the horizontal space between individual characters.",
            html: `<p class="text">WIDE LETTERS</p>`,
            css: `
.text {
    /* Adds 2px between each character. */
    letter-spacing: 2px;
    /* Converts all characters to uppercase. */
    text-transform: uppercase;
    /* Sets the color. */
    color: #334155;
    font: 700 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Text Alignment",
            description: "Aligns text horizontally within its containing box.",
            html: `<div class="text">Centered content</div>`,
            css: `
.text {
    /* Centers the inline content inside the block. */
    text-align: center;
    /* Adds space so the alignment effect is visible. */
    padding: 20px;
    background: #f1f5f9;
    color: #334155;
    font: 600 16px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Text Transform",
            description: "Changes the displayed letter case without changing the original HTML text.",
            html: `<p class="text">example text</p>`,
            css: `
.text {
    /* Displays the text as uppercase. */
    text-transform: uppercase;
    /* Adds slight spacing to improve uppercase readability. */
    letter-spacing: 1px;
    color: #475569;
    font: 700 13px Arial, sans-serif;
}
`
        }
    ]
});
