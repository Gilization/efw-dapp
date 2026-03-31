const FOOD_FLOATS = [
  { e: "🍜", x: "2%",  y: "10%", anim: "lga 5.2s ease-in-out infinite",   size: 52, opacity: 0.18 },
  { e: "🥑", x: "88%", y: "6%",  anim: "lgb 7.8s ease-in-out infinite",   size: 60, opacity: 0.20 },
  { e: "🍋", x: "93%", y: "38%", anim: "lgc 6.1s ease-in-out infinite",   size: 42, opacity: 0.16 },
  { e: "🫙", x: "0%",  y: "55%", anim: "lgd 9.3s ease-in-out infinite",   size: 64, opacity: 0.13 },
  { e: "🧄", x: "4%",  y: "80%", anim: "lge 4.7s ease-in-out infinite",   size: 46, opacity: 0.18 },
  { e: "🍅", x: "83%", y: "76%", anim: "lga 5.2s ease-in-out infinite",   size: 54, opacity: 0.17 },
  { e: "🫒", x: "46%", y: "2%",  anim: "lgf 6.9s ease-in-out infinite",   size: 36, opacity: 0.20 },
  { e: "🌿", x: "77%", y: "52%", anim: "lgwob 3.4s ease-in-out infinite", size: 58, opacity: 0.13 },
  { e: "🧅", x: "55%", y: "92%", anim: "lgc 6.1s ease-in-out infinite",   size: 44, opacity: 0.16 },
  { e: "🥕", x: "16%", y: "94%", anim: "lgb 7.8s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫑", x: "65%", y: "4%",  anim: "lge 4.7s ease-in-out infinite",   size: 46, opacity: 0.15 },
  { e: "🥚", x: "95%", y: "62%", anim: "lgd 9.3s ease-in-out infinite",   size: 36, opacity: 0.20 },
  { e: "🍳", x: "26%", y: "3%",  anim: "lgspin 12s linear infinite",      size: 50, opacity: 0.10 },
  { e: "🧂", x: "9%",  y: "35%", anim: "lgwob 3.4s ease-in-out infinite", size: 34, opacity: 0.18 },
  { e: "🌶️",x: "72%", y: "88%", anim: "lga 5.2s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🫐", x: "38%", y: "93%", anim: "lgc 6.1s ease-in-out infinite",   size: 36, opacity: 0.18 },
  { e: "🍄", x: "89%", y: "22%", anim: "lgd 9.3s ease-in-out infinite",   size: 48, opacity: 0.16 },
  { e: "🥬", x: "2%",  y: "24%", anim: "lge 4.7s ease-in-out infinite",   size: 54, opacity: 0.12 },
]

const LG_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap');

  @keyframes lga{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes lgb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes lgc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes lgd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes lge{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes lgf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes lgspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes lgwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .lg-root {
    font-family: 'Inter', system-ui, sans-serif;
    min-height: 100vh;
    background: #fdf8f2;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .lg-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.08) 0%, transparent 65%); }
  .lg-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.07) 0%, transparent 65%); }
  .lg-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }

  /* Card */
  .lg-card {
    position: relative; z-index: 1;
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 20px;
    padding: 44px 48px 40px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
    width: 100%; max-width: 400px;
  }

  /* Brand */
  .lg-brand {
    text-align: center;
    margin-bottom: 32px;
  }
  .lg-brand-name {
    font-family: 'Lora', Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    color: #2c1a08;
    letter-spacing: -0.5px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .lg-brand-name em { font-style: italic; color: #c1440e; }
  .lg-brand-sub {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #c4a882;
    margin-top: 8px;
  }

  /* Divider */
  .lg-divider { width: 100%; height: 1px; background: #f0e2cc; margin-bottom: 28px; }

  /* Heading */
  .lg-heading {
    font-family: 'Lora', Georgia, serif;
    font-size: 20px;
    font-weight: 400;
    color: #2c1a08;
    margin-bottom: 24px;
    letter-spacing: -0.2px;
  }
  .lg-heading em { font-style: italic; color: #c1440e; }

  /* Fields */
  .lg-field       { margin-bottom: 16px; }
  .lg-field-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 8px; display: block; }

  .lg-input {
    width: 100%; box-sizing: border-box;
    background: #fdf8f2; border: 1px solid #f0e2cc; border-radius: 10px;
    padding: 11px 14px; font-family: 'Inter', sans-serif;
    font-size: 13px; color: #2c1a08; outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
  }
  .lg-input:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }
  .lg-input::placeholder { color: #e8d8c0; }

  /* Error */
  .lg-error {
    margin-bottom: 16px; padding: 10px 14px; border-radius: 9px;
    background: rgba(185,28,28,0.06); border: 1px solid rgba(185,28,28,0.2);
    color: #b91c1c; font-size: 12px;
  }

  /* Submit button */
  .lg-btn-submit {
    width: 100%; background: #c1440e; color: #fffcf8; border: none;
    padding: 12px; border-radius: 10px; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: 0.3px;
    transition: all 0.18s; margin-top: 8px; margin-bottom: 20px;
  }
  .lg-btn-submit:hover { background: #a33a0c; box-shadow: 0 4px 14px rgba(193,68,14,0.28); }
  .lg-btn-submit:active { transform: scale(0.99); }

  /* Toggle */
  .lg-toggle { text-align: center; font-size: 12px; color: #c4a882; }
  .lg-toggle-btn {
    background: none; border: none; cursor: pointer;
    color: #c1440e; font-family: 'Inter', sans-serif;
    font-size: 12px; font-weight: 500; margin-left: 6px;
    padding: 0; transition: opacity 0.15s;
  }
  .lg-toggle-btn:hover { opacity: 0.75; }
`

export default function LoginPageUI({
  isRegister,
  name,
  setName,
  password,
  setPassword,
  error,
  setError,
  setIsRegister,
  handleSubmit
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LG_CSS }} />
      <div className="lg-root">
        <div className="lg-orb1" />
        <div className="lg-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="lg-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="lg-card">

          {/* Brand */}
          <div className="lg-brand">
            <div className="lg-brand-name">
              EFW <em>Rescue</em>
              <span style={{ fontSize: 22, transform: "rotate(-8deg)", display: "inline-block", opacity: 0.7 }}>🌿</span>
            </div>
            <div className="lg-brand-sub">Food Rescue Platform</div>
          </div>

          <div className="lg-divider" />

          {/* Heading */}
          <div className="lg-heading">
            {isRegister ? <>Create <em>Enterprise</em> Account</> : <>Welcome <em>back</em></>}
          </div>

          {/* Fields */}
          <div className="lg-field">
            <label className="lg-field-label">Enterprise Name</label>
            <input
              type="text"
              placeholder="Enter your enterprise name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="lg-input"
            />
          </div>

          <div className="lg-field">
            <label className="lg-field-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="lg-input"
            />
          </div>

          {error && (
            <div className="lg-error">⚠ {error}</div>
          )}

          <button className="lg-btn-submit" onClick={handleSubmit}>
            {isRegister ? "✦ Create Account" : "✦ Login"}
          </button>

          <div className="lg-toggle">
            {isRegister ? "Already have an account?" : "Don't have an account?"}
            <button
              className="lg-toggle-btn"
              onClick={() => {
                setIsRegister(!isRegister)
                setError("")
              }}
            >
              {isRegister ? "Login" : "Register"}
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
