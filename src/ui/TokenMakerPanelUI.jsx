const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "tmta 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "tmtb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "tmtc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "tmtd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "tmte 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "tmta 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "tmtf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "tmtwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "tmtc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "tmtb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "tmte 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "tmtd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "tmtspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "tmtwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "tmta 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "tmtc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "tmtd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "tmte 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const STATUS_MAP = {
  submitted:            "Claim Submitted",
  foodbank_approved:    "FoodBank Approved",
  government_confirmed: "Government Approved",
  mint_ready:           "Donation ID Validated",
  minted:               "Token Minted",
  rejected:             "Rejected",
}

const TM_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes tmta{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes tmtb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes tmtc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes tmtd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes tmte{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes tmtf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes tmtspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes tmtwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .tm-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .tm-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .tm-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .tm-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .tm-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .tm-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .tm-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .tm-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .tm-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Claim cards */
  .tm-claims-grid { display: grid; gap: 16px; }
  .tm-claim-card  {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 28px 30px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .tm-claim-card:hover { border-color: #e0ceb0; box-shadow: 0 4px 16px rgba(0,0,0,0.07); }

  .tm-claim-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px 28px; margin-bottom: 24px; }
  @media (max-width: 800px) { .tm-claim-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px)  { .tm-claim-grid { grid-template-columns: 1fr; } }

  .tm-field-label     { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 4px; }
  .tm-field-val       { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #2c1a08; }
  .tm-field-val-amber { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #c87820; }
  .tm-field-val-green { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #5a8a3c; }

  .tm-status-badge { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.18); }

  .tm-evidence-link { font-size: 12px; color: #c1440e; text-decoration: none; border: 1px solid rgba(193,68,14,0.2); padding: 4px 12px; border-radius: 20px; background: rgba(193,68,14,0.04); transition: all 0.18s; display: inline-flex; align-items: center; gap: 6px; }
  .tm-evidence-link:hover { background: #c1440e; color: #fffcf8; }

  /* Action row */
  .tm-action-row { display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid #f0e2cc; }
  .tm-btn-mint   {
    background: #c1440e; color: #fffcf8; border: none;
    padding: 10px 26px; border-radius: 9px; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; display: inline-flex; align-items: center; gap: 8px;
  }
  .tm-btn-mint:hover { background: #a33a0c; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(193,68,14,0.28); }
  .tm-btn-mint:active { transform: translateY(0); }

  /* Empty */
  .tm-empty { padding: 48px 24px; text-align: center; font-size: 12px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; }

  /* History table */
  .tm-table-wrap { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .tm-table      { width: 100%; border-collapse: collapse; font-size: 12px; }
  .tm-table thead tr { background: #fdf8f2; border-bottom: 1px solid #f0e2cc; }
  .tm-table thead th { text-align: left; padding: 12px 16px; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; white-space: nowrap; }
  .tm-table tbody tr { border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .tm-table tbody tr:last-child { border-bottom: none; }
  .tm-table tbody tr:hover { background: rgba(193,68,14,0.025); }
  .tm-table td   { padding: 13px 16px; color: #8c7055; vertical-align: middle; }
  .tm-table .td-main   { font-weight: 500; color: #2c1a08; }
  .tm-table .td-mono   { font-family: 'JetBrains Mono', monospace; color: #2c1a08; }
  .tm-table .td-minted { display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(90,138,60,0.08); color: #5a8a3c; border: 1px solid rgba(90,138,60,0.22); }
`

export default function TokenMakerPanelUI({
  readyToMint,
  allClaims,
  mintClaim
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TM_CSS }} />
      <div className="tm-root">
        <div className="tm-orb1" />
        <div className="tm-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="tm-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="tm-wrap">

          {/* ── Header ── */}
          <div className="tm-eyebrow">EFW Rescue · TokenMaker</div>
          <div className="tm-title">
            Mint <em>Tokens</em> 🪙
          </div>

          {/* ── Ready to Mint ── */}
          <div className="tm-section-label">Claims ready for minting</div>

          {readyToMint.length === 0 ? (
            <div className="tm-claim-card">
              <div className="tm-empty">🌱 No claims ready for minting.</div>
            </div>
          ) : (
            <div className="tm-claims-grid">
              {readyToMint.map(claim => (
                <div key={claim.id} className="tm-claim-card">

                  <div className="tm-claim-grid">

                    <div>
                      <div className="tm-field-label">Enterprise</div>
                      <div className="tm-field-val">{claim.enterprise}</div>
                    </div>

                    {claim.donationId && (
                      <>
                        <div>
                          <div className="tm-field-label">Donation ID</div>
                          <div className="tm-field-val">{claim.donationId}</div>
                        </div>
                        <div>
                          <div className="tm-field-label">Status</div>
                          <span className="tm-status-badge">
                            {STATUS_MAP[claim.status] || "Unknown"}
                          </span>
                        </div>
                      </>
                    )}

                    <div>
                      <div className="tm-field-label">Face Value</div>
                      <div className="tm-field-val">{claim.faceValue} <span style={{ fontSize: 11, opacity: 0.5 }}>FT</span></div>
                    </div>

                    <div>
                      <div className="tm-field-label">Contribution Fee</div>
                      <div className="tm-field-val-amber">${claim.contributionFee}</div>
                    </div>

                    <div>
                      <div className="tm-field-label">FoodBank Target</div>
                      <div className="tm-field-val">{claim.foodBank}</div>
                    </div>

                    <div>
                      <div className="tm-field-label">Donation Type</div>
                      <div className="tm-field-val">{claim.donationType}</div>
                    </div>

                    <div>
                      <div className="tm-field-label">Evidence</div>
                      <a href={claim.evidence} target="_blank" className="tm-evidence-link">
                        🔗 View Evidence
                      </a>
                    </div>

                    <div>
                      <div className="tm-field-label">Contribution Fee Status</div>
                      <div className="tm-field-val-green">Released to FoodBank</div>
                    </div>

                  </div>

                  <div className="tm-action-row">
                    <button className="tm-btn-mint" onClick={() => mintClaim(claim.id)}>
                      🪙 Mint Token
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* ── Mint History ── */}
          <div className="tm-section-label">Token mint history</div>

          <div className="tm-table-wrap">
            {allClaims.filter(c => c.history.some(h => h.role === "tokenmaker")).length === 0 ? (
              <div className="tm-empty">🌱 No tokens minted yet.</div>
            ) : (
              <table className="tm-table">
                <thead>
                  <tr>
                    <th>Enterprise</th>
                    <th>Donation ID</th>
                    <th>FT Minted</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allClaims
                    .filter(c => c.history.some(h => h.role === "tokenmaker"))
                    .map(claim => (
                      <tr key={claim.id}>
                        <td className="td-main">{claim.enterprise}</td>
                        <td className="td-mono">{claim.donationId}</td>
                        <td className="td-mono">{claim.faceValue} FT</td>
                        <td>
                          <span className="td-minted">✦ Minted</span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
