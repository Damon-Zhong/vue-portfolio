import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Message from "@/views/Message"
import Project from "@/views/Project"
import ArticleDetail from "@/views/Blog/ArticleDetail"

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/articles',
    name: 'Blog',
    component: Blog
  },
  {
    path: "/articles/category/:categoryId", 
    name: 'CategoryBlog',
    component: Blog
  },
  {
    path: "/article/:articleId", 
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Project
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  }
]