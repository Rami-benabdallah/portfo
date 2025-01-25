import React, { useState } from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const AfterToggleSwitch = ({ checkedMode, uncheckedMode, cirlceMode, ...props }) => {
    const [checked, setChecked] = useState(false);

    const uncheckedBgColor = modeToUncheckedBgColor[uncheckedMode] || 'bg-hate';
    const checkedBgColor = modeToCheckedBgColor[checkedMode] || 'after:bg-love';
    const circleBgColor = modeToCircleBgColor[cirlceMode] || 'after:bg-light';
    return (
        <>
            <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
                <button className="w-full bg-dark duration-200 rounded-full">
                    <label
                        className={`active:translate-x-0 active:translate-y-0 flex items-center rounded-full border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full cursor-pointer`}
                    >
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div
                            className={`
                                w-11 h-6 
                                 ${uncheckedBgColor}
                                rounded-full 
                                border-2 border-black 
                                ${checkedBgColor}
                                peer-checked:shadow-[2px_2px_0px_rgba(0,0,0,1)] 
                                after:content-[''] 
                                after:absolute 
                                after:top-[4px] 
                                after:left-[4px] 
                                after:w-4 
                                after:h-4 
                                ${circleBgColor}
                                after:rounded-full 
                                after:border-2 
                                after:border-black 
                                after:transition-all 
                                peer-checked:after:translate-x-5 `}
                        ></div>
                    </label>
                </button>
            </div>
        </>

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

AfterToggleSwitch.propTypes = {
    checkedMode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    uncheckedMode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    cirlceMode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action', 'light']).isRequired,
    size: PropTypes.string,

    /** Optional click handler */
    onClick: PropTypes.func,
};

AfterToggleSwitch.defaultProps = {
    checkedMode: 'love',
    uncheckedMode: 'hate',
    cirlceMode: 'light',
    size: 'h-6 w-6',

    onClick: undefined,
};
