const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

input.addEventListener("input", function() {
preview.innerHTML = marked.parse(input.value);
});
