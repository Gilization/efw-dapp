const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "vlta 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "vltb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "vltc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "vltd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "vlte 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "vlta 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "vltf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "vltwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "vltc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "vltb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "vlte 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "vltd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "vltspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "vltwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "vlta 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "vltc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "vltd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "vlte 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
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

const VL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes vlta{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes vltb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes vltc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes vltd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes vlte{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes vltf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes vltspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes vltwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .vl-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .vl-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .vl-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .vl-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .vl-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .vl-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .vl-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .vl-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .vl-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Claim cards */
  .vl-claims-grid { display: grid; gap: 16px; }
  .vl-claim-card  {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 28px 30px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .vl-claim-card:hover { border-color: #e0ceb0; box-shadow: 0 4px 16px rgba(0,0,0,0.07); }

  .vl-claim-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px 28px; margin-bottom: 24px; }
  @media (max-width: 800px) { .vl-claim-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px)  { .vl-claim-grid { grid-template-columns: 1fr; } }

  .vl-field-label     { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 4px; }
  .vl-field-val       { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #2c1a08; }
  .vl-field-val-amber { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #c87820; }
  .vl-field-val-blue  { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 400; color: #4a7fa8; }

  .vl-status-badge { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.18); }

  .vl-evidence-link { font-size: 12px; color: #c1440e; text-decoration: none; border: 1px solid rgba(193,68,14,0.2); padding: 4px 12px; border-radius: 20px; background: rgba(193,68,14,0.04); transition: all 0.18s; display: inline-flex; align-items: center; gap: 6px; }
  .vl-evidence-link:hover { background: #c1440e; color: #fffcf8; }

  /* Action row */
  .vl-action-row  { display: flex; align-items: center; gap: 12px; padding-top: 20px; border-top: 1px solid #f0e2cc; flex-wrap: wrap; }
  .vl-btn-verify  { background: #4a7fa8; color: #fffcf8; border: none; padding: 9px 22px; border-radius: 9px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.18s; letter-spacing: 0.3px; }
  .vl-btn-verify:hover { background: #3a6a8e; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(74,127,168,0.28); }
  .vl-btn-reject  { background: transparent; color: #b91c1c; border: 1px solid rgba(185,28,28,0.25); padding: 9px 22px; border-radius: 9px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.18s; letter-spacing: 0.3px; }
  .vl-btn-reject:hover { background: #b91c1c; color: #fffcf8; border-color: #b91c1c; }

  .vl-reject-input {
    flex: 1; min-width: 200px;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 9px;
    padding: 9px 14px; font-family: 'Inter', sans-serif;
    font-size: 12px; color: #2c1a08; outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .vl-reject-input:focus { border-color: rgba(185,28,28,0.35); box-shadow: 0 0 0 3px rgba(185,28,28,0.07); }
  .vl-reject-input::placeholder { color: #e8d8c0; }

  /* Empty */
  .vl-empty { padding: 48px 24px; text-align: center; font-size: 12px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; }

  /* History table */
  .vl-table-wrap { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .vl-table      { width: 100%; border-collapse: collapse; font-size: 12px; }
  .vl-table thead tr { background: #fdf8f2; border-bottom: 1px solid #f0e2cc; }
  .vl-table thead th { text-align: left; padding: 12px 16px; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; white-space: nowrap; }
  .vl-table tbody tr { border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .vl-table tbody tr:last-child { border-bottom: none; }
  .vl-table tbody tr:hover { background: rgba(193,68,14,0.025); }
  .vl-table td   { padding: 13px 16px; color: #8c7055; vertical-align: middle; }
  .vl-table .td-main   { font-weight: 500; color: #2c1a08; }
  .vl-table .td-mono   { font-family: 'JetBrains Mono', monospace; color: #2c1a08; }
  .vl-table .td-blue   { font-family: 'JetBrains Mono', monospace; color: #4a7fa8; font-weight: 500; }
  .vl-table .td-red    { color: #b91c1c; font-size: 11px; }
  .vl-table .td-status { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.18); white-space: nowrap; }
  .vl-table .td-action { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(74,127,168,0.07); color: #4a7fa8; border: 1px solid rgba(74,127,168,0.2); }
`

export default function ValidatorPanelUI({
  pendingClaims,
  allClaims,
  verifyValidator,
  rejectClaim,
  rejectReasons,
  setRejectReasons
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: VL_CSS }} />
      <div className="vl-root">
        <div className="vl-orb1" />
        <div className="vl-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="vl-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="vl-wrap">

          {/* ── Header ── */}
          <div className="vl-eyebrow">EFW Rescue · Validator</div>
          <div className="vl-title">
            Validate <em>Claims</em> 🔍
          </div>

          {/* ── Pending Claims ── */}
          <div className="vl-section-label">Claims awaiting validation</div>

          {pendingClaims.length === 0 ? (
            <div className="vl-claim-card">
              <div className="vl-empty">🌱 No claims awaiting validation.</div>
            </div>
          ) : (
            <div className="vl-claims-grid">
              {pendingClaims.map(claim => {
                const feeStatus = FEE_STATUS(claim.status)
                return (
                  <div key={claim.id} className="vl-claim-card">

                    <div className="vl-claim-grid">

                      <div>
                        <div className="vl-field-label">Enterprise</div>
                        <div className="vl-field-val">{claim.enterprise}</div>
                      </div>

                      {claim.donationId && (
                        <>
                          <div>
                            <div className="vl-field-label">Donation ID</div>
                            <div className="vl-field-val">{claim.donationId}</div>
                          </div>
                          <div>
                            <div className="vl-field-label">Status</div>
                            <span className="vl-status-badge">
                              {STATUS_MAP[claim.status] || "Unknown"}
                            </span>
                          </div>
                        </>
                      )}

                      <div>
                        <div className="vl-field-label">Requested FT</div>
                        <div className="vl-field-val">{claim.faceValue} <span style={{ fontSize: 11, opacity: 0.5 }}>FT</span></div>
                      </div>

                      <div>
                        <div className="vl-field-label">Contribution Fee</div>
                        <div className="vl-field-val-amber">${claim.contributionFee}</div>
                      </div>

                      <div>
                        <div className="vl-field-label">Est. Donation Value</div>
                        <div className="vl-field-val-blue">${claim.estimatedDonationValue}</div>
                      </div>

                      <div>
                        <div className="vl-field-label">FoodBank Target</div>
                        <div className="vl-field-val">{claim.foodBank}</div>
                      </div>

                      <div>
                        <div className="vl-field-label">Donation Type</div>
                        <div className="vl-field-val">{claim.donationType}</div>
                      </div>

                      <div>
                        <div className="vl-field-label">Evidence</div>
                        <a href={claim.evidence} target="_blank" className="vl-evidence-link">
                          🔗 View Evidence
                        </a>
                      </div>

                      <div>
                        <div className="vl-field-label">Contribution Fee Status</div>
                        <div className="vl-field-val" style={{ color: feeStatus.color }}>{feeStatus.label}</div>
                      </div>

                    </div>

                    <div className="vl-action-row">
                      <button className="vl-btn-verify" onClick={() => verifyValidator(claim.id)}>
                        ✓ Verify
                      </button>
                      <button
                        className="vl-btn-reject"
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
                        className="vl-reject-input"
                      />
                    </div>

                  </div>
                )
              })}
            </div>
          )}

          {/* ── Decision History ── */}
          <div className="vl-section-label">Validator decision history</div>

          <div className="vl-table-wrap">
            {allClaims.filter(c => c.history.some(h => h.role === "validator")).length === 0 ? (
              <div className="vl-empty">🌱 No validator decisions recorded yet.</div>
            ) : (
              <table className="vl-table">
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
                    .filter(c => c.history.some(h => h.role === "validator"))
                    .map(claim => {
                      const validatorAction = claim.history.find(h => h.role === "validator")
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
                            <span className="td-action">{validatorAction?.action || "—"}</span>
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
