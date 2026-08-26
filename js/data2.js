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
    /* Removes the browser's default heading margin. */
    margin: 0;

    /* Sets the text color. */
    color: #20242a;

    /* Defines the typeface used by the text. */
    font-family: Arial, sans-serif;

    /* Sets the size of the letters to 32 pixels. */
    font-size: 32px;

    /* Makes the text bold. 700 is a bold weight. */
    font-weight: 700;

    /* Sets the vertical spacing between lines. */
    line-height: 1.2;
}
`
        },

        {
            type: "sample",
            title: "Subheading",
            description: "A smaller heading used below a main heading.",
            html: `
<h2 class="text">
    Section Heading
</h2>
`,
            css: `
.text {
    /* Removes the default margin around the heading. */
    margin: 0;

    /* Sets a dark gray text color. */
    color: #30343a;

    /* Sets the font family. */
    font-family: Arial, sans-serif;

    /* Makes the text smaller than the main heading. */
    font-size: 24px;

    /* 600 creates a semi-bold appearance. */
    font-weight: 600;

    /* Controls the vertical space between lines. */
    line-height: 1.3;
}
`
        },

        {
            type: "sample",
            title: "Paragraph",
            description: "Standard readable body text for normal content.",
            html: `
<p class="text">
    This is a normal paragraph of text used
    for descriptions and general information.
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Uses a readable medium-gray color. */
    color: #4b5563;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Standard body-text size. */
    font-size: 16px;

    /* Normal font weight. */
    font-weight: 400;

    /* Gives paragraphs comfortable line spacing. */
    line-height: 1.7;
}
`
        },

        {
            type: "sample",
            title: "Large Paragraph",
            description: "Larger body text for introductions or prominent descriptions.",
            html: `
<p class="text">
    This text is larger and is intended
    to introduce a page or important section.
</p>
`,
            css: `
.text {
    /* Removes the browser's default paragraph spacing. */
    margin: 0;

    /* Sets the text color. */
    color: #374151;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Makes this paragraph larger than normal body text. */
    font-size: 20px;

    /* Uses normal text weight. */
    font-weight: 400;

    /* Provides comfortable spacing between lines. */
    line-height: 1.6;
}
`
        },

        {
            type: "sample",
            title: "Small Text",
            description: "Compact supporting text for secondary information.",
            html: `
<span class="text">
    Additional information
</span>
`,
            css: `
.text {
    /* Uses a lighter color because this is secondary information. */
    color: #6b7280;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Makes the text compact. */
    font-size: 13px;

    /* Uses normal font weight. */
    font-weight: 400;

    /* Controls vertical spacing. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Muted Text",
            description: "Low-emphasis text used for secondary information.",
            html: `
<p class="text">
    Last updated 5 minutes ago
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Light gray reduces visual emphasis. */
    color: #9ca3af;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Uses a small readable size. */
    font-size: 14px;

    /* Keeps the text at normal weight. */
    font-weight: 400;

    /* Provides readable line spacing. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Bold Text",
            description: "Strong text used to emphasize important information.",
            html: `
<p class="text">
    Important information
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Uses a dark color for strong contrast. */
    color: #20242a;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Standard body-text size. */
    font-size: 16px;

    /* 700 makes the text bold. */
    font-weight: 700;

    /* Controls line spacing. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Italic Text",
            description: "Italic text for emphasis, terminology, or commentary.",
            html: `
<p class="text">
    This is italic text.
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Sets the text color. */
    color: #374151;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Standard text size. */
    font-size: 16px;

    /* Changes the text to an italic style. */
    font-style: italic;

    /* Controls vertical spacing. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Underline",
            description: "Underlined text for links or explicit emphasis.",
            html: `
<p class="text">
    Underlined text
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Blue suggests an interactive or linked element. */
    color: #2563eb;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Sets the text size. */
    font-size: 16px;

    /* Adds an underline beneath the text. */
    text-decoration: underline;

    /* Adds 3 pixels of space between text and underline. */
    text-underline-offset: 3px;
}
`
        },

        {
            type: "sample",
            title: "Link",
            description: "A standard interactive link for navigation.",
            html: `
<a class="text" href="#">
    Visit documentation
</a>
`,
            css: `
.text {
    /* Gives links a standard blue color. */
    color: #2563eb;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Sets the text size. */
    font-size: 16px;

    /* Removes the default underline. */
    text-decoration: none;
}

.text:hover {
    /* Darkens the link while the pointer is over it. */
    color: #1d4ed8;

    /* Shows an underline on hover to indicate interaction. */
    text-decoration: underline;
}
`
        },

        {
            type: "sample",
            title: "Code Text",
            description: "Inline monospace text for code, commands, or technical names.",
            html: `
<code class="text">
    display: grid;
</code>
`,
            css: `
.text {
    /* Adds 2px of vertical and 6px of horizontal space inside the code. */
    padding: 2px 6px;

    /* Gives inline code a slightly different background. */
    background: #f1f3f5;

    /* Orange makes the code visually distinct. */
    color: #c2410c;

    /* Rounds the corners by 4 pixels. */
    border-radius: 4px;

    /* Monospace fonts give every character a consistent width. */
    font-family:
        Consolas,
        "Courier New",
        monospace;

    /* Keeps inline code slightly smaller than body text. */
    font-size: 14px;
}
`
        },

        {
            type: "sample",
            title: "Code Block",
            description: "A larger monospace area for multiple lines of code.",
            html: `
