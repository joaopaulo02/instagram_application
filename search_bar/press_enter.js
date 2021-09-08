document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        const tag = document.querySelector("#searchBarButton")
        tag.click()
    }
})