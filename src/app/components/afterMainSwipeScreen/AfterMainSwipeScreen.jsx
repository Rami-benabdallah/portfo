import React from 'react';

import PropTypes from 'prop-types';

import { AfterSwipeCard } from '../afterMainMatchCard/AfterSwipeCard';
import { AfterIconButton } from '../afterIconButton/AfterIconButton';

import HateIcon from '@/app/assets/icons/hate';
import Thunder from '@/app/assets/icons/thunder';
import Star from '@/app/assets/icons/star';
import Message from '@/app/assets/icons/message';
import Gift from '@/app/assets/icons/gift';

export const AfterMainSwipeScreen = ({ onThunder }) => {
    return (
        <div className='relative grid h-[1200px] w-[800px] place-items-center bg-chill overflow-hidden'>
            <AfterSwipeCard />
            <div className='mt-[48rem] flex gap-6'>
                <AfterIconButton mode="menu" icon={Thunder} size="h-12 w-12" onClick={onThunder} />
                <AfterIconButton mode="back" icon={Star} size="h-12 w-12" onClick={onThunder} />
                <AfterIconButton mode="back" icon={Message} size="h-12 w-12" onClick={onThunder} />
                <AfterIconButton mode="back" icon={Gift} size="h-12 w-12" onClick={onThunder} />
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


AfterMainSwipeScreen.propTypes = {
    onThunder: PropTypes.func,
};

AfterMainSwipeScreen.defaultProps = {
    onThunder: () => console.log('thunder'),
};
