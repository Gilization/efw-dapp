const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "ectra 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "ectrb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "ectrc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "ectrd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "ectre 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "ectra 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "ectrf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "ectrwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "ectrc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "ectrb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "ectre 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "ectrd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "ectrspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "ectrwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "ectra 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "ectrc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "ectrd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "ectre 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const STATUS_MAP = {
  submitted:            "Claim Submitted",
  foodbank_approved:    "FoodBank Approved",
  government_confirmed: "Government Approved",
  mint_ready:           "Donation ID Validated",
  minted:               "Token Minted",
  rejected:             "Rejected",
}

const EC_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes ectra{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes ectrb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes ectrc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes ectrd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes ectre{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes ectrf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes ectrspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes ectrwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .ec-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .ec-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .ec-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .ec-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .ec-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  .ec-header      { margin-bottom: 48px; }
  .ec-eyebrow     { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .ec-title       { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; }
  .ec-title em    { font-style: italic; color: #c1440e; }

  .ec-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Form panel */
  .ec-panel { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 16px; padding: 32px 36px; margin-bottom: 40px; box-shadow: 0 1px 6px rgba(0,0,0,0.04); }
  .ec-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  @media (max-width: 680px) { .ec-form-grid { grid-template-columns: 1fr; } }
  .ec-col-2 { grid-column: span 2; }
  @media (max-width: 680px) { .ec-col-2 { grid-column: span 1; } }

  .ec-field-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; }

  .ec-select,
  .ec-input {
    background: #fdf8f2;
    border: 1px solid #f0e2cc;
    border-radius: 10px;
    padding: 12px 16px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #2c1a08;
    width: 100%;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    -moz-appearance: textfield;
  }
  .ec-input[type="number"]::-webkit-outer-spin-button,
  .ec-input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; }
  .ec-select:focus,
  .ec-input:focus { border-color: #c1440e; box-shadow: 0 0 0 3px rgba(193,68,14,0.06); background: #fffcf8; }
  .ec-input::placeholder { color: #e8d8c0; }

  /* Info boxes */
  .ec-info-box { border-radius: 12px; padding: 16px 20px; }
  .ec-info-box-amber { background: rgba(200,120,32,0.05); border: 1px solid rgba(200,120,32,0.2); }
  .ec-info-box-blue  { background: rgba(74,127,168,0.05); border: 1px solid rgba(74,127,168,0.2); }
  .ec-info-box-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; }
  .ec-info-box-val   { font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 400; margin-bottom: 8px; }
  .ec-info-box-val.amber { color: #c87820; }
  .ec-info-box-val.blue  { color: #4a7fa8; }
  .ec-info-box-note  { font-size: 11px; color: #c4a882; line-height: 1.6; }

  /* Error box */
  .ec-error { background: rgba(185,28,28,0.04); border: 1px solid rgba(185,28,28,0.2); border-radius: 10px; padding: 14px 18px; font-size: 12px; color: #b91c1c; }

  /* Submit button */
  .ec-submit-btn { margin-top: 24px; background: rgba(193,68,14,0.06); color: #c1440e; border: 1px solid rgba(193,68,14,0.26); padding: 13px 32px; border-radius: 10px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 13px; cursor: pointer; letter-spacing: 0.3px; transition: all 0.2s; }
  .ec-submit-btn:hover { background: #c1440e; color: #fffcf8; }

  /* Claim cards */
  .ec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 700px) { .ec-grid { grid-template-columns: 1fr; } }

  .ec-card { background: #fffcf8; border: 1px solid #f0e2cc; border-left: 2.5px solid #5a8a3c; border-radius: 14px; padding: 24px 26px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; }
  .ec-card:hover { border-color: #e0ceb0; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }
  .ec-card.rejected { border-left-color: #b91c1c; }
  .ec-card.minted   { border-left-color: #c87820; }

  .ec-card-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 18px; }
  .ec-kv-label { font-size: 10px; font-weight: 500; letter-spacing: 1.2px; text-transform: uppercase; color: #c4a882; margin-bottom: 4px; }
  .ec-kv-val   { font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 400; color: #2c1a08; }
  .ec-kv-val.orange { color: #c87820; }
  .ec-kv-val.blue   { color: #4a7fa8; }
  .ec-kv-val.green  { color: #5a8a3c; }
  .ec-kv-val.red    { color: #b91c1c; }

  /* Progress bar */
  .ec-progress-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 10px; }
  .ec-progress-track { width: 100%; height: 5px; background: #f0e2cc; border-radius: 99px; overflow: hidden; margin-bottom: 14px; }
  .ec-progress-fill  { height: 100%; background: linear-gradient(90deg, #c1440e, #5a8a3c); border-radius: 99px; transition: width 0.5s ease; }

  .ec-steps { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
  .ec-step  { display: flex; align-items: center; gap: 10px; font-size: 12px; color: #c4a882; font-family: 'JetBrains Mono', monospace; }
  .ec-step-dot { width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid #f0e2cc; background: #fdf8f2; display: flex; align-items: center; justify-content: center; font-size: 9px; flex-shrink: 0; }
  .ec-step-dot.done  { background: #5a8a3c; border-color: #5a8a3c; color: #fff; }
  .ec-step-dot.pending { background: #fdf8f2; border-color: #f0e2cc; }

  .ec-divider { height: 1px; background: #f0e2cc; margin: 16px 0; }

  .ec-meta-label { font-size: 10px; font-weight: 500; letter-spacing: 1.2px; text-transform: uppercase; color: #c4a882; margin-bottom: 4px; }
  .ec-meta-val   { font-size: 13px; color: #8c7055; margin-bottom: 12px; word-break: break-all; }

  .ec-evidence-link { font-size: 12px; color: #c1440e; text-decoration: none; border-bottom: 1px solid rgba(193,68,14,0.3); padding-bottom: 1px; transition: opacity 0.2s; }
  .ec-evidence-link:hover { opacity: 0.7; }

  .ec-status-badge { display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 500; letter-spacing: 0.5px; margin-bottom: 14px; }
  .ec-badge-submitted            { background: rgba(140,112,85,0.07);  color: #8c7055; border: 1px solid rgba(140,112,85,0.2); }
  .ec-badge-foodbank_approved    { background: rgba(74,127,168,0.07);  color: #4a7fa8; border: 1px solid rgba(74,127,168,0.2); }
  .ec-badge-government_confirmed { background: rgba(124,95,168,0.07);  color: #7c5fa8; border: 1px solid rgba(124,95,168,0.2); }
  .ec-badge-mint_ready           { background: rgba(200,120,32,0.07);  color: #c87820; border: 1px solid rgba(200,120,32,0.2); }
  .ec-badge-minted               { background: rgba(90,138,60,0.07);   color: #5a8a3c; border: 1px solid rgba(90,138,60,0.2); }
  .ec-badge-rejected             { background: rgba(185,28,28,0.06);   color: #b91c1c; border: 1px solid rgba(185,28,28,0.15); }
  .ec-bdot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; display: inline-block; }

  .ec-rejection-box { background: rgba(185,28,28,0.04); border: 1px solid rgba(185,28,28,0.15); border-radius: 10px; padding: 12px 16px; margin-top: 12px; }
  .ec-rejection-by  { font-size: 11px; font-weight: 500; color: #b91c1c; margin-bottom: 4px; }
  .ec-rejection-msg { font-size: 12px; color: #8c7055; }

  .ec-empty { padding: 56px 24px; text-align: center; font-size: 13px; color: #e8d8c0; }
`

const STEPS = [
  { key: "foodbank",   label: "Food Bank",  done: s => s !== "submitted" },
  { key: "government", label: "Government", done: s => ["government_confirmed","mint_ready","minted"].includes(s) },
  { key: "validator",  label: "Validator",  done: s => ["mint_ready","minted"].includes(s) },
  { key: "mint",       label: "Token Mint", done: s => s === "minted" },
]

function getProgress(status) {
  if (status === "foodbank_approved")    return 25
  if (status === "government_confirmed") return 50
  if (status === "mint_ready")           return 75
  if (status === "minted")               return 100
  return 0
}

function getEscrowStatus(status) {
  if (["foodbank_approved","government_confirmed","mint_ready","minted"].includes(status)) return "Released to FoodBank"
  if (status === "rejected") return "Refunded"
  return "Received"
}

function getCardClass(status) {
  if (status === "rejected") return "ec-card rejected"
  if (status === "minted")   return "ec-card minted"
  return "ec-card"
}

export default function EnterpriseClaimsUI({
  foodBank,
  setFoodBank,
  donationType,
  setDonationType,
  evidence,
  setEvidence,
  faceValue,
  setFaceValue,
  contributionFee,
  estimatedDonationValue,
  errorMessage,
  handleSubmit,
  myClaims,
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EC_CSS }} />
      <div className="ec-root">
        <div className="ec-orb1" /><div className="ec-orb2" />
        {FOOD_FLOATS.map((f, i) => (
          <div key={i} className="ec-float" style={{ left:f.x, top:f.y, fontSize:f.size, opacity:f.opacity, animation:f.anim }}>{f.e}</div>
        ))}

        <div className="ec-wrap">

          {/* ── Header ── */}
          <header className="ec-header">
            <div className="ec-eyebrow">Enterprise claims</div>
            <h1 className="ec-title">
              Submit <em>Claim</em>
              <span style={{ fontSize:34, opacity:0.8, transform:"rotate(-8deg)", display:"inline-block" }}>📋</span>
              <span style={{ fontSize:22, opacity:0.5, transform:"rotate(12deg)", display:"inline-block", marginLeft:-4 }}>🌿</span>
              <span style={{ fontSize:16, opacity:0.4, transform:"rotate(-18deg)", display:"inline-block", marginLeft:-6 }}>✦</span>
            </h1>
          </header>

          {/* ── Form panel ── */}
          <div className="ec-panel">
            <div className="ec-form-grid">

              {/* Food bank select */}
              <div>
                <div className="ec-field-label">Target Food Bank</div>
                <select className="ec-select" value={foodBank} onChange={e => setFoodBank(e.target.value)}>
                  <option value="FoodBank-A">FoodBank-A</option>
                  <option value="FoodBank-B">FoodBank-B</option>
                </select>
              </div>

              {/* Donation type */}
              <div>
                <div className="ec-field-label">Donation Type</div>
                <input
                  className="ec-input"
                  value={donationType}
                  onChange={e => setDonationType(e.target.value)}
                  placeholder="e.g. Dry food, rice, canned goods"
                />
              </div>

              {/* Evidence */}
              <div className="ec-col-2">
                <div className="ec-field-label">Evidence (Mock URL)</div>
                <input
                  className="ec-input"
                  value={evidence}
                  onChange={e => setEvidence(e.target.value)}
                  placeholder="https://..."
                />
              </div>

              {/* Face value */}
              <div>
                <div className="ec-field-label">Face Value (FT)</div>
                <input
                  className="ec-input"
                  type="number"
                  value={faceValue}
                  onChange={e => setFaceValue(e.target.value)}
                  placeholder="0"
                />
              </div>

              {/* Contribution fee */}
              <div className="ec-info-box ec-info-box-amber">
                <div className="ec-info-box-label">Contribution Fee (2.5%)</div>
                <div className="ec-info-box-val amber">${contributionFee}</div>
                <div className="ec-info-box-note">
                  Helps food banks cover operational costs for redistributing donated food they receive.
                </div>
              </div>

              {/* Estimated donation value */}
              <div className="ec-col-2">
                <div className="ec-info-box ec-info-box-blue">
                  <div className="ec-info-box-label">Estimated Donation Value</div>
                  <div className="ec-info-box-val blue">${estimatedDonationValue}</div>
                  <div className="ec-info-box-note">
                    Estimates the monetary value of the donated food based on the FT amount requested. Ensure the FT amount accurately reflects the real donation value. Mismatches may result in rejection during verification.
                  </div>
                </div>
              </div>

              {/* Error */}
              {errorMessage && (
                <div className="ec-col-2 ec-error">{errorMessage}</div>
              )}

            </div>

            <button className="ec-submit-btn" onClick={handleSubmit}>
              Submit Claim
            </button>
          </div>

          {/* ── My Claims ── */}
          <div className="ec-section-label">My claims</div>

          {myClaims.length === 0
            ? <div className="ec-empty">📋 No claims submitted yet.</div>
            : <div className="ec-grid">
                {myClaims.map(claim => {
                  const progress    = getProgress(claim.status)
                  const escrow      = getEscrowStatus(claim.status)
                  const statusLabel = STATUS_MAP[claim.status] || "Unknown"
                  const badgeCls    = `ec-status-badge ec-badge-${claim.status}`

                  return (
                    <div key={claim.id} className={getCardClass(claim.status)}>

                      {/* Status badge */}
                      <span className={badgeCls}>
                        <span className="ec-bdot" />{statusLabel}
                      </span>

                      {/* Key values */}
                      <div className="ec-card-row">
                        <div>
                          <div className="ec-kv-label">Requested FT</div>
                          <div className="ec-kv-val green">{claim.faceValue} <span style={{ fontSize:12, opacity:0.4 }}>FT</span></div>
                        </div>
                        <div>
                          <div className="ec-kv-label">Contribution Fee</div>
                          <div className="ec-kv-val orange">${claim.contributionFee}</div>
                        </div>
                        <div>
                          <div className="ec-kv-label">Est. Donation Value</div>
                          <div className="ec-kv-val blue">${claim.estimatedDonationValue}</div>
                        </div>
                        <div>
                          <div className="ec-kv-label">Fee Status</div>
                          <div className="ec-kv-val" style={{ fontSize:13 }}>{escrow}</div>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="ec-progress-label">Verification progress</div>
                      <div className="ec-progress-track">
                        <div className="ec-progress-fill" style={{ width:`${progress}%` }} />
                      </div>
                      <div className="ec-steps">
                        {STEPS.map(step => (
                          <div key={step.key} className="ec-step">
                            <span className={`ec-step-dot${step.done(claim.status) ? " done" : " pending"}`}>
                              {step.done(claim.status) ? "✓" : ""}
                            </span>
                            {step.label}
                          </div>
                        ))}
                      </div>

                      <div className="ec-divider" />

                      {/* Meta */}
                      <div className="ec-meta-label">FoodBank Target</div>
                      <div className="ec-meta-val">{claim.foodBank}</div>

                      <div className="ec-meta-label">Donation Type</div>
                      <div className="ec-meta-val">{claim.donationType}</div>

                      <div className="ec-meta-label">Evidence</div>
                      <div style={{ marginBottom: 12 }}>
                        <a href={claim.evidence} target="_blank" rel="noreferrer" className="ec-evidence-link">
                          View Evidence ↗
                        </a>
                      </div>

                      {claim.donationId && (
                        <>
                          <div className="ec-meta-label">Donation ID</div>
                          <div className="ec-meta-val">{claim.donationId}</div>
                        </>
                      )}

                      {/* Rejection box */}
                      {claim.rejection && (
                        <div className="ec-rejection-box">
                          <div className="ec-rejection-by">Rejected by {claim.rejection.rejectedByRole}</div>
                          <div className="ec-rejection-msg">{claim.rejection.reason}</div>
                        </div>
                      )}

                    </div>
                  )
                })}
              </div>
          }

        </div>
      </div>
    </>
  )
}
