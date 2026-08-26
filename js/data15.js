MAIN.push({
    title: "Colors",
    description: "Common color roles and techniques used to build a visual hierarchy.",
    items: [
        {
            type: "color",
            title: "Common UI Colors",
            description: "A small palette for common interface states.",
            colors: [
                { name: "Primary", value: "#2563eb" },
                { name: "Success", value: "#16a34a" },
                { name: "Warning", value: "#d97706" },
                { name: "Danger", value: "#dc2626" },
                { name: "Text", value: "#1f2937" },
                { name: "Muted", value: "#64748b" },
                { name: "Border", value: "#cbd5e1" },
                { name: "Surface", value: "#ffffff" }
            ]
        },
        {
            type: "sample",
            title: "Gradient Background",
            description: "Uses a gradient to transition between two or more colors.",
            html: `<div class="gradient">Gradient</div>`,
            css: `
.gradient {
    /* Gives the sample a visible demonstration size. */
    padding: 30px;
    /* Creates a diagonal transition from blue to violet. */
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    /* Makes the text readable over the colored surface. */
    color: #ffffff;
    /* Rounds the container. */
    border-radius: 10px;
    /* Centers the demonstration label. */
    text-align: center;
    font: 700 16px Arial, sans-serif;
}
`
        }
    ]
});
