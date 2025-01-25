import React from 'react';
import Image from 'next/image';

import PropTypes from 'prop-types';

import { AfterCard } from '../afterCard/AfterCard';
import profile2 from '../../assets/images/profile2.jpeg'

export const AfterAvatar = ({ avatar, alt, ...props }) => {
    return (
        <AfterCard padding="p-0" rounded="rounded-full">
            <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                    src={avatar}
                    alt={alt}
                    className="rounded-full scale-125 object-cover"
                />
            </div>
        </AfterCard>
    );
};

AfterAvatar.propTypes = {
    avatar: PropTypes.string,
    alt: PropTypes.string,
};

AfterAvatar.defaultProps = {
    avatar: profile2,
    alt: 'Avatar',
};
