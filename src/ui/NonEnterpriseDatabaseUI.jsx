import { useState } from "react"

const FOOD_FLOATS = [
  { e: "🍜", x: "1%",  y: "8%",  anim: "ndba 5.2s ease-in-out infinite",   size: 44, opacity: 0.20 },
  { e: "🥑", x: "89%", y: "4%",  anim: "ndbb 7.8s ease-in-out infinite",   size: 52, opacity: 0.22 },
  { e: "🍋", x: "94%", y: "36%", anim: "ndbc 6.1s ease-in-out infinite",   size: 38, opacity: 0.18 },
  { e: "🫙", x: "0%",  y: "50%", anim: "ndbd 9.3s ease-in-out infinite",   size: 58, opacity: 0.15 },
  { e: "🧄", x: "5%",  y: "78%", anim: "ndbe 4.7s ease-in-out infinite",   size: 42, opacity: 0.20 },
  { e: "🍅", x: "84%", y: "74%", anim: "ndba 5.2s ease-in-out infinite",   size: 48, opacity: 0.19 },
  { e: "🫒", x: "47%", y: "1%",  anim: "ndbf 6.9s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🌿", x: "78%", y: "50%", anim: "ndbwob 3.4s ease-in-out infinite", size: 54, opacity: 0.15 },
  { e: "🧅", x: "56%", y: "91%", anim: "ndbc 6.1s ease-in-out infinite",   size: 40, opacity: 0.18 },
  { e: "🥕", x: "17%", y: "95%", anim: "ndbb 7.8s ease-in-out infinite",   size: 34, opacity: 0.20 },
  { e: "🫑", x: "66%", y: "5%",  anim: "ndbe 4.7s ease-in-out infinite",   size: 42, opacity: 0.17 },
  { e: "🥚", x: "96%", y: "60%", anim: "ndbd 9.3s ease-in-out infinite",   size: 32, opacity: 0.22 },
  { e: "🍳", x: "27%", y: "2%",  anim: "ndbspin 12s linear infinite",      size: 46, opacity: 0.12 },
  { e: "🧂", x: "10%", y: "33%", anim: "ndbwob 3.4s ease-in-out infinite", size: 30, opacity: 0.20 },
  { e: "🌶️",x: "73%", y: "87%", anim: "ndba 5.2s ease-in-out infinite",   size: 38, opacity: 0.22 },
  { e: "🫐", x: "39%", y: "94%", anim: "ndbc 6.1s ease-in-out infinite",   size: 32, opacity: 0.20 },
  { e: "🍄", x: "90%", y: "20%", anim: "ndbd 9.3s ease-in-out infinite",   size: 44, opacity: 0.18 },
  { e: "🥬", x: "3%",  y: "22%", anim: "ndbe 4.7s ease-in-out infinite",   size: 50, opacity: 0.14 },
]

