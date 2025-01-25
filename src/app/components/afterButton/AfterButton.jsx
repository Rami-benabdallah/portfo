import React from 'react';

import PropTypes from 'prop-types';

/** Primary UI component for user interaction */
export const AfterButton = ({ mode, label, icon: Icon, hasLeftIcon, hasRightIcon, size, extraColor, onClick, ...props }) => {
  const bgColor = modeToBgColor[mode] || 'bg-gray-900';
  const fillColor = modeToIconFillColor[mode] || extraColor;

  return (
    <div style={{ animation: 'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both' }}>
      <div class=" w-full bg-dark duration-200">
        <button
          onClick={onClick}
          className={`${bgColor} active:translate-x-0 active:translate-y-0 flex items-center border-slate-900 border-2 duration-200 px-4 py-2 -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5 w-full`}
        >
          <div class="flex items-center justify-center gap-4">
            {hasLeftIcon && Icon && (
              <Icon className={`${fillColor} ${size}`} />
            )}
            <span>
              {label}
            </span>
            {hasRightIcon && Icon && (
              <Icon className={`${fillColor} ${size}`} />
            )}
          </div>
        </button>
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
};

const modeToIconFillColor = {
  love: 'text-fill-love',
  hate: 'text-fill-hate',
  menu: 'text-fill-menu',
  search: 'text-fill-search',
  back: 'text-fill-back',
};

AfterButton.propTypes = {
  mode: PropTypes.oneOf(['love', 'hate', 'menu', 'search', 'back', 'action']).isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  hasLeftIcon: PropTypes.bool,
  hasRightIcon: PropTypes.bool,
  size: PropTypes.string,
  extraColor: PropTypes.string,

  /** Optional click handler */
  onClick: PropTypes.func,
};

AfterButton.defaultProps = {
  mode: 'love',
  hasLeftIcon: false,
  hasRightIcon: false,
  size: 'w-6 h-6',
  extraColor: 'text-red-500',

  onClick: undefined,
};
