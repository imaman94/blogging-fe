"use client"
function Article() {
    return (
        <main className="article-page container">

            {/* <!-- Article Head --> */}
            <section className="article-head">
                <span className="tag tech">Technology · Node.js</span>
                <h1>Designing Production-Grade Node.js Applications</h1>
                <p className="lead">A practical architecture guide for building backend systems that are maintainable, observable and ready to scale from day one.</p>
                <div className="article-author">
                    <div className="avatar">JD</div>
                    <div className="info">
                        <b>John Doe</b>
                        <div className="meta">Sep 10, 2026 · Updated Sep 11, 2026 · 10 min read · <a href="profile.html" style={{ color: "var(--accent2)" }}>Follow</a></div>
                    </div>
                </div>
            </section>

            {/* <!-- Actions     --> */}
            <div className="actions">
                <button className="action" id="likeBtn" data-like>♡ Like <span id="likeCount">245</span></button>
                <button className="action" >💬 Comment 48</button>
                <button className="action" id="bookmarkBtn">🔖 Bookmark</button>
                <button className="action" data-share>↗ Share</button>
            </div>

            {/* <!-- Article Layout --> */}
            <div className="article-layout">

                {/* <!-- Content --> */}
                <article className="article-content">

                    {/* <!-- Cover image --> */}
                    <div className="article-cover tech">
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,.7)" }}>Production-grade backend architecture</span>
                    </div>

                    <p>Building a Node.js service that works locally is easy. Building one that remains understandable and reliable as traffic, teams and business requirements grow is a fundamentally different problem — one that touches every layer of your stack.</p>

                    <p>This article covers the architectural patterns and engineering disciplines that separate hobby projects from production systems. Not because production code is more complex, but because it requires explicit decisions about things beginners leave implicit.</p>

                    <h2>Start with clear boundaries</h2>

                    <p>Organize the system around business capabilities rather than framework details. Keep your transport layer (HTTP, WebSocket), application logic and infrastructure concerns in separate modules so that changes in one area don't ripple unexpectedly through others.</p>

                    <div className="code"><code>app/
                        ├── modules/
                        │   ├── users/
                        │   │   ├── users.controller.ts
                        │   │   ├── users.service.ts
                        │   │   └── users.repository.ts
                        │   └── articles/
                        │       ├── articles.controller.ts
                        │       ├── articles.service.ts
                        │       └── articles.repository.ts
                        ├── infrastructure/
                        │   ├── database.ts
                        │   └── cache.ts
                        ├── middleware/
                        │   ├── auth.ts
                        │   └── logger.ts
                        └── server.ts</code></div>

                    <p>Each module owns its own data access layer. A controller never calls another module's repository directly — it goes through the service boundary. This makes dependencies explicit and testing straightforward.</p>

                    <h2>Make observability a first-class feature</h2>

                    <p>Logs, metrics and traces should be designed into the application from the beginning — not retrofitted after the first incident. Correlation IDs make it possible to follow one request across services, background jobs and async queues.</p>

                    <p>Every log line should answer: <em>which request?</em>, <em>which user?</em>, <em>what happened?</em>, <em>how long did it take?</em> Structured JSON logs make these questions answerable in milliseconds when things go wrong at 3am.</p>

                    <h2>Design for failure, not just success</h2>

                    <p>Production systems are defined as much by their failure behavior as their happy path. Use timeouts, retries with exponential backoff, idempotency keys and graceful shutdown. Handle every external call as if it will eventually fail.</p>

                    <blockquote>Reliable software is software whose failure modes are well understood, documented and handled gracefully — not software that never fails.</blockquote>

                    <p>Implement health checks that your orchestration layer (Kubernetes, ECS) can use to detect and recover from failures automatically. Distinguish between liveness (is the process alive?) and readiness (can it serve traffic right now?).</p>

                    <h2>Conclusion</h2>

                    <p>Good architecture is not about adding complexity — it's about making the existing complexity visible, bounded and changeable. Start simple, make dependencies explicit, and add infrastructure only when you have a real problem to solve.</p>

                    <p>The patterns above aren't rules. They're a vocabulary for making trade-offs consciously. Use what fits your context and team.</p>

                </article>

                {/* <!-- Table of Contents --> */}
                <aside className="toc">
                    <div className="toc-title">On this page</div>
                    <a href="#" className="active">Start with clear boundaries</a>
                    <a href="#">Make observability a feature</a>
                    <a href="#">Design for failure</a>
                    <a href="#">Conclusion</a>
                    <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                        <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>Reading progress</div>
                        <div style={{ fontSize: "24px", fontWeight: "900", color: "var(--text)" }}>68%</div>
                        <div style={{ height: "4px", background: "var(--surface3)", borderRadius: "99px", marginTop: "8px", overflow: "hidden" }}>
                            <div style={{ height: "100%", width: "68%", background: "var(--grad-accent)", borderRadius: "99px" }}></div>
                        </div>
                    </div>
                </aside>

            </div>

            {/* <!-- Comments --> */}
            <div className="comments" id="comments">
                <h2>48 Comments</h2>

                {/* <!-- Composer --> */}
                <div className="composer" style={{ marginBottom: "32px" }}>
                    <div style={{ display: "flex", gap: "14px" }}>
                        <div className="avatar">You</div>
                        <div style={{ flex: "1" }}>
                            <textarea placeholder="Share your thoughts on this article…" id="commentInput"></textarea>
                            <div className="composer-actions">
                                <button className="btn ghost sm">Preview</button>
                                <button className="btn primary sm">Post Comment</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Comment --> */}
                <div className="comment">
                    <div className="row">
                        <div className="avatar">SM</div>
                        <div className="info">
                            <b>Sarah Miller</b>
                            <div className="meta">2 hours ago</div>
                        </div>
                    </div>
                    <p>This is a great explanation of the trade-offs behind production Node.js architecture. The module structure example alone saved me hours of refactoring.</p>
                    <div className="meta">
                        <button>♡ 12</button>
                        <button>Reply</button>
                        <button>More</button>
                    </div>
                </div>

                {/* <!-- Reply --> */}
                <div className="comment reply">
                    <div className="row">
                        <div className="avatar">JD</div>
                        <div className="info">
                            <b>John Doe</b>
                            <div className="meta" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                1 hour ago
                                <span style={{ background: "rgba(124,108,248,.12)", color: "var(--accent2)", fontSize: "10px", fontWeight: "800", padding: "2px 7px", borderRadius: "999px", letterSpacing: ".3px" }}>AUTHOR</span>
                            </div>
                        </div>
                    </div>
                    <p>Thanks Sarah — observability is one of the easiest things to postpone and one of the hardest to retrofit. Happy it was useful!</p>
                    <div className="meta">
                        <button>♡ 5</button>
                        <button>Reply</button>
                    </div>
                </div>

                {/* <!-- Another comment --> */}
                <div className="comment">
                    <div className="row">
                        <div className="avatar">AP</div>
                        <div className="info">
                            <b>Alex Petrov</b>
                            <div className="meta">4 hours ago</div>
                        </div>
                    </div>
                    <p>The section on failure modes is excellent. I'd add: always instrument your circuit breakers and expose their state through a metrics endpoint. Saved us many times.</p>
                    <div className="meta">
                        <button>♡ 24</button>
                        <button>Reply</button>
                        <button>More</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Article