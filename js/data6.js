MAIN.push({
    title: "Links",
    description: "Common link styles for navigation, inline references, and action-oriented text.",
    items: [
        {
            type: "sample",
            title: "Standard Link",
            description: "A simple text link with a hover underline.",
            html: `<a class="link" href="#">Read more</a>`,
            css: `
.link {
    /* Blue is a common convention for interactive links. */
    color: #2563eb;
    /* Removes the underline until interaction. */
    text-decoration: none;
    font: 15px Arial, sans-serif;
}
.link:hover {
    /* Darkens the link to show the pointer state. */
    color: #1d4ed8;
    /* The underline makes the link state unmistakable. */
    text-decoration: underline;
}
`
        },
        {
            type: "sample",
            title: "Underline Link",
            description: "An always-underlined link that stays obviously interactive.",
            html: `<a class="link" href="#">Documentation</a>`,
            css: `
.link {
    /* Sets the link color. */
    color: #2563eb;
    /* Keeps the underline visible at all times. */
    text-decoration: underline;
    /* Adds 3px between the letters and underline. */
    text-underline-offset: 3px;
    font: 15px Arial, sans-serif;
}
.link:hover {
    /* Darker hover color adds feedback. */
    color: #1d4ed8;
}
`
        },
        {
            type: "sample",
            title: "Navigation Link",
            description: "A simple link style for a horizontal navigation bar.",
            html: `<nav class="nav"><a href="#">Home</a><a href="#">Docs</a><a href="#">About</a></nav>`,
            css: `
.nav {
    /* Places navigation links in a row. */
    display: flex;
    /* Adds consistent space between links. */
    gap: 20px;
}
.nav a {
    /* Sets the normal navigation color. */
    color: #475569;
    /* Removes the default underline. */
    text-decoration: none;
    font: 600 14px Arial, sans-serif;
}
.nav a:hover {
    /* Blue shows that the link is interactive. */
    color: #2563eb;
}
`
        },
        {
            type: "sample",
            title: "Active Link",
            description: "A navigation link showing the current page or selected section.",
            html: `<nav class="nav"><a href="#">Home</a><a class="active" href="#">Docs</a><a href="#">About</a></nav>`,
            css: `
.nav {
    /* Arranges navigation links horizontally. */
    display: flex;
    gap: 20px;
}
.nav a {
    /* Gives inactive links a neutral color. */
    color: #64748b;
    text-decoration: none;
    font: 600 14px Arial, sans-serif;
}
.nav .active {
    /* Blue identifies the current destination. */
    color: #2563eb;
    /* A bottom border can act like a selected tab indicator. */
    border-bottom: 2px solid #2563eb;
    /* Leaves a little space between text and the indicator. */
    padding-bottom: 4px;
}
`
        }
    ]
});
