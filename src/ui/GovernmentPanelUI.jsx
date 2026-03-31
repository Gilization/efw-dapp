const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "gvta 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "gvtb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "gvtc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "gvtd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "gvte 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "gvta 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "gvtf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "gvtwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "gvtc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "gvtb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "gvte 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "gvtd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "gvtspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "gvtwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "gvta 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "gvtc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "gvtd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "gvte 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const STATUS_MAP = {
  submitted:            "Claim Submitted",
  foodbank_approved:    "FoodBank Approved",
  government_confirmed: "Government Approved",
  mint_ready:           "Donation ID Validated",
  minted:               "Token Minted",
  rejected:             "Rejected",
}

const FEE_STATUS = (status) => {
  if (["foodbank_approved","government_confirmed","mint_ready","minted"].includes(status))
    return { label: "Released to FoodBank", color: "#5a8a3c" }
  if (status === "rejected")
    return { label: "Refunded", color: "#b91c1c" }
  return { label: "Received", color: "#c87820" }
}

const GV_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes gvta{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes gvtb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes gvtc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes gvtd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes gvte{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes gvtf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes gvtspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes gvtwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .gv-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .gv-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .gv-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .gv-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .gv-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .gv-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .gv-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .gv-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .gv-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Claim cards */
  .gv-claims-grid { display: grid; gap: 16px; }
  .gv-claim-card  {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 28px 30px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .gv-claim-card:hover { border-color: #e0ceb0; box-shadow: 0 4px 16px rgba(0,0,0,0.07); }

  .gv-claim-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px 28px; margin-bottom: 24px; }
  @media (max-width: 800px) { .gv-claim-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px)  { .gv-claim-grid { grid-template-columns: 1fr; } }

  .gv-field-label     { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 4px; }
  .gv-field-val       { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #2c1a08; }
  .gv-field-val-amber { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #c87820; }
  .gv-field-val-blue  { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #4a7fa8; }

  .gv-status-badge { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.18); }

  .gv-evidence-link { font-size: 12px; color: #c1440e; text-decoration: none; border: 1px solid rgba(193,68,14,0.2); padding: 4px 12px; border-radius: 20px; background: rgba(193,68,14,0.04); transition: all 0.18s; display: inline-flex; align-items: center; gap: 6px; }
  .gv-evidence-link:hover { background: #c1440e; color: #fffcf8; }

  /* Action row */
  .gv-action-row  { display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid #f0e2cc; flex-wrap: wrap; }
  .gv-btn-confirm { background: #5a8a3c; color: #fffcf8; border: none; padding: 9px 22px; border-radius: 9px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.18s; letter-spacing: 0.3px; }
  .gv-btn-confirm:hover { background: #4a7230; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(90,138,60,0.25); }
  .gv-btn-reject  { background: transparent; color: #b91c1c; border: 1px solid rgba(185,28,28,0.25); padding: 9px 22px; border-radius: 9px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.18s; letter-spacing: 0.3px; }
  .gv-btn-reject:hover { background: #b91c1c; color: #fffcf8; border-color: #b91c1c; }

  .gv-reject-input {
    flex: 1; min-width: 200px;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 9px;
    padding: 9px 14px; font-family: 'Inter', sans-serif;
    font-size: 12px; color: #2c1a08; outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .gv-reject-input:focus { border-color: rgba(185,28,28,0.35); box-shadow: 0 0 0 3px rgba(185,28,28,0.07); }
  .gv-reject-input::placeholder { color: #e8d8c0; }

  /* Empty */
  .gv-empty { padding: 48px 24px; text-align: center; font-size: 12px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; }

  /* History table */
  .gv-table-wrap { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .gv-table      { width: 100%; border-collapse: collapse; font-size: 12px; }
  .gv-table thead tr { background: #fdf8f2; border-bottom: 1px solid #f0e2cc; }
  .gv-table thead th { text-align: left; padding: 12px 16px; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; white-space: nowrap; }
  .gv-table tbody tr { border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .gv-table tbody tr:last-child { border-bottom: none; }
  .gv-table tbody tr:hover { background: rgba(193,68,14,0.025); }
  .gv-table td   { padding: 13px 16px; color: #8c7055; vertical-align: middle; }
  .gv-table .td-main  { font-weight: 500; color: #2c1a08; }
  .gv-table .td-mono  { font-family: 'JetBrains Mono', monospace; color: #2c1a08; }
  .gv-table .td-blue  { font-family: 'JetBrains Mono', monospace; color: #4a7fa8; font-weight: 500; }
  .gv-table .td-red   { color: #b91c1c; font-size: 11px; }
  .gv-table .td-status { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.18); white-space: nowrap; }
  .gv-table .td-action { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(74,127,168,0.07); color: #4a7fa8; border: 1px solid rgba(74,127,168,0.2); }
`

export default function GovernmentPanelUI({
  pendingClaims,
  allClaims,
  confirmGovernment,
  rejectClaim,
  rejectReasons,
  setRejectReasons
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GV_CSS }} />
      <div className="gv-root">
        <div className="gv-orb1" />
        <div className="gv-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="gv-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="gv-wrap">

          {/* ── Header ── */}
          <div className="gv-eyebrow">EFW Rescue · Government</div>
          <div className="gv-title">
            Claims <em>Approval</em> 🏛️
          </div>

          {/* ── Pending Claims ── */}
          <div className="gv-section-label">Claims awaiting confirmation</div>

          {pendingClaims.length === 0 ? (
            <div className="gv-claim-card">
              <div className="gv-empty">🌱 No claims awaiting confirmation.</div>
            </div>
          ) : (
            <div className="gv-claims-grid">
              {pendingClaims.map(claim => {
                const feeStatus = FEE_STATUS(claim.status)
                return (
                  <div key={claim.id} className="gv-claim-card">

                    <div className="gv-claim-grid">

                      <div>
                        <div className="gv-field-label">Enterprise</div>
                        <div className="gv-field-val">{claim.enterprise}</div>
                      </div>

                      {claim.donationId && (
                        <>
                          <div>
                            <div className="gv-field-label">Donation ID</div>
                            <div className="gv-field-val">{claim.donationId}</div>
                          </div>
                          <div>
                            <div className="gv-field-label">Status</div>
                            <span className="gv-status-badge">
                              {STATUS_MAP[claim.status] || "Unknown"}
                            </span>
                          </div>
                        </>
                      )}

                      <div>
                        <div className="gv-field-label">Requested FT</div>
                        <div className="gv-field-val">{claim.faceValue} <span style={{ fontSize: 11, opacity: 0.5 }}>FT</span></div>
                      </div>

                      <div>
                        <div className="gv-field-label">Contribution Fee</div>
                        <div className="gv-field-val-amber">${claim.contributionFee}</div>
                      </div>

                      <div>
                        <div className="gv-field-label">Est. Donation Value</div>
                        <div className="gv-field-val-blue">${claim.estimatedDonationValue}</div>
                      </div>

                      <div>
                        <div className="gv-field-label">FoodBank Target</div>
                        <div className="gv-field-val">{claim.foodBank}</div>
                      </div>

                      <div>
                        <div className="gv-field-label">Donation Type</div>
                        <div className="gv-field-val">{claim.donationType}</div>
                      </div>

                      <div>
                        <div className="gv-field-label">Evidence</div>
                        <a href={claim.evidence} target="_blank" className="gv-evidence-link">
                          🔗 View Evidence
                        </a>
                      </div>

                      <div>
                        <div className="gv-field-label">Contribution Fee Status</div>
                        <div className="gv-field-val" style={{ color: feeStatus.color }}>{feeStatus.label}</div>
                      </div>

                    </div>

                    <div className="gv-action-row">
                      <button className="gv-btn-confirm" onClick={() => confirmGovernment(claim.id)}>
                        ✓ Confirm
                      </button>
                      <button
                        className="gv-btn-reject"
                        onClick={() => rejectClaim(claim.id, rejectReasons[claim.id] || "")}
                      >
                        ✕ Reject
                      </button>
                      <input
                        type="text"
                        placeholder="Reject reason…"
                        value={rejectReasons[claim.id] || ""}
                        onChange={e =>
                          setRejectReasons(prev => ({ ...prev, [claim.id]: e.target.value }))
                        }
                        className="gv-reject-input"
                      />
                    </div>

                  </div>
                )
              })}
            </div>
          )}

          {/* ── Decision History ── */}
          <div className="gv-section-label">Government decision history</div>

          <div className="gv-table-wrap">
            {allClaims.filter(c => c.history.some(h => h.role === "government")).length === 0 ? (
              <div className="gv-empty">🌱 No government decisions recorded yet.</div>
            ) : (
              <table className="gv-table">
                <thead>
                  <tr>
                    <th>Enterprise</th>
                    <th>Donation ID</th>
                    <th>FT</th>
                    <th>Estimated Value</th>
                    <th>Status</th>
                    <th>Decision</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {allClaims
                    .filter(c => c.history.some(h => h.role === "government"))
                    .map(claim => {
                      const govAction = claim.history.find(h => h.role === "government")
                      return (
                        <tr key={claim.id}>
                          <td className="td-main">{claim.enterprise}</td>
                          <td className="td-mono">{claim.donationId}</td>
                          <td className="td-mono">{claim.faceValue} FT</td>
                          <td className="td-blue">${claim.estimatedDonationValue}</td>
                          <td>
                            <span className="td-status">
                              {claim.status === "rejected"
                                ? `Rejected by ${(() => {
                                    const actor = claim.history?.find(h => h.action === "rejected")?.role
                                    return actor ? actor.charAt(0).toUpperCase() + actor.slice(1) : "Unknown"
                                  })()}`
                                : claim.status
                              }
                            </span>
                          </td>
                          <td>
                            <span className="td-action">{govAction?.action || "—"}</span>
                          </td>
                          <td className="td-red">
                            {claim.history
                              ?.filter(h => h.action === "rejected")
                              .map(h => h.reason)
                              .join(", ") || "—"}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
