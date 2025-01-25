import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import { AfterButton } from '../afterButton/AfterButton';
import { AfterCard } from '../afterCard/AfterCard';
import { AfterOptionsList } from './afterOptionsList/AfterOptionsList';
import arrowDownIcon from '@/app/assets/icons/arrowDown';
import arrowUpIcon from '@/app/assets/icons/arrowUp';

/** Primary UI component for user interaction */
export const AfterDropDown = ({ mode, options, ...props }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const hoverBgColor = modeToHoverBgColor[mode] || 'bg-gray-900';


    const handleClick = () => {
        setOpen(!open);
        console.log(open, "eweee");
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative inline-block w-38' ref={dropdownRef}>
            <AfterButton
                mode={mode}
                label="Options"
                icon={open ? arrowUpIcon : arrowDownIcon}
                hasRightIcon={true}
                onClick={handleClick}
            />
            {open && (
                <div className="absolute left-0 top-full mt-2 w-full z-10">
                    <AfterCard showPadding={false}>
                        <AfterOptionsList options={options} hoverMode={hoverBgColor} />
                    </AfterCard>
                </div>
            )}
        </div>
    );
};

const modeToHoverBgColor = {
    love: 'hover:bg-love',
    hate: 'hover:bg-hate',
    menu: 'hover:bg-menu',
    search: 'hover:bg-search',
    back: 'hover:bg-back',
    action: 'hover:bg-action',
};

const modeToBgColor = {
    love: 'bg-love',
    hate: 'bg-hate',
    menu: 'bg-menu',
    search: 'bg-search',
    back: 'bg-back',
    action: 'bg-action',
};

const modeToIconFillColor = {
    love: 'text-fill-love',
    hate: 'text-fill-hate',
    menu: 'text-fill-menu',
    search: 'text-fill-search',
    back: 'text-fill-back',
};

AfterDropDown.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    options: PropTypes.array,
};

AfterDropDown.defaultProps = {
    mode: 'menu',
    options: null,
};