const NDB_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400;500&display=swap');

  @keyframes ndba{0%,100%{transform:translateY(0px) rotate(-8deg) scale(1)}30%{transform:translateY(-18px) rotate(6deg) scale(1.05)}70%{transform:translateY(-6px) rotate(-3deg) scale(0.97)}}
  @keyframes ndbb{0%,100%{transform:translateY(0px) rotate(12deg) scale(1)}40%{transform:translateY(-22px) rotate(-9deg) scale(1.08)}80%{transform:translateY(-4px) rotate(5deg) scale(0.95)}}
  @keyframes ndbc{0%,100%{transform:translateY(0px) rotate(-14deg) scale(1)}25%{transform:translateY(-14px) rotate(10deg) scale(1.1)}60%{transform:translateY(-20px) rotate(-6deg) scale(1.03)}}
  @keyframes ndbd{0%,100%{transform:translateY(0px) rotate(5deg) scale(1)}50%{transform:translateY(-26px) rotate(-12deg) scale(0.9)}}
  @keyframes ndbe{0%,100%{transform:translateY(0px) rotate(-20deg) scale(1)}35%{transform:translateY(-10px) rotate(15deg) scale(1.12)}65%{transform:translateY(-18px) rotate(-8deg) scale(0.93)}}
  @keyframes ndbf{0%,100%{transform:translateY(0px) rotate(3deg) scale(1)}45%{transform:translateY(-30px) rotate(-16deg) scale(1.06)}}
  @keyframes ndbspin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes ndbwob{0%,100%{transform:skewX(-3deg) rotate(-5deg)}50%{transform:skewX(4deg) rotate(8deg) scale(1.1)}}

  .ndb-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fdf8f2;
    min-height: 100vh;
    color: #8c7055;
    padding: 52px 60px 100px;
    position: relative;
    overflow: hidden;
  }
  .ndb-orb1 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 900px 600px at 5% 15%, rgba(220,100,30,0.07) 0%, transparent 65%); }
  .ndb-orb2 { position: fixed; inset: 0; pointer-events: none; z-index: 0; background: radial-gradient(ellipse 700px 800px at 90% 85%, rgba(180,140,40,0.06) 0%, transparent 65%); }
  .ndb-float { position: fixed; pointer-events: none; user-select: none; line-height: 1; z-index: 0; }
  .ndb-wrap  { max-width: 1300px; margin: 0 auto; position: relative; z-index: 1; }

  /* Header */
  .ndb-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 2.5px; text-transform: uppercase; color: #c4a882; margin-bottom: 12px; }
  .ndb-title   { font-family: 'Lora', Georgia, serif; font-size: 48px; font-weight: 400; color: #2c1a08; line-height: 1; letter-spacing: -0.5px; display: flex; align-items: center; gap: 12px; margin-bottom: 36px; }
  .ndb-title em { font-style: italic; color: #c1440e; }

  /* Sort bar */
  .ndb-sort-bar   { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
  .ndb-sort-label { font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; }
  .ndb-sort-select {
    background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 9px;
    padding: 7px 32px 7px 12px; font-family: 'Inter', sans-serif;
    font-size: 12px; color: #2c1a08; outline: none; cursor: pointer;
    transition: border-color 0.18s, box-shadow 0.18s;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23c4a882' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-color: #fffcf8;
  }
  .ndb-sort-select:focus { border-color: rgba(193,68,14,0.4); box-shadow: 0 0 0 3px rgba(193,68,14,0.08); }

  /* Table */
  .ndb-table-wrap { background: #fffcf8; border: 1px solid #f0e2cc; border-radius: 14px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); overflow-x: auto; }
  .ndb-table      { width: 100%; border-collapse: collapse; font-size: 12px; }
  .ndb-table thead tr { background: #fdf8f2; border-bottom: 1px solid #f0e2cc; }
  .ndb-table thead th { text-align: left; padding: 12px 16px; font-size: 10px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: #c4a882; white-space: nowrap; }
  .ndb-table tbody tr { border-bottom: 1px solid #f0e2cc; transition: background 0.15s; }
  .ndb-table tbody tr:last-child { border-bottom: none; }
  .ndb-table tbody tr:hover { background: rgba(193,68,14,0.025); }
  .ndb-table td   { padding: 13px 16px; color: #8c7055; vertical-align: middle; white-space: nowrap; }

  .ndb-table .td-main   { font-weight: 500; color: #2c1a08; }
  .ndb-table .td-mono   { font-family: 'JetBrains Mono', monospace; color: #2c1a08; }
  .ndb-table .td-amber  { font-family: 'JetBrains Mono', monospace; color: #c87820; font-weight: 500; }
  .ndb-table .td-blue   { font-family: 'JetBrains Mono', monospace; color: #4a7fa8; font-weight: 500; }
  .ndb-table .td-red    { color: #b91c1c; font-size: 11px; }
  .ndb-table .td-link   { color: #c1440e; text-decoration: none; font-size: 11px; border: 1px solid rgba(193,68,14,0.2); padding: 3px 10px; border-radius: 20px; background: rgba(193,68,14,0.04); transition: all 0.18s; display: inline-block; }
  .ndb-table .td-link:hover { background: #c1440e; color: #fffcf8; }

  .ndb-table .td-status { display: inline-flex; align-items: center; padding: 3px 10px; border-radius: 20px; font-size: 10px; font-weight: 500; letter-spacing: 0.6px; background: rgba(140,112,85,0.07); color: #8c7055; border: 1px solid rgba(140,112,85,0.18); white-space: nowrap; }
  .ndb-badge-done    { background: rgba(90,138,60,0.08) !important;  color: #5a8a3c !important;  border-color: rgba(90,138,60,0.22) !important; }
  .ndb-badge-rejected{ background: rgba(185,28,28,0.07) !important;  color: #b91c1c !important;  border-color: rgba(185,28,28,0.2) !important; }
  .ndb-badge-queued  { background: rgba(74,127,168,0.07) !important; color: #4a7fa8 !important;  border-color: rgba(74,127,168,0.2) !important; }

  .ndb-empty { padding: 56px 24px; text-align: center; font-size: 12px; color: #e8d8c0; font-family: 'JetBrains Mono', monospace; }
`

export default function NonEnterpriseDatabaseUI({
  allClaims
}) {
  const [sortBy, setSortBy] = useState("latest")

  let sortedClaims = [...allClaims]

  if (sortBy === "enterprise") {
    sortedClaims.sort((a, b) => a.enterprise.localeCompare(b.enterprise))
  }
  if (sortBy === "ft") {
    sortedClaims.sort((a, b) => b.faceValue - a.faceValue)
  }
  if (sortBy === "status") {
    sortedClaims.sort((a, b) => a.status.localeCompare(b.status))
  }

  const getOverallBadge = (status) => {
    if (status === "minted")   return "ndb-badge-done"
    if (status === "rejected") return "ndb-badge-rejected"
    return "ndb-badge-queued"
  }

  const getOverallLabel = (status) => {
    if (status === "minted")   return "✦ Finished & FT Distributed"
    if (status === "rejected") return "✕ Rejected"
    return "⏳ Queued"
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NDB_CSS }} />
      <div className="ndb-root">
        <div className="ndb-orb1" />
        <div className="ndb-orb2" />

        {FOOD_FLOATS.map((f, i) => (
          <div
            key={i}
            className="ndb-float"
            style={{ left: f.x, top: f.y, fontSize: f.size, opacity: f.opacity, animation: f.anim }}
          >
            {f.e}
          </div>
        ))}

        <div className="ndb-wrap">

          {/* ── Header ── */}
          <div className="ndb-eyebrow">EFW Rescue · Global</div>
          <div className="ndb-title">
            Claim <em>Database</em> 🗂️
          </div>

          {/* ── Sort bar ── */}
          <div className="ndb-sort-bar">
            <span className="ndb-sort-label">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="ndb-sort-select"
            >
              <option value="latest">Latest</option>
              <option value="enterprise">Enterprise</option>
              <option value="ft">FT Amount</option>
              <option value="status">Status</option>
            </select>
          </div>

          {/* ── Table ── */}
          <div className="ndb-table-wrap">
            {sortedClaims.length === 0 ? (
              <div className="ndb-empty">🌱 No claims found.</div>
            ) : (
              <table className="ndb-table">
                <thead>
                  <tr>
                    <th>Enterprise</th>
                    <th>Donation ID</th>
                    <th>FT</th>
                    <th>Contribution Fee</th>
                    <th>Estimated Value</th>
                    <th>Donation</th>
                    <th>Evidence</th>
                    <th>Status</th>
                    <th>Overall Status</th>
                    <th>Reject Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedClaims.map(claim => (
                    <tr key={claim.id}>
                      <td className="td-main">{claim.enterprise}</td>
                      <td className="td-mono">{claim.donationId}</td>
                      <td className="td-mono">{claim.faceValue} FT</td>
                      <td className="td-amber">${claim.contributionFee}</td>
                      <td className="td-blue">${claim.estimatedDonationValue}</td>
                      <td>{claim.donationType}</td>
                      <td>
                        <a href={claim.evidence} target="_blank" className="td-link">
                          View
                        </a>
                      </td>
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
                        <span className={`td-status ${getOverallBadge(claim.status)}`}>
                          {getOverallLabel(claim.status)}
                        </span>
                      </td>
                      <td className="td-red">
                        {claim.history
                          ?.filter(h => h.action === "rejected")
                          .map(h => h.reason)
                          .join(", ") || "—"}
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
