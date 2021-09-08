function pageRedirect() {
    var tag = document.querySelector('#tag').value

    // if the tag has space, remove it.
    if(!tag.match(/^(\s)+$/)) {
        var noSpacedTag = tag.replace(/ /g,'')
        tagLink = `https://www.instagram.com/explore/tags/${noSpacedTag}/`
        window.location.replace(tagLink)
    }

    // if the tag has the 'hashtag' simbol, remove it.
    if(tag.match('#')) {
        var hashtagTag = tag.replace('#','')
        tagLink = `https://www.instagram.com/explore/tags/${hashtagTag}/`
        window.location.replace(tagLink)
    }

    // if the tag has the 'hashtag' simbol AND space, remove both.
    if(tag.match('#') && !tag.match(/^(\s)+$/)) {
        var formatedTag = tag.replace('#','').replace(/ /g,'')
        tagLink = `https://www.instagram.com/explore/tags/${formatedTag}/`
        window.location.replace(tagLink)
    }

}