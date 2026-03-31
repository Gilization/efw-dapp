const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "dpa 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "dpb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "dpc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "dpd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "dpe 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "dpa 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "dpf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "dpwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "dpc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "dpb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "dpe 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "dpd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "dpspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "dpwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "dpa 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "dpc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "dpd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "dpe 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const DP_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes dpa{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes dpb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes dpc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes dpd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes dpe{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes dpf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes dpspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes dpwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .dp-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .dp-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .dp-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .dp-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .dp-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .dp-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .dp-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .dp-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .dp-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 0; }

  /* Panel */
  .dp-panel {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 16px;
    padding: 32px 36px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    max-width: 720px;
  }

  /* Fields */
  .dp-field       { margin-bottom: 22px; }
  .dp-field-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; display: block; }

  .dp-input {
    width: 100%; box-sizing: border-box;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px;
    padding: 10px 14px; font-family: 'JetBrains Mono', monospace;
    font-size: 14px; color: #2c1a08; outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .dp-input:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }
  .dp-input::placeholder { color: #e8d8c0; }

  .dp-select {
    width: 100%; box-sizing: border-box;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px;
    padding: 10px 36px 10px 14px; font-family: 'Inter', sans-serif;
    font-size: 13px; color: #2c1a08; outline: none; cursor: pointer;
    transition: border-color 0.18s, box-shadow 0.18s;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c4a882' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-color: #fdf8f2;
  }
  .dp-select:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }

  /* Buttons */
  .dp-btn-generate {
    background: #c1440e; color: #fffcf8; border: none;
    padding: 11px 24px; border-radius: 10px; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; display: inline-flex; align-items: center; gap: 8px;
  }
  .dp-btn-generate:hover { background: #a33a0c; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(193,68,14,0.25); }
  .dp-btn-generate:active { transform: translateY(0); }

  .dp-btn-upload {
    background: transparent; color: #4a7fa8; border: 1px solid rgba(74,127,168,0.3);
    padding: 9px 20px; border-radius: 9px; font-family: 'Inter', sans-serif;
    font-size: 12px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; display: inline-flex; align-items: center; gap: 8px;
    margin-top: 16px;
  }
  .dp-btn-upload:hover { background: #4a7fa8; color: #fffcf8; border-color: #4a7fa8; }

  .dp-btn-confirm {
    background: #5a8a3c; color: #fffcf8; border: none;
    padding: 11px 24px; border-radius: 10px; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; display: inline-flex; align-items: center; gap: 8px;
    margin-top: 16px;
  }
  .dp-btn-confirm:hover { background: #4a7230; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(90,138,60,0.25); }
  .dp-btn-confirm:active { transform: translateY(0); }

  /* VA box */
  .dp-va-box {
    margin-top: 28px; padding-top: 24px;
    border-top: 1px solid #f0e2cc;
  }
  .dp-va-label   { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; }
  .dp-va-number  { font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 400; color: #2c1a08; margin-bottom: 6px; letter-spacing: 2px; }
  .dp-va-bank    { font-size: 11px; color: #c4a882; font-family: 'JetBrains Mono', monospace; }

  /* Evidence uploaded */
  .dp-evidence-ok {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 12px; padding: 5px 14px; border-radius: 20px;
    font-size: 11px; font-weight: 500; letter-spacing: 0.4px;
    background: rgba(90,138,60,0.08); color: #5a8a3c;
    border: 1px solid rgba(90,138,60,0.22);
  }
`

export default function DepositUI({
  amount,
  setAmount,

  bank,
  setBank,

  generateVirtualAccount,
  virtualAccount,

  evidence,
  setEvidence,

  handleDeposit
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DP_CSS }} />
      <div className="dp-root">
        <div className="dp-orb1" />
        <div className="dp-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="dp-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="dp-wrap">

          {/* ── Header ── */}
          <div className="dp-eyebrow">EFW Rescue · Enterprise</div>
          <div className="dp-title">
            Deposit <em>USD</em> 💵
          </div>

          {/* ── Form ── */}
          <div className="dp-section-label">Transfer details</div>

          <div className="dp-panel">

            <div className="dp-field">
              <label className="dp-field-label">Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="dp-input"
                placeholder="0"
              />
            </div>

            <div className="dp-field">
              <label className="dp-field-label">Select Bank</label>
              <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="dp-select"
              >
                <option value="BCA">BCA</option>
                <option value="Mandiri">Mandiri</option>
                <option value="BNI">BNI</option>
              </select>
            </div>

            <button className="dp-btn-generate" onClick={generateVirtualAccount}>
              ✦ Generate Virtual Account
            </button>

            {virtualAccount && (
              <div className="dp-va-box">
                <div className="dp-va-label">Transfer to Virtual Account</div>
                <div className="dp-va-number">{virtualAccount}</div>
                <div className="dp-va-bank">Bank: {bank}</div>

                <button
                  className="dp-btn-upload"
                  onClick={() => setEvidence("dummy-transfer-proof")}
                >
                  📎 Upload Transfer Evidence
                </button>

                {evidence && (
                  <div>
                    <div className="dp-evidence-ok">
                      ✓ Transfer evidence uploaded
                    </div>

                    <button className="dp-btn-confirm" onClick={handleDeposit}>
                      ✓ Confirm Deposit
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  )
}
