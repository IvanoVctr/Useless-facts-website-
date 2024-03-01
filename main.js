function toggleBlock(element) {
    const factContent = element.nextElementSibling;
    if (factContent.style.display === "none" || factContent.style.display === "") {
        factContent.style.display = "block";
    } else {
        factContent.style.display = "none";
    }
}