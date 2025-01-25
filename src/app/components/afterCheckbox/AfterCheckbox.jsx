import React, { useState } from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const AfterCheckbox = ({ mode, size, name, label, type, register, validationRules, ...props }) => {
    const [checked, setChecked] = useState(false);

    const checkedBgColor = modeToCheckedBgColor[mode] || 'bg-gray-900';
    return (
        <div className="flex gap-4" >
            <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
                <button className="w-full bg-dark duration-200">
                    <label
                        className={`active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full`}
                    >
                        <input
                            type={type}
                            className={`peer ${size} cursor-pointer transition-all appearance-none shadow hover:shadow-md border-none border-slate-900 bg-light ${checkedBgColor} checked:border-${mode} `}
                            checked={checked}
                            onClick={() => setChecked(!checked)}
                            {...register(name, validationRules)} 
                        />
                        <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class={size} viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                </button>
            </div>
            {label &&
                <div>
                    {label}
                </div>
            }
        </div>
    );
};

const modeToCheckedBgColor = {
    love: 'checked:bg-love',
    hate: 'checked:bg-hate',
    menu: 'checked:bg-menu',
    search: 'checked:bg-search',
    back: 'checked:bg-back',
    action: 'checked:bg-action',
};

AfterCheckbox.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    size: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    register: PropTypes.any,
    validationRules: PropTypes.object,

    /** Optional click handler */
    onClick: PropTypes.func,
};

AfterCheckbox.defaultProps = {
    mode: 'hate',
    size: 'h-6 w-6',
    label: null,
    type: 'checkbox',
    name: 'test',
    register: () => console.log('test'),
    validationRules: null,


    onClick: undefined,
};
