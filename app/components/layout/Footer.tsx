"use client";
import Link from 'next/link';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="ink">Ink</span><span>Flow</span>
                        </div>
                        <p>A modern home for independent ideas, thoughtful stories and practical knowledge from the people building what's next.</p>
                    </div>
                    <div>
                        <h4>Product</h4>
                        <Link href="/explore">Explore</Link>
                        <Link href="/trendings">Trending</Link>
                        <Link href="/authors">Authors</Link>
                        <Link href="/categories">Categories</Link>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <Link href="#">About</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Blog</Link>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <Link href="#">Help Center</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Status</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 InkFlow. All rights reserved.</span>
                    <span>Made with ♥ for curious minds</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;