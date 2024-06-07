import Link from 'next/link';
import { FC } from 'react';
import {
    UserGroupIcon,
    HomeIcon,
    ArrowsRightLeftIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const links = [
    { name: 'Hjem', href: '/', icon: HomeIcon },
    {
        name: 'Bytte vakt',
        href: '/watch',
        icon: ArrowsRightLeftIcon,
    },
    { name: 'Ønsker bytte', href: '/profile', icon: UserGroupIcon },
];

const BottomNav: FC = () => {
    return (
        <div className="fixed bottom-0 w-full flex justify-around bg-gray-200 p-4">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-700"
                    >
                        <LinkIcon className="w-6" />
                    </Link>
                );
            })}
        </div>
    );
};

export default BottomNav;
