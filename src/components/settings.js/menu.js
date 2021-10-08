import React from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info'
import { styled } from "@mui/system";

export const Icolor = styled('div')(({ theme }) => ({
    color:theme.palette.primary.main
}));

export const menu = {
    top_menu: [
        {
            label: "Wishlist",
            icon: <Icolor><BookmarkIcon /></Icolor>,
            url: '/wishlist',
        },
        {
            label: "Notifications",
            icon: <Icolor><NotificationsActiveIcon /></Icolor>,
            url: '/notifications',
        },

    ],
    botttom_menu: [
        {
            label: "Settings",
            icon: <Icolor><SettingsIcon /></Icolor>,
            url: '/settings',
        },
        {
            label: "Instructions",
            icon: <Icolor><HelpIcon /></Icolor>,
            url: '/guid',
        },
        {
            label: "About",
            icon: <Icolor><InfoIcon/></Icolor>,
            url: '/about',
        },

    ]
}