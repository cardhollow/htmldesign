MAIN.push({
    title: "Cards",
    description: "Reusable content containers for grouping related information and actions.",
    items: [
        {
            type: "sample",
            title: "Basic Card",
            description: "A simple bordered surface for grouping content.",
            html: `<article class="card"><h3>Card title</h3><p>Card content goes here.</p></article>`,
            css: `
.card {
    /* Adds space inside the card. */
    padding: 18px;
    /* Defines a subtle boundary. */
    border: 1px solid #e2e8f0;
    /* Softly rounds the card corners. */
    border-radius: 8px;
    /* White surface separates the card from the page. */
    background: #ffffff;
    /* Uses a standard interface typeface. */
    font-family: Arial, sans-serif;
}
.card h3 {
    /* Removes the default heading margin. */
    margin: 0 0 6px;
    /* Sets the card title color. */
    color: #1f2937;
    font-size: 18px;
}
.card p {
    /* Removes the default paragraph margin. */
    margin: 0;
    /* Secondary text uses gray. */
    color: #64748b;
    line-height: 1.6;
}
`
        },
        {
            type: "sample",
            title: "Elevated Card",
            description: "A card that uses a shadow instead of a visible boundary.",
            html: `<article class="card"><h3>Featured</h3><p>This card appears raised above the page.</p></article>`,
            css: `
.card {
    /* Adds room between the content and card edges. */
    padding: 20px;
    /* A faint border keeps the edge defined. */
    border: 1px solid #eef2f7;
    /* Rounded corners soften the container. */
    border-radius: 10px;
    /* Uses a white surface. */
    background: #ffffff;
    /* Shadow visually lifts the card from the page. */
    box-shadow: 0 8px 24px rgba(15, 23, 42, .08);
    font-family: Arial, sans-serif;
}
.card h3 {
    margin: 0 0 6px;
    color: #1f2937;
}
.card p {
    margin: 0;
    color: #64748b;
}
`
        },
        {
            type: "sample",
            title: "Horizontal Card",
            description: "A card that places an image or icon beside its content.",
            html: `<article class="card"><div class="icon">A</div><div><h3>Account</h3><p>Manage your account settings.</p></div></article>`,
            css: `
.card {
    /* Places the icon beside the text. */
    display: flex;
    /* Centers both columns vertically. */
    align-items: center;
    /* Controls the space between icon and text. */
    gap: 14px;
    /* Adds interior spacing. */
    padding: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    background: #ffffff;
    font-family: Arial, sans-serif;
}
.icon {
    /* Gives the icon a fixed square area. */
    width: 44px;
    height: 44px;
    /* Centers the letter. */
    display: grid;
    place-items: center;
    /* Rounded corners make it feel like an icon tile. */
    border-radius: 10px;
    /* Blue background indicates the accent. */
    background: #dbeafe;
    color: #2563eb;
    font-weight: 700;
}
.card h3 {
    margin: 0 0 4px;
    color: #1f2937;
    font-size: 16px;
}
.card p {
    margin: 0;
    color: #64748b;
    font-size: 13px;
}
`
        }
    ]
});
