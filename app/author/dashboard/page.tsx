"use client"

function Authors() {
    return (
        <main>
            <div className="container">

                {/* <!-- Header --> */}
                <div className="explore-header">
                    <div className="eyebrow">Library</div>
                    <h1>Explore Articles</h1>
                    <p className="meta">Find your next big idea across thousands of published pieces.</p>

                    {/* <!-- Search row --> */}
                    <div className="explore-search-row">
                        <input type="search" id="exploreSearch" placeholder="Search by title, author, topic or tag…" aria-label="Search articles" />
                        <button className="btn primary" id="searchBtn">Search</button>
                        <button className="btn ghost" id="filterBtn">⚙ Filter</button>
                    </div>

                    {/* <!-- Sort pills --> */}
                    <div className="pills" style={{ marginBottom: "32px" }}>
                        <span className="pill active" id="pill-latest">Latest</span>
                        <span className="pill" id="pill-trending">Trending</span>
                        <span className="pill" id="pill-views">Most Viewed</span>
                        <span className="pill" id="pill-liked">Most Liked</span>
                        <span className="pill" id="pill-commented">Most Commented</span>
                    </div>
                </div>

                {/* <!-- Categories --> */}
                <div className="section-head">
                    <h2>Browse by category</h2>
                </div>
                <div className="pills" style={{ marginBottom: "36px" }}>
                    <span className="pill active">All</span>
                    <span className="pill">Technology</span>
                    <span className="pill">Programming</span>
                    <span className="pill">AI &amp; ML</span>
                    <span className="pill">Design</span>
                    <span className="pill">Business</span>
                    <span className="pill">Career</span>
                    <span className="pill">Startups</span>
                    <span className="pill">Open Source</span>
                    <span className="pill">Web Dev</span>
                </div>

                {/* <!-- Results label --> */}
                <div className="section-head">
                    <h2>All articles <span style={{ fontSize: "16px", color: "var(--muted)", fontWeight: "400" }}>· 8,412 results</span></h2>
                </div>

                {/* <!-- Article Grid --> */}
                <div className="grid">
                    <a className="card" href="article.html">
                        <div className="card-img tech"></div>
                        <div className="card-body">
                            <span className="tag tech">Technology</span>
                            <h3>Building Scalable Node.js Applications</h3>
                            <p className="meta">Production architecture patterns that actually scale.</p>
                            <div className="meta" style={{ margin: "6px 0" }}>John Doe · 8 min read</div>
                            <div className="stats">
                                <span>♡ 124</span><span>💬 32</span><span>◷ 12.4K</span>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="article.html">
                        <div className="card-img design"></div>
                        <div className="card-body">
                            <span className="tag design">Design</span>
                            <h3>Designing Interfaces People Love to Use</h3>
                            <p className="meta">A practical guide to hierarchy, spacing and interaction.</p>
                            <div className="meta" style={{ margin: "6px 0" }}>Sarah Kim · 6 min read</div>
                            <div className="stats">
                                <span>♡ 98</span><span>💬 21</span><span>◷ 8.2K</span>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="article.html">
                        <div className="card-img ai"></div>
                        <div className="card-body">
                            <span className="tag ai">AI</span>
                            <h3>What AI Means for Modern Developers</h3>
                            <p className="meta">Where AI fits into real engineering workflows.</p>
                            <div className="meta" style={{ margin: "6px 0" }}>Alex Morgan · 10 min read</div>
                            <div className="stats">
                                <span>♡ 201</span><span>💬 57</span><span>◷ 21.8K</span>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="article.html">
                        <div className="card-img business"></div>
                        <div className="card-body">
                            <span className="tag business">Business</span>
                            <h3>The Startup Playbook Nobody Talks About</h3>
                            <p className="meta">Practical lessons from building zero to one.</p>
                            <div className="meta" style={{ margin: "6px 0" }}>Maria Chen · 7 min read</div>
                            <div className="stats">
                                <span>♡ 312</span><span>💬 64</span><span>◷ 24.1K</span>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="article.html">
                        <div className="card-img tech"></div>
                        <div className="card-body">
                            <span className="tag tech">Programming</span>
                            <h3>TypeScript Patterns You Should Know in 2026</h3>
                            <p className="meta">Advanced patterns that ship production code faster.</p>
                            <div className="meta" style={{ margin: "6px 0" }}>Dev Patel · 9 min read</div>
                            <div className="stats">
                                <span>♡ 176</span><span>💬 43</span><span>◷ 15.7K</span>
                            </div>
                        </div>
                    </a>
                    <a className="card" href="article.html">
                        <div className="card-img design"></div>
                        <div className="card-body">
                            <span className="tag design">Design</span>
                            <h3>Color Theory for Developers Who Care</h3>
                            <p className="meta">Build beautiful products without a design degree.</p>
                            <div className="meta" style={{ margin: "6px 0" }}>Lena Wolf · 5 min read</div>
                            <div className="stats">
                                <span>♡ 89</span><span>💬 18</span><span>◷ 7.9K</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* <!-- Pagination --> */}
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", margin: "52px 0" }}>
                    <button className="btn ghost sm" disabled>← Previous</button>
                    <span className="pill active" style={{ cursor: "pointer" }}>1</span>
                    <span className="pill" style={{ cursor: "pointer" }}>2</span>
                    <span className="pill" style={{ cursor: "pointer" }}>3</span>
                    <span style={{ color: "var(--muted)", padding: "0 4px" }}>…</span>
                    <span className="pill" style={{ cursor: "pointer" }}>42</span>
                    <button className="btn ghost sm">Next →</button>
                </div>

            </div>
        </main>
    )
}

export default Authors