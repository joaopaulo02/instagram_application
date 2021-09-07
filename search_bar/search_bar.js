function storeTag() {
    var tag = document.querySelector('#tag').value 
    tag_link = `https://www.instagram.com/explore/tags/${tag}/`
    document.write(tag_link)
}