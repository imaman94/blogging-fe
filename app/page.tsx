export default function Home() {
  return (
      <main>

    {/* <!-- Hero --> */}
    <section className="hero container">
      <div className="hero-inner">
        <div className="eyebrow">Independent ideas · Real people</div>
        <h1>Discover ideas<br/><em>worth reading.</em></h1>
        <p>Explore thoughtful writing from developers, designers, founders and creators building what comes next.</p>
        <div className="hero-search">
          <input type="search" placeholder="Search articles, topics, or authors…" aria-label="Search articles"/>
          <a className="btn primary" href="explore.html">Explore Articles</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="num">48K+</div>
            <div className="lbl">Active Readers</div>
          </div>
          <div className="hero-stat">
            <div className="num">8.4K</div>
            <div className="lbl">Articles Published</div>
          </div>
          <div className="hero-stat">
            <div className="num">1.2K</div>
            <div className="lbl">Expert Authors</div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Featured Article --> */}
    <section className="section container">
      <div className="section-head">
        <h2>Featured this week</h2>
        <a href="explore.html">View all →</a>
      </div>
      <a className="featured" href="article.html">
        <div className="cover tech">
          <span>Featured story</span>
        </div>
        <div className="featured-copy">
          <span className="tag tech">Engineering</span>
          <h2>Designing Production-Grade Node.js Applications</h2>
          <p>Go beyond tutorials and learn the architecture, observability and scaling decisions that make backend systems reliable at any scale.</p>
          <div className="meta">John Doe · Sep 10, 2026 · 10 min read</div>
          <div className="stats">
            <span>♡ 245</span>
            <span>💬 48</span>
            <span>◷ 18.6K views</span>
          </div>
        </div>
      </a>
    </section>

    {/* <!-- Trending Grid --> */}
    <section className="section container">
      <div className="section-head">
        <h2>Trending now</h2>
        <a href="explore.html">See trending →</a>
      </div>
      <div className="grid">
        <a className="card" href="article.html">
          <div className="card-img tech"></div>
          <div className="card-body">
            <span className="tag tech">Technology</span>
            <h3>Building Scalable Node.js Applications</h3>
            <p className="meta">Production architecture patterns that actually scale.</p>
            <div className="meta" style={{marginTop:"6px"}}>John Doe · 8 min read</div>
            <div className="stats">
              <span>♡ 124</span>
              <span>💬 32</span>
              <span>◷ 12.4K</span>
            </div>
          </div>
        </a>
        <a className="card" href="article.html">
          <div className="card-img design"></div>
          <div className="card-body">
            <span className="tag design">Design</span>
            <h3>Designing Interfaces People Love to Use</h3>
            <p className="meta">A practical guide to hierarchy, spacing and interaction.</p>
            <div className="meta" style={{marginTop:"6px"}}>Sarah Kim · 6 min read</div>
            <div className="stats">
              <span>♡ 98</span>
              <span>💬 21</span>
              <span>◷ 8.2K</span>
            </div>
          </div>
        </a>
        <a className="card" href="article.html">
          <div className="card-img ai"></div>
          <div className="card-body">
            <span className="tag ai">AI</span>
            <h3>What AI Means for Modern Developers</h3>
            <p className="meta">Where AI fits into real engineering workflows.</p>
            <div className="meta" style={{marginTop:"6px"}}>Alex Morgan · 10 min read</div>
            <div className="stats">
              <span>♡ 201</span>
              <span>💬 57</span>
              <span>◷ 21.8K</span>
            </div>
          </div>
        </a>
      </div>
    </section>

    {/* <!-- Topics --> */}
    <section className="section container">
      <div className="section-head">
        <h2>Explore topics</h2>
      </div>
      <div className="pills">
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
    </section>

    {/* <!-- More Articles --> */}
    <section className="section container">
      <div className="section-head">
        <h2>Recently published</h2>
        <a href="explore.html">Browse all →</a>
      </div>
      <div className="grid">
        <a className="card" href="article.html">
          <div className="card-img business"></div>
          <div className="card-body">
            <span className="tag business">Business</span>
            <h3>The Startup Playbook Nobody Talks About</h3>
            <p className="meta">Practical lessons from building zero to one.</p>
            <div className="meta" style={{marginTop:"6px"}}>Maria Chen · 7 min read</div>
            <div className="stats">
              <span>♡ 312</span>
              <span>💬 64</span>
              <span>◷ 24.1K</span>
            </div>
          </div>
        </a>
        <a className="card" href="article.html">
          <div className="card-img tech"></div>
          <div className="card-body">
            <span className="tag tech">Programming</span>
            <h3>TypeScript Patterns You Should Know in 2026</h3>
            <p className="meta">Advanced patterns that ship production code faster.</p>
            <div className="meta" style={{marginTop:"6px"}}>Dev Patel · 9 min read</div>
            <div className="stats">
              <span>♡ 176</span>
              <span>💬 43</span>
              <span>◷ 15.7K</span>
            </div>
          </div>
        </a>
        <a className="card" href="article.html">
          <div className="card-img design"></div>
          <div className="card-body">
            <span className="tag design">Design</span>
            <h3>Color Theory for Developers Who Care</h3>
            <p className="meta">Build beautiful products without a design degree.</p>
            <div className="meta" style={{marginTop:"6px"}}>Lena Wolf · 5 min read</div>
            <div className="stats">
              <span>♡ 89</span>
              <span>💬 18</span>
              <span>◷ 7.9K</span>
            </div>
          </div>
        </a>
      </div>
    </section>

  </main>
  );
}
