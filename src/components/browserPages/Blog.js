import React, { useEffect, useState } from "react";
import './Blog.css';

import axios from 'axios';


// TODO design nice display card and put in a flex display
// TODO ask if we only want the top 3 or latest 3
function BlogPost(props) {
    return (<div className="BlogPost">
        {props.title + " " + props.pubDate}
    </div>);
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

    return (
        <div className="Blog">
            <div className='title'>
                BLOG
            </div>
            <div></div>{items.slice(0,3).map((post, index) => (
                    <BlogPost key={index} {...post} {...profile} {...index}></BlogPost>
            ))}
        </div>
    );
}


export default Blog;