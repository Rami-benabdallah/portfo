import React from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const AfterIconButton = ({ mode, icon: Icon, size, extraColor, rounded, onClick, ...props }) => {
    const bgColor = modeToBgColor[mode] || 'bg-gray-900';
    const fillColor = modeToIconFillColor[mode] || extraColor;
    return (
        <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
            <button
                class={`w-full bg-dark duration-200 ${rounded ? 'rounded-full' : 'rounded-2xl'}`}
                onClick={onClick}
            >
                <div
                    class={`${bgColor} ${rounded ? 'rounded-full p-4' : 'rounded-2xl px-4 py-2'} active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full`}
                >
                    <div class="flex items-center justify-center">
                        {Icon && (
                            <Icon className={`${fillColor} ${size}`} />
                        )}
                    </div>
                </div>
            </button>
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

const modeToIconFillColor = {
    love: 'text-fill-love',
    hate: 'text-fill-hate',
    menu: 'text-fill-menu',
    search: 'text-fill-search',
    back: 'text-fill-back',
};

AfterIconButton.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
    icon: PropTypes.string,
    size: PropTypes.string,
    extraColor: PropTypes.string,
    rounded: PropTypes.bool,

    /** Optional click handler */
    onClick: PropTypes.func,
};

AfterIconButton.defaultProps = {
    mode: 'hate',
    size: 'w-6 h-6',
    extraColor: 'text-red-500',
    rounded: false,

    onClick: undefined,
};
