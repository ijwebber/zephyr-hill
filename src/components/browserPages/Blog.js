import React, { useEffect, useState } from "react";
import './Blog.css';

import axios from 'axios';


function BlogPost(props) {
    return (
        <div className="BlogPost">
            <div className="blog-title">{props.title}</div>
            <div className="content" dangerouslySetInnerHTML={{'__html': props.content}}></div>
        </div>
    );
}

function Blog() {
    const [profile, setProfile] = useState({
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
      });
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zephyrhillmusic";
    useEffect(() => {
        axios.get(mediumURL).then((data) => {
            const avatar = data.data.feed.image;
            const profileLink = data.data.feed.link;
            const res = data.data.items;
            const posts = res.filter(item => item.categories.length > 0);

            const title = data.data.feed.title;
            
            setProfile(profile => {return {...profile, ptitle: title, profileurl: profileLink, avtar: avatar,}});
            setItems(posts)
            setIsLoading(false)
      }).catch((e) => {
        setError(e.toJSON())
        console.log(error);
      });
    }, [])

    console.log(items[1])
    console.log(profile)

    return (
        <div className="Blog">
            <div className='title'>
                LATEST BLOG POST
            </div>
            <div>
                <BlogPost {...items[0]} {...profile}></BlogPost>
            </div>
        </div>
    );
}


export default Blog;