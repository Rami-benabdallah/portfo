import React from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const AfterInput = ({ mode, rounded, name, label, placeholder, type, onChange, register, validationRules }) => {
    const bgColor = modeToBgColor[mode] || 'bg-gray-900';

    const handleInputChange = (e) => {
        onChange(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className='flex flex-col gap-4'>
            <label>
                {label}
            </label>
            <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
                <div class={`w-full bg-dark duration-200 ${rounded ? 'rounded-full' : 'rounded-2xl'}`}>
                    <div
                        class={`${bgColor} ${rounded ? 'rounded-full p-4' : 'rounded-2xl px-4 py-2'} flex items-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 w-full`}
                    >
                        <input
                            className={`${bgColor} border-none outline-none w-full`}
                            id={name}
                            type={type}
                            placeholder={placeholder}
                            onChange={handleInputChange}
                            {...register(name, validationRules)} 
                        />
                    </div>
                </div>
            </div>
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
    mainMatchCard: 'bg-main-match-card-bg',
};


AfterInput.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    rounded: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    register: PropTypes.any,
    validationRules: PropTypes.object,
    onChange: PropTypes.func,

    onClick: PropTypes.func,
};

AfterInput.defaultProps = {
    mode: 'back',
    rounded: false,
    name: 'test',
    label: 'this is a label',
    placeholder: 'placeholder',
    type: 'text',
    register: () => console.log('test'),
    validationRules: null,
    onChange: undefined,

    onClick: undefined,
};
