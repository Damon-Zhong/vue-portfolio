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
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: '/articles',
    name: 'Blog',
    component: Blog,
    meta: {
      title: "Articles"
    }
  },
  {
    path: "/articles/category/:categoryId",
    name: 'CategoryBlog',
    component: Blog, 
    meta: {
      title: "Articles"
    }
  },
  {
    path: "/article/:articleId",
    name: 'ArticleDetail',
    component: ArticleDetail,
    meta: {
      title: "Article detail"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: "About me"
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Project,
    meta: {
      title: "Project Gallery"
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      title: "Contact me"
    }
  }
]