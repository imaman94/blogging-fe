"use client";
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useRouter } from 'next/navigation';
import { loginUser, clearError, logout } from '@/app/store/slice/authslice'
import { useEffect, useState } from 'react';

const Header = () => {
    const { loading, error, isAuthenticated, user } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [menuclass, setMenuClass] = useState("user-menu")
    const UserData = typeof window !== 'undefined' ? localStorage.getItem('bloggin_data') : null;
    let UserDetails: {
        data: {
            name: string
            email: string
            type: string
            isActive: boolean
        }
        token: string
    } | null = null;
    if (UserData) {
        UserDetails = JSON.parse(UserData);
    }

    const handleLogout = async () => {
        await dispatch(logout());
        router.push("/");
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const dropdown = document.getElementById('userDropdown');
            const trigger = document.getElementById('userMenuTrigger');

            // If the click is NOT inside the dropdown or the trigger button
            if (dropdown && trigger && !dropdown.contains(event.target as Node) && !trigger.contains(event.target as Node)) {
                setMenuClass("user-menu");
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <header>
            <div className="container nav">
                <Link className="logo" href="/">
                    <span className="ink">Ink</span><span>Flow</span>
                </Link>
                <nav className="navlinks">
                    <Link href="/" className="active">Home</Link>
                    <Link href="/explore">Explore</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/trendings">Trending</Link>
                    <Link href="/authors">Authors</Link>
                </nav>
                <div className="spacer"></div>
                <input className="search" type="search" placeholder="Search articles…" aria-label="Search" />
                {UserDetails ?
                    <div className={menuclass} id="userMenu" onClick={() => setMenuClass(menuclass === "user-menu" ? "user-menu visible open" : "user-menu")}>
                        <button className="user-avatar-btn" id="userMenuTrigger" aria-haspopup="true" aria-expanded={menuclass === "user-menu" ? false : true}>
                            <div className="user-avatar" id="navAvatar">{UserDetails.data.name
                                .trim()
                                .split(/\s+/) // Splits by any whitespace, handling multiple spaces correctly
                                .map((word) => word.charAt(0).toUpperCase()) // Takes the first letter and capitalizes it
                                .join('')}</div>
                            <span id="navUserName">{UserDetails.data.name.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
                            <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        <div className="user-dropdown" id="userDropdown" role="menu">
                            <div className="user-dropdown-header">
                                <div className="user-avatar" id="dropdownAvatar">{UserDetails.data.name
                                    .trim()
                                    .split(/\s+/) // Splits by any whitespace, handling multiple spaces correctly
                                    .map((word) => word.charAt(0).toUpperCase()) // Takes the first letter and capitalizes it
                                    .join('')}</div>
                                <div className="user-info">
                                    <div className="user-name" id="dropdownName">{UserDetails.data.name.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
                                    <div className="user-email" id="dropdownEmail">{UserDetails.data.email}</div>
                                </div>
                            </div>
                            <div className="user-dropdown-body">
                                <Link className="user-dropdown-item" href="/author/dashboard" role="menuitem">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                                    Dashboard
                                </Link>
                                <Link className="user-dropdown-item" href="/profile" role="menuitem">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    My Profile
                                </Link>
                                <div className="user-dropdown-divider"></div>
                                <button className="user-dropdown-item logout" onClick={handleLogout} id="logoutBtn" role="menuitem">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                    : <div className="nav-auth" id="navAuth">
                        <Link className="btn ghost" href="/auth/login">Login</Link>
                        <Link className="btn primary" href="/auth/register">Get Started</Link>
                    </div>}
            </div>
        </header>
    );
};

export default Header;