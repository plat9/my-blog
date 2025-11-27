---
title: "Example Post"
description: "This is an example post to show you the format"
date: "2024-12-20"
image: /example-banner.webp
categories:
  - example
  - tutorial
published: true
---

## Introduction

This is an example post. You can write your content here using Markdown.

## How to Create a New Post

1. Create a new `.md` file in the `src/posts/` folder
2. Use the filename as the slug (e.g., `my-new-post.md` will be accessible at `/blog/my-new-post`)
3. Include the frontmatter with all required fields
4. Set `published: true` to make it visible

## Markdown Features

You can use all standard Markdown features:

- **Bold text**
- *Italic text*
- Lists
- Code blocks
- And more!

## Code Example

```javascript
console.log("Hello, world!");
```

## Important Notes

- The `date` field must be in `YYYY-MM-DD` format
- The `image` path should start with `/` (e.g., `/my-image.webp`)
- Categories should be an array
- Set `published: false` to hide a post without deleting it

