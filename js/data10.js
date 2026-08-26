MAIN.push({
    title: "Navigation",
    description: "Common navigation patterns for menus, tabs, breadcrumbs, and pagination.",
    items: [
        {
            type: "sample",
            title: "Navigation Bar",
            description: "A basic horizontal navigation bar.",
            html: `<nav class="nav"><a class="active" href="#">Home</a><a href="#">Products</a><a href="#">About</a><a href="#">Contact</a></nav>`,
            css: `
.nav {
    /* Places navigation items into a horizontal row. */
    display: flex;
    /* Creates even spacing between links. */
    gap: 22px;
    /* Aligns links vertically in the same center line. */
    align-items: center;
    /* Uses a white navigation surface. */
    background: #ffffff;
    font: 14px Arial, sans-serif;
}
.nav a {
    /* Removes normal link underlines. */
    text-decoration: none;
    color: #64748b;
}
.nav a.active,
.nav a:hover {
    /* Blue marks the active or hovered destination. */
    color: #2563eb;
}
`
        },
        {
            type: "sample",
            title: "Tabs",
            description: "Horizontal controls used to switch between content sections.",
            html: `<div class="tabs"><button class="active">Overview</button><button>Details</button><button>Reviews</button></div>`,
            css: `
.tabs {
    /* Keeps tabs on one line. */
    display: flex;
    /* Adds separation between tab labels. */
    gap: 4px;
    /* Creates the baseline under the tab row. */
    border-bottom: 1px solid #e2e8f0;
}
.tabs button {
    /* Removes default button styling. */
    border: 0;
    /* Gives tabs comfortable clickable space. */
    padding: 10px 14px;
    /* Matches the page surface. */
    background: transparent;
    color: #64748b;
    font: 600 14px Arial, sans-serif;
    cursor: pointer;
}
.tabs button.active,
.tabs button:hover {
    /* Blue identifies the selected tab. */
    color: #2563eb;
    /* A bottom border acts as a selection indicator. */
    border-bottom: 2px solid #2563eb;
}
`
        },
        {
            type: "sample",
            title: "Breadcrumbs",
            description: "Shows the user's current location in a hierarchy.",
            html: `<nav class="crumbs"><a href="#">Home</a><span>/</span><a href="#">Docs</a><span>/</span><strong>Buttons</strong></nav>`,
            css: `
.crumbs {
    /* Places hierarchy levels on one line. */
    display: flex;
    /* Creates small spaces around separators. */
    gap: 8px;
    align-items: center;
    font: 13px Arial, sans-serif;
}
.crumbs a {
    /* Links use the standard interactive blue. */
    color: #2563eb;
    text-decoration: none;
}
.crumbs span {
    /* Separators are visually quieter. */
    color: #94a3b8;
}
.crumbs strong {
    /* Current location gets stronger emphasis. */
    color: #334155;
}
`
        },
        {
            type: "sample",
            title: "Pagination",
            description: "Navigation controls for moving through multiple pages of results.",
            html: `<div class="pages"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>›</button></div>`,
            css: `
.pages {
    /* Places page controls in one row. */
    display: flex;
    gap: 5px;
}
.pages button {
    /* Gives every page target a consistent square footprint. */
    min-width: 34px;
    height: 34px;
    /* Creates a simple bordered control. */
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    background: #ffffff;
    color: #475569;
    cursor: pointer;
}
.pages button.active,
.pages button:hover {
    /* Blue identifies the active page. */
    background: #2563eb;
    border-color: #2563eb;
    color: #ffffff;
}
`
        }
    ]
});
