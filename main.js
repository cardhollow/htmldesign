const MAIN = [];
let selectedBatch = null;
let loading = false;
let selectorPage = 0;

const SELECTOR_SIZE = 8;

let fullModal = document.getElementById("full-view-modal");
let fullFrame = null;
let fullContent = fullModal
    ? fullModal.querySelector(".full-view-content")
    : null;
let currentFullItem = null;

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

function getPageCount() {
    return Math.max(
        1,
        Math.ceil(MAIN.length / SELECTOR_SIZE)
    );
}

function renderSelector() {
    const main = document.getElementById("main");

    let selector =
        document.getElementById("batch-selector");

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

    const start =
        selectorPage * SELECTOR_SIZE;

    const end =
        Math.min(
            start + SELECTOR_SIZE,
            MAIN.length
        );

    for (let index = start; index < end; index++) {
        const batch = MAIN[index];

        const option =
            document.createElement("button");

        option.className = "guide-option";

        if (selectedBatch === index) {
            option.classList.add("selected");
        }

        const strong =
            document.createElement("strong");

        strong.textContent =
            batch.title || "Untitled";

        option.appendChild(strong);

        if (batch.description) {
            const small =
                document.createElement("small");

            small.textContent =
                batch.description;

            option.appendChild(small);
        }

        option.onclick = () => {
            selectBatch(index);
        };

        table.appendChild(option);
    }

    while (
        table.children.length < SELECTOR_SIZE
    ) {
        const empty =
            document.createElement("div");

        empty.className = "guide-empty";

        table.appendChild(empty);
    }

    const navigation =
        document.createElement("div");

    navigation.className =
        "selector-navigation";

    const previous =
        document.createElement("button");

    previous.className =
        "selector-nav-button";

    previous.textContent =
        "Previous";

    previous.disabled =
        selectorPage <= 0;

    previous.onclick = () => {
        if (selectorPage <= 0) return;

        selectorPage--;

        renderSelector();
    };

    const page =
        document.createElement("span");

    page.className =
        "selector-page";

    page.textContent =
        `${selectorPage + 1} / ${getPageCount()}`;

    const next =
        document.createElement("button");

    next.className =
        "selector-nav-button";

    next.textContent =
        "Next";

    next.disabled =
        selectorPage >=
        getPageCount() - 1;

    next.onclick = () => {
        if (
            selectorPage >=
            getPageCount() - 1
        ) {
            return;
        }

        selectorPage++;

        renderSelector();
    };

    navigation.appendChild(previous);
    navigation.appendChild(page);
    navigation.appendChild(next);

    selector.appendChild(title);
    selector.appendChild(table);
    selector.appendChild(navigation);
}

function selectBatch(index) {
    selectedBatch = index;

    selectorPage =
        Math.floor(
            index / SELECTOR_SIZE
        );

    renderSelector();
    renderBatch(MAIN[index]);
}

function renderBatch(batch) {
    let container =
        document.getElementById(
            "batch-render"
        );

    if (!container) {
        container =
            document.createElement("div");

        container.id =
            "batch-render";

        document
            .getElementById("main")
            .appendChild(container);
    }

    container.innerHTML = "";

    const title =
        document.createElement("div");

    title.className =
        "batch-title";

    const heading =
        document.createElement("h2");

    heading.textContent =
        batch.title || "Untitled";

    title.appendChild(heading);

    if (batch.description) {
        const description =
            document.createElement("p");

        description.textContent =
            batch.description;

        title.appendChild(description);
    }

    container.appendChild(title);

    const samples =
        document.createElement("div");

    samples.className = "samples";

    for (const item of batch.items || []) {
        samples.appendChild(
            createSample(item)
        );
    }

    container.appendChild(samples);
}

function createSample(item) {
    const sample =
        document.createElement("article");

    sample.className = "sample";

    const header =
        document.createElement("div");

    header.className =
        "sample-header";

    const title =
        document.createElement("strong");

    title.textContent =
        item.title || "Sample";

    header.appendChild(title);

    if (item.description) {
        const description =
            document.createElement("p");

        description.textContent =
            item.description;

        header.appendChild(description);
    }

    const previewLabel =
        document.createElement("div");

    previewLabel.className =
        "section-label";

    previewLabel.textContent =
        "PREVIEW";

    const preview =
        document.createElement("div");

    preview.className =
        "preview";

    const iframe =
        document.createElement("iframe");

    iframe.className =
        "rendered-frame";

    iframe.setAttribute(
        "sandbox",
        "allow-same-origin"
    );

    preview.appendChild(iframe);

    const controls =
        document.createElement("div");

    controls.className =
        "sample-controls";

    const editButton =
        document.createElement("button");

    editButton.textContent =
        "Edit";

    const resetButton =
        document.createElement("button");

    resetButton.textContent =
        "Reset";

    resetButton.className =
        "reset";

    const fullButton =
        document.createElement("button");

    fullButton.textContent =
        "Full View";

    fullButton.className =
        "full-view";

    controls.appendChild(editButton);
    controls.appendChild(resetButton);
    controls.appendChild(fullButton);

    const source =
        document.createElement("div");

    source.className =
        "source";

    const htmlBox =
        createCodeBox(
            "HTML",
            item.html || ""
        );

    const cssBox =
        createCodeBox(
            "CSS",
            item.css || ""
        );

    source.appendChild(htmlBox.box);
    source.appendChild(cssBox.box);

    const originalHTML =
        item.html || "";

    const originalCSS =
        item.css || "";

    updatePreview(
        iframe,
        item
    );

    editButton.onclick = () => {
        if (htmlBox.code.readOnly) {
            htmlBox.code.readOnly = false;
            cssBox.code.readOnly = false;

            editButton.textContent =
                "Apply";

            source.classList.add(
                "editing"
            );

            htmlBox.code.focus();

            return;
        }

        item.html =
            htmlBox.code.value;

        item.css =
            cssBox.code.value;

        updatePreview(
            iframe,
            item
        );

        htmlBox.code.readOnly = true;
        cssBox.code.readOnly = true;

        editButton.textContent =
            "Edit";

        source.classList.remove(
            "editing"
        );
    };

    resetButton.onclick = () => {
        item.html =
            originalHTML;

        item.css =
            originalCSS;

        htmlBox.code.value =
            originalHTML;

        cssBox.code.value =
            originalCSS;

        updatePreview(
            iframe,
            item
        );

        htmlBox.code.readOnly = true;
        cssBox.code.readOnly = true;

        editButton.textContent =
            "Edit";

        source.classList.remove(
            "editing"
        );
    };

    fullButton.onclick = () => {
        openFullView(item);
    };

    sample.appendChild(header);
    sample.appendChild(previewLabel);
    sample.appendChild(preview);
    sample.appendChild(controls);
    sample.appendChild(source);

    return sample;
}

