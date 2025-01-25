import { fn } from '@storybook/test';

import { AfterMenuSlider } from './AfterMenuSlider';

import NavigationHomeIcon from '@/app/assets/icons/navigationHome';
import NavigationHeartIcon from '@/app/assets/icons/navigationHeart';
import NavigationChatIcon from '@/app/assets/icons/navigationChat';
import NavigationProfileIcon from '@/app/assets/icons/navigationProfile';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/AfterMenuSlider',
  component: AfterMenuSlider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple = {
  args: {
    menuItems: [
        { label: 'likes', value: 'home' },
        { label: 'matches', value: 'heart' },
        { label: 'dates', value: 'chat' },
      ],
  },
};
