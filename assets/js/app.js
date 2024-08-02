const listItem = document.querySelectorAll(".tab-item");

[...listItem].forEach((item) => item.addEventListener("click", handleClickTab));

function handleClickTab(e) {
    [...listItem].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
}
