import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg'>
            Nikhil'
        </span>
            Blog
        </Link>
        <form>
            <TextInput
             type='text'
             placeholder='Search'
             rightIcon={AiOutlineSearch}
             className='hidden lg:inline'/>
               
             
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </Button>
            <Link to="/sign-in">
            <Button gradientDuoTone='purpleToBlue' pill>
                Sign In
            </Button>
            <Navbar.Toggle></Navbar.Toggle>
            </Link>
            </div>
            
            <Navbar.Collapse>
                <Navbar.Link active={path==="/"} as={'div'}>
                    <Link to='/Home' className='m-4'>
                    Home
                    </Link>
                    <Link to='/about' className='m-4'  active={path==="/about"} as={'div'}>
                    about
                    </Link>
                    <Link to='/projects' className='m-4' active={path==="/projects"} as={'div'}>
                    projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        
    </Navbar>
  )
}
