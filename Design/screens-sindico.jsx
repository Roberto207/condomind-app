// screens-sindico.jsx — Síndico-side screens

// ───────────────────────────────────────────────
// HOME — dashboard with active issues + quick CTA
// ───────────────────────────────────────────────
function HomeScreen() {
  return (
    <div style={{ background: TOKENS.page, minHeight: '100%', paddingBottom: 100 }}>
      {/* Header — green hero */}
      <div style={{
        background: AI_GRADIENT,
        padding: '60px 20px 28px',
        borderRadius: '0 0 28px 28px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40, width: 200, height: 200,
          borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
        }}/>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Renato Lima" color="rgba(0,0,0,0.25)" size={40}/>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, fontWeight: 500 }}>
                Bem-vindo, Síndico
              </div>
              <div style={{ color: '#fff', fontSize: 17, fontWeight: 700 }}>
                Renato Lima
              </div>
            </div>
          </div>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', position: 'relative',
          }}>
            <Icon.bell/>
            <span style={{
              position: 'absolute', top: 8, right: 8, width: 8, height: 8,
              borderRadius: 9999, background: '#FB923C', border: '2px solid rgba(255,255,255,0.6)',
            }}/>
          </div>
        </div>

        <div style={{ marginTop: 22 }}>
          <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13, fontWeight: 500, letterSpacing: 0.2 }}>
            EDIFÍCIO ALAMEDA · VILA MADALENA
          </div>
          <div style={{ color: '#fff', fontSize: 30, fontWeight: 700, letterSpacing: -0.6, marginTop: 4 }}>
            3 chamados abertos
          </div>
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, marginTop: 2 }}>
            1 aguardando aprovação · 2 em execução
          </div>
        </div>
      </div>

      {/* Big CTA — report problem */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{
          background: TOKENS.card, borderRadius: 20, padding: 18,
          border: `0.5px solid ${TOKENS.borderS}`,
          boxShadow: '0 1px 0 rgba(11,23,38,0.04), 0 6px 18px rgba(11,23,38,0.05)',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: AI_GRADIENT,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff',
          }}>
            <Icon.sparkle/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.2 }}>
              Reportar problema
            </div>
            <div style={{ fontSize: 12.5, color: TOKENS.ink3, marginTop: 1 }}>
              Foto, áudio ou texto · IA classifica em segundos
            </div>
          </div>
          <div style={{ color: TOKENS.ink3 }}><Icon.chevR/></div>
        </div>
      </div>

      {/* Active issues */}
      <div style={{ padding: '24px 20px 8px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 10,
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 700, color: TOKENS.ink, margin: 0, letterSpacing: -0.2 }}>
            Em andamento
          </h3>
          <span style={{ fontSize: 13, color: TOKENS.brandD, fontWeight: 600 }}>Ver todos</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <IssueCard
            title="Infiltração no teto · Garagem G2"
            meta="#2847 · há 2 dias"
            level={2} status="3 orçamentos recebidos"
            statusColor={TOKENS.brandD}
            photo="wet"
          />
          <IssueCard
            title="Lâmpada queimada · Hall 3º andar"
            meta="#2845 · há 4 dias"
            level={1} status="Em execução · Elétrica Silva"
            statusColor={TOKENS.ink2}
            photo="elec"
          />
          <IssueCard
            title="Rachadura na fachada lateral"
            meta="#2843 · há 6 dias"
            level={3} status="Vistoria CREA agendada"
            statusColor={TOKENS.danger}
            photo="crack"
          />
        </div>
      </div>
    </div>
  );
}

