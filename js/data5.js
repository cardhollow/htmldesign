MAIN.push({
    title: "Forms",
    description: "Common combinations for building usable form sections and validation states.",
    items: [
        {
            type: "sample",
            title: "Label + Input",
            description: "A basic field where a visible label identifies the expected value.",
            html: `<div class="field">
<label for="name">Full name</label>
<input id="name" type="text" placeholder="John Doe">
</div>`,
            css: `
.field {
    /* Stacks the label above the input. */
    display: flex;
    flex-direction: column;
    /* Adds a small gap between label and control. */
    gap: 6px;
}
.field label {
    /* Makes the label easy to scan. */
    color: #374151;
    font: 600 13px Arial, sans-serif;
}
.field input {
    /* Makes the input span the field width. */
    width: 100%;
    /* Adds interior space for comfortable typing. */
    padding: 10px 12px;
    /* Creates the normal field boundary. */
    border: 1px solid #cbd5e1;
    /* Soft corner rounding. */
    border-radius: 6px;
    /* White input surface. */
    background: #ffffff;
    /* Input text color. */
    color: #1f2937;
    /* Form font. */
    font: 15px Arial, sans-serif;
    /* Uses the custom focus style. */
    outline: none;
}
.field input:focus {
    /* Highlights the active control. */
    border-color: #2563eb;
    box-shadow: 0 0 0 3px #dbeafe;
}
`
        },
        {
            type: "sample",
            title: "Error Field",
            description: "A form field showing an invalid state and an explanatory message.",
            html: `<div class="field error">
<label for="email">Email</label>
<input id="email" type="email" value="wrong-email">
<small>Enter a valid email address.</small>
</div>`,
            css: `
.field {
    /* Groups the label, field, and message together. */
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: Arial, sans-serif;
}
.field label {
    /* Gives the label normal visual priority. */
    color: #374151;
    font-size: 13px;
    font-weight: 600;
}
.field input {
    /* Uses the available horizontal space. */
    width: 100%;
    /* Adds inner typing room. */
    padding: 10px 12px;
    /* Red border communicates the validation error. */
    border: 1px solid #dc2626;
    border-radius: 6px;
    background: #ffffff;
    color: #1f2937;
    font-size: 15px;
    outline: none;
}
.field small {
    /* Makes the explanation visually related to the error. */
    color: #dc2626;
    font-size: 12px;
}
`
        },
        {
            type: "sample",
            title: "Success Field",
            description: "A form field showing a valid or accepted state.",
            html: `<div class="field success">
<label for="username">Username</label>
<input id="username" type="text" value="john123">
<small>Username is available.</small>
</div>`,
            css: `
.field {
    /* Keeps the label, control, and status message together. */
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: Arial, sans-serif;
}
.field label {
    /* Gives the label a clear but compact appearance. */
    color: #374151;
    font-size: 13px;
    font-weight: 600;
}
.field input {
    /* Fills the field width. */
    width: 100%;
    /* Adds typing space. */
    padding: 10px 12px;
    /* Green border communicates success. */
    border: 1px solid #16a34a;
    border-radius: 6px;
    background: #ffffff;
    color: #1f2937;
    font-size: 15px;
    outline: none;
}
.field small {
    /* Green status text reinforces the successful state. */
    color: #16a34a;
    font-size: 12px;
}
`
        },
        {
            type: "sample",
            title: "Field Group",
            description: "Two related controls grouped into one horizontal form section.",
            html: `<div class="group">
<div class="field"><label>First name</label><input type="text"></div>
<div class="field"><label>Last name</label><input type="text"></div>
</div>`,
            css: `
.group {
    /* Creates a side-by-side arrangement. */
    display: grid;
    /* Two equal columns share the available width. */
    grid-template-columns: 1fr 1fr;
    /* Adds consistent space between fields. */
    gap: 12px;
}
.field {
    /* Stacks each label over its input. */
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: Arial, sans-serif;
}
.field label {
    color: #374151;
    font-size: 13px;
    font-weight: 600;
}
.field input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background: #ffffff;
    color: #1f2937;
    font-size: 15px;
    outline: none;
}
@media (max-width: 500px) {
    /* Stacks fields on narrow screens so each remains usable. */
    .group {
        grid-template-columns: 1fr;
    }
}
`
        },
        {
            type: "sample",
            title: "Form Actions",
            description: "A simple action row for submitting or cancelling a form.",
            html: `<div class="actions">
<button class="primary">Save</button>
<button class="secondary">Cancel</button>
</div>`,
            css: `
.actions {
    /* Places the buttons side by side. */
    display: flex;
    /* Creates a small consistent gap. */
    gap: 8px;
    /* Aligns the buttons toward the left. */
    justify-content: flex-start;
}
.actions button {
    /* Adds touch-friendly interior spacing. */
    padding: 9px 16px;
    /* Removes default browser border. */
    border: 0;
    /* Gives the buttons moderate rounding. */
    border-radius: 6px;
    /* Uses a standard UI font. */
    font: 600 14px Arial, sans-serif;
    cursor: pointer;
}
.primary {
    /* Main action gets a strong color. */
    background: #2563eb;
    color: #ffffff;
}
.secondary {
    /* Secondary action stays visually quieter. */
    background: #e5e7eb;
    color: #374151;
}
`
        }
    ]
});
