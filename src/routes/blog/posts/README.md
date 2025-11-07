# Blog Posts

This directory contains all blog posts for the site. Each post is a markdown file with frontmatter metadata.

## How to Add a New Post

1. Create a new `.md` file in this directory
2. The filename should match the slug you want to use in the URL (e.g., `my-post.md` for `/blog/my-post`)
3. Add frontmatter at the top of the file:

```yaml
---
title: "Your Post Title"
date: "2024-01-20"
description: "A brief description of your post for the listing page"
slug: "your-post-slug"
---
```

4. Write your post content below the frontmatter using standard markdown syntax

## Example Post Structure

```markdown
---
title: "My Awesome Post"
date: "2024-01-20"
description: "This is an example blog post"
slug: "my-awesome-post"
---

# My Awesome Post

Your content here...

## Subheading

More content with **bold** and *italic* text.

- List item 1
- List item 2

\`\`\`typescript
// Code blocks are supported!
const greeting = "Hello, World!";
\`\`\`
```

## Important Notes

- The `slug` in frontmatter must match the filename (without the `.md` extension)
- Posts are automatically sorted by date (newest first) on the blog listing page
- All standard markdown features are supported including:
  - Headers
  - Lists
  - Links
  - Code blocks
  - Blockquotes
  - Bold/italic text
  - And more!

That's it! Your new post will automatically appear on the blog page after you save the file and rebuild the site.
