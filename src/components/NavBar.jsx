import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const NavBar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
            activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
            activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
            activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
        }
    };

    useEffect(() => {
        initActiveBox();
        window.addEventListener('resize', initActiveBox);
        return () => window.removeEventListener('resize', initActiveBox);
    }, []);

    // Navbar container styles
    const navContainerClasses = clsx(
        'absolute top-full mt-2 right-0 min-w-40 p-2',
        'bg-zinc-50/10 rounded-2xl ring-inset ring-1',
        'ring-zinc-50/5 isolate transition-[opacity,transform]', // Removed filter transition
        'md:static md:flex md:items-center md:mt-0',
        'md:visible md:scale-100 md:opacity-100',
        'backdrop-blur-2xl md:backdrop-blur-none', // Blur only on mobile
        {
            'opacity-100 scale-100 visible': navOpen,
            'opacity-0 scale-90 invisible': !navOpen
        }
    );

   // Nav link styles 
const navLinkClasses = (isActive) => clsx(
    
    'grid items-center h-9 px-4 text-sm font-medium',
    'tracking-wide transition-colors',
    {
      'text-zinc-900': isActive,
      'text-zinc-50/50 hover:text-zinc-50 duration-500': !isActive
    }
  );

    const activeBoxClasses = clsx(
        'absolute',
        'bg-zinc-50 rounded-lg -z-10',
        'transition-[top,left] duration-500'
    );

    const activeCurrentLink = (event) => {

        lastActiveLink.current?.classList.remove('active');
        event.currentTarget.classList.add('active');
        lastActiveLink.current = event.currentTarget;

        if (activeBox.current) {
            activeBox.current.style.top = `${event.currentTarget.offsetTop}px`;
            activeBox.current.style.left = `${event.currentTarget.offsetLeft}px`;
            activeBox.current.style.width = `${event.currentTarget.offsetWidth}px`;
            activeBox.current.style.height = `${event.currentTarget.offsetHeight}px`;
        }
    };

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];


    const items = navItems.map(({ label, link, className, ref }, key) => (
        
        <a
            href={link}
            key={key}
            ref={ref}
            className={clsx(
                navLinkClasses(navOpen),
               
            ) + (navOpen ? ' active' : '')} 
            onClick={activeCurrentLink}
        >
            {label}
        </a>
    ));

    return (
        <nav className={navContainerClasses}>
            {items}
            <div className={activeBoxClasses} ref={activeBox}></div>
        </nav>
    );
};

NavBar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default NavBar;