const NAV_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

  .nav-root {
    font-family: 'Inter', system-ui, sans-serif;
    background: #fffcf8;
    border-bottom: 1px solid #f0e2cc;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 1px 8px rgba(0,0,0,0.04);
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: default;
    user-select: none;
  }
  .nav-brand-text {
    font-family: 'Lora', Georgia, serif;
    font-size: 20px;
    font-weight: 400;
    color: #2c1a08;
    letter-spacing: -0.3px;
  }
  .nav-brand-text em {
    font-style: italic;
    color: #c1440e;
  }
  .nav-brand-icons {
    display: flex;
    align-items: center;
    gap: 2px;
    opacity: 0.7;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .nav-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #c4a882;
    padding: 7px 14px;
    border-radius: 8px;
    transition: all 0.18s;
    letter-spacing: 0.2px;
    white-space: nowrap;
  }
  .nav-btn:hover {
    color: #2c1a08;
    background: rgba(193,68,14,0.05);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nav-divider {
    width: 1px;
    height: 20px;
    background: #f0e2cc;
    margin: 0 4px;
  }

  .nav-role-badge {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    background: rgba(193,68,14,0.06);
    color: #c1440e;
    border: 1px solid rgba(193,68,14,0.18);
  }

  .nav-username {
    font-size: 13px;
    font-weight: 500;
    color: #2c1a08;
    font-family: 'Inter', sans-serif;
  }

  .nav-logout {
    background: transparent;
    border: 1px solid rgba(193,68,14,0.25);
    color: #c1440e;
    padding: 6px 16px;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.18s;
    letter-spacing: 0.2px;
  }
  .nav-logout:hover {
    background: #c1440e;
    color: #fffcf8;
    border-color: #c1440e;
  }
`

const ROLE_LINKS = {
  enterprise: [
    { tab: "dashboard",    label: "Dashboard"       },
    { tab: "trade",        label: "Marketplace"     },
    { tab: "deposit",      label: "Deposit"         },
    { tab: "claims",       label: "Claims"          },
    { tab: "certificates", label: "My Certificates" },
  ],
  foodbank: [
    { tab: "dashboard", label: "Dashboard"          },
    { tab: "database",  label: "Database"           },
    { tab: "foodbank",  label: "Donations Approval" },
    { tab: "withdraw",  label: "Withdraw"           },
  ],
  government: [
    { tab: "dashboard",  label: "Dashboard"       },
    { tab: "database",   label: "Database"        },
    { tab: "government", label: "Claims Approval" },
  ],
  validator: [
    { tab: "dashboard", label: "Dashboard"      },
    { tab: "database",  label: "Database"       },
    { tab: "validator", label: "Validate Claims"},
  ],
  tokenmaker: [
    { tab: "dashboard",  label: "Dashboard"   },
    { tab: "database",   label: "Database"    },
    { tab: "tokenmaker", label: "Mint Tokens" },
  ],
}

export default function NavbarUI({ currentUser, setActiveTab, logout }) {
  const links = ROLE_LINKS[currentUser.role] || []

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: NAV_CSS }} />
      <nav className="nav-root">

        {/* Brand */}
        <div className="nav-brand">
          <span className="nav-brand-text">EFW <em>Rescue</em></span>
          <div className="nav-brand-icons">
            <span style={{ fontSize: 16, transform: "rotate(-8deg)", display: "inline-block" }}>🌿</span>
            <span style={{ fontSize: 12, transform: "rotate(10deg)", display: "inline-block", marginLeft: -2, opacity: 0.6 }}>✦</span>
          </div>
        </div>

        {/* Nav links */}
        <div className="nav-links">
          {links.map(l => (
            <button
              key={l.tab}
              className="nav-btn"
              onClick={() => setActiveTab(l.tab)}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="nav-right">
          <span className="nav-role-badge">{currentUser.role}</span>
          <div className="nav-divider" />
          <span className="nav-username">{currentUser.name}</span>
          <button className="nav-logout" onClick={logout}>Logout</button>
        </div>

      </nav>
    </>
  )
}
