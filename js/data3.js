MAIN.push({
    title: "Text",
    description: "Common text styles and typographic patterns for interfaces and documentation.",
    items: [
        {
            type: "sample",
            title: "Heading",
            description: "A large heading used to introduce an important section.",
            html: `
<h1 class="text">
    Main Heading
</h1>
`,
            css: `
.text {
    /* Removes the browser's default heading margin so spacing is controlled by your design. */
    margin: 0;
    /* Sets the text color. */
    color: #20242a;
    /* Defines the typeface. Arial is used first; sans-serif is the fallback. */
    font-family: Arial, sans-serif;
    /* Makes the heading 32 pixels tall in terms of character size. */
    font-size: 32px;
    /* 700 is a bold font weight, making the heading visually prominent. */
    font-weight: 700;
    /* 1.2 means the line box is 1.2 times the font size. */
    line-height: 1.2;
}
`
        },
        {
            type: "sample",
            title: "Subheading",
            description: "A smaller heading used below a main heading.",
            html: `<h2 class="text">Section Heading</h2>`,
            css: `
.text {
    /* Removes default heading spacing. */
    margin: 0;
    /* Uses a dark gray instead of pure black. */
    color: #30343a;
    /* Sets the font family. */
    font-family: Arial, sans-serif;
    /* Smaller than the main heading. */
    font-size: 24px;
    /* 600 creates a semi-bold appearance. */
    font-weight: 600;
    /* Gives the heading comfortable vertical rhythm. */
    line-height: 1.3;
}
`
        },
        {
            type: "sample",
            title: "Paragraph",
            description: "Standard readable body text for normal content.",
            html: `<p class="text">This is a normal paragraph of text used for descriptions and general information.</p>`,
            css: `
.text {
    /* Removes default paragraph margin so layout spacing is intentional. */
    margin: 0;
    /* Medium gray is easier to read than pure black on bright backgrounds. */
    color: #4b5563;
    /* Sets the font. */
    font-family: Arial, sans-serif;
    /* Common body-text size. */
    font-size: 16px;
    /* 400 is normal weight. */
    font-weight: 400;
    /* 1.7 gives paragraphs generous line spacing for readability. */
    line-height: 1.7;
}
`
        },
        {
            type: "sample",
            title: "Link",
            description: "A standard interactive link for navigation or external resources.",
            html: `<a class="text" href="#">Visit documentation</a>`,
            css: `
.text {
    /* Blue is commonly associated with interactive links. */
    color: #2563eb;
    /* Sets the font. */
    font-family: Arial, sans-serif;
    /* Sets the text size. */
    font-size: 16px;
    /* Removes the normal underline for a cleaner default state. */
    text-decoration: none;
}
.text:hover {
    /* Darkens the link to show interaction. */
    color: #1d4ed8;
    /* Restores an underline so the hover state is obvious. */
    text-decoration: underline;
}
`
        },
        {
            type: "sample",
            title: "Code Block",
            description: "A monospace block for showing multiple lines of code.",
            html: `<pre class="text"><code>function hello() {
    console.log("Hello");
}</code></pre>`,
            css: `
.text {
    /* Removes the browser's default pre margin. */
    margin: 0;
    /* Creates breathing room around the code. */
    padding: 16px;
    /* Lets long code scroll instead of overflowing the page. */
    overflow-x: auto;
    /* Dark surface visually separates code from normal text. */
    background: #111827;
    /* Light text provides contrast against the dark background. */
    color: #e5e7eb;
    /* Softly rounds the code container corners. */
    border-radius: 6px;
    /* Monospace fonts keep characters aligned. */
    font-family: Consolas, "Courier New", monospace;
    /* Sets the code size. */
    font-size: 14px;
    /* Adds vertical space between code lines. */
    line-height: 1.6;
}
`
        },
        {
            type: "sample",
            title: "Quote",
            description: "A blockquote visually separates quoted or highlighted text.",
            html: `<blockquote class="text">Good design is as little design as possible.</blockquote>`,
            css: `
.text {
    /* Removes the default blockquote margin. */
    margin: 0;
    /* Adds interior spacing. */
    padding: 12px 18px;
    /* The left border provides a strong visual quote marker. */
    border-left: 4px solid #2563eb;
    /* Light blue background separates the quote from surrounding content. */
    background: #eff6ff;
    /* Sets the quote text color. */
    color: #374151;
    /* Sets the typeface. */
    font-family: Arial, sans-serif;
    /* Sets the quote size. */
    font-size: 16px;
    /* Italic style visually distinguishes quoted speech. */
    font-style: italic;
    /* Controls the spacing between lines. */
    line-height: 1.6;
}
`
        },
        {
            type: "sample",
            title: "Badge Text",
            description: "Short text inside a compact badge for states or categories.",
            html: `<span class="text">New</span>`,
            css: `
.text {
    /* Makes the span accept padding and box-like dimensions. */
    display: inline-block;
    /* Adds interior space around the badge text. */
    padding: 4px 8px;
    /* Light blue creates a soft status surface. */
    background: #dbeafe;
    /* Dark blue keeps text readable. */
    color: #1d4ed8;
    /* 999px creates a pill shape with fully rounded ends. */
    border-radius: 999px;
    /* Sets the typeface. */
    font-family: Arial, sans-serif;
    /* Small text fits inside a compact badge. */
    font-size: 12px;
    /* Semi-bold gives the label enough visual weight. */
    font-weight: 600;
    /* A value of 1 keeps the badge vertically compact. */
    line-height: 1;
}
`
        },
        {
            type: "sample",
            title: "Muted Text",
            description: "Low-emphasis text used for secondary information.",
            html: `<p class="text">Last updated 5 minutes ago</p>`,
            css: `
.text {
    /* Removes the normal paragraph margin. */
    margin: 0;
    /* A lighter gray reduces visual priority. */
    color: #9ca3af;
    /* Sets the typeface. */
    font-family: Arial, sans-serif;
    /* Keeps supporting text compact. */
    font-size: 14px;
    /* Uses normal weight. */
    font-weight: 400;
    /* Maintains readable line spacing. */
    line-height: 1.5;
}
`
        }
    ]
});
