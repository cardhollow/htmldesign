MAIN.push({
    title: "Images",
    description: "Common image styles and patterns for websites, interfaces, galleries, and content.",
    items: [
        {
            type: "sample",
            title: "Basic Image",
            description: "A simple responsive image that keeps its natural proportions.",
            html: `
<img class="image" src="https://picsum.photos/500/300" alt="Example image">
`,
            css: `
.image {
    /* Makes the image responsive to its container. */
    width: 100%;

    /* Keeps the image's original width-to-height ratio. */
    height: auto;

    /* Removes the small inline gap normally created by images. */
    display: block;
}
`
        },

        {
            type: "sample",
            title: "Rounded Image",
            description: "A normal image with softly rounded corners.",
            html: `
<img class="image" src="https://picsum.photos/500/300" alt="Example image">
`,
            css: `
.image {
    /* Makes the image fill the available horizontal space. */
    width: 100%;

    /* Allows the browser to preserve the original image ratio. */
    height: auto;

    /* Prevents inline-image spacing and makes sizing predictable. */
    display: block;

    /* Rounds all four corners by 10 pixels. */
    border-radius: 10px;
}
`
        },

        {
            type: "sample",
            title: "Circular Image",
            description: "A circular image commonly used for avatars and profile pictures.",
            html: `
<img class="image" src="https://picsum.photos/300/300" alt="Profile image">
`,
            css: `
.image {
    /* Sets the image width to 120 pixels. */
    width: 120px;

    /* Sets the image height to the same 120 pixels. */
    height: 120px;

    /* Makes the image circular. */
    border-radius: 50%;

    /* Keeps the image from stretching when width and height are equal. */
    object-fit: cover;

    /* Removes inline-image spacing. */
    display: block;
}
`
        },

        {
            type: "sample",
            title: "Avatar",
            description: "A compact circular image designed for user profiles.",
            html: `
<img class="image" src="https://picsum.photos/200/200" alt="User avatar">
`,
            css: `
.image {
    /* Defines the avatar's width. */
    width: 48px;

    /* Defines the avatar's height. */
    height: 48px;

    /* Converts the square image into a circle. */
    border-radius: 50%;

    /* Crops the image while keeping its proportions. */
    object-fit: cover;

    /* Prevents the image from behaving like inline text. */
    display: block;
}
`
        },

        {
            type: "sample",
            title: "Fixed Thumbnail",
            description: "A fixed-size image useful for lists, previews, and compact cards.",
            html: `
<img class="image" src="https://picsum.photos/600/400" alt="Thumbnail">
`,
            css: `
.image {
    /* Sets a fixed thumbnail width. */
    width: 180px;

    /* Sets a fixed thumbnail height. */
    height: 120px;

    /* Prevents the image from becoming distorted. */
    object-fit: cover;

    /* Rounds the thumbnail corners. */
    border-radius: 6px;

    /* Removes inline-image spacing. */
    display: block;
}
`
        },

        {
            type: "sample",
            title: "Cover Image",
            description: "An image that completely fills a defined area while cropping excess content.",
            html: `
<div class="image-box">
    <img class="image" src="https://picsum.photos/800/500" alt="Cover image">
</div>
`,
            css: `
.image-box {
    /* Defines the visible area of the image. */
    width: 100%;

    /* Sets the height of the cover area. */
    height: 220px;

    /* Hides the portions of the image that extend outside the box. */
    overflow: hidden;

    /* Rounds the entire image container. */
    border-radius: 10px;
}

.image {
    /* Makes the image fill the container horizontally. */
    width: 100%;

    /* Makes the image fill the container vertically. */
    height: 100%;

    /* Crops the image while keeping its original proportions. */
    object-fit: cover;

    /* Removes inline-image spacing. */
    display: block;
}
`
        },

        {
            type: "sample",
            title: "Contain Image",
            description: "Shows the complete image inside a fixed area without cropping it.",
            html: `
<div class="image-box">
    <img class="image" src="https://picsum.photos/600/400" alt="Contained image">
</div>
`,
            css: `
.image-box {
    /* Defines the available image area. */
    width: 100%;

    /* Sets a fixed preview height. */
    height: 220px;

    /* Provides a visible area behind the image. */
    background: #f1f3f5;

    /* Rounds the preview container. */
    border-radius: 10px;

    /* Prevents anything from extending outside the container. */
    overflow: hidden;
}

.image {
    /* Uses the entire available width. */
    width: 100%;

    /* Uses the entire available height. */
    height: 100%;

    /* Shows the entire image instead of cropping it. */
    object-fit: contain;

    /* Removes inline-image spacing. */
    display: block;
}
`
        },

        {
            type: "sample",
            title: "Image Border",
            description: "An image surrounded by a simple border.",
            html: `
<img class="image" src="https://picsum.photos/500/300" alt="Bordered image">
`,
            css: `
.image {
    /* Makes the image responsive. */
    width: 100%;

    /* Preserves the original image proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Adds a 1px solid border around the image. */
    border: 1px solid #d1d5db;

    /* Slightly rounds the corners. */
    border-radius: 8px;
}
`
        },

        {
            type: "sample",
            title: "Image Shadow",
            description: "Adds depth around an image using a soft shadow.",
            html: `
<img class="image" src="https://picsum.photos/500/300" alt="Image with shadow">
`,
            css: `
.image {
    /* Makes the image responsive. */
    width: 100%;

    /* Preserves the image's proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Rounds the image corners. */
    border-radius: 8px;

    /* Creates a shadow below and around the image. */
    box-shadow:
        0 4px 14px rgba(0, 0, 0, 0.18);
}
`
        },

        {
            type: "sample",
            title: "Clickable Image",
            description: "An image wrapped in a link so the entire image can be clicked.",
            html: `
<a class="image-link" href="#">
    <img class="image" src="https://picsum.photos/500/300" alt="Clickable image">
</a>
`,
            css: `
.image-link {
    /* Makes the link behave like a normal block container. */
    display: block;

    /* Prevents the default link underline. */
    text-decoration: none;
}

.image {
    /* Makes the image responsive. */
    width: 100%;

    /* Preserves the original proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Rounds the image corners. */
    border-radius: 8px;
}
`
        },

        {
            type: "sample",
            title: "Image Hover Zoom",
            description: "Slightly enlarges an image when the pointer moves over it.",
            html: `
<div class="image-box">
    <img class="image" src="https://picsum.photos/500/300" alt="Hover image">
</div>
`,
            css: `
.image-box {
    /* Hides the enlarged portion of the image. */
    overflow: hidden;

    /* Rounds the image container. */
    border-radius: 10px;
}

.image {
    /* Makes the image fill the available width. */
    width: 100%;

    /* Keeps the original image proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Controls how quickly the zoom animation happens. */
    transition: transform 0.25s ease;
}

.image:hover {
    /* Enlarges the image to 105% of its original size. */
    transform: scale(1.05);
}
`
        },

        {
            type: "sample",
            title: "Grayscale Image",
            description: "Converts an image to grayscale using a CSS filter.",
            html: `
<img class="image" src="https://picsum.photos/500/300" alt="Grayscale image">
`,
            css: `
.image {
    /* Makes the image responsive. */
    width: 100%;

    /* Preserves the image proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Converts the image completely to grayscale. */
    filter: grayscale(100%);
}
`
        },

        {
            type: "sample",
            title: "Dimmed Image",
            description: "Reduces image brightness for a darker visual appearance.",
            html: `
<img class="image" src="https://picsum.photos/500/300" alt="Dimmed image">
`,
            css: `
.image {
    /* Makes the image responsive. */
    width: 100%;

    /* Preserves the original proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Reduces brightness to 70% of the original. */
    filter: brightness(70%);
}
`
        },

        {
            type: "sample",
            title: "Image with Overlay",
            description: "Places text over an image using a positioned overlay.",
            html: `
<div class="image-box">
    <img class="image" src="https://picsum.photos/600/350" alt="Overlay image">
    <div class="overlay">
        Image Title
    </div>
</div>
`,
            css: `
.image-box {
    /* Creates a positioning reference for the overlay. */
    position: relative;

    /* Makes the container responsive. */
    width: 100%;

    /* Prevents content from extending outside the rounded corners. */
    overflow: hidden;

    /* Rounds the entire image container. */
    border-radius: 10px;
}

.image {
    /* Makes the image fill the container width. */
    width: 100%;

    /* Removes inline-image spacing. */
    display: block;
}

.overlay {
    /* Places the overlay relative to the image container. */
    position: absolute;

    /* Positions the overlay at the bottom. */
    bottom: 0;

    /* Stretches the overlay across the image. */
    left: 0;
    right: 0;

    /* Adds space around the overlay text. */
    padding: 14px;

    /* Creates a translucent dark background. */
    background: rgba(0, 0, 0, 0.6);

    /* Makes the text white for contrast. */
    color: #ffffff;

    /* Sets the overlay text size. */
    font-size: 16px;

    /* Makes the overlay text slightly bold. */
    font-weight: 600;
}
`
        },

        {
            type: "sample",
            title: "Image Caption",
            description: "Combines an image with a caption underneath.",
            html: `
<figure class="figure">
    <img class="image" src="https://picsum.photos/500/300" alt="Example figure">
    <figcaption>
        Example image caption
    </figcaption>
</figure>
`,
            css: `
.figure {
    /* Removes the browser's default figure margin. */
    margin: 0;
}

.image {
    /* Makes the image responsive. */
    width: 100%;

    /* Keeps the original proportions. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;

    /* Rounds the image corners. */
    border-radius: 8px;
}

.figure figcaption {
    /* Adds space between the image and caption. */
    margin-top: 8px;

    /* Uses a muted color for supporting text. */
    color: #6b7280;

    /* Sets the caption size. */
    font-size: 13px;

    /* Controls the spacing between caption lines. */
    line-height: 1.5;
}
`
        },

        {
            type: "sample",
            title: "Image Loading Placeholder",
            description: "A simple placeholder area that can be used while an image is loading.",
            html: `
<div class="placeholder">
    Loading image...
</div>
`,
            css: `
.placeholder {
    /* Makes the placeholder responsive. */
    width: 100%;

    /* Gives the placeholder a fixed preview height. */
    height: 180px;

    /* Centers the placeholder text horizontally. */
    display: flex;
    justify-content: center;

    /* Centers the placeholder text vertically. */
    align-items: center;

    /* Uses a light gray background for the loading area. */
    background: #e5e7eb;

    /* Sets the placeholder text color. */
    color: #6b7280;

    /* Rounds the placeholder corners. */
    border-radius: 8px;

    /* Sets the placeholder text size. */
    font-size: 14px;
}
`
        },

        {
            type: "sample",
            title: "Responsive Image",
            description: "An image that automatically scales down on smaller screens.",
            html: `
<img class="image" src="https://picsum.photos/1000/600" alt="Responsive image">
`,
            css: `
.image {
    /* Prevents the image from becoming wider than its container. */
    max-width: 100%;

    /* Allows the image to scale proportionally. */
    height: auto;

    /* Removes inline-image spacing. */
    display: block;
}
`
        }
    ]
});