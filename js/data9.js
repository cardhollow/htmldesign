MAIN.push({
    title: "Lists",
    description: "Common list presentations for menus, features, steps, and grouped information.",
    items: [
        {
            type: "sample",
            title: "Basic List",
            description: "A standard unordered list for related items.",
            html: `<ul class="list"><li>First item</li><li>Second item</li><li>Third item</li></ul>`,
            css: `
.list {
    /* Removes the browser's default outer margin. */
    margin: 0;
    /* Keeps the standard bullet indentation. */
    padding-left: 20px;
    /* Sets the list text color. */
    color: #475569;
    font: 15px/1.7 Arial, sans-serif;
}
.list li {
    /* Adds a little separation between list items. */
    margin-bottom: 4px;
}
`
        },
        {
            type: "sample",
            title: "Numbered List",
            description: "An ordered list for steps or sequences.",
            html: `<ol class="list"><li>Choose a plan</li><li>Create an account</li><li>Start using the service</li></ol>`,
            css: `
.list {
    /* Removes default outer spacing. */
    margin: 0;
    /* Provides room for the number markers. */
    padding-left: 22px;
    color: #475569;
    font: 15px/1.7 Arial, sans-serif;
}
.list li {
    /* Separates each step slightly. */
    margin-bottom: 5px;
}
`
        },
        {
            type: "sample",
            title: "Feature List",
            description: "A list using custom symbols instead of normal bullets.",
            html: `<ul class="features"><li>Fast performance</li><li>Responsive design</li><li>Easy to customize</li></ul>`,
            css: `
.features {
    /* Removes the browser bullet. */
    list-style: none;
    /* Removes default spacing. */
    margin: 0;
    padding: 0;
    display: grid;
    /* Creates consistent spacing between feature rows. */
    gap: 9px;
    font: 15px Arial, sans-serif;
    color: #334155;
}
.features li::before {
    /* Inserts a custom checkmark before every item. */
    content: "✓";
    /* Adds space between the icon and text. */
    margin-right: 8px;
    /* Green suggests a positive feature. */
    color: #16a34a;
    font-weight: 700;
}
`
        }
    ]
});
