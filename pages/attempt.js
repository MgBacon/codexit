const fs=require('fs');
const path=require('path')
const dirname=path.join(__dirname,"posts");
const md= require('markdown-it')()
var posts=[] //array to save posts
const getPosts=function(){  
    fs.readdirSync(dirname).forEach(function(file){ //loop through posts directory files
        fs.readFile(path.join(dirname,file), 'utf8', function(data) {  //access file content
        posts.push(<div>{md.render(data).toString}</div>)
        });
    });
}
getPosts();
console.log(posts)
const index = () => {
    return (
        <div>
            {posts}
        </div>
    )
}
export default index;