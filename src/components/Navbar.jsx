import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logolarge from '../assets/logolarge.png';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

library.add(faBars);
library.add(faX);

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const location = useLocation();
  const [currentNavigation, setCurrentNavigation] = useState(
    navigation.map(item => ({
      ...item,
      current: item.href === location.pathname,
    }))
  );

  useEffect(() => {
    // Update current navigation whenever location changes
    setCurrentNavigation(
      navigation.map(item => ({
        ...item,
        current: item.href === location.pathname,
      }))
    );
  }, [location.pathname]);

  const handleItemClick = (index) => () => {
    const updatedNavigation = currentNavigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setCurrentNavigation(updatedNavigation);
  };

  const handleLogoClick = () => {
    setCurrentNavigation(navigation.map(item => ({
      ...item,
      current: item.href === '/',
    })));
  };

  return (
    <Disclosure as="nav" className="navbar-gradient font-custom">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-[#fffbc6] hover:bg-[#e5cafe] hover:text-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon className="block h-6 w-6" icon="fa-solid fa-x" color="#cea2fd" />
                  ) : (
                    <FontAwesomeIcon className="block h-6 w-6" aria-hidden="true" icon="fa-solid fa-bars" color="#cea2fd" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">    
                  <Link to="/" onClick={handleLogoClick}>
                    <img src={logo} alt="logo" className="h-12 w-auto block sm:hidden" />
                  </Link>
                  <Link to="/" onClick={handleLogoClick}>
                    <img src={logolarge} alt="full logo" className="h-12 w-auto hidden sm:block" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {currentNavigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={handleItemClick(index)}
                        className={classNames(
                          item.current ? 'bg-[#cea2fd] text-white' : 'text-[#fffbc6] hover:bg-[#e5cafe] hover:text-white',
                          'rounded-md px-3 py-2 text-xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {currentNavigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleItemClick(index)}
                  className={classNames(
                    item.current ? 'bg-[#cea2fd] text-white' : 'text-[#fffbc6] hover:bg-[#e5cafe] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
