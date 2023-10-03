import Home from "@/views/Home"
import About from "@/views/About"
import Blog from "@/views/Blog"
import Message from "@/views/Message"
import Project from "@/views/Project"

export default [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
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