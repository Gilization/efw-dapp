const CARD_FOOD = [
  ["🥩","🧀","🌶️"],
  ["🥦","🍳","🧂"],
  ["🥕","🫒","🌿"],
  ["🧅","🍋","🥚"],
]

const SCATTER_POS = [
  { top: "8px",  right: "12px", size: 26, rot: "15deg",  opacity: 0.40 },
  { top: "16px", right: "44px", size: 18, rot: "-22deg", opacity: 0.28 },
  { top: "32px", right: "18px", size: 15, rot: "8deg",   opacity: 0.22 },
]

const MY_CHAOS = [
  ["🫕","🥄","🔥"],
  ["🍲","🧆","🫙"],
  ["🥘","🌿","🧂"],
  ["🍱","🥢","⭐"],
]

const MY_POS = [
  { bottom: "12px", right: "14px", size: 28, rot: "-12deg", opacity: 0.35 },
  { bottom: "24px", right: "40px", size: 20, rot: "18deg",  opacity: 0.25 },
  { bottom: "10px", right: "62px", size: 15, rot: "-6deg",  opacity: 0.20 },
]

const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "tra 5.2s ease-in-out infinite",  size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "trb 7.8s ease-in-out infinite",  size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "trc 6.1s ease-in-out infinite",  size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "trd 9.3s ease-in-out infinite",  size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "tre 4.7s ease-in-out infinite",  size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "tra 5.2s ease-in-out infinite",  size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "trf 6.9s ease-in-out infinite",  size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "trwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "trc 6.1s ease-in-out infinite",  size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "trb 7.8s ease-in-out infinite",  size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "tre 4.7s ease-in-out infinite",  size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "trd 9.3s ease-in-out infinite",  size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "trspin 12s linear infinite",     size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "trwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️", x: "73%", y: "87%", anim: "tra 5.2s ease-in-out infinite",  size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "trc 6.1s ease-in-out infinite",  size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "trd 9.3s ease-in-out infinite",  size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "tre 4.7s ease-in-out infinite",  size: 50, opacity: 0.14 },
]

