---
title: "Getting started with your new blog"
date: "2024-01-20"
description: "A quick guide on how to add new posts to this blog using markdown."
slug: "getting-started"
---

# Getting started with your new blog

This blog is built with SvelteKit and uses markdown files for blog posts. It's designed to be simple and easy to use.

## Adding a new blog post

To add a new post, simply create a new `.md` file in the `src/routes/blog/posts/` directory.

### Post structure

Each post should have frontmatter at the top with the following fields:

```yaml
---
title: "Your Post Title"
date: "2024-01-20"
description: "A brief description of your post"
slug: "url-friendly-slug"
---
```

### Markdown support

You can use standard markdown syntax:

- **Bold text** and *italic text*
- Lists (like this one!)
- Code blocks
- Links
- And much more

### Code examples

You can include code blocks with syntax highlighting:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

## That's it!

Just save your file and the blog will automatically include it in the listing. Happy writing!