function updatePreview(iframe, item) {
    iframe.srcdoc =
        createDocument(
            item.html || "",
            item.css || ""
        );
}

function createCodeBox(title, value) {
    const box =
        document.createElement("div");

    box.className =
        "code-box";

    const label =
        document.createElement("div");

    label.className =
        "code-label";

    label.textContent =
        title;

    const code =
        document.createElement("textarea");

    code.className =
        "code";

    code.value =
        value;

    code.readOnly =
        true;

    code.spellcheck =
        false;

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

function setupFullView() {
    if (!fullModal) {
        fullModal =
            document.getElementById(
                "full-view-modal"
            );
    }

    if (!fullModal) return false;

    if (!fullContent) {
        fullContent =
            fullModal.querySelector(
                ".full-view-content"
            );
    }

    const closeButton =
        fullModal.querySelector(
            ".full-view-close"
        );

    if (closeButton && !closeButton.dataset.ready) {
        closeButton.dataset.ready = "true";

        closeButton.onclick =
            closeFullView;
    }

    const tabs =
        fullModal.querySelectorAll(
            "[data-view]"
        );

    tabs.forEach(tab => {
        if (tab.dataset.ready) {
            return;
        }

        tab.dataset.ready = "true";

        tab.onclick = () => {
            tabs.forEach(other => {
                other.classList.remove(
                    "active"
                );
            });

            tab.classList.add(
                "active"
            );

            showFullView(
                currentFullItem,
                tab.dataset.view
            );
        };
    });

    if (!fullModal.dataset.ready) {
        fullModal.dataset.ready = "true";

        fullModal.addEventListener(
            "click",
            event => {
                if (
                    event.target ===
                    fullModal
                ) {
                    closeFullView();
                }
            }
        );
    }

    return true;
}

function openFullView(item) {
    if (!setupFullView()) {
        return;
    }

    currentFullItem =
        item;

    fullModal.classList.add(
        "open"
    );

    document.body.classList.add(
        "modal-open"
    );

    const tabs =
        fullModal.querySelectorAll(
            "[data-view]"
        );

    tabs.forEach(tab => {
        tab.classList.remove(
            "active"
        );
    });

    const renderTab =
        fullModal.querySelector(
            '[data-view="render"]'
        );

    if (renderTab) {
        renderTab.classList.add(
            "active"
        );
    }

    showFullView(
        item,
        "render"
    );
}

function showFullView(item, view) {
    if (!item || !fullContent) {
        return;
    }

    fullContent.innerHTML = "";

    if (view === "render") {
        const render =
            document.createElement("div");

        render.className =
            "full-render";

        fullFrame =
            document.createElement("iframe");

        fullFrame.className =
            "full-render-frame";

        fullFrame.setAttribute(
            "sandbox",
            "allow-same-origin"
        );

        fullFrame.srcdoc =
            createDocument(
                item.html || "",
                item.css || ""
            );

        render.appendChild(
            fullFrame
        );

        fullContent.appendChild(
            render
        );

        return;
    }

    fullFrame = null;

    const code =
        document.createElement("pre");

    code.className =
        "full-code";

    code.textContent =
        view === "html"
            ? item.html || ""
            : item.css || "";

    fullContent.appendChild(
        code
    );
}

function closeFullView() {
    if (!fullModal) {
        return;
    }

    fullModal.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "modal-open"
    );

    currentFullItem =
        null;

    if (fullFrame) {
        fullFrame.srcdoc = "";
        fullFrame = null;
    }

    if (fullContent) {
        fullContent.innerHTML = "";
    }
}

document.addEventListener(
    "keydown",
    event => {
        if (event.key === "Escape") {
            closeFullView();
        }
    }
);

setupFullView();
loadDataFiles();