function IssueCard({ title, meta, level, status, statusColor, photo }) {
  return (
    <div style={{
      background: TOKENS.card, borderRadius: 18, padding: 12,
      border: `0.5px solid ${TOKENS.borderS}`,
      boxShadow: '0 1px 0 rgba(11,23,38,0.03)',
      display: 'flex', gap: 12, alignItems: 'center',
    }}>
      <PhotoStub tone={photo} ratio="1" style={{ width: 62, height: 62, borderRadius: 12, flexShrink: 0 }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
          <RiskChip level={level}/>
        </div>
        <div style={{
          fontSize: 14, fontWeight: 600, color: TOKENS.ink, letterSpacing: -0.2,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
          <span style={{ fontSize: 11.5, color: TOKENS.ink4 }}>{meta}</span>
          <span style={{ fontSize: 11.5, color: TOKENS.ink4 }}>·</span>
          <span style={{ fontSize: 11.5, color: statusColor, fontWeight: 600 }}>{status}</span>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// CAPTURE FLOW — interactive: tap through 3 input modes
// ────────────────────────────────────────────────────────
function CaptureScreen() {
  const [mode, setMode] = React.useState('idle'); // idle | photo | audio | text
  const [hasPhoto, setHasPhoto] = React.useState(false);
  const [recording, setRecording] = React.useState(false);
  const [recSec, setRecSec] = React.useState(0);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    if (!recording) return;
    const t = setInterval(() => setRecSec(s => s + 1), 1000);
    return () => clearInterval(t);
  }, [recording]);

  const ready = hasPhoto || recSec > 0 || text.length > 0;

  return (
    <div style={{ background: TOKENS.page, minHeight: '100%', paddingBottom: 110, position: 'relative' }}>
      {/* Header */}
      <div style={{
        padding: '60px 20px 14px',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12, background: TOKENS.card,
          border: `0.5px solid ${TOKENS.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: TOKENS.ink,
        }}>
          <Icon.arrowL/>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: TOKENS.ink4, fontWeight: 600, letterSpacing: 0.5 }}>
            NOVO CHAMADO · 1 DE 3
          </div>
          <div style={{ fontSize: 18, color: TOKENS.ink, fontWeight: 700, letterSpacing: -0.3 }}>
            Conte o que aconteceu
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 4, padding: '0 20px 16px' }}>
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: TOKENS.brand }}/>
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: TOKENS.borderS }}/>
        <div style={{ flex: 1, height: 4, borderRadius: 2, background: TOKENS.borderS }}/>
      </div>

      {/* Instruction */}
      <div style={{ padding: '0 20px 14px' }}>
        <div style={{ fontSize: 14, color: TOKENS.ink2, lineHeight: 1.45 }}>
          Use a forma que for mais fácil. A IA reconhece <strong style={{ color: TOKENS.ink }}>foto, áudio e texto</strong> — pode combinar os três.
        </div>
      </div>

      {/* Input modes — 3 large cards */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>

        {/* PHOTO */}
        <InputCard
          active={hasPhoto}
          icon={<Icon.camera/>}
          iconBg="#EFF6FF" iconColor="#1D4ED8"
          title="Tirar foto"
          subtitle={hasPhoto ? '1 foto adicionada' : 'Aponte para o problema'}
          onClick={() => setHasPhoto(v => !v)}
          right={hasPhoto && (
            <div style={{ display: 'flex', gap: 6 }}>
              <PhotoStub tone="wet" ratio="1" style={{ width: 44, height: 44, borderRadius: 10 }}/>
            </div>
          )}
        />

        {/* AUDIO */}
        <InputCard
          active={recSec > 0 || recording}
          icon={recording ? <Icon.pause/> : <Icon.mic/>}
          iconBg={recording ? '#FEE2E2' : '#ECFEFF'}
          iconColor={recording ? '#DC2626' : '#0E7490'}
          title={recording ? 'Gravando…' : (recSec > 0 ? `Áudio · ${fmtSec(recSec)}` : 'Gravar áudio')}
          subtitle={recording ? 'Toque para pausar' : (recSec > 0 ? 'Toque para regravar' : 'Descreva em voz alta')}
          onClick={() => {
            if (!recording && recSec === 0) { setRecording(true); }
            else if (recording) { setRecording(false); }
            else { setRecSec(0); setRecording(true); }
          }}
          right={(recording || recSec > 0) && (
            <Waveform active={recording}/>
          )}
        />

        {/* TEXT */}
        <InputCard
          active={text.length > 0}
          icon={<Icon.text/>}
          iconBg="#F3E8FF" iconColor="#7E22CE"
          title="Escrever"
          subtitle={text || 'Adicione uma descrição (opcional)'}
          onClick={() => setMode(m => m === 'text' ? 'idle' : 'text')}
        />

        {mode === 'text' && (
          <div style={{
            background: TOKENS.card, borderRadius: 16, padding: 12,
            border: `0.5px solid ${TOKENS.border}`,
            marginTop: -4,
          }}>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Ex.: Mancha de mofo aumentando no teto da garagem, perto do pilar G2..."
              style={{
                width: '100%', minHeight: 80, border: 'none', outline: 'none',
                resize: 'none', fontSize: 15, fontFamily: 'inherit', color: TOKENS.ink,
                background: 'transparent', lineHeight: 1.4,
              }}
            />
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginTop: 4,
            }}>
              <AIBadge label="IA sugere termos técnicos"/>
              <span style={{ fontSize: 11, color: TOKENS.ink4 }}>{text.length}/500</span>
            </div>
          </div>
        )}
      </div>

      {/* Location chip */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: TOKENS.card, borderRadius: 12, padding: '8px 12px',
          border: `0.5px solid ${TOKENS.borderS}`,
          fontSize: 13, color: TOKENS.ink2, fontWeight: 500,
        }}>
          <span style={{ color: TOKENS.brandD }}><Icon.pin/></span>
          Garagem G2 · subsolo
          <span style={{ color: TOKENS.ink4, marginLeft: 2 }}>Trocar</span>
        </div>
      </div>

      {/* Bottom action bar */}
      <div style={{
        position: 'absolute', bottom: 34, left: 0, right: 0,
        padding: '14px 20px 14px',
        background: 'linear-gradient(to top, rgba(242,245,243,1) 60%, rgba(242,245,243,0) 100%)',
      }}>
        <Button
          variant={ready ? 'brand' : 'ghost'}
          full
          icon={ready && <Icon.sparkle/>}
          style={{
            opacity: ready ? 1 : 0.5,
            background: ready ? AI_GRADIENT : 'transparent',
            color: ready ? '#fff' : TOKENS.ink3,
            border: ready ? 'none' : `1px solid ${TOKENS.border}`,
          }}
        >
          {ready ? 'Analisar com IA' : 'Adicione foto, áudio ou texto'}
        </Button>
      </div>
    </div>
  );
}

function fmtSec(s) {
  return `0:${String(s).padStart(2, '0')}`;
}

function InputCard({ icon, iconBg, iconColor, title, subtitle, active, onClick, right }) {
  return (
    <div onClick={onClick} style={{
      background: TOKENS.card, borderRadius: 18, padding: 14,
      border: `1.5px solid ${active ? TOKENS.brand : 'transparent'}`,
      boxShadow: active
        ? '0 0 0 4px rgba(16,185,129,0.10), 0 2px 6px rgba(11,23,38,0.04)'
        : '0 1px 0 rgba(11,23,38,0.04), 0 2px 6px rgba(11,23,38,0.04)',
      outline: `0.5px solid ${TOKENS.borderS}`,
      display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
      transition: 'all 0.15s ease',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: iconBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: iconColor, flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: TOKENS.ink, letterSpacing: -0.2 }}>
          {title}
        </div>
        <div style={{
          fontSize: 12.5, color: TOKENS.ink3, marginTop: 2,
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {subtitle}
        </div>
      </div>
      {right}
      {!right && (
        <div style={{
          width: 22, height: 22, borderRadius: 9999,
          border: active ? `none` : `1.5px solid ${TOKENS.border}`,
          background: active ? TOKENS.brand : 'transparent',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {active && <Icon.check style={{ width: 14, height: 14 }}/>}
        </div>
      )}
    </div>
  );
}

function Waveform({ active }) {
  const bars = [8, 14, 22, 18, 26, 12, 20, 9, 16, 24];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 32 }}>
      {bars.map((h, i) => (
        <div key={i} style={{
          width: 2.5, height: h, borderRadius: 2,
          background: TOKENS.brand,
          animation: active ? `wave-${i % 3} 0.8s ease-in-out infinite` : 'none',
          animationDelay: `${i * 0.07}s`,
        }}/>
      ))}
      <style>{`
        @keyframes wave-0 { 0%,100%{transform:scaleY(0.5)} 50%{transform:scaleY(1.3)} }
        @keyframes wave-1 { 0%,100%{transform:scaleY(0.7)} 50%{transform:scaleY(1.1)} }
        @keyframes wave-2 { 0%,100%{transform:scaleY(0.4)} 50%{transform:scaleY(1.4)} }
      `}</style>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// IA ANALYZING — animated state
// ────────────────────────────────────────────────────────
function AnalyzingScreen() {
  const [pct, setPct] = React.useState(0);
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setPct(p => Math.min(p + 1.2, 78)), 60);
    return () => clearInterval(t);
  }, []);

  React.useEffect(() => {
    if (pct > 25 && step < 1) setStep(1);
    if (pct > 55 && step < 2) setStep(2);
  }, [pct, step]);

  return (
    <div style={{
      background: TOKENS.ink, minHeight: '100%',
      paddingTop: 60, paddingBottom: 50,
      position: 'relative', overflow: 'hidden',
      color: '#fff',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 420, height: 420, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 65%)',
        filter: 'blur(20px)', animation: 'pulse 2.4s ease-in-out infinite',
      }}/>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:0.7;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)} }
        @keyframes spin { to { transform: rotate(360deg) } }
        @keyframes orbit { to { transform: rotate(360deg) } }
      `}</style>

      {/* Top */}
      <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600, letterSpacing: 0.4 }}>
          ANALISANDO
        </div>
        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Cancelar</div>
      </div>

      {/* Visual */}
      <div style={{
        marginTop: 56, display: 'flex', flexDirection: 'column', alignItems: 'center',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ position: 'relative', width: 200, height: 200 }}>
          {/* Outer ring */}
          <svg width="200" height="200" style={{ position: 'absolute', inset: 0, animation: 'orbit 8s linear infinite' }}>
            <circle cx="100" cy="100" r="92" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="3 6"/>
          </svg>
          {/* Progress ring */}
          <svg width="200" height="200" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
            <circle cx="100" cy="100" r="76" stroke="rgba(255,255,255,0.08)" strokeWidth="3" fill="none"/>
            <circle cx="100" cy="100" r="76" stroke="url(#g1)" strokeWidth="3" fill="none"
              strokeDasharray={477.5} strokeDashoffset={477.5 * (1 - pct/100)}
              strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.3s linear' }}/>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={TOKENS.brand}/>
                <stop offset="100%" stopColor={TOKENS.brandT}/>
              </linearGradient>
            </defs>
          </svg>
          {/* Center — image being analyzed */}
          <div style={{
            position: 'absolute', inset: 30, borderRadius: '50%', overflow: 'hidden',
            border: '2px solid rgba(255,255,255,0.1)',
          }}>
            <PhotoStub tone="wet" ratio="1" style={{ width: '100%', height: '100%', borderRadius: 0 }}/>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(16,185,129,0.25) 50.5%, transparent 51%, transparent 100%)',
              animation: 'scan 2.4s ease-in-out infinite',
            }}/>
            <style>{`@keyframes scan { 0%,100%{background-position:0 -100%} 50%{background-position:0 100%} }`}</style>
          </div>
          {/* Sparkle accents */}
          <div style={{ position: 'absolute', top: 0, right: 18, color: TOKENS.brand }}>
            <Icon.sparkle style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.6))' }}/>
          </div>
          <div style={{ position: 'absolute', bottom: 4, left: 14, color: TOKENS.brandT, transform: 'scale(0.7)' }}>
            <Icon.sparkle style={{ filter: 'drop-shadow(0 0 6px rgba(6,182,212,0.6))' }}/>
          </div>
        </div>

        <div style={{
          fontSize: 28, fontWeight: 700, letterSpacing: -0.6,
          marginTop: 36, textAlign: 'center', padding: '0 30px',
        }}>
          IA analisando seu chamado
        </div>
        <div style={{
          fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 6,
          textAlign: 'center',
        }}>
          Identificando categoria e urgência…
        </div>
      </div>

      {/* Steps */}
      <div style={{
        position: 'absolute', bottom: 60, left: 24, right: 24, zIndex: 2,
        background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)',
        borderRadius: 20, padding: 16,
        border: '0.5px solid rgba(255,255,255,0.08)',
      }}>
        <AnalyzeStep done active={step >= 0} label="Processando foto · 1 imagem"/>
        <AnalyzeStep done={step >= 2} active={step >= 1} label="Identificando categoria · hidráulica"/>
        <AnalyzeStep done={false} active={step >= 2} label="Estimando nível de risco" last/>
      </div>
    </div>
  );
}

