const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "neta 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "netb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "netc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "netd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "nete 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "neta 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "netf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "netwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "netc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "netb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "nete 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "netd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "netspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "netwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "neta 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "netc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "netd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "nete 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const MEDALS = ["🥇", "🥈", "🥉"]

const NE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes neta{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes netb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes netc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes netd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes nete{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes netf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes netspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes netwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .ne-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .ne-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .ne-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .ne-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .ne-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .ne-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .ne-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .ne-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .ne-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Grids */
  .ne-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 14px; }
  @media (max-width: 900px) { .ne-grid-3 { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .ne-grid-3 { grid-template-columns: 1fr; } }

  /* Stat cards */
  .ne-card {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 22px 24px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .ne-card:hover { border-color: #e0ceb0; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }

  .ne-card-accent-green  { border-left: 2.5px solid #5a8a3c; }
  .ne-card-accent-blue   { border-left: 2.5px solid #4a7fa8; }
  .ne-card-accent-purple { border-left: 2.5px solid #7c5fa8; }
  .ne-card-accent-red    { border-left: 2.5px solid #b91c1c; }
  .ne-card-accent-amber  { border-left: 2.5px solid #c87820; }

  .ne-card-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 10px; }
  .ne-card-val   { font-family: 'JetBrains Mono', monospace; font-size: 28px; font-weight: 400; color: #2c1a08; line-height: 1; margin-bottom: 6px; }
  .ne-card-sub   { font-size: 11px; color: #c4a882; font-family: 'JetBrains Mono', monospace; }
  .ne-card-sub span { color: #8c7055; }

  .ne-val-green  { color: #5a8a3c !important; }
  .ne-val-blue   { color: #4a7fa8 !important; }
  .ne-val-purple { color: #7c5fa8 !important; }
  .ne-val-red    { color: #b91c1c !important; }
  .ne-val-amber  { color: #c87820 !important; }

  /* Leaderboard */
  .ne-lb-wrap  { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .ne-lb-row   { display: flex; justify-content: space-between; align-items: center; padding: 16px 22px; border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .ne-lb-row:last-child { border-bottom: none; }
  .ne-lb-row:hover { background: rgba(193,68,14,0.025); }
  .ne-lb-left  { display: flex; align-items: center; gap: 14px; }
  .ne-lb-rank  { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #e8d8c0; width: 24px; }
  .ne-lb-rank-1 { color: #b45309; }
  .ne-lb-rank-2 { color: #475569; }
  .ne-lb-rank-3 { color: #9a3412; }
  .ne-lb-name  { font-size: 13px; font-weight: 500; color: #2c1a08; }
  .ne-lb-val   { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #5a8a3c; }
  .ne-lb-empty { padding: 40px 22px; text-align: center; font-size: 12px; color: #e8d8c0; }
`

export default function NonEnterpriseDashboardUI({
  globalImpactScore,
  activeFTGlobally,
  estimatedFTImpact,
  mintedNFTGlobally,
  nftImpactScore,
  totalDonationsApproved,
  totalDonationsRejected,
  activeDonations,
  topImpactEnterprises
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NE_CSS }} />
      <div className="ne-root">
        <div className="ne-orb1" />
        <div className="ne-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="ne-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="ne-wrap">

          {/* ── Header ── */}
          <div className="ne-eyebrow">EFW Rescue · Global</div>
          <div className="ne-title">
            Global <em>Impact</em> Dashboard 🌿
          </div>

          {/* ── Top Stats ── */}
          <div className="ne-section-label">Platform overview</div>

          <div className="ne-grid-3">
            <div className="ne-card ne-card-accent-green">
              <div className="ne-card-label">Global Impact Score</div>
              <div className="ne-card-val ne-val-green">${globalImpactScore.toLocaleString()}</div>
              <div className="ne-card-sub">NFT Impact + Active FT Impact</div>
            </div>

            <div className="ne-card ne-card-accent-blue">
              <div className="ne-card-label">Active FT Globally</div>
              <div className="ne-card-val ne-val-blue">
                {activeFTGlobally.toLocaleString()}
                <span style={{ fontSize: 14, opacity: 0.45, marginLeft: 6 }}>FT</span>
              </div>
              <div className="ne-card-sub">Est. Impact&nbsp;<span>${estimatedFTImpact.toLocaleString()}</span></div>
            </div>

            <div className="ne-card ne-card-accent-purple">
              <div className="ne-card-label">Minted NFT Globally</div>
              <div className="ne-card-val ne-val-purple">{mintedNFTGlobally.toLocaleString()}</div>
              <div className="ne-card-sub">NFT Impact&nbsp;<span>${nftImpactScore.toLocaleString()}</span></div>
            </div>
          </div>

          <div className="ne-grid-3">
            <div className="ne-card ne-card-accent-green">
              <div className="ne-card-label">Donations Approved</div>
              <div className="ne-card-val ne-val-green">{totalDonationsApproved.toLocaleString()}</div>
            </div>

            <div className="ne-card ne-card-accent-red">
              <div className="ne-card-label">Donations Rejected</div>
              <div className="ne-card-val ne-val-red">{totalDonationsRejected.toLocaleString()}</div>
            </div>

            <div className="ne-card ne-card-accent-amber">
              <div className="ne-card-label">Active Donations Queue</div>
              <div className="ne-card-val ne-val-amber">{activeDonations.toLocaleString()}</div>
            </div>
          </div>

          {/* ── Leaderboard ── */}
          <div className="ne-section-label">Top impact enterprises by cumulative NFT value</div>

          <div className="ne-lb-wrap">
            {topImpactEnterprises.length === 0 ? (
              <div className="ne-lb-empty">🌱 No impact certificates minted yet.</div>
            ) : (
              topImpactEnterprises.map((item, index) => (
                <div key={item.enterprise} className="ne-lb-row">
                  <div className="ne-lb-left">
                    <span className={`ne-lb-rank${index < 3 ? ` ne-lb-rank-${index + 1}` : ""}`}>
                      {index < 3 ? MEDALS[index] : `#${index + 1}`}
                    </span>
                    <span className="ne-lb-name">{item.enterprise}</span>
                  </div>
                  <span className="ne-lb-val">${item.impact.toLocaleString()}</span>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </>
  )
}
