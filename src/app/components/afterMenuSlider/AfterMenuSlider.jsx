import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { AfterCard } from '../afterCard/AfterCard';

export const AfterMenuSlider = ({ mode, menuItems, onClick, ...props }) => {
    const [selectedItem, setSelectedItem] = useState('home');

    const handleClick = (value) => {
        setSelectedItem(value);
    };
    return (
        <AfterCard showPadding={false} rounded="rounded-2xl" mode="back">
            <div className='w-full h-full flex'>
                <ul className='flex gap-2 p-1'>
                    {menuItems.map((item) => (
                        <li key={item.value} className={`${selectedItem === item.value ? 'bg-verified border ' : ''} rounded-lg border-2 border-dark px-3 py-1.5 text-sm transition-all duration-100 ease-in-out transform cursor-pointer`}
                            onClick={() => handleClick(item.value)}
                        >
                            { item.label }
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

AfterMenuSlider.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action', 'light']).isRequired,
    menuItems: PropTypes.array,

    /** Optional click handler */
    onClick: PropTypes.func,
};

AfterMenuSlider.defaultProps = {
    mode: 'love',
    menuItems: null,

    onClick: undefined,
};
