MAIN.push({
    title: "Feedback",
    description: "Visual patterns that communicate status, progress, errors, and system feedback.",
    items: [
        {
            type: "sample",
            title: "Alert",
            description: "A persistent message that calls attention to important information.",
            html: `<div class="alert"><strong>Notice</strong><span>Your changes have been saved.</span></div>`,
            css: `
.alert {
    /* Places the title and message together. */
    display: flex;
    flex-direction: column;
    /* Adds space inside the message box. */
    padding: 14px 16px;
    /* Blue border communicates informational status. */
    border-left: 4px solid #2563eb;
    /* Light blue surface keeps the alert noticeable but soft. */
    background: #eff6ff;
    /* Sets the message color. */
    color: #1e3a8a;
    /* Rounds the outer corners. */
    border-radius: 6px;
    font: 14px/1.5 Arial, sans-serif;
}
.alert strong {
    /* Makes the alert heading stand out. */
    margin-bottom: 3px;
}
`
        },
        {
            type: "sample",
            title: "Success Message",
            description: "Confirms that an action completed successfully.",
            html: `<div class="message">Saved successfully.</div>`,
            css: `
.message {
    /* Adds room around the message. */
    padding: 12px 14px;
    /* Green left border communicates success. */
    border-left: 4px solid #16a34a;
    /* Soft green background reinforces the state. */
    background: #f0fdf4;
    /* Dark green text maintains contrast. */
    color: #166534;
    border-radius: 6px;
    font: 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Error Message",
            description: "Explains that an operation failed or the input is invalid.",
            html: `<div class="message">Unable to save changes.</div>`,
            css: `
.message {
    /* Creates comfortable message spacing. */
    padding: 12px 14px;
    /* Red identifies an error condition. */
    border-left: 4px solid #dc2626;
    /* Light red keeps the message visible without being overwhelming. */
    background: #fef2f2;
    /* Dark red provides contrast. */
    color: #991b1b;
    border-radius: 6px;
    font: 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Progress Bar",
            description: "Communicates completion of a task or process.",
            html: `<div class="progress"><div class="bar"></div></div>`,
            css: `
.progress {
    /* Creates the total progress track. */
    width: 100%;
    /* Sets the track height. */
    height: 8px;
    /* Dark track defines the unused portion. */
    background: #e2e8f0;
    /* Rounds the track. */
    border-radius: 999px;
    /* Hides the progress bar if it exceeds the track. */
    overflow: hidden;
}
.bar {
    /* Fills 65% of the track to represent progress. */
    width: 65%;
    /* Sets the filled progress color. */
    height: 100%;
    background: #2563eb;
}
`
        },
        {
            type: "sample",
            title: "Spinner",
            description: "A small animated indicator for an operation currently in progress.",
            html: `<div class="spinner"></div>`,
            css: `
.spinner {
    /* Creates the circular outer size. */
    width: 28px;
    height: 28px;
    /* Turns the square into a circle. */
    border-radius: 50%;
    /* A light ring forms the stationary track. */
    border: 3px solid #dbeafe;
    /* Blue top edge becomes the moving indicator. */
    border-top-color: #2563eb;
    /* Rotates the circle continuously. */
    animation: spin 0.8s linear infinite;
}
@keyframes spin {
    /* One full rotation creates the loading motion. */
    to { transform: rotate(360deg); }
}
`
        }
    ]
});
