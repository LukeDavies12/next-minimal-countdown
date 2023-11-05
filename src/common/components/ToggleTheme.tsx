import { Fragment, useEffect, useState } from 'react';
import { checkTheme, setLightTheme, setDarkTheme, removeTheme  } from "@utils/theme";
import { Menu, Transition } from '@headlessui/react';
import { MoonIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

export const ToggleTheme = () => {
    const [theme, setThemeState] = useState("");

    useEffect(() => {
        setThemeState(checkTheme());
    }, []);

    const setLight = () => {
        setLightTheme();
        setThemeState("light");
    };

    const setDark = () => {
        setDarkTheme();
        setThemeState("dark");
    };

    const menuItems = [
        {
            name: "Light",
            icon: <SunIcon className="h-5 w-5" />,
            onClick: setLight,
        },
        {
            name: "Dark",
            icon: <MoonIcon className="h-5 w-5" />,
            onClick: setDark,
        },
        {
            name: "System",
            icon: <ComputerDesktopIcon className="h-5 w-5" />,
            onClick: removeTheme,
        },
    ];

    return (
        <div className='flex justify-end py-4'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="text-neutral-700 hover:text-neutral-900 rounded-md p-4 transition-all dark:text-neutral-300 dark:hover:text-white">
                        {theme === "light" ? (
                            <SunIcon className="h-5 w-5" />
                        ) : (
                            <MoonIcon className="h-5 w-5" />
                        )}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-neutral-100 divide-y divide-neutral-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-800">
                        <div className="px-1 py-1 ">
                            {menuItems.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                        <button
                                            onClick={item.onClick}
                                            className={`${
                                                active ? 'bg-white text-neutral-900 dark:bg-neutral-700 dark:text-white' : 'text-gray-700 dark:text-neutral-300'
                                            } group flex rounded-sm items-center w-full px-2 py-2 text-sm`}
                                        >
                                            {item.icon}
                                            <span className="ml-3">{item.name}</span>
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};
