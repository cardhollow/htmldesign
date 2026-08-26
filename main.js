const MAIN = [];
let selectedBatch = null;
let loading = false;

async function loadDataFiles() {
    if (loading) return;

    loading = true;

    for (let i = 1; i <= 100; i++) {
        const loaded = await loadDataFile(i);

        if (!loaded) break;

        renderSelector();
    }

    loading = false;

    if (MAIN.length && selectedBatch === null) {
        selectBatch(0);
    }
}

function loadDataFile(number) {
    return new Promise(resolve => {
        const script = document.createElement("script");

        script.src = `js/data${number}.js`;

        script.onload = () => {
            script.remove();
            resolve(true);
        };

        script.onerror = () => {
            script.remove();
            resolve(false);
        };

        document.head.appendChild(script);
    });
}

function renderSelector() {
    const main = document.getElementById("main");

    let selector = document.getElementById("batch-selector");

    if (!selector) {
        selector = document.createElement("div");
        selector.id = "batch-selector";
        selector.className = "selector";

        main.appendChild(selector);
    }

    selector.innerHTML = "";

    const title = document.createElement("div");
    title.className = "selector-title";
    title.textContent = "DESIGN GUIDE";

    const table = document.createElement("div");
    table.className = "guide-table";

    MAIN.forEach((batch, index) => {
        const option = document.createElement("button");

        option.className = "guide-option";

        if (selectedBatch === index) {
            option.classList.add("selected");
        }

        const strong = document.createElement("strong");
        strong.textContent = batch.title || "Untitled";

        option.appendChild(strong);

        if (batch.description) {
            const small = document.createElement("small");
            small.textContent = batch.description;
            option.appendChild(small);
        }

        option.onclick = () => {
            selectBatch(index);
        };

        table.appendChild(option);
    });

    selector.appendChild(title);
    selector.appendChild(table);
}

function selectBatch(index) {
    selectedBatch = index;

    renderSelector();

    renderBatch(MAIN[index]);
}

function renderBatch(batch) {
    let container = document.getElementById("batch-render");

    if (!container) {
        container = document.createElement("div");
        container.id = "batch-render";

        document
            .getElementById("main")
            .appendChild(container);
    }

    container.innerHTML = "";

    const title = document.createElement("div");
    title.className = "batch-title";

    const heading = document.createElement("h2");
    heading.textContent = batch.title || "Untitled";

    title.appendChild(heading);

    if (batch.description) {
        const description = document.createElement("p");
        description.textContent = batch.description;
        title.appendChild(description);
    }

    container.appendChild(title);

    const samples = document.createElement("div");
    samples.className = "samples";

    const items = batch.items || [];

    items.forEach(item => {
        samples.appendChild(createSample(item));
    });

    container.appendChild(samples);
}

function createSample(item) {
    const sample = document.createElement("article");
    sample.className = "sample";

    const header = document.createElement("div");
    header.className = "sample-header";

    const title = document.createElement("strong");
    title.textContent = item.title || "Sample";

    header.appendChild(title);

    if (item.description) {
        const description = document.createElement("p");
        description.textContent = item.description;
        header.appendChild(description);
    }

    const previewLabel = document.createElement("div");
    previewLabel.className = "section-label";
    previewLabel.textContent = "PREVIEW";

    const preview = document.createElement("div");
    preview.className = "preview";

    const iframe = document.createElement("iframe");

    iframe.className = "rendered-frame";
    iframe.setAttribute("sandbox", "allow-same-origin");

    preview.appendChild(iframe);

    const controls = document.createElement("div");
    controls.className = "sample-controls";

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.className = "reset";

    controls.appendChild(editButton);
    controls.appendChild(resetButton);

    const source = document.createElement("div");
    source.className = "source";

    const htmlBox = createCodeBox(
        "HTML",
        item.html || ""
    );

    const cssBox = createCodeBox(
        "CSS",
        item.css || ""
    );

    source.appendChild(htmlBox.box);
    source.appendChild(cssBox.box);

    const originalHTML = item.html || "";
    const originalCSS = item.css || "";

    iframe.srcdoc = createDocument(
        originalHTML,
        originalCSS
    );

    editButton.onclick = () => {
        if (htmlBox.code.readOnly) {
            htmlBox.code.readOnly = false;
            cssBox.code.readOnly = false;

            editButton.textContent = "Apply";

            source.classList.add("editing");

            htmlBox.code.focus();

            return;
        }

        item.html = htmlBox.code.value;
        item.css = cssBox.code.value;

        iframe.srcdoc = createDocument(
            item.html,
            item.css
        );

        htmlBox.code.readOnly = true;
        cssBox.code.readOnly = true;

        editButton.textContent = "Edit";

        source.classList.remove("editing");
    };

    resetButton.onclick = () => {
        item.html = originalHTML;
        item.css = originalCSS;

        htmlBox.code.value = originalHTML;
        cssBox.code.value = originalCSS;

        iframe.srcdoc = createDocument(
            originalHTML,
            originalCSS
        );

        htmlBox.code.readOnly = true;
        cssBox.code.readOnly = true;

        editButton.textContent = "Edit";

        source.classList.remove("editing");
    };

    sample.appendChild(header);
    sample.appendChild(previewLabel);
    sample.appendChild(preview);
    sample.appendChild(controls);
    sample.appendChild(source);

    return sample;
}

function createCodeBox(title, value) {
    const box = document.createElement("div");
    box.className = "code-box";

    const label = document.createElement("div");
    label.className = "code-label";
    label.textContent = title;

    const code = document.createElement("textarea");

    code.className = "code";
    code.value = value;
    code.readOnly = true;
    code.spellcheck = false;

    box.appendChild(label);
    box.appendChild(code);

    return {
        box,
        code
    };
}

function createDocument(html, css) {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
html,
body {
    margin: 0;
    padding: 0;
    background: transparent;
}
${css}
</style>
</head>
<body>
${html}
</body>
</html>`;
}

loadDataFiles();
