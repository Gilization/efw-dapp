const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "dtra 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "dtrb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "dtrc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "dtrd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "dtre 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "dtra 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "dtrf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "dtrwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "dtrc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "dtrb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "dtre 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "dtrd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "dtrspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "dtrwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "dtra 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "dtrc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "dtrd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "dtre 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const TIER_CONFIG = {
  Gold:   { badge: "dui-tier-gold",   icon: "🥇" },
  Silver: { badge: "dui-tier-silver", icon: "🥈" },
  Bronze: { badge: "dui-tier-bronze", icon: "🥉" },
  "No Tier": { badge: "dui-tier-none", icon: "🌱" },
}

const DASH_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes dtra{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes dtrb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes dtrc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes dtrd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes dtre{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes dtrf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes dtrspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes dtrwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .dui-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .dui-orb1 {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%);
  }
  .dui-orb2 {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%);
  }
  .dui-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .dui-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .dui-header       { margin-bottom: 52px; }
  .dui-eyebrow      { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .dui-title        { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; }
  .dui-title em     { font-style: italic; color: #c1440e; }

  /* Section labels */
  .dui-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Stat grids */
  .dui-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 14px; }
  .dui-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 14px; }
  .dui-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 14px; }
  @media (max-width: 1000px) { .dui-grid-4 { grid-template-columns: repeat(2, 1fr); } .dui-grid-3 { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px)  { .dui-grid-4, .dui-grid-3, .dui-grid-2 { grid-template-columns: 1fr; } }

  /* Stat cards */
  .dui-card { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; padding: 22px 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; position: relative; overflow: hidden; }
  .dui-card:hover { border-color: #e0ceb0; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
  .dui-card-accent-green  { border-left: 2.5px solid #5a8a3c; }
  .dui-card-accent-blue   { border-left: 2.5px solid #4a7fa8; }
  .dui-card-accent-purple { border-left: 2.5px solid #7c5fa8; }
  .dui-card-accent-red    { border-left: 2.5px solid #b91c1c; }
  .dui-card-accent-amber  { border-left: 2.5px solid #c87820; }

  .dui-card-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 10px; }
  .dui-card-val   { font-family: 'JetBrains Mono', monospace; font-size: 28px; font-weight: 400; color: #2c1a08; line-height: 1; margin-bottom: 6px; }
  .dui-card-sub   { font-size: 11px; color: #c4a882; font-family: 'JetBrains Mono', monospace; }
  .dui-card-sub span { color: #8c7055; }

  .dui-val-green  { color: #5a8a3c !important; }
  .dui-val-blue   { color: #4a7fa8 !important; }
  .dui-val-purple { color: #7c5fa8 !important; }
  .dui-val-red    { color: #b91c1c !important; }
  .dui-val-amber  { color: #c87820 !important; }
  .dui-val-accent { color: #c1440e !important; }

  /* CTA link */
  .dui-cta { margin-top: 12px; display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; color: #c1440e; text-decoration: none; border: 1px solid rgba(193,68,14,0.2); padding: 6px 14px; border-radius: 20px; background: rgba(193,68,14,0.04); cursor: pointer; transition: all 0.2s; letter-spacing: 0.3px; }
  .dui-cta:hover { background: #c1440e; color: #fffcf8; }

  /* Impact panel */
  .dui-impact-panel { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 16px; padding: 32px 36px; box-shadow: 0 1px 6px rgba(0,0,0,0.04); position: relative; overflow: hidden; }
  .dui-impact-grid  { display: grid; grid-template-columns: 220px 1fr; gap: 40px; }
  @media (max-width: 700px) { .dui-impact-grid { grid-template-columns: 1fr; } }
  .dui-impact-divider { width: 1px; background: #f0e2cc; }

  .dui-impact-left-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 6px; }
  .dui-impact-left-val   { font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 400; color: #2c1a08; margin-bottom: 22px; }
  .dui-impact-left-val span { font-size: 14px; opacity: 0.4; margin-left: 4px; }

  /* Tier badge */
  .dui-tier-row   { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
  .dui-tier-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; }
  .dui-tier-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 14px; border-radius: 20px; font-size: 12px; font-weight: 500; letter-spacing: 0.5px; }
  .dui-tier-gold   { background: rgba(202,138,4,0.08);  color: #b45309; border: 1px solid rgba(202,138,4,0.25); }
  .dui-tier-silver { background: rgba(100,116,139,0.08); color: #475569; border: 1px solid rgba(100,116,139,0.25); }
  .dui-tier-bronze { background: rgba(180,83,9,0.08);   color: #9a3412; border: 1px solid rgba(180,83,9,0.25); }
  .dui-tier-none   { background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.2); }

  /* Progress bar */
  .dui-progress-wrap  { margin-top: 4px; }
  .dui-progress-meta  { display: flex; justify-content: space-between; font-size: 10px; color: #c4a882; font-family: 'JetBrains Mono', monospace; margin-bottom: 8px; }
  .dui-progress-track { width: 100%; height: 5px; background: #f0e2cc; border-radius: 99px; overflow: hidden; }
  .dui-progress-fill  { height: 100%; background: linear-gradient(90deg, #c1440e, #c87820); border-radius: 99px; transition: width 0.6s ease; }

  /* Impact value row */
  .dui-impact-val-row { margin-top: 28px; padding-top: 20px; border-top: 1px solid #f0e2cc; }
  .dui-impact-val-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 6px; }
  .dui-impact-val-num   { font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 400; color: #5a8a3c; }

  /* Leaderboard */
  .dui-lb-wrap  { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .dui-lb-row   { display: flex; justify-content: space-between; align-items: center; padding: 16px 22px; border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .dui-lb-row:last-child { border-bottom: none; }
  .dui-lb-row:hover { background: rgba(193,68,14,0.025); }
  .dui-lb-left  { display: flex; align-items: center; gap: 14px; }
  .dui-lb-rank  { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #e8d8c0; width: 24px; }
  .dui-lb-rank-1 { color: #b45309; }
  .dui-lb-rank-2 { color: #475569; }
  .dui-lb-rank-3 { color: #9a3412; }
  .dui-lb-name  { font-size: 13px; font-weight: 500; color: #2c1a08; }
  .dui-lb-val   { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #5a8a3c; }
  .dui-lb-empty { padding: 40px 22px; text-align: center; font-size: 12px; color: #e8d8c0; }

  /* Cert mini cards */
  .dui-cert-strip { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
  .dui-cert-chip  { background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 9px; padding: 8px 14px; font-size: 11px; font-family: 'JetBrains Mono', monospace; color: #8c7055; display: flex; align-items: center; gap: 8px; }
  .dui-cert-chip span { color: #2c1a08; font-weight: 500; }

  .dui-empty { padding: 56px 24px; text-align: center; font-size: 12px; color: #e8d8c0; }

  /* Rank medals */
  .dui-medal { font-size: 16px; }
`

export default function DashboardUI({
  balances,
  claims,
  usdBalances,
  currentFTRate,
  userName,
  myCertificates,
  totalBurnedFT,
  estimatedFTValue,
  estimatedImpactValue,
  impactTier,
  tierColor,
  tierBg,
  nextTierName,
  remainingToNextTier,
  tierProgress,
  globalImpactScore,
  activeFTGlobally,
  estimatedFTImpact,
  mintedNFTGlobally,
  nftImpactScore,
  totalDonationsApproved,
  totalDonationsRejected,
  activeDonations,
  topImpactEnterprises,
  setActiveTab,
}) {
  const bal          = balances[userName] || { available: 0, locked: 0 }
  const usd          = usdBalances[userName] || 0
  const myClaims     = (claims || []).filter(c => c.enterprise === userName)
  const myPending    = myClaims.filter(c => c.status !== "minted" && c.status !== "rejected").length
  const tierCfg      = TIER_CONFIG[impactTier] || TIER_CONFIG["No Tier"]
  const MEDALS       = ["🥇", "🥈", "🥉"]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DASH_CSS }} />
      <div className="dui-root">
        <div className="dui-orb1" />
        <div className="dui-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="dui-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="dui-wrap">

          {/* ── Header ── */}
          <header className="dui-header">
            <div className="dui-eyebrow">Enterprise overview</div>
            <h1 className="dui-title">
              <em>Dashboard</em>
              <span style={{ fontSize: 34, opacity: 0.8,  transform: "rotate(-8deg)",  display: "inline-block" }}>📊</span>
              <span style={{ fontSize: 22, opacity: 0.5,  transform: "rotate(12deg)",  display: "inline-block", marginLeft: -4 }}>🌿</span>
              <span style={{ fontSize: 16, opacity: 0.4,  transform: "rotate(-18deg)", display: "inline-block", marginLeft: -6 }}>✦</span>
            </h1>
          </header>

          {/* ── Your Stats ── */}
          <div className="dui-section-label">Your statistics</div>

          <div className="dui-grid-4">
            {/* FT Balance */}
            <div className="dui-card dui-card-accent-green">
              <div className="dui-card-label">FT Balance</div>
              <div className="dui-card-val dui-val-green">{bal.available}</div>
              <div className="dui-card-sub">
                Locked&nbsp;<span>{bal.locked} FT</span>
              </div>
              <div className="dui-card-sub" style={{ marginTop: 6 }}>
                Est. value&nbsp;<span>${estimatedFTValue.toFixed(2)}</span>
              </div>
            </div>

            {/* USD Balance */}
            <div className="dui-card dui-card-accent-amber">
              <div className="dui-card-label">USD Balance</div>
              <div className="dui-card-val dui-val-accent">${usd.toLocaleString("en", { minimumFractionDigits: 2 })}</div>
            </div>

            {/* Claims */}
            <div className="dui-card dui-card-accent-blue">
              <div className="dui-card-label">My Claims</div>
              <div className="dui-card-val dui-val-blue">{myClaims.length}</div>
              <div className="dui-card-sub">
                Pending&nbsp;<span style={{ color: "#c87820" }}>{myPending}</span>
              </div>
            </div>

            {/* FT Rate */}
            <div className="dui-card">
              <div className="dui-card-label">Current FT Rate</div>
              <div className="dui-card-val">${currentFTRate}</div>
              <div className="dui-card-sub">per FT</div>
              <button className="dui-cta" onClick={() => setActiveTab("trade")}>
                Go to Market 🛒
              </button>
            </div>
          </div>

          {/* ── Impact Panel ── */}
          <div className="dui-impact-panel" style={{ marginTop: 0 }}>
            <div className="dui-impact-grid">

              {/* Left col */}
              <div>
                <div className="dui-impact-left-label">Certificates</div>
                <div className="dui-impact-left-val">
                  {myCertificates.length}<span>NFTs</span>
                </div>
                <div className="dui-impact-left-label">Cumulative burned</div>
                <div className="dui-impact-left-val">
                  {totalBurnedFT}<span>FT</span>
                </div>
              </div>

              {/* Right col */}
              <div>
                <div className="dui-tier-row">
                  <span className="dui-tier-label">Tier</span>
                  <span className={`dui-tier-badge ${tierCfg.badge}`}>
                    {tierCfg.icon} {impactTier}
                  </span>
                </div>

                {remainingToNextTier !== null && (
                  <div className="dui-progress-wrap">
                    <div className="dui-progress-meta">
                      <span>Next: {nextTierName}</span>
                      <span>{remainingToNextTier} FT to go</span>
                    </div>
                    <div className="dui-progress-track">
                      <div
                        className="dui-progress-fill"
                        style={{ width: `${tierProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="dui-impact-val-row">
                  <div className="dui-impact-val-label">Estimated impact value</div>
                  <div className="dui-impact-val-num">${estimatedImpactValue.toFixed(2)}</div>
                </div>

                {myCertificates.length > 0 && (
                  <div className="dui-cert-strip" style={{ marginTop: 20 }}>
                    {myCertificates.slice(0, 6).map((cert, i) => (
                      <div key={i} className="dui-cert-chip">
                        🏅 <span>{cert.burnedAmount} FT</span>
                      </div>
                    ))}
                    {myCertificates.length > 6 && (
                      <div className="dui-cert-chip" style={{ color: "#c4a882" }}>
                        +{myCertificates.length - 6} more
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* ── Global Stats ── */}
          <div className="dui-section-label">Global EFW statistics</div>

          <div className="dui-grid-3">
            <div className="dui-card dui-card-accent-green">
              <div className="dui-card-label">Global Impact Score</div>
              <div className="dui-card-val dui-val-green">${globalImpactScore?.toLocaleString()}</div>
              <div className="dui-card-sub">NFT Impact + Active FT Impact</div>
            </div>

            <div className="dui-card dui-card-accent-blue">
              <div className="dui-card-label">Active FT Globally</div>
              <div className="dui-card-val dui-val-blue">{activeFTGlobally?.toLocaleString()}<span style={{ fontSize: 14, opacity: 0.45, marginLeft: 6 }}>FT</span></div>
              <div className="dui-card-sub">Est. Impact&nbsp;<span>${estimatedFTImpact?.toLocaleString()}</span></div>
            </div>

            <div className="dui-card dui-card-accent-purple">
              <div className="dui-card-label">Minted NFT Globally</div>
              <div className="dui-card-val dui-val-purple">{mintedNFTGlobally?.toLocaleString()}</div>
              <div className="dui-card-sub">NFT Impact&nbsp;<span>${nftImpactScore?.toLocaleString()}</span></div>
            </div>
          </div>

          <div className="dui-grid-3">
            <div className="dui-card dui-card-accent-green">
              <div className="dui-card-label">Donations Approved</div>
              <div className="dui-card-val dui-val-green">{totalDonationsApproved?.toLocaleString()}</div>
            </div>

            <div className="dui-card dui-card-accent-red">
              <div className="dui-card-label">Donations Rejected</div>
              <div className="dui-card-val dui-val-red">{totalDonationsRejected?.toLocaleString()}</div>
            </div>

            <div className="dui-card dui-card-accent-amber">
              <div className="dui-card-label">Active Donations Queue</div>
              <div className="dui-card-val dui-val-amber">{activeDonations?.toLocaleString()}</div>
            </div>
          </div>

          {/* ── Leaderboard ── */}
          <div className="dui-section-label">Top impact enterprises by cumulative NFT value</div>

          <div className="dui-lb-wrap">
            {(topImpactEnterprises || []).length > 0 ? (
              topImpactEnterprises.map((e, index) => (
                <div key={e.enterprise} className="dui-lb-row">
                  <div className="dui-lb-left">
                    <span className={`dui-lb-rank${index < 3 ? ` dui-lb-rank-${index + 1}` : ""}`}>
                      {index < 3 ? MEDALS[index] : `#${index + 1}`}
                    </span>
                    <span className="dui-lb-name">{e.enterprise}</span>
                  </div>
                  <span className="dui-lb-val">${e.impactScore?.toLocaleString()}</span>
                </div>
              ))
            ) : (
              <div className="dui-lb-empty">🌱 No enterprise impact data available.</div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
