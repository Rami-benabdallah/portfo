import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { AfterCard } from '../afterCard/AfterCard';

export const AfterFooter = ({ mode, navigationMenuItems, onClick, ...props }) => {
    const [selectedItem, setSelectedItem] = useState('home');

    const handleClick = (value) => {
        setSelectedItem(value);
    };
    return (
        <AfterCard showPadding={true} rounded="rounded-2xl" mode="footer">
            <div className='w-full h-full flex'>
                <ul className='flex gap-4 p-4'>
                    {navigationMenuItems.map((item) => (
                        <li key={item.value} className={`${selectedItem === item.value ? 'bg-dark' : ''} flex items-center justify-center w-24 rounded-2xl cursor-pointer py-3  transition-all duration-100 ease-in-out transform`}
                            onClick={() => handleClick(item.value)}
                        >
                            <item.icon className={`h-8 w-8 ${selectedItem === item.value ? 'text-footer' : ''}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </AfterCard>
    );
};


const modeToCircleBgColor = {
    love: 'after:bg-love',
    hate: 'after:bg-hate',
    menu: 'after:bg-menu',
    search: 'after:bg-search',
    back: 'after:bg-back',
    action: 'after:bg-action',
    light: 'after:bg-light',
};

const modeToCheckedBgColor = {
    love: 'peer-checked:bg-love',
    hate: 'peer-checked:bg-hate',
    menu: 'peer-checked:bg-menu',
    search: 'peer-checked:bg-search',
    back: 'peer-checked:bg-back',
    action: 'peer-checked:bg-action',
};

const modeToUncheckedBgColor = {
    love: 'bg-love',
    hate: 'bg-hate',
    menu: 'bg-menu',
    search: 'bg-search',
    back: 'bg-back',
    action: 'bg-action',
    light: 'bg-light',
};

AfterFooter.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action', 'light']).isRequired,
    navigationMenuItems: PropTypes.array,

    /** Optional click handler */
    onClick: PropTypes.func,
};

AfterFooter.defaultProps = {
    mode: 'love',
    navigationMenuItems: null,

    onClick: undefined,
};
