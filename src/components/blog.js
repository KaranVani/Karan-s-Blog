import React, { useState, useEffect } from 'react';

const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch blog post data from your server API
        fetch('/api/blog-posts')
            .then(response => response.json())
            .then(data => setBlogPosts(data))
            .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    return (
        <div>
            <h2>Latest Blog Posts</h2>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.id}>
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