const TRADE_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes tra {
    0%,100% { transform: translateY(0px) rotate(-8deg) scale(1); }
    30%     { transform: translateY(-18px) rotate(6deg) scale(1.05); }
    70%     { transform: translateY(-6px) rotate(-3deg) scale(0.97); }
  }
  @keyframes trb {
    0%,100% { transform: translateY(0px) rotate(12deg) scale(1); }
    40%     { transform: translateY(-22px) rotate(-9deg) scale(1.08); }
    80%     { transform: translateY(-4px) rotate(5deg) scale(0.95); }
  }
  @keyframes trc {
    0%,100% { transform: translateY(0px) rotate(-14deg) scale(1); }
    25%     { transform: translateY(-14px) rotate(10deg) scale(1.1); }
    60%     { transform: translateY(-20px) rotate(-6deg) scale(1.03); }
  }
  @keyframes trd {
    0%,100% { transform: translateY(0px) rotate(5deg) scale(1); }
    50%     { transform: translateY(-26px) rotate(-12deg) scale(0.9); }
  }
  @keyframes tre {
    0%,100% { transform: translateY(0px) rotate(-20deg) scale(1); }
    35%     { transform: translateY(-10px) rotate(15deg) scale(1.12); }
    65%     { transform: translateY(-18px) rotate(-8deg) scale(0.93); }
  }
  @keyframes trf {
    0%,100% { transform: translateY(0px) rotate(3deg) scale(1); }
    45%     { transform: translateY(-30px) rotate(-16deg) scale(1.06); }
  }
  @keyframes trspin {
    0%   { transform: rotate(0deg) scale(1); }
    50%  { transform: rotate(180deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(1); }
  }
  @keyframes trwob {
    0%,100% { transform: skewX(-3deg) rotate(-5deg); }
    50%     { transform: skewX(4deg) rotate(8deg) scale(1.1); }
  }

  .trui-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .trui-orb1 {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%);
  }
  .trui-orb2 {
    position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%);
  }
  .trui-wrap {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .trui-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 52px; }
  .trui-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .trui-title { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; }
  .trui-title em { font-style: italic; color: #c1440e; }
  .trui-stats { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
  .trui-stat-row { display: flex; align-items: baseline; gap: 10px; }
  .trui-stat-label { font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; }
  .trui-stat-val { font-family: 'JetBrains Mono', monospace; font-size: 17px; font-weight: 400; color: #2c1a08; }
  .trui-stat-val.trui-accent { color: #c1440e; }
  .trui-stat-val.trui-warn   { color: #c87820; }
  .trui-stat-div { width: 3px; height: 3px; border-radius: 50%; background: #e8d8c0; margin: 0 3px; display: inline-block; }

  .trui-panel { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 16px; padding: 32px 36px; margin-bottom: 40px; box-shadow: 0 1px 6px rgba(0,0,0,0.04); position: relative; overflow: hidden; }
  .trui-panel-label { font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; color: #c4a882; margin-bottom: 20px; }
  .trui-sell-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .trui-input-wrap { position: relative; }
  .trui-input-prefix { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #c4a882; pointer-events: none; transition: color 0.2s; }
  .trui-input-wrap:focus-within .trui-input-prefix { color: #c1440e; }
  .trui-s-input { background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px; padding: 13px 16px 13px 52px; font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #2c1a08; width: 190px; outline: none; transition: border-color 0.2s, box-shadow 0.2s; -moz-appearance: textfield; }
  .trui-s-input::-webkit-outer-spin-button,
  .trui-s-input::-webkit-inner-spin-button { -webkit-appearance: none; }
  .trui-s-input:focus { border-color: #c1440e; box-shadow: 0 0 0 3px rgba(193,68,14,0.06); background: #fffcf8; }
  .trui-s-input::placeholder { color: #e8d8c0; }
  .trui-list-btn { background: rgba(193,68,14,0.06); color: #c1440e; border: 1px solid rgba(193,68,14,0.26); padding: 13px 28px; border-radius: 10px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 13px; cursor: pointer; letter-spacing: 0.3px; transition: all 0.2s; white-space: nowrap; }
  .trui-list-btn:hover { background: #c1440e; color: #fffcf8; }
  .trui-hint { font-size: 12px; color: #c4a882; margin-top: 16px; font-family: 'JetBrains Mono', monospace; }
  .trui-hint span { color: #2c1a08; }

  .trui-tabs { display: flex; border-bottom: 1px solid #f0e2cc; margin-bottom: 32px; }
  .trui-tab-btn { background: none; border: none; cursor: pointer; padding: 13px 22px; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; color: #c4a882; position: relative; transition: color 0.2s; letter-spacing: 0.2px; }
  .trui-tab-btn:hover { color: #8c7055; }
  .trui-tab-btn.trui-tab-active { color: #2c1a08; font-weight: 500; }
  .trui-tab-btn.trui-tab-active::after { content: ''; position: absolute; bottom: -1px; left: 12px; right: 12px; height: 1.5px; background: #c1440e; }

  .trui-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  @media (max-width: 900px) { .trui-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 580px) { .trui-grid { grid-template-columns: 1fr; } }

  .trui-card { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; padding: 24px 26px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; position: relative; overflow: hidden; }
  .trui-card:hover { border-color: #e0ceb0; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
  .trui-card-my { border-left: 2px solid #c87820; }

  .trui-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; position: relative; z-index: 1; }
  .trui-card-seller { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 500; color: #2c1a08; }
  .trui-avatar { width: 26px; height: 26px; border-radius: 50%; background: rgba(193,68,14,0.06); border: 1px solid #f0e2cc; font-size: 11px; font-weight: 500; color: #c1440e; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .trui-card-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 18px; position: relative; z-index: 1; }
  .trui-sbox { background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 9px; padding: 11px 14px; }
  .trui-sbox-label { font-size: 10px; font-weight: 500; letter-spacing: 1.2px; text-transform: uppercase; color: #c4a882; margin-bottom: 5px; }
  .trui-sbox-val { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 400; color: #2c1a08; }
  .trui-sbox-val.trui-green { color: #5a8a3c; }
  .trui-sbox-val.trui-orange { color: #c87820; }
  .trui-card-foot { display: flex; justify-content: space-between; align-items: center; position: relative; z-index: 1; }
  .trui-card-total { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #c4a882; }
  .trui-card-total span { color: #8c7055; }
  .trui-card-time { font-size: 11px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; margin-top: 14px; padding-top: 12px; border-top: 1px solid #f0e2cc; position: relative; z-index: 1; }

  .trui-badge { display: inline-flex; align-items: center; gap: 5px; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; letter-spacing: 0.5px; }
  .trui-badge-open       { background: rgba(90,138,60,0.07);  color: #5a8a3c; border: 1px solid rgba(90,138,60,0.2); }
  .trui-badge-cancelled  { background: rgba(185,28,28,0.06);  color: #b91c1c; border: 1px solid rgba(185,28,28,0.15); }
  .trui-badge-sold       { background: rgba(74,95,168,0.07);  color: #4a5fa8; border: 1px solid rgba(74,95,168,0.2); }
  .trui-badge-you        { background: rgba(200,120,32,0.08); color: #c87820; border: 1px solid rgba(200,120,32,0.2); }
  .trui-bdot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; display: inline-block; }

  .trui-buy-btn { background: transparent; color: #5a8a3c; border: 1px solid rgba(90,138,60,0.3); padding: 8px 20px; border-radius: 8px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 12px; cursor: pointer; transition: all 0.2s; }
  .trui-buy-btn:hover { background: rgba(90,138,60,0.07); border-color: rgba(90,138,60,0.5); }
  .trui-cancel-btn { background: transparent; color: #b91c1c; border: 1px solid rgba(185,28,28,0.2); padding: 8px 20px; border-radius: 8px; font-family: 'Inter', sans-serif; font-weight: 500; font-size: 12px; cursor: pointer; transition: all 0.2s; }
  .trui-cancel-btn:hover { background: rgba(185,28,28,0.05); border-color: rgba(185,28,28,0.4); }

  .trui-table-wrap { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); position: relative; overflow-x: auto; }
  .trui-table { border-collapse: collapse; width: 100%; position: relative; z-index: 1; }
  .trui-table thead tr { border-bottom: 1px solid #f0e2cc; }
  .trui-table th { padding: 15px 22px; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; text-align: left; white-space: nowrap; }
  .trui-table tbody tr { border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .trui-table tbody tr:last-child { border-bottom: none; }
  .trui-table tbody tr:hover { background: rgba(193,68,14,0.025); }
  .trui-table td { padding: 15px 22px; font-size: 13px; color: #c4a882; font-family: 'JetBrains Mono', monospace; font-weight: 300; white-space: nowrap; }
  .trui-table td.trui-td-hl    { color: #2c1a08; font-weight: 500; }
  .trui-table td.trui-td-green { color: #5a8a3c; font-weight: 400; }
  .trui-table td.trui-td-dim   { color: #e8d8c0; }

  .trui-empty { padding: 64px 24px; text-align: center; font-size: 13px; color: #e8d8c0; letter-spacing: 0.5px; }

  .trui-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
`

export default function TradeUI({
  currentUser,
  balances,
  usdBalances,
  marketListings,
  transactions,
  sellAmount,
  setSellAmount,
  pricePerFT,
  setPricePerFT,
  activeMarketTab,
  setActiveMarketTab,
  handleSell,
  handleBuy,
  handleCancel,
}) {
  const bal = balances[currentUser.name] || { available: 0, locked: 0 }
  const usd = usdBalances[currentUser.name] || 0
  const openListings = (marketListings || []).filter(l => l.status === "open")
  const myListings   = (marketListings || []).filter(l => l.seller === currentUser.name)
  const myTxs        = (transactions  || []).filter(
    tx => tx.seller === currentUser.name || tx.buyer === currentUser.name
  )

  const badgeClass = (status) => {
    if (status === "open")      return "trui-badge trui-badge-open"
    if (status === "cancelled") return "trui-badge trui-badge-cancelled"
    if (status === "sold")      return "trui-badge trui-badge-sold"
    return "trui-badge"
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: TRADE_CSS }} />
      <div className="trui-root">
        <div className="trui-orb1" />
        <div className="trui-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="trui-float"
            style={{
              left: f.x,
              top: f.y,
              fontSize: f.size,
              opacity: f.opacity,
              animation: f.anim,
            }}
          >
            {f.e}
          </div>
        ))}

        <div className="trui-wrap">

          {/* ── Header ── */}
          <header className="trui-header">
            <div>
              <div className="trui-eyebrow">Peer-to-peer exchange</div>
              <h1 className="trui-title">
                FT <em>Market</em>
                <span style={{ fontSize: 34, opacity: 0.8,  transform: "rotate(-8deg)",  display: "inline-block" }}>🍽️</span>
                <span style={{ fontSize: 22, opacity: 0.5,  transform: "rotate(12deg)",  display: "inline-block", marginLeft: -4 }}>🥄</span>
                <span style={{ fontSize: 16, opacity: 0.4,  transform: "rotate(-18deg)", display: "inline-block", marginLeft: -6 }}>🌿</span>
              </h1>
            </div>
            <div className="trui-stats">
              <div className="trui-stat-row">
                <span className="trui-stat-label">USD</span>
                <span className="trui-stat-val trui-accent">
                  ${usd.toLocaleString("en", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="trui-stat-row">
                <span className="trui-stat-label">Avail</span>
                <span className="trui-stat-val">{bal.available} FT</span>
                <span className="trui-stat-div" />
                <span className="trui-stat-label">Locked</span>
                <span className="trui-stat-val trui-warn">{bal.locked} FT</span>
              </div>
            </div>
          </header>

          {/* ── Sell Panel ── */}
          <div className="trui-panel">
            <span style={{ position:"absolute", right:28, top:"50%", transform:"translateY(-50%) rotate(-8deg)", fontSize:44, opacity:0.20, pointerEvents:"none" }}>🫕</span>
            <span style={{ position:"absolute", right:72, top:"18%", transform:"rotate(20deg)",  fontSize:24, opacity:0.18, pointerEvents:"none" }}>🌶️</span>
            <span style={{ position:"absolute", right:24, top:"14%", transform:"rotate(-15deg)", fontSize:17, opacity:0.22, pointerEvents:"none" }}>🧂</span>
            <span style={{ position:"absolute", right:88, top:"64%", transform:"rotate(8deg)",   fontSize:20, opacity:0.15, pointerEvents:"none" }}>🌿</span>
            <div className="trui-panel-label">New listing</div>
            <div className="trui-sell-row">
              <div className="trui-input-wrap">
                <span className="trui-input-prefix">QTY</span>
                <input
                  className="trui-s-input"
                  type="number"
                  value={sellAmount}
                  onChange={e => setSellAmount(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div className="trui-input-wrap">
                <span className="trui-input-prefix">USD</span>
                <input
                  className="trui-s-input"
                  type="number"
                  value={pricePerFT}
                  onChange={e => setPricePerFT(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <button className="trui-list-btn" onClick={handleSell}>
                List for sale
              </button>
            </div>
            <div className="trui-hint">
              Available <span>{bal.available} FT</span>&nbsp;·&nbsp;Locked <span>{bal.locked} FT</span>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="trui-tabs">
            {[
              { key: "open",     label: "Open Listings" },
              { key: "listings", label: "My Listings"   },
              { key: "history",  label: "Trade History" },
            ].map(t => (
              <button
                key={t.key}
                className={`trui-tab-btn${activeMarketTab === t.key ? " trui-tab-active" : ""}`}
                onClick={() => setActiveMarketTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Open Listings ── */}
          {activeMarketTab === "open" && (
            openListings.length === 0
              ? <div className="trui-empty">🍽️ No FT listed for sale.</div>
              : <div className="trui-grid">
                  {openListings.map((listing, i) => (
                    <div key={listing.id} className="trui-card">
                      {CARD_FOOD[i % CARD_FOOD.length].map((em, j) => (
                        <span
                          key={j}
                          style={{
                            position:     "absolute",
                            top:          SCATTER_POS[j].top,
                            right:        SCATTER_POS[j].right,
                            fontSize:     SCATTER_POS[j].size,
                            opacity:      SCATTER_POS[j].opacity,
                            transform:    `rotate(${SCATTER_POS[j].rot})`,
                            pointerEvents:"none",
                            userSelect:   "none",
                            lineHeight:   1,
                            zIndex:       0,
                          }}
                        >
                          {em}
                        </span>
                      ))}
                      <div className="trui-card-head">
                        <div className="trui-card-seller">
                          <div className="trui-avatar">{listing.seller[0]}</div>
                          {listing.seller}
                        </div>
                        <span className="trui-badge trui-badge-open">
                          <span className="trui-bdot" />open
                        </span>
                      </div>
                      <div className="trui-card-stats">
                        <div className="trui-sbox">
                          <div className="trui-sbox-label">Amount</div>
                          <div className="trui-sbox-val trui-green">
                            {listing.amount} <span style={{ fontSize: 12 }}>FT</span>
                          </div>
                        </div>
                        <div className="trui-sbox">
                          <div className="trui-sbox-label">Per FT</div>
                          <div className="trui-sbox-val trui-orange">${listing.pricePerFT}</div>
                        </div>
                      </div>
                      <div className="trui-card-foot">
                        <div className="trui-card-total">
                          Total&nbsp;<span>${(listing.amount * listing.pricePerFT).toFixed(2)}</span>
                        </div>
                        {listing.seller !== currentUser.name
                          ? (
                            <button className="trui-buy-btn" onClick={() => handleBuy(listing)}>
                              🛒 Buy
                            </button>
                          ) : (
                            <span className="trui-badge trui-badge-you">Your listing</span>
                          )
                        }
                      </div>
                      <div className="trui-card-time">{listing.createdAt}</div>
                    </div>
                  ))}
                </div>
          )}

          {/* ── My Listings ── */}
          {activeMarketTab === "listings" && (
            myListings.length === 0
              ? <div className="trui-empty">🥄 You have no listings.</div>
              : <div className="trui-grid">
                  {myListings.map((listing, i) => (
                    <div
                      key={listing.id}
                      className={`trui-card${listing.status === "open" ? " trui-card-my" : ""}`}
                    >
                      {MY_CHAOS[i % MY_CHAOS.length].map((em, j) => (
                        <span
                          key={j}
                          style={{
                            position:     "absolute",
                            bottom:       MY_POS[j].bottom,
                            right:        MY_POS[j].right,
                            fontSize:     MY_POS[j].size,
                            opacity:      MY_POS[j].opacity,
                            transform:    `rotate(${MY_POS[j].rot})`,
                            pointerEvents:"none",
                            userSelect:   "none",
                            lineHeight:   1,
                            zIndex:       0,
                          }}
                        >
                          {em}
                        </span>
                      ))}
                      <div className="trui-card-head">
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, color: "#2c1a08", fontWeight: 400 }}>
                          {listing.amount} <span style={{ fontSize: 12, opacity: 0.35 }}>FT</span>
                        </div>
                        <span className={badgeClass(listing.status)}>
                          <span className="trui-bdot" />{listing.status}
                        </span>
                      </div>
                      <div className="trui-card-foot">
                        <div className="trui-card-total">
                          ${listing.pricePerFT} <span style={{ opacity: 0.5 }}>/ FT</span>
                        </div>
                        {listing.status === "open" && (
                          <button className="trui-cancel-btn" onClick={() => handleCancel(listing)}>
                            Cancel
                          </button>
                        )}
                      </div>
                      <div className="trui-card-time">{listing.createdAt}</div>
                    </div>
                  ))}
                </div>
          )}

          {/* ── Trade History ── */}
          {activeMarketTab === "history" && (
            myTxs.length === 0
              ? <div className="trui-empty">🍴 No transactions yet.</div>
              : <div className="trui-table-wrap">
                  <span style={{ position:"absolute", top:8,   right:20, fontSize:32, opacity:0.12, transform:"rotate(20deg)",  pointerEvents:"none", zIndex:0 }}>🍜</span>
                  <span style={{ position:"absolute", bottom:12,right:48, fontSize:26, opacity:0.10, transform:"rotate(-14deg)", pointerEvents:"none", zIndex:0 }}>🥢</span>
                  <span style={{ position:"absolute", top:"40%",right:10, fontSize:22, opacity:0.12, transform:"rotate(5deg)",   pointerEvents:"none", zIndex:0 }}>🌿</span>
                  <table className="trui-table">
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>👨‍🍳 Seller</th>
                        <th>Buyer</th>
                        <th>Amount (FT)</th>
                        <th>Price / FT ($)</th>
                        <th>🌿 Total ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myTxs.map(tx => (
                        <tr key={tx.id}>
                          <td className="trui-td-dim">{tx.timestamp}</td>
                          <td className={tx.seller === currentUser.name ? "trui-td-hl" : ""}>{tx.seller}</td>
                          <td className={tx.buyer  === currentUser.name ? "trui-td-hl" : ""}>{tx.buyer}</td>
                          <td>{tx.amount} FT</td>
                          <td>${tx.pricePerFT ?? "—"}</td>
                          <td className="trui-td-green">
                            {tx.totalUSD ? `$${tx.totalUSD.toFixed(2)}` : "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
          )}

        </div>
      </div>
    </>
  )
}
