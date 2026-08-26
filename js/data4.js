MAIN.push({
    title: "Inputs",
    description: "Common form controls used to collect text, numbers, choices, and other user data.",
    items: [
        {
            type: "sample",
            title: "Text Input",
            description: "A single-line field for short text such as names or usernames.",
            html: `<input class="input" type="text" placeholder="Enter your name">`,
            css: `
.input {
    /* Width 100% makes the field fill its available container. */
    width: 100%;
    /* Adds room between the text and the input edge. */
    padding: 10px 12px;
    /* Defines a light border around the control. */
    border: 1px solid #cbd5e1;
    /* Softly rounds the corners. */
    border-radius: 6px;
    /* Keeps the field white against the guide background. */
    background: #ffffff;
    /* Sets the typed text color. */
    color: #1f2937;
    /* Sets the form font. */
    font: 16px Arial, sans-serif;
    /* Removes the browser outline so the custom focus style can be used. */
    outline: none;
}
.input::placeholder {
    /* Placeholder text is intentionally lighter than real content. */
    color: #94a3b8;
}
.input:focus {
    /* Blue focus border communicates keyboard or pointer focus. */
    border-color: #2563eb;
    /* Adds a soft outer focus ring. */
    box-shadow: 0 0 0 3px #dbeafe;
}
`
        },
        {
            type: "sample",
            title: "Password Input",
            description: "A text field that masks entered characters.",
            html: `<input class="input" type="password" placeholder="Password">`,
            css: `
.input {
    /* Makes the input fill the available width. */
    width: 100%;
    /* Controls inner spacing. */
    padding: 10px 12px;
    /* Gives the field a visible boundary. */
    border: 1px solid #cbd5e1;
    /* Rounds the field corners. */
    border-radius: 6px;
    /* White is the input surface. */
    background: #ffffff;
    /* Sets entered text color. */
    color: #1f2937;
    /* Uses a familiar UI font. */
    font: 16px Arial, sans-serif;
    /* Allows the custom focus state below to control the outline. */
    outline: none;
}
.input:focus {
    /* Blue border shows the control is active. */
    border-color: #2563eb;
    /* Soft blue ring makes focus easier to see. */
    box-shadow: 0 0 0 3px #dbeafe;
}
`
        },
        {
            type: "sample",
            title: "Search Input",
            description: "A field intended specifically for search queries.",
            html: `<input class="search" type="search" placeholder="Search...">`,
            css: `
.search {
    /* Makes the search field use all available horizontal space. */
    width: 100%;
    /* Provides comfortable touch and typing space. */
    padding: 10px 14px;
    /* Creates a subtle gray outline. */
    border: 1px solid #cbd5e1;
    /* Fully rounded corners create a search-bar appearance. */
    border-radius: 999px;
    /* Sets the surface color. */
    background: #ffffff;
    /* Sets the entered text color. */
    color: #1f2937;
    /* Sets the font. */
    font: 15px Arial, sans-serif;
    /* Prevents a browser-specific outline from replacing our focus style. */
    outline: none;
}
.search:focus {
    /* Blue border indicates active search input. */
    border-color: #2563eb;
    /* Adds a light focus halo. */
    box-shadow: 0 0 0 3px #dbeafe;
}
`
        },
        {
            type: "sample",
            title: "Textarea",
            description: "A multi-line input for longer user text.",
            html: `<textarea class="textarea" placeholder="Write something..."></textarea>`,
            css: `
.textarea {
    /* Makes the textarea span the available width. */
    width: 100%;
    /* Creates readable interior spacing. */
    padding: 12px;
    /* Sets the default minimum height. */
    min-height: 120px;
    /* Defines the border. */
    border: 1px solid #cbd5e1;
    /* Slightly rounds the corners. */
    border-radius: 6px;
    /* Sets a white editing surface. */
    background: #ffffff;
    /* Sets typed text color. */
    color: #1f2937;
    /* Uses a normal UI font. */
    font: 15px Arial, sans-serif;
    /* Allows the custom focus appearance below. */
    outline: none;
    /* Horizontal resize would usually break layout, so only vertical resizing is enabled. */
    resize: vertical;
}
.textarea:focus {
    /* Blue border shows focus. */
    border-color: #2563eb;
    /* Soft focus ring improves visibility. */
    box-shadow: 0 0 0 3px #dbeafe;
}
`
        },
        {
            type: "sample",
            title: "Checkbox",
            description: "A boolean choice that can be checked or unchecked.",
            html: `<label class="check"><input type="checkbox"> Remember me</label>`,
            css: `
.check {
    /* Aligns the box and its text on one horizontal line. */
    display: inline-flex;
    /* Adds a small gap between checkbox and label text. */
    gap: 8px;
    /* Vertically centers both pieces. */
    align-items: center;
    /* Sets the text color. */
    color: #374151;
    /* Sets the font. */
    font: 15px Arial, sans-serif;
}
.check input {
    /* Gives the browser checkbox a consistent size. */
    width: 16px;
    height: 16px;
    /* Keeps the pointer behavior obvious. */
    cursor: pointer;
}
`
        },
        {
            type: "sample",
            title: "Radio Group",
            description: "Mutually exclusive choices where one option is selected.",
            html: `<div class="radios">
<label><input type="radio" name="demo" checked> Option A</label>
<label><input type="radio" name="demo"> Option B</label>
</div>`,
            css: `
.radios {
    /* Stacks radio choices vertically. */
    display: flex;
    /* Arranges each label in a vertical column. */
    flex-direction: column;
    /* Creates space between the choices. */
    gap: 8px;
    /* Sets the text style. */
    color: #374151;
    font: 15px Arial, sans-serif;
}
.radios label {
    /* Keeps radio and text aligned. */
    display: flex;
    gap: 8px;
    align-items: center;
}
`
        },
        {
            type: "sample",
            title: "Range Slider",
            description: "A numeric control where the user selects a value along a range.",
            html: `<input class="range" type="range" min="0" max="100" value="50">`,
            css: `
.range {
    /* Lets the slider stretch across the available width. */
    width: 100%;
    /* Uses the pointer cursor to suggest dragging. */
    cursor: pointer;
}
`
        },
        {
            type: "sample",
            title: "Select",
            description: "A dropdown control for choosing one option from a list.",
            html: `<select class="select">
<option>Choose an option</option>
<option>Option A</option>
<option>Option B</option>
</select>`,
            css: `
.select {
    /* Uses the available width. */
    width: 100%;
    /* Adds space around the selected text. */
    padding: 10px 12px;
    /* Defines the control border. */
    border: 1px solid #cbd5e1;
    /* Rounds the corners. */
    border-radius: 6px;
    /* Keeps the control bright and readable. */
    background: #ffffff;
    /* Sets selected text color. */
    color: #1f2937;
    /* Uses the page font. */
    font: 15px Arial, sans-serif;
    /* Removes the browser outline so focus can be styled consistently. */
    outline: none;
}
.select:focus {
    /* Blue border indicates focus. */
    border-color: #2563eb;
    /* Adds a soft focus ring. */
    box-shadow: 0 0 0 3px #dbeafe;
}
`
        }
    ]
});
