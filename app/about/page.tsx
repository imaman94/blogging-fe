"use client"
function About() {
    return (
        <main>

            {/* <!-- Hero --> */}
            <section className="about-hero container">
                <div className="eyebrow">Our Story</div>
                <h1>A home for ideas that <em>actually matter.</em></h1>
                <p>InkFlow was built on a simple belief: that independent voices, well-written and thoughtfully shared, can change how people think and work.</p>
                <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 36 }}>
                    <a className="btn primary" href="register.html">Join InkFlow</a>
                    <a className="btn ghost" href="careers.html">We're Hiring</a>
                </div>
            </section>

            {/* <!-- Stat Banner --> */}
            <div className="container">
                <div className="stat-banner">
                    <div className="stat-banner-item">
                        <div className="num">48K+</div>
                        <div className="lbl">Active Readers</div>
                    </div>
                    <div className="stat-banner-item">
                        <div className="num">8,412</div>
                        <div className="lbl">Published Articles</div>
                    </div>
                    <div className="stat-banner-item">
                        <div className="num">1,200+</div>
                        <div className="lbl">Expert Authors</div>
                    </div>
                    <div className="stat-banner-item">
                        <div className="num">126K</div>
                        <div className="lbl">Conversations</div>
                    </div>
                </div>
            </div>

            {/* <!-- Mission Strip --> */}
            <div className="container">
                <div className="mission-strip">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: 16 }}>Our Mission</div>
                        <h2>Knowledge should be open, honest, and beautifully written.</h2>
                    </div>
                    <div>
                        <p>We're building a publishing platform that respects both the writer and the reader. No clickbait, no engagement traps — just thoughtful content from people who genuinely know their craft.</p>
                        <p style={{ marginTop: 16 }}>Every feature we build is asked to pass one test: does this help someone learn something useful today?</p>
                    </div>
                </div>
            </div>

            {/* <!-- Values --> */}
            <section className="section container">
                <div className="section-head">
                    <h2>What we believe in</h2>
                </div>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">✍️</div>
                        <h3>Writing-first</h3>
                        <p>The writing is the product. We obsess over typography, readability and the reading experience — on every device, at every size.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🔓</div>
                        <h3>Openness</h3>
                        <p>Great ideas deserve wide audiences. We default to openness, not paywalls — and we give authors the tools to choose what works for them.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Community</h3>
                        <p>A comment section should lift ideas, not bury them. We invest in the quality of conversations as much as the quality of articles.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🎯</div>
                        <h3>Relevance</h3>
                        <p>We surface content by signal strength, not scroll velocity. If an article is good, it should still be discoverable six months later.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">⚡</div>
                        <h3>Speed &amp; Craft</h3>
                        <p>Fast pages, clean code, thoughtful design. The platform should be invisible — the content shouldn't fight the interface to be seen.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🌍</div>
                        <h3>Inclusivity</h3>
                        <p>Good ideas have no passport. We build for global audiences and support writers from every background, timezone and discipline.</p>
                    </div>
                </div>
            </section>

            {/* <!-- Team --> */}
            <section className="section container">
                <div className="section-head">
                    <h2>The team</h2>
                    <a href="careers.html">Join us →</a>
                </div>
                <div className="team-grid">
                    <div className="team-card">
                        <div className="avatar lg" style={{ background: "var(--grad-accent)" }}>AJ</div>
                        <h4>Anika Johanssen</h4>
                        <div className="role">Co-founder &amp; CEO</div>
                        <p>Former editor at The Information. Believes every developer deserves a great writing outlet.</p>
                    </div>
                    <div className="team-card">
                        <div className="avatar lg" style={{ background: "var(--grad-tech)" }}>MR</div>
                        <h4>Marcus Reyes</h4>
                        <div className="role">Co-founder &amp; CTO</div>
                        <p>Previously engineering lead at Vercel. Obsessed with performance and developer experience.</p>
                    </div>
                    <div className="team-card">
                        <div className="avatar lg" style={{ background: "var(--grad-design)" }}>SK</div>
                        <h4>Sophie Kim</h4>
                        <div className="role">Head of Design</div>
                        <p>Shaped design systems at Figma and Linear. Believes great UX starts with great typography.</p>
                    </div>
                    <div className="team-card">
                        <div className="avatar lg" style={{ background: "var(--grad-ai)" }}>DP</div>
                        <h4>Dev Patel</h4>
                        <div className="role">Head of Growth</div>
                        <p>Built community and growth programs at Hashnode and Dev.to. Author of 40+ articles.</p>
                    </div>
                </div>
            </section>

            {/* <!-- CTA --> */}
            <section className="section container" style={{ textAlign: "center", paddingBottom: 80 }}>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "64px 40px", maxWidth: 720, margin: "auto" }}>
                    <div className="eyebrow" style={{ marginBottom: 16 }}>Ready to read or write?</div>
                    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 44, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 16 }}>Join 48,000 curious minds.</h2>
                    <p style={{ color: "var(--text2)", fontSize: 17, marginBottom: 32 }}>Create a free account and start discovering ideas worth reading — or publish your own.</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                        <a className="btn primary" href="register.html" style={{ padding: "14px 32px", fontSize: 16 }}>Create Free Account</a>
                        <a className="btn ghost" href="explore.html" style={{ padding: "14px 32px", fontSize: 16 }}>Browse Articles</a>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default About;