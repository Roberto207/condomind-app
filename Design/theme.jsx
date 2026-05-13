// theme.jsx — Condomind design tokens + shared icons + UI primitives

const TOKENS = {
  // surface
  page:    '#F2F5F3',
  card:    '#FFFFFF',
  inkSoft: '#F8FAF9',
  // ink
  ink:     '#0B1726',
  ink2:    '#3B4A5B',
  ink3:    '#6B7A8B',
  ink4:    '#9AA7B5',
  border:  '#E5EAE7',
  borderS: '#EEF1EF',
  // brand
  brand:   '#10B981',  // emerald
  brandD:  '#047857',
  brandT:  '#06B6D4',  // teal for AI gradient end
  brandL:  '#D1FAE5',
  brandLL: '#ECFDF5',
  // status
  warn:    '#F59E0B',
  warnL:   '#FEF3C7',
  danger:  '#DC2626',
  dangerL: '#FEE2E2',
  info:    '#6366F1',
  infoL:   '#E0E7FF',
};

// AI gradient — defined as a window getter so tweak changes propagate live.
// Accessed as a bare identifier `AI_GRADIENT` in other scripts (resolves
// against window). Re-computes from current TOKENS.brand / TOKENS.brandT.
Object.defineProperty(window, 'AI_GRADIENT', {
  get() { return `linear-gradient(135deg, ${TOKENS.brand} 0%, ${TOKENS.brandT} 100%)`; },
  configurable: true,
});

