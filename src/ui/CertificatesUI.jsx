const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "cfta 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "cftb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "cftc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "cftd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "cfte 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "cfta 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "cftf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "cftwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "cftc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "cftb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "cfte 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "cftd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "cftspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "cftwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "cfta 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "cftc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "cftd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "cfte 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const TEMPLATE_CONFIG = {
  gold:   { label: "Gold Impact",          icon: "🥇", accent: "#b45309", border: "rgba(202,138,4,0.25)",  bg: "rgba(202,138,4,0.06)"  },
  green:  { label: "Green Sustainability", icon: "🌿", accent: "#5a8a3c", border: "rgba(90,138,60,0.25)",  bg: "rgba(90,138,60,0.06)"  },
  silver: { label: "Silver Contribution",  icon: "🥈", accent: "#475569", border: "rgba(100,116,139,0.25)",bg: "rgba(100,116,139,0.06)" },
}

const CERT_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes cfta{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes cftb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes cftc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes cftd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes cfte{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes cftf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes cftspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes cftwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .crt-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .crt-orb1 {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%);
  }
  .crt-orb2 {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%);
  }
  .crt-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .crt-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .crt-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .crt-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .crt-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .crt-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Panel */
  .crt-panel { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 16px; padding: 32px 36px; box-shadow: 0 1px 6px rgba(0,0,0,0.04); }

  /* Form grid */
  .crt-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px; }
  @media (max-width: 640px) { .crt-form-grid { grid-template-columns: 1fr; } }

  .crt-field-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; display: block; }
  .crt-field-hint  { font-size: 11px; color: #c4a882; font-family: 'JetBrains Mono', monospace; margin-top: 6px; }

  .crt-input {
    width: 100%; box-sizing: border-box;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px;
    padding: 10px 14px; font-family: 'JetBrains Mono', monospace;
    font-size: 14px; color: #2c1a08; outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .crt-input:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }
  .crt-input::placeholder { color: #e8d8c0; }

  .crt-select {
    width: 100%; box-sizing: border-box;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px;
    padding: 10px 14px; font-family: 'Inter', sans-serif;
    font-size: 13px; color: #2c1a08; outline: none; cursor: pointer;
    transition: border-color 0.18s, box-shadow 0.18s;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c4a882' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 36px;
  }
  .crt-select:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }

  /* Mint button */
  .crt-mint-btn {
    background: #c1440e; color: #fffcf8; border: none;
    padding: 11px 28px; border-radius: 10px; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; display: inline-flex; align-items: center; gap: 8px;
  }
  .crt-mint-btn:hover { background: #a33a0c; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(193,68,14,0.25); }
  .crt-mint-btn:active { transform: translateY(0); }

  /* Cert cards grid */
  .crt-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  @media (max-width: 700px) { .crt-grid { grid-template-columns: 1fr; } }

  /* Cert card */
  .crt-card {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 24px 26px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
    position: relative; overflow: hidden;
  }
  .crt-card:hover { border-color: #e0ceb0; transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.07); }

  .crt-card-icon { font-size: 28px; margin-bottom: 14px; display: block; }

  .crt-card-field-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 3px; }
  .crt-card-field-val   { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 400; color: #2c1a08; margin-bottom: 14px; }
  .crt-card-field-val-lg { font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 400; color: #5a8a3c; margin-bottom: 14px; }

  .crt-card-template-badge {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 500;
    letter-spacing: 0.4px; margin-bottom: 14px;
  }

  .crt-card-date { font-size: 10px; color: #c4a882; font-family: 'JetBrains Mono', monospace; margin-top: 4px; }

  .crt-card-deco {
    position: absolute; bottom: 10px; right: 14px;
    font-size: 42px; opacity: 0.07; transform: rotate(12deg);
    pointer-events: none; user-select: none;
  }

  /* Empty state */
  .crt-empty { padding: 56px 24px; text-align: center; font-size: 12px; color: #e8d8c0; }

  /* Public explorer */
  .crt-explorer-card {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 24px 26px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    border-left: 2.5px solid #4a7fa8;
    position: relative; overflow: hidden;
  }
  .crt-not-found { padding: 32px 24px; text-align: center; font-size: 12px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; }
`

export default function CertificatesUI({
  currentUser,
  certificates,
  balances,
  currentFTRate,

  amount,
  setAmount,
  template,
  setTemplate,
  handleMint,

  searchId,
  setSearchId,
  searchedCertificate,

  available
}) {
  const myCerts = certificates.filter(c => c.owner === currentUser.name)

  const getTemplateConfig = (tmpl) =>
    TEMPLATE_CONFIG[tmpl] || { label: tmpl, icon: "🏅", accent: "#8c7055", border: "rgba(140,112,85,0.2)", bg: "rgba(140,112,85,0.06)" }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CERT_CSS }} />
      <div className="crt-root">
        <div className="crt-orb1" />
        <div className="crt-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="crt-float"
            style={{
              left: f.x, top: f.y,
              fontSize: f.size,
              opacity: f.opacity,
              animation: f.anim,
            }}
          >
            {f.e}
          </div>
        ))}

        <div className="crt-wrap">

          {/* ── Header ── */}
          <div className="crt-eyebrow">EFW Rescue · Enterprise</div>
          <div className="crt-title">
            NFT <em>Certificates</em> 🏅
          </div>

          {/* ── Mint Panel ── */}
          <div className="crt-section-label">Burn FT to mint certificate</div>
          <div className="crt-panel">
            <div className="crt-form-grid">

              <div>
                <label className="crt-field-label">Amount to Burn (FT)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="crt-input"
                  placeholder="0"
                />
                <div className="crt-field-hint">Available: {available} FT</div>
              </div>

              <div>
                <label className="crt-field-label">NFT Template</label>
                <select
                  value={template}
                  onChange={(e) => setTemplate(e.target.value)}
                  className="crt-select"
                >
                  <option value="gold">🥇 Gold Impact</option>
                  <option value="green">🌿 Green Sustainability</option>
                  <option value="silver">🥈 Silver Contribution</option>
                </select>
              </div>

            </div>

            <button className="crt-mint-btn" onClick={handleMint}>
              🔥 Mint NFT
            </button>
          </div>

          {/* ── My Certificates ── */}
          <div className="crt-section-label">My certificates</div>

          {myCerts.length === 0 ? (
            <div className="crt-panel">
              <div className="crt-empty">🌱 No certificates yet. Burn FT to mint your first one.</div>
            </div>
          ) : (
            <div className="crt-grid">
              {myCerts.map(cert => {
                const tmplCfg = getTemplateConfig(cert.template)
                return (
                  <div key={cert.id} className="crt-card">
                    <span className="crt-card-icon">{tmplCfg.icon}</span>

                    <div className="crt-card-field-label">Certificate ID</div>
                    <div className="crt-card-field-val">#{cert.id}</div>

                    <div className="crt-card-field-label">Burned FT</div>
                    <div className="crt-card-field-val-lg">{cert.burnedAmount} <span style={{ fontSize: 13, opacity: 0.45 }}>FT</span></div>

                    <div className="crt-card-field-label">Impact Value</div>
                    <div className="crt-card-field-val">${(cert.burnedAmount * currentFTRate).toFixed(2)}</div>

                    <span
                      className="crt-card-template-badge"
                      style={{ background: tmplCfg.bg, color: tmplCfg.accent, border: `1px solid ${tmplCfg.border}` }}
                    >
                      {tmplCfg.icon} {tmplCfg.label}
                    </span>

                    <div className="crt-card-date">{cert.createdAt}</div>
                    <div className="crt-card-deco">🏅</div>
                  </div>
                )
              })}
            </div>
          )}

          {/* ── Public Certificate Explorer ── */}
          <div className="crt-section-label">Public certificate explorer</div>

          <div className="crt-panel" style={{ marginBottom: 20 }}>
            <label className="crt-field-label">Search by Certificate ID</label>
            <input
              type="number"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="crt-input"
              placeholder="Enter certificate ID…"
              style={{ marginTop: 8 }}
            />
          </div>

          {searchId && !searchedCertificate && (
            <div className="crt-panel">
              <div className="crt-not-found">🔍 Certificate not found.</div>
            </div>
          )}

          {searchedCertificate && (() => {
            const tmplCfg = getTemplateConfig(searchedCertificate.template)
            return (
              <div className="crt-explorer-card">
                <span className="crt-card-icon">{tmplCfg.icon}</span>

                <div className="crt-card-field-label">Certificate ID</div>
                <div className="crt-card-field-val">#{searchedCertificate.id}</div>

                <div className="crt-card-field-label">Owner</div>
                <div className="crt-card-field-val">{searchedCertificate.owner}</div>

                <div className="crt-card-field-label">Burned FT</div>
                <div className="crt-card-field-val-lg">{searchedCertificate.burnedAmount} <span style={{ fontSize: 13, opacity: 0.45 }}>FT</span></div>

                <span
                  className="crt-card-template-badge"
                  style={{ background: tmplCfg.bg, color: tmplCfg.accent, border: `1px solid ${tmplCfg.border}` }}
                >
                  {tmplCfg.icon} {tmplCfg.label}
                </span>

                <div className="crt-card-date">{searchedCertificate.createdAt}</div>
                <div className="crt-card-deco">🔍</div>
              </div>
            )
          })()}

        </div>
      </div>
    </>
  )
}
