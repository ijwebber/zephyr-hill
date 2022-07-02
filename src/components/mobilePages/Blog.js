import React, {useState, useEffect} from "react";
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
    const [error, setError] = useState(null);

    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zephyrhillmusic";
    useEffect(() => {
        axios.get(mediumURL).then((data) => {
            const avatar = data.data.feed.image;
            const profileLink = data.data.feed.link;
            const res = data.data.items;

            const title = data.data.feed.title;
            
            setProfile(profile => {return {...profile, ptitle: title, profileurl: profileLink, avtar: avatar,}});
            setItems(res)
      }).catch((e) => {
        setError(e.toJSON())
        console.log(error);
      });
    }, [])

    return (
        <div className="mobileBlog">
            <div className="title">BLOG</div>
            <div className="blog-post">
                <BlogPost {...items[0]} {...profile}></BlogPost>
            </div>
            <div className="button">
                <a href="https://medium.com/@zephyrhillmusic" target="_blank" rel="noreferrer noopener">MORE POSTS</a>
            </div>
        </div>
    );
}

export default Blog;