// ── Icons (24px stroke, currentColor) ─────────────────────────
const Icon = {
  camera:    (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 8.5A1.5 1.5 0 014.5 7h2.4l1.3-1.7A1.5 1.5 0 019.4 4.7h5.2c.5 0 .9.2 1.2.6L17.1 7h2.4A1.5 1.5 0 0121 8.5v9A1.5 1.5 0 0119.5 19h-15A1.5 1.5 0 013 17.5v-9z" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.7"/></svg>,
  mic:       (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.7"/><path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  text:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 6h14M5 12h14M5 18h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  bolt:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  sparkle:   (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor"/><path d="M19 16l.7 2 2 .7-2 .7L19 21l-.7-1.6-2-.7 2-.7L19 16z" fill="currentColor"/></svg>,
  drop:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z" stroke="currentColor" strokeWidth="1.7"/></svg>,
  plug:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 01-10 0V8zM12 16v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  brush:     (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M14.6 4.4l5 5L9.4 19.6 4 21l1.4-5.4L14.6 4.4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  warning:   (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3.5L2.5 19.5h19L12 3.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M12 10v4M12 17h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  shield:    (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12l2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  building:  (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 21V5l7-2 7 2v16M9 21v-4h6v4M9 9h.01M12 9h.01M15 9h.01M9 13h.01M12 13h.01M15 13h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  list:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  user:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7"/><path d="M4 21c1-4.5 4-7 8-7s7 2.5 8 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  check:     (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  chevR:     (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  arrowR:    (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  arrowL:    (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  plus:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  send:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 11L21 3l-8 18-2-8-8-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  clock:     (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7"/><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  pin:       (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7"/></svg>,
  wallet:    (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="6" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3 10h18M17 15h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  filter:    (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 5h18l-7 9v6l-4-2v-4L3 5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  bell:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 16V11a6 6 0 1112 0v5l1.5 2.5h-15L6 16zM10 21a2 2 0 004 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  star:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l2.7 5.7 6.3.9-4.6 4.5 1.1 6.3L12 17.5 6.5 20.4l1.1-6.3L3 9.6l6.3-.9L12 3z" fill="currentColor"/></svg>,
  pause:     (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor"/><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor"/></svg>,
  play:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M7 4l13 8-13 8V4z" fill="currentColor"/></svg>,
  close:     (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  more:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><circle cx="5" cy="12" r="1.7" fill="currentColor"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/><circle cx="19" cy="12" r="1.7" fill="currentColor"/></svg>,
  home:      (p={}) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 11l9-7 9 7v9.5A1.5 1.5 0 0119.5 22h-3v-7h-7v7h-3A1.5 1.5 0 015 20.5V11z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
};

// ── Logo ─────────────────────────────────────────────────────
function CondomindLogo({ size = 28, mono = false }) {
  const fill = mono ? 'currentColor' : TOKENS.brand;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="3" y="11" width="26" height="18" rx="3" fill={fill}/>
      <rect x="8" y="16" width="3" height="3" rx="0.5" fill="#fff" opacity="0.85"/>
      <rect x="13" y="16" width="3" height="3" rx="0.5" fill="#fff" opacity="0.85"/>
      <rect x="18" y="16" width="3" height="3" rx="0.5" fill="#fff" opacity="0.85"/>
      <rect x="8" y="21" width="3" height="3" rx="0.5" fill="#fff" opacity="0.55"/>
      <rect x="18" y="21" width="3" height="3" rx="0.5" fill="#fff" opacity="0.55"/>
      <path d="M16 2L26 10H6L16 2Z" fill={mono ? 'currentColor' : TOKENS.ink}/>
      <circle cx="24" cy="20" r="4" fill={mono ? 'currentColor' : TOKENS.brandT}/>
      <path d="M24 18.2l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3z" fill="#fff"/>
    </svg>
  );
}

// ── Shared UI primitives ─────────────────────────────────────

function Card({ children, style = {}, padding = 16, radius = 18 }) {
  return (
    <div style={{
      background: TOKENS.card, borderRadius: radius, padding,
      boxShadow: '0 1px 0 rgba(11,23,38,0.04), 0 2px 6px rgba(11,23,38,0.04)',
      border: `0.5px solid ${TOKENS.borderS}`,
      ...style,
    }}>{children}</div>
  );
}

function Pill({ children, color = TOKENS.ink2, bg = TOKENS.borderS, style = {} }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '4px 9px', borderRadius: 9999,
      fontSize: 12, fontWeight: 600, color, background: bg,
      ...style,
    }}>{children}</span>
  );
}

function AIBadge({ size = 'sm', label = 'IA', style = {} }) {
  const s = size === 'lg'
    ? { fontSize: 12, padding: '5px 10px', gap: 5 }
    : { fontSize: 11, padding: '3px 8px', gap: 4 };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: AI_GRADIENT, color: '#fff',
      borderRadius: 9999, fontWeight: 700, letterSpacing: 0.4,
      boxShadow: '0 1px 2px rgba(16,185,129,0.35)',
      ...s, ...style,
    }}>
      <svg width={size === 'lg' ? 11 : 10} height={size === 'lg' ? 11 : 10} viewBox="0 0 24 24" fill="#fff">
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>
      </svg>
      {label}
    </span>
  );
}

function RiskChip({ level }) {
  const cfg = {
    1: { label: 'Nível 1 · Simples',   bg: TOKENS.brandL,  fg: TOKENS.brandD,   dot: TOKENS.brand },
    2: { label: 'Nível 2 · Moderado',  bg: TOKENS.warnL,   fg: '#92400E',       dot: TOKENS.warn  },
    3: { label: 'Nível 3 · Alto risco',bg: TOKENS.dangerL, fg: '#991B1B',       dot: TOKENS.danger},
  }[level];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 10px 5px 8px', borderRadius: 9999,
      fontSize: 12, fontWeight: 700, color: cfg.fg, background: cfg.bg,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: 9999, background: cfg.dot }}/>
      {cfg.label}
    </span>
  );
}

function Button({ children, variant = 'primary', onClick, full, icon, style = {} }) {
  const v = {
    primary: { bg: TOKENS.ink, fg: '#fff' },
    brand:   { bg: TOKENS.brand, fg: '#fff' },
    soft:    { bg: TOKENS.brandLL, fg: TOKENS.brandD },
    ghost:   { bg: 'transparent', fg: TOKENS.ink, border: `1px solid ${TOKENS.border}` },
    danger:  { bg: TOKENS.danger, fg: '#fff' },
  }[variant];
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      width: full ? '100%' : undefined,
      padding: '14px 18px', borderRadius: 16,
      background: v.bg, color: v.fg, border: v.border || 'none',
      fontSize: 16, fontWeight: 600, letterSpacing: -0.2, cursor: 'pointer',
      fontFamily: 'inherit',
      ...style,
    }}>
      {icon}
      {children}
    </button>
  );
}

// Section header within iOS frame (custom — we don't always want the big nav title)
function ScreenHeader({ title, subtitle, leading, trailing, dark = false }) {
  return (
    <div style={{
      padding: '60px 20px 8px',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {leading}
        <div>
          <div style={{
            fontSize: 26, fontWeight: 700, color: dark ? '#fff' : TOKENS.ink,
            letterSpacing: -0.6, lineHeight: 1.15,
          }}>{title}</div>
          {subtitle && (
            <div style={{
              fontSize: 13, color: dark ? 'rgba(255,255,255,0.6)' : TOKENS.ink3,
              marginTop: 2,
            }}>{subtitle}</div>
          )}
        </div>
      </div>
      {trailing}
    </div>
  );
}

// Avatar with initials
function Avatar({ name, color, size = 36 }) {
  const initials = name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: 9999, background: color || TOKENS.ink,
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: size * 0.36, letterSpacing: 0.3, flexShrink: 0,
    }}>{initials}</div>
  );
}

// Photo placeholder — simulates a real photo with a tinted gradient + content hint
function PhotoStub({ tone = 'wet', label, ratio = '4/3', style = {} }) {
  const tones = {
    wet:   { from: '#2D3E4F', to: '#5C7A8E', accent: 'rgba(255,255,255,0.18)' },
    crack: { from: '#3A2D24', to: '#8A6B57', accent: 'rgba(0,0,0,0.25)' },
    elec:  { from: '#2B2520', to: '#5D4D3A', accent: '#F59E0B' },
    paint: { from: '#E8E2D6', to: '#C5B79A', accent: 'rgba(0,0,0,0.2)' },
    pipe:  { from: '#1F2D3D', to: '#4A6378', accent: 'rgba(120,170,200,0.4)' },
  };
  const t = tones[tone] || tones.wet;
  return (
    <div style={{
      aspectRatio: ratio,
      borderRadius: 14, overflow: 'hidden', position: 'relative',
      background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
      ...style,
    }}>
      {/* texture lines mimicking surface */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: tone === 'crack'
          ? 'linear-gradient(95deg, transparent 47%, rgba(0,0,0,0.45) 49%, transparent 51%), linear-gradient(115deg, transparent 60%, rgba(0,0,0,0.3) 62%, transparent 64%)'
          : tone === 'wet'
          ? 'radial-gradient(ellipse 60% 40% at 30% 60%, rgba(0,0,0,0.45) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 70% 40%, rgba(0,0,0,0.25) 0%, transparent 70%)'
          : tone === 'elec'
          ? 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.4) 0%, transparent 35%)'
          : tone === 'paint'
          ? 'linear-gradient(45deg, transparent 49%, rgba(0,0,0,0.18) 50%, transparent 51%), linear-gradient(135deg, transparent 70%, rgba(0,0,0,0.15) 71%, transparent 72%)'
          : 'repeating-linear-gradient(45deg, transparent 0 6px, rgba(255,255,255,0.04) 6px 8px)',
      }}/>
      {label && (
        <div style={{
          position: 'absolute', bottom: 8, left: 10,
          color: 'rgba(255,255,255,0.85)', fontSize: 10,
          letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600,
          textShadow: '0 1px 2px rgba(0,0,0,0.4)',
        }}>{label}</div>
      )}
    </div>
  );
}

Object.assign(window, {
  TOKENS, Icon, CondomindLogo, Card, Pill, AIBadge, RiskChip,
  Button, ScreenHeader, Avatar, PhotoStub,
});
