import axios from "axios";

async function  getData(id){
    const {data : user}  = await axios('https://jsonplaceholder.typicode.com/users/' + id);
    const {data : post}  = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    var data = [];
    data.push(user);
    data.push(post);
    return data;
}

export default getData;