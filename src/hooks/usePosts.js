import React, { useEffect, useState } from 'react';

const usePosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            "mode": "cors",
            "credentials": "omit"
        }).then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    return posts;
}

export default usePosts;