function AnalyzeStep({ done, active, label, last }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', position: 'relative' }}>
      <div style={{
        width: 22, height: 22, borderRadius: 9999, flexShrink: 0,
        background: done ? TOKENS.brand : (active ? 'rgba(16,185,129,0.18)' : 'rgba(255,255,255,0.08)'),
        border: done ? 'none' : `1.5px solid ${active ? TOKENS.brand : 'rgba(255,255,255,0.15)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
      }}>
        {done ? <Icon.check style={{ width: 12, height: 12 }}/>
          : active ? <div style={{
              width: 8, height: 8, borderRadius: 9999, border: '1.5px solid transparent',
              borderTopColor: TOKENS.brand, animation: 'spin 0.7s linear infinite',
            }}/>
          : null}
      </div>
      <div style={{
        fontSize: 14, fontWeight: active ? 600 : 500,
        color: done ? '#fff' : (active ? '#fff' : 'rgba(255,255,255,0.4)'),
        flex: 1,
      }}>{label}</div>
      {!last && (
        <div style={{
          position: 'absolute', left: 10.5, top: 28, bottom: -2, width: 1,
          background: done ? TOKENS.brand : 'rgba(255,255,255,0.1)',
        }}/>
      )}
    </div>
  );
}

// ────────────────────────────────────────────────────────
// DIAGNÓSTICO — IA result
// ────────────────────────────────────────────────────────
function DiagnosticScreen() {
  return (
    <div style={{ background: TOKENS.page, minHeight: '100%', paddingBottom: 100 }}>
      <div style={{ padding: '60px 20px 8px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12, background: TOKENS.card,
          border: `0.5px solid ${TOKENS.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon.arrowL/></div>
        <div style={{ flex: 1, fontSize: 18, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.3 }}>
          Diagnóstico
        </div>
        <div style={{ color: TOKENS.ink3 }}><Icon.more/></div>
      </div>

      {/* AI hero card */}
      <div style={{ padding: '8px 20px 0' }}>
        <div style={{
          background: TOKENS.ink, borderRadius: 22, padding: 18,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* glow */}
          <div style={{
            position: 'absolute', top: -50, right: -50, width: 180, height: 180,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%)',
            filter: 'blur(20px)',
          }}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', zIndex: 1 }}>
            <AIBadge size="lg" label="DIAGNÓSTICO IA"/>
            <span style={{
              fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 500,
            }}>concluído em 4s</span>
          </div>
          <div style={{
            color: '#fff', fontSize: 22, fontWeight: 700, letterSpacing: -0.4,
            marginTop: 12, lineHeight: 1.25, position: 'relative', zIndex: 1,
          }}>
            Infiltração ativa por capilaridade na laje da garagem
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginTop: 14,
            position: 'relative', zIndex: 1,
          }}>
            <RiskChip level={2}/>
            <Pill bg="rgba(255,255,255,0.1)" color="rgba(255,255,255,0.8)">
              Hidráulica · Impermeabilização
            </Pill>
          </div>

          {/* Confidence */}
          <div style={{
            marginTop: 16, padding: 12, borderRadius: 14,
            background: 'rgba(255,255,255,0.06)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            position: 'relative', zIndex: 1,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                Confiança da IA
              </span>
              <span style={{ fontSize: 13, color: TOKENS.brand, fontWeight: 700 }}>87%</span>
            </div>
            <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{
                width: '87%', height: '100%', background: AI_GRADIENT, borderRadius: 3,
              }}/>
            </div>
            <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.5)', marginTop: 8, lineHeight: 1.4 }}>
              Alta confiança — foto clara + descrição consistente.
              Recomendamos confirmar com prestador parceiro antes da execução.
            </div>
          </div>
        </div>
      </div>

      {/* Technical description */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card style={{ padding: 16 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: TOKENS.ink3, letterSpacing: 0.6,
            textTransform: 'uppercase', marginBottom: 8,
          }}>
            Descrição técnica gerada
          </div>
          <div style={{ fontSize: 14, color: TOKENS.ink, lineHeight: 1.55, letterSpacing: -0.1 }}>
            Mancha de umidade com bordas escurecidas em laje de subsolo (≈0,8m²),
            indicando <strong>infiltração persistente</strong>. Sintomas compatíveis
            com falha de impermeabilização ou vazamento em tubulação superior.
            Sugerida vistoria por prestador especializado em <strong>impermeabilização</strong>
            antes do orçamento final.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <Pill>m² afetados: ~0,8</Pill>
            <Pill>Local: laje G2</Pill>
            <Pill>Risco estrutural: baixo</Pill>
          </div>
        </Card>
      </div>

      {/* Recommended actions */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card>
          <div style={{
            fontSize: 11, fontWeight: 700, color: TOKENS.ink3, letterSpacing: 0.6,
            textTransform: 'uppercase', marginBottom: 10,
          }}>
            Próximos passos sugeridos
          </div>
          <ActionRow num={1} label="Solicitar vistoria a 3 prestadores parceiros" hint="2 dias · sem custo inicial"/>
          <ActionRow num={2} label="Comparar orçamentos padronizados" hint="IA destaca diferenças"/>
          <ActionRow num={3} label="Aprovar execução em assembleia" hint="se acima de R$ 2.000" last/>
        </Card>
      </div>

      {/* CTAs */}
      <div style={{ padding: '18px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Button variant="brand" full icon={<Icon.send/>} style={{ background: AI_GRADIENT }}>
          Enviar a 3 prestadores parceiros
        </Button>
        <Button variant="ghost" full>
          Ajustar descrição
        </Button>
      </div>
    </div>
  );
}

function ActionRow({ num, label, hint, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 0',
      borderBottom: last ? 'none' : `0.5px solid ${TOKENS.borderS}`,
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: 9999, flexShrink: 0,
        background: TOKENS.brandLL, color: TOKENS.brandD,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, fontWeight: 700,
      }}>{num}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: TOKENS.ink, letterSpacing: -0.1 }}>{label}</div>
        <div style={{ fontSize: 12, color: TOKENS.ink3, marginTop: 1 }}>{hint}</div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// COMPARAÇÃO DE ORÇAMENTOS
// ────────────────────────────────────────────────────────
function CompareScreen() {
  return (
    <div style={{ background: TOKENS.page, minHeight: '100%', paddingBottom: 100 }}>
      <div style={{ padding: '60px 20px 8px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12, background: TOKENS.card,
          border: `0.5px solid ${TOKENS.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon.arrowL/></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.3 }}>
            3 orçamentos recebidos
          </div>
          <div style={{ fontSize: 12, color: TOKENS.ink3, marginTop: 1 }}>
            Chamado #2847 · Infiltração G2
          </div>
        </div>
        <div style={{ color: TOKENS.ink3 }}><Icon.filter/></div>
      </div>

      {/* IA insight banner */}
      <div style={{ padding: '8px 20px 6px' }}>
        <div style={{
          background: `linear-gradient(135deg, ${TOKENS.brandLL} 0%, #DCFCE7 100%)`,
          borderRadius: 16, padding: 12,
          border: `0.5px solid #BBF7D0`,
          display: 'flex', gap: 10, alignItems: 'flex-start',
        }}>
          <div style={{ color: TOKENS.brandD, paddingTop: 1 }}><Icon.sparkle/></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: TOKENS.brandD, letterSpacing: -0.1 }}>
              Análise da IA
            </div>
            <div style={{ fontSize: 12.5, color: '#065F46', marginTop: 2, lineHeight: 1.45 }}>
              Variação de <strong>R$ 1.450</strong> entre o mais barato e o mais caro.
              <strong> Hidrotech Soluções</strong> oferece melhor custo-benefício considerando
              prazo, garantia e nota.
            </div>
          </div>
        </div>
      </div>

      {/* Proposal cards */}
      <div style={{ padding: '10px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <ProposalCard
          name="Hidrotech Soluções" rating={4.9} reviews={127}
          price="R$ 2.350" days="3 dias" warranty="12 meses"
          recommended bestPrice={false} bestValue color="#0E7490"
        />
        <ProposalCard
          name="Impermeabilizar Já" rating={4.6} reviews={84}
          price="R$ 1.890" days="5 dias" warranty="6 meses"
          recommended={false} bestPrice color="#7C3AED"
        />
        <ProposalCard
          name="Casa & Obras Ltda" rating={4.4} reviews={56}
          price="R$ 3.340" days="2 dias" warranty="18 meses"
          color="#B45309"
        />
      </div>
    </div>
  );
}

function ProposalCard({ name, rating, reviews, price, days, warranty, recommended, bestPrice, bestValue, color }) {
  return (
    <div style={{
      background: TOKENS.card, borderRadius: 18, padding: 14,
      border: recommended ? `1.5px solid ${TOKENS.brand}` : `0.5px solid ${TOKENS.borderS}`,
      boxShadow: recommended
        ? '0 0 0 4px rgba(16,185,129,0.10), 0 2px 6px rgba(11,23,38,0.05)'
        : '0 1px 0 rgba(11,23,38,0.03)',
      position: 'relative',
    }}>
      {(bestValue || bestPrice) && (
        <div style={{
          position: 'absolute', top: -8, left: 14,
          background: bestValue ? AI_GRADIENT : TOKENS.ink,
          color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 0.6,
          padding: '3px 8px', borderRadius: 9999, textTransform: 'uppercase',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}>
          {bestValue ? '★ Melhor custo-benefício' : 'Menor preço'}
        </div>
      )}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <Avatar name={name} color={color} size={40}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.2 }}>
            {name}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
            <span style={{ color: '#F59E0B', display: 'inline-flex' }}><Icon.star style={{ width: 13, height: 13 }}/></span>
            <span style={{ fontSize: 12, color: TOKENS.ink2, fontWeight: 600 }}>{rating}</span>
            <span style={{ fontSize: 12, color: TOKENS.ink4 }}>· {reviews} avaliações</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 19, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.4 }}>
            {price}
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex', gap: 6, marginTop: 12, paddingTop: 12,
        borderTop: `0.5px solid ${TOKENS.borderS}`,
      }}>
        <Stat icon={<Icon.clock/>} label="Prazo" value={days}/>
        <Stat icon={<Icon.shield/>} label="Garantia" value={warranty}/>
        <Stat icon={<Icon.wallet/>} label="Forma" value="2x cartão"/>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div style={{ flex: 1, textAlign: 'center' }}>
      <div style={{ color: TOKENS.ink4, display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        {React.cloneElement(icon, { style: { width: 14, height: 14 } })}
      </div>
      <div style={{ fontSize: 10, color: TOKENS.ink4, fontWeight: 500, letterSpacing: 0.3, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontSize: 12.5, color: TOKENS.ink, fontWeight: 600, marginTop: 1 }}>{value}</div>
    </div>
  );
}

Object.assign(window, {
  HomeScreen, CaptureScreen, AnalyzingScreen, DiagnosticScreen, CompareScreen,
});
