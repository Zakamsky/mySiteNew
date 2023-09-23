---
title: "Welcome and What is This Site About?"
date: 2023-09-24
tags: ['JAMstack', 'Design Thinking']
---

Hey there, welcome to my first blog post where I'll dive into the site itself and its mission.

## About the Site's Mission:
This website serves as my virtual space on the internet where I want to share my ideas, observations, and experiences. I aim to write about technologies, both new and well-forgotten classics, teamwork, mentoring, the art of learning and teaching, the world of web development, its history, and its future. But for now, I want to create a technically convenient platform for writing and reading articles. How do I envision it, and why is it essential?

## Technical Details:
In my vision, articles should be easily accessible for writing, reading, and editing. Discussions in the comments can complement the main content excellently. It would be great to categorize articles and add tagging for easy sorting. At the moment, it might look like a standard blog, say, on WordPress. But is it? No. And here's why: all standard CMSs use an outdated dynamic rendering model. But why make users wait for the server to build a site page when the site itself changes very rarely, and there's hardly any truly dynamic content on it? In my view, the best solution for a blog is a static site with server rendering from an admin panel in the spirit of JAMstack. Git-based admin panels allow storing all data in version control, avoiding endless chaos in the database. So far, all advantages. But what about comments and feedback? What does JAMstack say about this? What is it, anyway?

## About JAMstack:
JavaScript, APIs, and Markup—these are the core components of JAMstack

### Here's what ChatGPT has to say about it:
JAMstack (JavaScript, APIs, and Markup) is a modern approach to web development that differs from traditional stacks (such as LAMP or MEAN) in the following ways:

#### Advantages of JAMstack:

- Performance: JAMstack enables the creation of fast and responsive websites by pre-rendering pages during the build stage, allowing content to be hosted directly on CDN services. This reduces server load, ensures high availability, reduces loading times, and improves the user experience.
- Security: Separating the client-side from the server-side reduces risks associated with server-side vulnerabilities. JAMstack sites can use static hosting and control data access through APIs.
- Development Simplicity: Development with JAMstack is often simpler and more convenient due to the use of modern build tools, static site generation, and frontend frameworks.

#### Disadvantages of JAMstack:

- Limited Dynamism: JAMstack may not be suitable for all types of web applications, especially those requiring high interactivity and frequent client-side data updates.
- Dependency on Third-Party Services: Using third-party APIs for dynamic data means that a site depends on their availability and reliability.

In summary, JAMstack is well-suited for static and infrequently changing websites, providing high performance and security, but it may require additional effort when creating complex, dynamic applications.

So, what about feedback and comments? Since I use Netlify, feedback is straightforward with its own API for forms on static sites, complete with built-in anti-spam filters. However, this might not be enough for comments. That's where "utterances" comes in—a project that helps use GitHub issues as comments for static sites. It requires users to have a GitHub account to leave a comment, which I view as an advantage. My blog is strictly technical, and GitHub is the developer's cornerstone. Simultaneously, requiring registration, in my opinion, is an excellent way to protect against spam. So, by strictly following the JAMstack spirit, I use third-party APIs for the dynamic part of the site.

## Conclusion
If you're interested in the project's life, you can follow its development on my GitHub (soon, there should be a link to the project repository), participate in discussions, or even suggest your pull requests!

### fun fact
Markdown was previously intended to be widely used to replace markup in JAMstack, and it represented the letter "M" in JAM, but later the concept of JAMstack expanded to provide users with ready-made markup rather than, for example, JSX, and Markdown ceased to be an important part of the stack. The current site, of course, uses Markdown for articles and other formatted text.
