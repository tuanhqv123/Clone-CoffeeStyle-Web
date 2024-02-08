import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

export default function Header() {
  const [isVisible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
      if (!isMobile) {
        setVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  const visible = () => {
    setVisible(!isVisible)
  }
  return (
    <header className='sticky top-0 z-50 bg-white pb-2 pt-4'>
      <div className='container relative'>
        <nav className='flex flex-row items-center justify-between tracking-wider lg:justify-normal'>
          <Link
            spy={true}
            smooth={true}
            offset={-150}
            duration={1200}
            to='home'
            className='basis-2/6 cursor-pointer pl-6 text-center text-2xl font-bold xs:pl-4 lg:pl-4'
          >
            CoffeeStyle.
          </Link>
          <ul
            className={`w-full basis-3/6 gap-2 bg-white text-sm font-medium uppercase text-gray-500 lg:flex lg:gap-8 ${isVisible && isMobile ? 'mobile-menu absolute top-10 flex flex-col text-center' : 'hidden'}`}
          >
            <Link
              spy={true}
              smooth={true}
              offset={-150}
              duration={1200}
              to='home'
              className='cursor-pointer py-4 hover:text-gray-900 active:text-gray-900 lg:mb-0 lg:py-0 '
            >
              Home
            </Link>
            <Link
              to='feature'
              spy={true}
              smooth={true}
              offset={-200}
              duration={1200}
              className='cursor-pointer pb-4 hover:text-gray-900 active:text-gray-900 lg:mb-0 lg:pb-0'
            >
              feature
            </Link>
            <Link
              to='productlist'
              spy={true}
              smooth={true}
              offset={-200}
              duration={1200}
              className='cursor-pointer pb-4 hover:text-gray-900 active:text-gray-900 lg:mb-0 lg:p-0'
            >
              product
            </Link>
            <Link
              to='promotion'
              spy={true}
              smooth={true}
              offset={-200}
              duration={1200}
              className='cursor-pointer pb-4 hover:text-gray-900 active:text-gray-900 lg:mb-0 lg:p-0'
            >
              promotion
            </Link>
            <Link
              to='blog'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1200}
              className='cursor-pointer pb-4 hover:text-gray-900 active:text-gray-900 lg:mb-0 lg:p-0'
            >
              blog
            </Link>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-200}
              duration={1200}
              className='cursor-pointer pb-4 hover:text-gray-900 active:text-gray-900 lg:mb-0 lg:p-0'
            >
              about
            </Link>
          </ul>
          <ul className='flex basis-1/6 cursor-pointer items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-500 hover:text-gray-900'>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
            </li>
            <span>Cart</span>
            <span className='h-5 w-5 rounded-full bg-gray-500 text-center text-white'>6</span>
            <button className='flex justify-end px-2 text-center text-gray-500 lg:hidden' onClick={visible}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  )
}
