let cover = document.querySelector("#root > div > main > div > div.ColumnPageHeader-Wrapper").nextSibling;
if (cover.nextSibling.tagName === 'ARTICLE') {
    cover.remove();
}