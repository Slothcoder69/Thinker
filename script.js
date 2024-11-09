// Select the root element to change CSS variables dynamically
const root = document.documentElement;

// Function to change the theme colors
function changeTheme(primaryColor, secondaryColor, textColor) {
    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--secondary-color', secondaryColor);
    root.style.setProperty('--text-color', textColor);
}

// Function to change the background image
function changeBackgroundImage(imageUrl) {
    root.style.setProperty('--background-image', `url('${imageUrl}')`);
}

// Function to update content in customizable divs
function updateContent(sectionId, newContent) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.innerHTML = newContent;
    }
}

// Event listener to apply changes on page load or on interaction
document.addEventListener("DOMContentLoaded", () => {
    // Set initial theme and background image
    changeTheme("#1b262c", "#3282b8", "#f0f5f9");
    changeBackgroundImage("background.jpg");

    // Update content of specific sections as a demo
    updateContent("section-1", "<h2>Explore Our Services</h2><p>Find a variety of innovative solutions customized for your needs.</p>");
    updateContent("section-2", "<h2>About Thinker</h2><p>Thinker is a parent hub connecting creative websites.</p>");
    updateContent("section-3", "<h2>Contact Us</h2><p>Reach out for partnerships or inquiries!</p>");
});

// Optional: Button triggers to dynamically switch themes
document.getElementById("themeButton").addEventListener("click", () => {
    changeTheme("#222831", "#00adb5", "#eeeeee");
    changeBackgroundImage("new-background.jpg");
    updateContent("section-1", "<h2>New Theme Applied</h2><p>Enjoy a fresh look on the Thinker website!</p>");
});
