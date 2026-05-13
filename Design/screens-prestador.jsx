// screens-prestador.jsx — Provider-side screens

// ────────────────────────────────────────────────────────
// INBOX — Prestador receives ranked requests
// ────────────────────────────────────────────────────────
function ProviderInboxScreen() {
  return (
    <div style={{ background: TOKENS.page, minHeight: '100%', paddingBottom: 90 }}>
      {/* Header */}
      <div style={{
        padding: '58px 20px 14px',
        background: TOKENS.card,
        borderBottom: `0.5px solid ${TOKENS.borderS}`,
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Hidrotech" color="#0E7490" size={38}/>
            <div>
              <div style={{ fontSize: 12, color: TOKENS.ink3, fontWeight: 500 }}>
                Hidrotech Soluções · <span style={{ color: TOKENS.brandD, fontWeight: 700 }}>Pro</span>
              </div>
              <div style={{ fontSize: 16, color: TOKENS.ink, fontWeight: 700, letterSpacing: -0.2 }}>
                Solicitações
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Pill color="#F59E0B" bg="#FEF3C7">
              <Icon.star style={{ width: 11, height: 11 }}/> 4.9
            </Pill>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <TabPill active count={3}>Novas</TabPill>
          <TabPill count={2}>Em análise</TabPill>
          <TabPill count={8}>Em obra</TabPill>
        </div>
      </div>

      {/* AI matching banner */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          background: TOKENS.card, borderRadius: 14, padding: '10px 12px',
          border: `0.5px solid ${TOKENS.borderS}`,
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9, background: AI_GRADIENT,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff',
          }}>
            <Icon.sparkle style={{ width: 17, height: 17 }}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: TOKENS.ink, fontWeight: 600, letterSpacing: -0.1 }}>
              3 solicitações combinam com sua especialidade
            </div>
            <div style={{ fontSize: 11.5, color: TOKENS.ink3, marginTop: 1 }}>
              Ordenadas por proximidade e relevância
            </div>
          </div>
        </div>
      </div>

      {/* Requests list */}
      <div style={{ padding: '12px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <RequestCard
          title="Infiltração ativa em laje de garagem"
          building="Ed. Alameda · Vila Madalena"
          distance="2,1 km"
          level={2}
          tags={['Hidráulica', 'Impermeabilização']}
          match={94}
          photos={['wet', 'pipe']}
          time="há 18 min"
          isNew
        />
        <RequestCard
          title="Vazamento sob a pia · cozinha do salão"
          building="Cond. Jardim das Flores"
          distance="4,8 km"
          level={1}
          tags={['Hidráulica', 'Encanamento']}
          match={89}
          photos={['pipe']}
          time="há 1h"
          isNew
        />
        <RequestCard
          title="Caixa d'água — manutenção semestral"
          building="Res. Vila Sônia"
          distance="6,3 km"
          level={1}
          tags={['Manutenção preventiva']}
          match={72}
          photos={['wet']}
          time="há 3h"
        />
      </div>
    </div>
  );
}

function TabPill({ active, count, children }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '7px 13px', borderRadius: 9999,
      background: active ? TOKENS.ink : TOKENS.borderS,
      color: active ? '#fff' : TOKENS.ink2,
      fontSize: 13, fontWeight: 600, letterSpacing: -0.1,
    }}>
      {children}
      <span style={{
        background: active ? 'rgba(255,255,255,0.18)' : TOKENS.card,
        color: active ? '#fff' : TOKENS.ink2,
        padding: '0 6px', borderRadius: 9999, fontSize: 11, fontWeight: 700,
        minWidth: 16, textAlign: 'center',
      }}>{count}</span>
    </div>
  );
}

