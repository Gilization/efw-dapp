const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "wda 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "wdb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "wdc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "wdd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "wde 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "wda 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "wdf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "wdwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "wdc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "wdb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "wde 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "wdd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "wdspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "wdwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "wda 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "wdc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "wdd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "wde 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const WD_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes wda{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes wdb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes wdc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes wdd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes wde{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes wdf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes wdspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes wdwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .wd-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .wd-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .wd-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .wd-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .wd-wrap  { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .wd-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .wd-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 52px; }
  .wd-title em { font-style: italic; color: #c1440e; }

  /* Section label */
  .wd-section-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; margin-top: 52px; }

  /* Balance card */
  .wd-balance-card {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px;
    padding: 22px 28px; box-shadow: 0 1px 4px rgba(0,0,0,0.04);
    border-left: 2.5px solid #5a8a3c; display: inline-block; margin-bottom: 36px;
  }
  .wd-balance-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; }
  .wd-balance-val   { font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 400; color: #5a8a3c; line-height: 1; }

  /* Form panel */
  .wd-panel {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 16px;
    padding: 32px 36px; box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    max-width: 620px;
  }

  .wd-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
  @media (max-width: 560px) { .wd-form-grid { grid-template-columns: 1fr; } }

  .wd-field       { margin-bottom: 0; }
  .wd-field-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; display: block; }

  .wd-input {
    width: 100%; box-sizing: border-box;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px;
    padding: 10px 14px; font-family: 'JetBrains Mono', monospace;
    font-size: 14px; color: #2c1a08; outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .wd-input:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }
  .wd-input::placeholder { color: #e8d8c0; }

  .wd-select {
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
  .wd-select:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }

  /* Error */
  .wd-error {
    margin-top: 4px; padding: 10px 14px; border-radius: 9px;
    background: rgba(185,28,28,0.06); border: 1px solid rgba(185,28,28,0.2);
    color: #b91c1c; font-size: 12px;
  }

  /* Withdraw button */
  .wd-btn-withdraw {
    background: #c1440e; color: #fffcf8; border: none;
    padding: 11px 28px; border-radius: 10px; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; display: inline-flex; align-items: center; gap: 8px;
    margin-top: 8px;
  }
  .wd-btn-withdraw:hover { background: #a33a0c; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(193,68,14,0.25); }
  .wd-btn-withdraw:active { transform: translateY(0); }

  /* History table */
  .wd-table-wrap { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .wd-table      { width: 100%; border-collapse: collapse; font-size: 12px; }
  .wd-table thead tr { background: #fdf8f2; border-bottom: 1px solid #f0e2cc; }
  .wd-table thead th { text-align: left; padding: 12px 16px; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; white-space: nowrap; }
  .wd-table tbody tr { border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .wd-table tbody tr:last-child { border-bottom: none; }
  .wd-table tbody tr:hover { background: rgba(193,68,14,0.025); }
  .wd-table td   { padding: 13px 16px; color: #8c7055; vertical-align: middle; }
  .wd-table .td-amount { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500; color: #5a8a3c; }
  .wd-table .td-mono   { font-family: 'JetBrains Mono', monospace; color: #2c1a08; }
  .wd-table .td-muted  { font-size: 11px; color: #c4a882; font-family: 'JetBrains Mono', monospace; }

  .wd-empty { padding: 48px 24px; text-align: center; font-size: 12px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; }
`

export default function FoodBankWithdrawUI({
  balance,
  amount,
  setAmount,
  account,
  setAccount,
  accountNumber,
  setAccountNumber,
  error,
  handleWithdraw,
  withdrawals
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: WD_CSS }} />
      <div className="wd-root">
        <div className="wd-orb1" />
        <div className="wd-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="wd-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="wd-wrap">

          {/* ── Header ── */}
          <div className="wd-eyebrow">EFW Rescue · FoodBank</div>
          <div className="wd-title">
            Withdraw <em>Funds</em> 💸
          </div>

          {/* ── Balance ── */}
          <div className="wd-balance-card">
            <div className="wd-balance-label">Available USD Balance</div>
            <div className="wd-balance-val">${balance}</div>
          </div>

          {/* ── Form ── */}
          <div className="wd-section-label" style={{ marginTop: 0 }}>Withdrawal details</div>
          <div className="wd-panel">

            <div className="wd-form-grid">

              <div className="wd-field">
                <label className="wd-field-label">Withdrawal Amount (USD)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  className="wd-input"
                  placeholder="0"
                />
              </div>

              <div>
                <div className="wd-field" style={{ marginBottom: 16 }}>
                  <label className="wd-field-label">Destination Bank</label>
                  <select
                    value={account}
                    onChange={e => setAccount(e.target.value)}
                    className="wd-select"
                  >
                    <option value="">Select Bank</option>
                    <option value="BCA">BCA</option>
                    <option value="Mandiri">Mandiri</option>
                    <option value="BNI">BNI</option>
                  </select>
                </div>

                <div className="wd-field">
                  <label className="wd-field-label">Account Number</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={e => setAccountNumber(e.target.value)}
                    className="wd-input"
                    placeholder="Enter bank account number"
                  />
                </div>
              </div>

            </div>

            {error && (
              <div className="wd-error">⚠ {error}</div>
            )}

            <button className="wd-btn-withdraw" onClick={handleWithdraw}>
              ✦ Withdraw Funds
            </button>

          </div>

          {/* ── History ── */}
          <div className="wd-section-label">Withdrawal history</div>

          <div className="wd-table-wrap">
            {withdrawals.length === 0 ? (
              <div className="wd-empty">🌱 No withdrawals yet.</div>
            ) : (
              <table className="wd-table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Bank</th>
                    <th>Account</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawals.map(w => (
                    <tr key={w.id}>
                      <td className="td-amount">${w.amount}</td>
                      <td className="td-mono">{w.bank}</td>
                      <td className="td-mono">{w.accountNumber}</td>
                      <td className="td-muted">{w.timestamp}</td>
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
