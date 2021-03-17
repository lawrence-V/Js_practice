const video = {
    title: 'a',
    tags:  ['a', 'b','c'],
    showTags() {
        this.tags.forEach(function(tags){
            console.log(this.title, tags);
        },this )
    }
}

video.showTags()


