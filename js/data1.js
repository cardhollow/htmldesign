MAIN.push({

    title: "Buttons",

    description:
        "Common button designs and CSS techniques. Each example demonstrates a different way to style a button.",

    items: [


        /* =================================
           01 — BASIC BUTTON
           ================================= */

        {
            title: "Basic Button",

            description:
                "A simple default button using a light background, border, spacing, and a small hover effect.",

            html: `
<button class="button">
    Button
</button>
`,

            css: `
.button {

    /* Space inside the button */
    padding: 10px 18px;

    /* Thin border around the button */
    border: 1px solid #c7cbd1;

    /* Slightly rounded corners */
    border-radius: 5px;

    /* Light gray button background */
    background: #f3f4f6;

    /* Dark text color */
    color: #20242a;

    /* Font used by the button */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Shows a pointer when hovering */
    cursor: pointer;
}


/* Button appearance when the mouse is over it */

.button:hover {

    /* Slightly darker background */
    background: #e5e7eb;
}
`
        },


        /* =================================
           02 — PRIMARY BUTTON
           ================================= */

        {
            title: "Primary Button",

            description:
                "A prominent button intended for the main action on a page, such as Save, Continue, Submit, or Start.",

            html: `
<button class="button">
    Primary Button
</button>
`,

            css: `
.button {

    /* Space inside the button */
    padding: 10px 18px;

    /* No visible border */
    border: 0;

    /* Slightly rounded corners */
    border-radius: 5px;

    /* Strong blue background */
    background: #2563eb;

    /* White text for contrast */
    color: #ffffff;

    /* Font used by the button */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Darker blue when hovered */
    background: #1d4ed8;
}
`
        },


        /* =================================
           03 — OUTLINE BUTTON
           ================================= */

        {
            title: "Outline Button",

            description:
                "An outlined button keeps the center transparent and uses its border and text color to define the button.",

            html: `
<button class="button">
    Outline Button
</button>
`,

            css: `
.button {

    /* Space inside the button */
    padding: 10px 18px;

    /* Blue outline */
    border: 1px solid #2563eb;

    /* Slightly rounded corners */
    border-radius: 5px;

    /* Transparent center */
    background: transparent;

    /* Blue text */
    color: #2563eb;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Very light blue hover background */
    background: #eff6ff;
}
`
        },


        /* =================================
           04 — GHOST BUTTON
           ================================= */

        {
            title: "Ghost Button",

            description:
                "A minimal button with no visible border or background until the user interacts with it.",

            html: `
<button class="button">
    Ghost Button
</button>
`,

            css: `
.button {

    /* Space inside the button */
    padding: 10px 18px;

    /* Invisible border keeps the size stable */
    border: 1px solid transparent;

    /* Slightly rounded corners */
    border-radius: 5px;

    /* No background */
    background: transparent;

    /* Dark gray text */
    color: #374151;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Background appears during interaction */
    background: #f3f4f6;
}
`
        },


        /* =================================
           05 — DANGER BUTTON
           ================================= */

        {
            title: "Danger Button",

            description:
                "A destructive-action button commonly used for actions such as Delete, Remove, or Reset.",

            html: `
<button class="button">
    Delete
</button>
`,

            css: `
.button {

    /* Space inside the button */
    padding: 10px 18px;

    /* No border */
    border: 0;

    /* Slightly rounded corners */
    border-radius: 5px;

    /* Red indicates a destructive action */
    background: #dc2626;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Darker red when hovered */
    background: #b91c1c;
}
`
        },


        /* =================================
           06 — SUCCESS BUTTON
           ================================= */

        {
            title: "Success Button",

            description:
                "A green button commonly used for successful or confirming actions.",

            html: `
<button class="button">
    Confirm
</button>
`,

            css: `
.button {

    /* Space inside */
    padding: 10px 18px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 5px;

    /* Green success color */
    background: #16a34a;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Darker green */
    background: #15803d;
}
`
        },


        /* =================================
           07 — WARNING BUTTON
           ================================= */

        {
            title: "Warning Button",

            description:
                "A warning-colored button used when an action needs attention but is not necessarily destructive.",

            html: `
<button class="button">
    Warning
</button>
`,

            css: `
.button {

    /* Space inside */
    padding: 10px 18px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 5px;

    /* Orange warning color */
    background: #f59e0b;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Darker orange */
    background: #d97706;
}
`
        },


        /* =================================
           08 — PILL BUTTON
           ================================= */

        {
            title: "Pill Button",

            description:
                "A fully rounded button created with a very large border-radius value.",

            html: `
<button class="button">
    Pill Button
</button>
`,

            css: `
.button {

    /* Horizontal and vertical spacing */
    padding: 10px 20px;

    /* No border */
    border: 0;

    /*
        Very large radius makes both
        ends completely rounded.
    */
    border-radius: 999px;

    /* Blue background */
    background: #2563eb;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Darker blue */
    background: #1d4ed8;
}
`
        },


        /* =================================
           09 — LARGE BUTTON
           ================================= */

        {
            title: "Large Button",

            description:
                "A larger button that provides more visual emphasis and a bigger touch target.",

            html: `
<button class="button">
    Large Button
</button>
`,

            css: `
.button {

    /* Larger internal spacing */
    padding: 15px 28px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 6px;

    /* Blue background */
    background: #2563eb;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Larger text */
    font-size: 17px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Darker blue */
    background: #1d4ed8;
}
`
        },


        /* =================================
           10 — SMALL BUTTON
           ================================= */

        {
            title: "Small Button",

            description:
                "A compact button useful for secondary controls, toolbars, or interfaces with limited space.",

            html: `
<button class="button">
    Small
</button>
`,

            css: `
.button {

    /* Small internal spacing */
    padding: 6px 11px;

    /* Light border */
    border: 1px solid #c7cbd1;

    /* Small corner radius */
    border-radius: 4px;

    /* Light background */
    background: #f3f4f6;

    /* Dark text */
    color: #20242a;

    /* Font */
    font-family: Arial, sans-serif;

    /* Smaller text */
    font-size: 12px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Slightly darker background */
    background: #e5e7eb;
}
`
        },


        /* =================================
           11 — ROUNDED BUTTON
           ================================= */

        {
            title: "Rounded Button",

            description:
                "A button with noticeably rounded corners while still keeping a rectangular shape.",

            html: `
<button class="button">
    Rounded
</button>
`,

            css: `
.button {

    /* Internal spacing */
    padding: 10px 20px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 12px;

    /* Dark background */
    background: #111827;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /* Slightly lighter dark background */
    background: #1f2937;
}
`
        },


        /* =================================
           12 — SHADOW BUTTON
           ================================= */

        {
            title: "Shadow Button",

            description:
                "A button that uses box-shadow to create depth and make it appear elevated from the surface.",

            html: `
<button class="button">
    Shadow Button
</button>
`,

            css: `
.button {

    /* Internal spacing */
    padding: 11px 20px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 6px;

    /* Blue background */
    background: #2563eb;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;

    /*
        Creates a soft blue shadow
        underneath the button.
    */
    box-shadow:
        0 4px 10px
        rgba(37, 99, 235, 0.3);
}


/* Hover state */

.button:hover {

    /*
        Larger shadow makes the button
        appear more elevated.
    */
    box-shadow:
        0 6px 14px
        rgba(37, 99, 235, 0.4);
}
`
        },


        /* =================================
           13 — GRADIENT BUTTON
           ================================= */

        {
            title: "Gradient Button",

            description:
                "A button using a CSS linear gradient instead of a single solid background color.",

            html: `
<button class="button">
    Gradient
</button>
`,

            css: `
.button {

    /* Internal spacing */
    padding: 11px 20px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 6px;

    /*
        Creates a gradient that transitions
        from purple-blue to violet.
    */
    background:
        linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
        );

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;
}


/* Hover state */

.button:hover {

    /*
        Slightly reduces opacity to
        create a simple hover effect.
    */
    opacity: 0.9;
}
`
        },


        /* =================================
           14 — NEUMORPHIC BUTTON
           ================================= */

        {
            title: "Neumorphic Button",

            description:
                "A soft 3D-style button created using multiple shadows instead of a traditional border.",

            html: `
<button class="button">
    Neumorphic
</button>
`,

            css: `
.button {

    /* Internal spacing */
    padding: 12px 20px;

    /* Removes the normal border */
    border: 0;

    /* Rounded corners */
    border-radius: 10px;

    /* Light surface */
    background: #e5e7eb;

    /* Dark text */
    color: #374151;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;

    /*
        Two opposite shadows create
        the raised 3D appearance.

        Dark shadow:
        pushes the surface down.

        Light shadow:
        creates the highlighted edge.
    */
    box-shadow:
        6px 6px 12px #c5c7ca,
        -6px -6px 12px #ffffff;
}


/* Pressed state */

.button:active {

    /*
        Inset shadows make the button
        appear pushed into the surface.
    */
    box-shadow:
        inset 4px 4px 8px #c5c7ca,
        inset -4px -4px 8px #ffffff;
}
`
        },


        /* =================================
           15 — GLASS BUTTON
           ================================= */

        {
            title: "Glass Button",

            description:
                "A translucent button using transparency and backdrop-filter to create a glass-like appearance.",

            html: `
<button class="button">
    Glass Button
</button>
`,

            css: `
.button {

    /* Internal spacing */
    padding: 11px 20px;

    /*
        Semi-transparent white border
        gives the glass edge.
    */
    border:
        1px solid
        rgba(255, 255, 255, 0.4);

    /* Rounded glass corners */
    border-radius: 10px;

    /*
        Semi-transparent background
        allows the background behind
        the button to show through.
    */
    background:
        rgba(255, 255, 255, 0.2);

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /* Pointer cursor */
    cursor: pointer;

    /*
        Blurs content behind the button.
    */
    backdrop-filter: blur(8px);
}


/* Hover state */

.button:hover {

    /* Makes the glass more visible */
    background:
        rgba(255, 255, 255, 0.3);
}
`
        },


        /* =================================
           16 — DISABLED BUTTON
           ================================= */

        {
            title: "Disabled Button",

            description:
                "A disabled button communicates that an action is currently unavailable.",

            html: `
<button
    class="button"
    disabled
>
    Disabled
</button>
`,

            css: `
.button {

    /* Internal spacing */
    padding: 10px 18px;

    /* No border */
    border: 0;

    /* Rounded corners */
    border-radius: 5px;

    /* Gray indicates an unavailable state */
    background: #9ca3af;

    /* White text */
    color: #ffffff;

    /* Font */
    font-family: Arial, sans-serif;

    /* Text size */
    font-size: 14px;

    /*
        Indicates that the button
        cannot currently be interacted with.
    */
    cursor: not-allowed;

    /*
        Makes the disabled state
        visually less prominent.
    */
    opacity: 0.6;
}
`
        }

    ]

});