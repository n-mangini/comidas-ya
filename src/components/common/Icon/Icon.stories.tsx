import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {Icon, IconProps} from './Icon';

import {ReactComponent as AppleIcon} from "../../../assets/icons/apple.svg";
import {ReactComponent as BikeIcon} from "../../../assets/icons/bike.svg";
import {ReactComponent as CheckIcon} from "../../../assets/icons/check.svg";
import {ReactComponent as DiscountsIcon} from "../../../assets/icons/discounts.svg";
import {ReactComponent as DoubleArrowIcon} from "../../../assets/icons/double_arrow.svg";
import {ReactComponent as DownArrowIcon} from "../../../assets/icons/down_arrow.svg";
import {ReactComponent as EyeIcon} from "../../../assets/icons/eye.svg";
import {ReactComponent as FacebookIcon} from "../../../assets/icons/facebook.svg";
import {ReactComponent as FilterIcon} from "../../../assets/icons/filter.svg";
import {ReactComponent as GoogleIcon} from "../../../assets/icons/google.svg";
import {ReactComponent as HistoryIcon} from "../../../assets/icons/history.svg";
import {ReactComponent as HomeIcon} from "../../../assets/icons/home.svg";
import {ReactComponent as InterrogateIcon} from "../../../assets/icons/interrogate.svg";
import {ReactComponent as LeftArrowIcon} from "../../../assets/icons/left_arrow.svg";
import {ReactComponent as LocationIcon} from "../../../assets/icons/location.svg";
import {ReactComponent as MenuIcon} from "../../../assets/icons/menu.svg";
import {ReactComponent as OrdersIcon} from "../../../assets/icons/orders.svg";
import {ReactComponent as PipeIcon} from "../../../assets/icons/pipe.svg";
import {ReactComponent as PlayIcon} from "../../../assets/icons/play.svg";
import {ReactComponent as ProfileIcon} from "../../../assets/icons/profile.svg";
import {ReactComponent as RepeatIcon} from "../../../assets/icons/repeat.svg";
import {ReactComponent as RightArrowIcon} from "../../../assets/icons/right_arrow.svg";
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import {ReactComponent as ShoppingCartIcon} from "../../../assets/icons/shopping_cart.svg";
import {ReactComponent as StarIcon} from "../../../assets/icons/star.svg";
import {ReactComponent as StarOutlinedIcon} from "../../../assets/icons/star_outlined.svg";
import {ReactComponent as TrashIcon} from "../../../assets/icons/trash.svg";


export default {
    title: 'Components/Common/Icon',
    component: Icon,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: ['text-black', 'text-white', 'text-primary-500', 'text-secondary-500'],
        },
        icon: {
            control: false, // Disable control for icon since we'll provide specific examples below
        },
    },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Apple = Template.bind({});
Apple.args = {
    icon: AppleIcon,
    color: 'text-black',
};

export const Bike = Template.bind({});
Bike.args = {
    icon: BikeIcon,
    color: 'text-black',
};

export const Check = Template.bind({});
Check.args = {
    icon: CheckIcon,
    color: 'text-black',
};

export const Discounts = Template.bind({});
Discounts.args = {
    icon: DiscountsIcon,
    color: 'text-black',
};

export const DoubleArrow = Template.bind({});
DoubleArrow.args = {
    icon: DoubleArrowIcon,
    color: 'text-black',
};

export const DownArrow = Template.bind({});
DownArrow.args = {
    icon: DownArrowIcon,
    color: 'text-black',
};

export const Eye = Template.bind({});
Eye.args = {
    icon: EyeIcon,
    color: 'text-black',
};

export const Facebook = Template.bind({});
Facebook.args = {
    icon: FacebookIcon,
    color: 'text-black',
};

export const Filter = Template.bind({});
Filter.args = {
    icon: FilterIcon,
    color: 'text-black',
};

export const Google = Template.bind({});
Google.args = {
    icon: GoogleIcon,
    color: 'text-black',
};

export const History = Template.bind({});
History.args = {
    icon: HistoryIcon,
    color: 'text-black',
};

export const Home = Template.bind({});
Home.args = {
    icon: HomeIcon,
    color: 'text-black',
};

export const Interrogate = Template.bind({});
Interrogate.args = {
    icon: InterrogateIcon,
    color: 'text-black',
};

export const LeftArrow = Template.bind({});
LeftArrow.args = {
    icon: LeftArrowIcon,
    color: 'text-black',
};

export const Location = Template.bind({});
Location.args = {
    icon: LocationIcon,
    color: 'text-black',
};

export const Menu = Template.bind({});
Menu.args = {
    icon: MenuIcon,
    color: 'text-black',
};

export const Orders = Template.bind({});
Orders.args = {
    icon: OrdersIcon,
    color: 'text-black',
};

export const Pipe = Template.bind({});
Pipe.args = {
    icon: PipeIcon,
    color: 'text-black',
};

export const Play = Template.bind({});
Play.args = {
    icon: PlayIcon,
    color: 'text-black',
};

export const Profile = Template.bind({});
Profile.args = {
    icon: ProfileIcon,
    color: 'text-black',
};

export const Repeat = Template.bind({});
Repeat.args = {
    icon: RepeatIcon,
    color: 'text-black',
};

export const RightArrow = Template.bind({});
RightArrow.args = {
    icon: RightArrowIcon,
    color: 'text-black',
};

export const Search = Template.bind({});
Search.args = {
    icon: SearchIcon,
    color: 'text-black',
};

export const ShoppingCart = Template.bind({});
ShoppingCart.args = {
    icon: ShoppingCartIcon,
    color: 'text-black',
};

export const Star = Template.bind({});
Star.args = {
    icon: StarIcon,
    color: 'text-black',
};

export const StarOutlined = Template.bind({});
StarOutlined.args = {
    icon: StarOutlinedIcon,
    color: 'text-black',
};

export const Trash = Template.bind({});
Trash.args = {
    icon: TrashIcon,
    color: 'text-black',
};
