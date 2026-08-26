MAIN.push({
    title: "Media",
    description: "Common image, avatar, media, and media-container patterns.",
    items: [
        {
            type: "sample",
            title: "Responsive Image",
            description: "An image that stays inside its container without overflowing.",
            html: `<img class="image" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='260'%3E%3Crect width='100%25' height='100%25' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%232563eb' font-size='28'%3EImage%3C/text%3E%3C/svg%3E" alt="Example">`,
            css: `
.image {
    /* Makes the image responsive to its container. */
    width: 100%;
    /* Prevents the image from becoming taller than its natural ratio. */
    height: auto;
    /* Removes the small inline-image baseline gap. */
    display: block;
    /* Slightly rounds the image corners. */
    border-radius: 8px;
}
`
        },
        {
            type: "sample",
            title: "Avatar",
            description: "A circular visual used to represent a person or account.",
            html: `<div class="avatar">JC</div>`,
            css: `
.avatar {
    /* Sets a fixed avatar size. */
    width: 48px;
    height: 48px;
    /* Turns the square into a circle. */
    border-radius: 50%;
    /* Centers the initials horizontally and vertically. */
    display: grid;
    place-items: center;
    /* Uses a light blue background. */
    background: #dbeafe;
    /* Uses dark blue text for contrast. */
    color: #1d4ed8;
    font: 700 14px Arial, sans-serif;
}
`
        },
        {
            type: "sample",
            title: "Image with Caption",
            description: "Combines an image and a small explanatory caption.",
            html: `<figure class="figure"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='220'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2364758b' font-size='24'%3EExample Figure%3C/text%3E%3C/svg%3E" alt="Figure"><figcaption>Example figure caption.</figcaption></figure>`,
            css: `
.figure {
    /* Removes the browser's default figure margin. */
    margin: 0;
}
.figure img {
    /* Keeps the image responsive. */
    width: 100%;
    display: block;
    border-radius: 8px;
}
.figure figcaption {
    /* Separates the caption slightly from the image. */
    margin-top: 7px;
    /* Uses muted text because captions are supporting information. */
    color: #64748b;
    font: 13px Arial, sans-serif;
}
`
        }
    ]
});
