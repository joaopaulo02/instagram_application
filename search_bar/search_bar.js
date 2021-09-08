function pageRedirect() {
    var tag = document.querySelector('#tag').value 
    tagLink = `https://www.instagram.com/explore/tags/${tag}/`
    window.location.replace(tagLink)
}