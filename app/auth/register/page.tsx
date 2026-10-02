"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { registerUser, clearError } from '@/app/store/slice/authslice';
import { ToastContainer, toast } from 'react-toastify';

function Register() {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { loading, error } = useAppSelector((state) => state.auth);

    useEffect(() => {
        if (error) {
            toast(error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            dispatch(clearError());
        }
    }, [error, dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullname || !email || !password || !conPassword) {
            toast('Please fill all the fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        if (!emailRegex.test(email)) {
            toast('Email is not valid!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        if (password !== conPassword) {
            toast('Password does not match!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        // if (!passwordRegex.test(password)) {
        //     toast('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character!', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: false,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //     });
        //     return;
        // }
        const resultAction = await dispatch(
            registerUser({ email, name: fullname, password })
        );
        if (registerUser.fulfilled.match(resultAction)) {
            router.push('/')
        }
    }
    return (
        <main className="auth-wrap">
            <section className="auth">
                <div className="auth-logo">
                    <div className="logo">
                        <span className="ink">Ink</span><span>Flow</span>
                    </div>
                </div>
                <div className="eyebrow" style={{ marginTop: "20px" }}>Join InkFlow</div>
                <h1>Create your account</h1>
                <p>Start reading, sharing and publishing your ideas — free forever.</p>
                {/* Error Notification */}

                <ToastContainer />
                {/* <!-- OAuth Buttons --> */}
                <button className="oauth-btn" id="googleRegister" type="button">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                </button>
                <button className="oauth-btn" id="githubRegister" type="button">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Continue with GitHub
                </button>

                <div className="divider">or register with email</div>

                {/* <!-- Form --> */}
                <form id="registerForm" noValidate>
                    <div className="field">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" placeholder="John Doe" value={fullname} onChange={(e) => setFullName(e.target.value)} autoComplete="name" required />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Min. 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
                    </div>
                    <div className="field">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Re-enter your password" value={conPassword} onChange={(e) => setConPassword(e.target.value)} autoComplete="new-password" required />
                    </div>
                    <div style={{ margin: "18px 0", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <input type="checkbox" id="terms" required style={{ marginTop: "2px" }} />
                        <label htmlFor="terms" style={{ fontSize: "13px", color: "var(--text2)", lineHeight: "1.5", cursor: "pointer" }}>
                            I agree to the <Link href="#" style={{ color: "var(--accent2)", fontWeight: "600" }}>Terms of Service</Link> and <Link href="#" style={{ color: "var(--accent2)", fontWeight: "600" }}>Privacy Policy</Link>
                        </label>
                    </div>
                    <button className="btn primary" type="button" onClick={handleSubmit} disabled={loading} aria-disabled={loading} id="registerSubmit">
                        {loading ? <div className="spinner"></div> : "Create Free Account"}
                    </button>
                </form>

                <p className="auth-footer">
                    Already have an account? <Link href="/auth/login">Login</Link>
                </p>
            </section>
        </main>
    );
};

export default Register;