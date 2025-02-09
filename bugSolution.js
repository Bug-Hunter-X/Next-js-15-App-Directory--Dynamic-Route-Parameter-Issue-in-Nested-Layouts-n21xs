The solution involves using optional chaining and the nullish coalescing operator to handle potential undefined parameters:

```javascript
// pages/blog/[slug]/page.js

export default function PostPage({ params }) {
  return (
    <h1>Post: {params?.slug ?? 'N/A'}</h1>
  );
}

// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/blog/layout.js

export default function BlogLayout({ children, params }) {
  console.log('BlogLayout params:', params);
  return (
    <div>
      <h2>Blog Layout</h2>
      {children}
      <p>Blog layout data (using params?.id ?? 'no ID'): {params?.id ?? 'no ID'}</p>
    </div>
  );
}
```