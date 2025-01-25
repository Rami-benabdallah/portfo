import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AfterOptionsList = ({ options, mode, onClick, hoverMode, ...props }) => {
    return (
        <div className="flex flex-col w-full max-w-xs border border-gray-300 overflow-hidden ">
            {options.map((option, index) => (
                <div
                    key={index}
                    className={`bg-light ${hoverMode} border-b border-gray-200 w-full px-4 py-2 last:border-none cursor-pointer`}
                    onClick={onClick}
                >
                    <span>{option.label}</span>
                </div>
            ))}
        </div>
    );
};

const modeToBgColor = {
    love: 'bg-love',
    hate: 'bg-hate',
    menu: 'bg-menu',
    search: 'bg-search',
    back: 'bg-back',
    action: 'bg-action',
};

AfterOptionsList.propTypes = {
    hoverMode: PropTypes.any,
    options: PropTypes.array,
    onClick: PropTypes.func,
};

AfterOptionsList.defaultProps = {
    hoverMode: 'hover:bg-love',
    options: null,
    onClick: null,
};
