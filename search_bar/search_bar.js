function pageRedirect() {
    var tag = document.querySelector('#tag').value

    // if the tag has space, remove it.
    if(!tag.match(/^(\s)+$/)) {
        var noSpacedTag = tag.replace(/ /g,'')
    }

    tagLink = `https://www.instagram.com/explore/tags/${noSpacedTag}/`
    window.location.replace(tagLink)
}