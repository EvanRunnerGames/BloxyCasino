function copyElementClipboard(element) {
    const textToCopy = element.innerHTML.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
    }).catch(err => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy text.");
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const tooltips = document.querySelectorAll(".tooltip");

    tooltips.forEach((tooltip) => {
        const tooltipBox = document.createElement("div");
        tooltipBox.className = "tooltip-box";
        tooltipBox.textContent = tooltip.getAttribute("data-tooltip");
        document.body.appendChild(tooltipBox);

        tooltip.addEventListener("mouseenter", (event) => {
            tooltipBox.style.display = "block";
        });

        tooltip.addEventListener("mousemove", (event) => {
            tooltipBox.style.left = `${event.pageX}px`;
            tooltipBox.style.top = `${event.pageY}px`;
        });

        tooltip.addEventListener("mouseleave", () => {
            tooltipBox.style.display = "none";
        });
    });
});