<pre class="text"><code>function hello() {
    console.log("Hello");
}</code></pre>
`,
            css: `
.text {
    /* Removes the default pre-element margin. */
    margin: 0;

    /* Creates space between the code and its edges. */
    padding: 16px;

    /* Allows long code to scroll horizontally instead of breaking. */
    overflow-x: auto;

    /* Dark background identifies this as a code area. */
    background: #111827;

    /* Light text provides strong contrast against the dark background. */
    color: #e5e7eb;

    /* Rounds the corners of the code block. */
    border-radius: 6px;

    /* Uses monospace fonts for code alignment. */
    font-family:
        Consolas,
        "Courier New",
        monospace;

    /* Sets the code text size. */
    font-size: 14px;

    /* Gives multiple code lines comfortable spacing. */
    line-height: 1.6;
}
`
        },

        {
            type: "sample",
            title: "Quote",
            description: "A blockquote visually separates quoted or highlighted text.",
            html: `
<blockquote class="text">
    Good design is as little design as possible.
</blockquote>
`,
            css: `
.text {
    /* Removes the browser's default blockquote margin. */
    margin: 0;

    /* Adds space inside the quote. */
    padding: 12px 18px;

    /* Creates a 4px blue line beside the quote. */
    border-left: 4px solid #2563eb;

    /* Light blue background separates the quote from normal content. */
    background: #eff6ff;

    /* Sets the quote text color. */
    color: #374151;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Sets the quote size. */
    font-size: 16px;

    /* Makes the quote italic. */
    font-style: italic;

    /* Controls the spacing between lines. */
    line-height: 1.6;
}
`
        },

        {
            type: "sample",
            title: "Caption",
            description: "Small supporting text below images or figures.",
            html: `
<figcaption class="text">
    Figure 01 — Example interface
</figcaption>
`,
            css: `
.text {
    /* Adds 8px of space above the caption. */
    margin-top: 8px;

    /* Gray indicates that this is supporting information. */
    color: #6b7280;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Uses a smaller text size. */
    font-size: 13px;

    /* Controls vertical spacing. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Label",
            description: "Compact text used to identify controls or information.",
            html: `
<span class="text">
    Username
</span>
`,
            css: `
.text {
    /* Uses a dark gray for readable labels. */
    color: #374151;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Labels are usually smaller than normal body text. */
    font-size: 13px;

    /* 600 gives the label extra visual weight. */
    font-weight: 600;

    /* Controls the vertical spacing. */
    line-height: 1.4;
}
`
        },

        {
            type: "sample",
            title: "Badge Text",
            description: "Short text inside a compact badge for states or categories.",
            html: `
<span class="text">
    New
</span>
`,
            css: `
.text {
    /* Allows padding and dimensions to behave like a small box. */
    display: inline-block;

    /* Adds 4px vertical and 8px horizontal space inside the badge. */
    padding: 4px 8px;

    /* Light blue identifies the badge background. */
    background: #dbeafe;

    /* Dark blue provides readable contrast. */
    color: #1d4ed8;

    /* 999px creates a fully rounded pill shape. */
    border-radius: 999px;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Keeps the badge text compact. */
    font-size: 12px;

    /* Makes the badge text slightly bold. */
    font-weight: 600;

    /* A line-height of 1 keeps the badge compact vertically. */
    line-height: 1;
}
`
        },

        {
            type: "sample",
            title: "Success Text",
            description: "Green text communicates a successful or positive state.",
            html: `
<p class="text">
    Successfully saved
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Green communicates success or a positive state. */
    color: #16a34a;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Uses a compact status-text size. */
    font-size: 14px;

    /* Makes the status easier to notice. */
    font-weight: 600;
}
`
        },

        {
            type: "sample",
            title: "Error Text",
            description: "Red text communicates an error or invalid state.",
            html: `
<p class="text">
    Something went wrong
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Red communicates an error or invalid state. */
    color: #dc2626;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Uses a compact error-message size. */
    font-size: 14px;

    /* Makes the error message more noticeable. */
    font-weight: 600;
}
`
        },

        {
            type: "sample",
            title: "Warning Text",
            description: "Orange text communicates a warning or condition requiring attention.",
            html: `
<p class="text">
    This action cannot be undone
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Orange communicates caution or a warning. */
    color: #d97706;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Uses a compact warning-message size. */
    font-size: 14px;

    /* Makes the warning more visually noticeable. */
    font-weight: 600;
}
`
        },

        {
            type: "sample",
            title: "Centered Text",
            description: "Centered typography for empty states, dialogs, and standalone messages.",
            html: `
<p class="text">
    Nothing here yet
</p>
`,
            css: `
.text {
    /* Removes the default paragraph margin. */
    margin: 0;

    /* Sets the text color. */
    color: #374151;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Makes the message slightly larger. */
    font-size: 18px;

    /* Centers the text horizontally. */
    text-align: center;

    /* Controls vertical spacing. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Uppercase Text",
            description: "Uppercase typography for labels, categories, and small headings.",
            html: `
<span class="text">
    SECTION
</span>
`,
            css: `
.text {
    /* Uses gray so the label remains secondary. */
    color: #6b7280;

    /* Sets the typeface. */
    font-family: Arial, sans-serif;

    /* Keeps uppercase labels compact. */
    font-size: 12px;

    /* Makes the label visually stronger. */
    font-weight: 700;

    /* Adds 1px between each character. */
    letter-spacing: 1px;

    /* Converts the text to uppercase. */
    text-transform: uppercase;
}
`
        }
    ]
});