---
title: 'Blog'
layout: 'layouts/feed.html'
pagination:
    data: collections.blog
    size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
    key: Blog
    order: 2
---

The latest articles, demonstrating my design thinking, strategy and expertise.
