import { useState, useEffect } from 'preact/hooks';

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    const menu = document.getElementById('navbar-sticky');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
  };

  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:justify-center">
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button id="menu-toggle" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="true" onClick={toggleMenu}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" class={`block py-2 px-3 rounded md:p-0 ${currentPath === '/' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current={currentPath === '/' ? 'page' : undefined}>Home</a>
            </li>
            <li>
              <a href="/validator" class={`block py-2 px-3 rounded md:p-0 ${currentPath === '/validator' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current={currentPath === '/validator' ? 'page' : undefined}>Validador</a>
            </li>
            <li>
              <a href="#" class={`block py-2 px-3 rounded md:p-0 ${currentPath === '#' ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current={currentPath === '#' ? 'page' : undefined}>Sincronizacion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
