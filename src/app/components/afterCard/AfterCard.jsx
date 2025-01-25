import React from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const AfterCard = ({ mode, children, padding, rounded, ...props }) => {
    const bgColor = modeToBgColor[mode] || 'bg-gray-900';
    return (
        <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
            <div class={`w-full bg-dark duration-200 ${rounded}`}>
                <div
                    class={`${bgColor} ${padding} ${rounded} flex items-center border-slate-900 border-2 duration-200 -translate-x-1 -translate-y-1 w-full`}
                >
                    {children}
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
    footer: 'bg-footer',
};

const modeToIconFillColor = {
    love: 'text-fill-love',
    hate: 'text-fill-hate',
    menu: 'text-fill-menu',
    search: 'text-fill-search',
    back: 'text-fill-back',
};

AfterCard.propTypes = {
    mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action', 'mainMatchCard', 'footer']).isRequired,
    children: PropTypes.node,
    padding: PropTypes.string,
    rounded: PropTypes.string,
};

AfterCard.defaultProps = {
    mode: 'love',
    children: null,
    padding: 'p-4',
    rounded: null,
};
