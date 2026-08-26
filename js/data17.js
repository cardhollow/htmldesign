MAIN.push({
    title: "Borders & Effects",
    description: "Borders, shadows, opacity, radius, and small visual effects used to shape components.",
    items: [
        {
            type: "sample",
            title: "Rounded Corners",
            description: "Controls the curvature of an element's corners.",
            html: `<div class="box">Rounded</div>`,
            css: `
.box {
    /* Adds internal room so the effect is visible. */
    padding: 22px;
    /* 16px creates noticeably rounded corners. */
    border-radius: 16px;
    background: #dbeafe;
    color: #1e3a8a;
    font: 700 16px Arial, sans-serif;
    text-align: center;
}
`
        },
        {
            type: "sample",
            title: "Border",
            description: "Creates a visible outline around an element.",
            html: `<div class="box">Border</div>`,
            css: `
.box {
    /* Adds interior space. */
    padding: 20px;
    /* 2px creates a clearly visible border. */
    border: 2px solid #2563eb;
    /* Keeps the corners moderately rounded. */
    border-radius: 8px;
    background: #ffffff;
    color: #334155;
    font: 600 15px Arial, sans-serif;
    text-align: center;
}
`
        },
        {
            type: "sample",
            title: "Shadow",
            description: "Uses box-shadow to create visual depth beneath an element.",
            html: `<div class="box">Elevated</div>`,
            css: `
.box {
    /* Gives the box enough area to see the shadow. */
    padding: 22px;
    border-radius: 10px;
    background: #ffffff;
    color: #334155;
    font: 600 15px Arial, sans-serif;
    text-align: center;
    /* Creates a soft shadow: x-offset, y-offset, blur, and transparency. */
    box-shadow: 0 10px 24px rgba(15, 23, 42, .12);
}
`
        },
        {
            type: "sample",
            title: "Opacity",
            description: "Controls how transparent an element appears.",
            html: `<div class="stack"><div class="box one">100%</div><div class="box two">50%</div></div>`,
            css: `
.stack {
    /* Places the comparison boxes side by side. */
    display: flex;
    gap: 10px;
}
.box {
    /* Gives the boxes a visible size. */
    flex: 1;
    padding: 20px;
    background: #2563eb;
    color: #ffffff;
    border-radius: 8px;
    text-align: center;
    font: 700 14px Arial, sans-serif;
}
.two {
    /* 0.5 means the element is 50% opaque. */
    opacity: 0.5;
}
`
        }
    ]
});