function RequestCard({ title, building, distance, level, tags, match, photos, time, isNew }) {
  return (
    <div style={{
      background: TOKENS.card, borderRadius: 18, padding: 14,
      border: `0.5px solid ${TOKENS.borderS}`,
      boxShadow: '0 1px 0 rgba(11,23,38,0.03), 0 2px 6px rgba(11,23,38,0.03)',
    }}>
      {/* top row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <RiskChip level={level}/>
        {isNew && (
          <Pill color={TOKENS.brandD} bg={TOKENS.brandLL} style={{ fontSize: 10, padding: '3px 7px' }}>
            <span style={{ width: 5, height: 5, borderRadius: 9999, background: TOKENS.brand }}/>
            NOVA
          </Pill>
        )}
        <div style={{ flex: 1 }}/>
        <span style={{ fontSize: 11, color: TOKENS.ink4 }}>{time}</span>
      </div>

      <div style={{ fontSize: 15, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.2, lineHeight: 1.3 }}>
        {title}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
        <span style={{ color: TOKENS.ink3, display: 'inline-flex' }}>
          <Icon.pin style={{ width: 13, height: 13 }}/>
        </span>
        <span style={{ fontSize: 12, color: TOKENS.ink2, fontWeight: 500 }}>{building}</span>
        <span style={{ fontSize: 12, color: TOKENS.ink4 }}>· {distance}</span>
      </div>

      {/* photos + AI match */}
      <div style={{ display: 'flex', gap: 12, marginTop: 12, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {photos.map((p, i) => (
            <PhotoStub key={i} tone={p} ratio="1" style={{ width: 48, height: 48, borderRadius: 10 }}/>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10.5, color: TOKENS.ink4, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase' }}>
            Compatibilidade IA
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <div style={{ flex: 1, height: 5, background: TOKENS.borderS, borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: `${match}%`, height: '100%', background: AI_GRADIENT }}/>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: TOKENS.brandD }}>{match}%</span>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', gap: 8, marginTop: 12, paddingTop: 12,
        borderTop: `0.5px solid ${TOKENS.borderS}`,
      }}>
        <Button variant="ghost" style={{ flex: 1, padding: '10px 12px', fontSize: 14 }}>
          Recusar
        </Button>
        <Button variant="primary" style={{
          flex: 2, padding: '10px 12px', fontSize: 14, background: TOKENS.ink,
        }}>
          Enviar orçamento <Icon.arrowR style={{ width: 16, height: 16 }}/>
        </Button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// PROPOSAL DETAIL — Prestador views request + sends quote
// ────────────────────────────────────────────────────────
function ProviderQuoteScreen() {
  return (
    <div style={{ background: TOKENS.page, minHeight: '100%', paddingBottom: 110 }}>
      <div style={{ padding: '60px 20px 8px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12, background: TOKENS.card,
          border: `0.5px solid ${TOKENS.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon.arrowL/></div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: TOKENS.ink3, letterSpacing: 0.4 }}>
            CHAMADO #2847
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.3 }}>
            Enviar orçamento
          </div>
        </div>
      </div>

      {/* Problem brief */}
      <div style={{ padding: '8px 20px 0' }}>
        <Card style={{ padding: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <PhotoStub tone="wet" ratio="1" style={{ width: 60, height: 60, borderRadius: 12 }}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.2, lineHeight: 1.3 }}>
                Infiltração ativa por capilaridade na laje da garagem
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
                <span style={{ color: TOKENS.ink4, display: 'inline-flex' }}>
                  <Icon.pin style={{ width: 11, height: 11 }}/>
                </span>
                <span style={{ fontSize: 11.5, color: TOKENS.ink3 }}>
                  Ed. Alameda · Vila Madalena · 2,1 km
                </span>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex', gap: 6, marginTop: 12, paddingTop: 12,
            borderTop: `0.5px solid ${TOKENS.borderS}`,
          }}>
            <AIBadge label="IA"/>
            <span style={{ fontSize: 12, color: TOKENS.ink2, lineHeight: 1.4 }}>
              ~0,8m² · falha provável de impermeabilização · risco estrutural baixo
            </span>
          </div>
        </Card>
      </div>

      {/* Quote form */}
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: TOKENS.ink3, letterSpacing: 0.6,
          textTransform: 'uppercase', marginBottom: 8, padding: '0 4px',
        }}>
          Seu orçamento
        </div>

        <Card style={{ padding: 0, overflow: 'hidden' }}>
          <FormRow label="Valor total">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 13, color: TOKENS.ink3, fontWeight: 600 }}>R$</span>
              <span style={{ fontSize: 22, fontWeight: 700, color: TOKENS.ink, letterSpacing: -0.6 }}>
                2.350<span style={{ color: TOKENS.ink4 }}>,00</span>
              </span>
            </div>
          </FormRow>
          <FormRow label="Prazo de execução">
            <span style={{ fontSize: 15, fontWeight: 600, color: TOKENS.ink }}>3 dias úteis</span>
          </FormRow>
          <FormRow label="Garantia">
            <span style={{ fontSize: 15, fontWeight: 600, color: TOKENS.ink }}>12 meses</span>
          </FormRow>
          <FormRow label="Forma de pagamento" last>
            <span style={{ fontSize: 15, fontWeight: 600, color: TOKENS.ink }}>2x sem juros</span>
          </FormRow>
        </Card>
      </div>

      {/* Scope */}
      <div style={{ padding: '14px 20px 0' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, color: TOKENS.ink3, letterSpacing: 0.6,
              textTransform: 'uppercase',
            }}>
              Escopo padronizado
            </div>
            <AIBadge label="Sugerido pela IA"/>
          </div>
          <ScopeItem checked>Remoção e preparo de superfície (0,8m²)</ScopeItem>
          <ScopeItem checked>Aplicação de manta asfáltica + primer</ScopeItem>
          <ScopeItem checked>Teste de estanqueidade 48h</ScopeItem>
          <ScopeItem>Pintura de acabamento (opcional · +R$ 320)</ScopeItem>
          <ScopeItem last>Limpeza e remoção de entulho</ScopeItem>
        </Card>
      </div>

      {/* Send CTA */}
      <div style={{ padding: '18px 20px 0' }}>
        <Button variant="brand" full icon={<Icon.send/>} style={{ background: AI_GRADIENT }}>
          Enviar orçamento
        </Button>
        <div style={{ textAlign: 'center', marginTop: 10, fontSize: 11.5, color: TOKENS.ink4 }}>
          O síndico vai comparar lado a lado com outros 2 prestadores
        </div>
      </div>
    </div>
  );
}

function FormRow({ label, children, last }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 16px',
      borderBottom: last ? 'none' : `0.5px solid ${TOKENS.borderS}`,
    }}>
      <span style={{ fontSize: 13, color: TOKENS.ink3, fontWeight: 500 }}>{label}</span>
      {children}
    </div>
  );
}

function ScopeItem({ checked, children, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '8px 0',
      borderBottom: last ? 'none' : `0.5px solid ${TOKENS.borderS}`,
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: 6, flexShrink: 0,
        background: checked ? TOKENS.brand : 'transparent',
        border: checked ? 'none' : `1.5px solid ${TOKENS.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
      }}>
        {checked && <Icon.check style={{ width: 13, height: 13 }}/>}
      </div>
      <span style={{ fontSize: 13.5, color: checked ? TOKENS.ink : TOKENS.ink3, fontWeight: 500, lineHeight: 1.4 }}>
        {children}
      </span>
    </div>
  );
}

Object.assign(window, {
  ProviderInboxScreen, ProviderQuoteScreen,
});
