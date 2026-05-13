// app.jsx — Main DesignCanvas + Tweaks panel

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#10B981",
  "accent": "#06B6D4",
  "density": "comfortable",
  "showAIBadges": true,
  "roundness": 18
}/*EDITMODE-END*/;

function FrameWrap({ children }) {
  // Centers the iOS device inside an artboard
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
      background: '#EAEEEB',
      padding: 20, boxSizing: 'border-box',
    }}>
      <IOSDevice>{children}</IOSDevice>
    </div>
  );
}

// We embed the iOS device directly into an artboard sized to fit it
const FRAME_W = 442;   // 402 device + 20px padding each side
const FRAME_H = 914;   // 874 device + 20px padding each side (top + bottom)

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);

  // Push tweak values into the shared TOKENS object so every component picks
  // them up on the next render (TOKENS is mutable; AI_GRADIENT is a getter).
  TOKENS.brand  = t.primary;
  TOKENS.brandT = t.accent;

  React.useEffect(() => {
    document.documentElement.style.setProperty('--brand', t.primary);
    document.documentElement.style.setProperty('--brand-t', t.accent);
  }, [t.primary, t.accent]);

  return (
    <>
      <DesignCanvas title="Condomind" subtitle="MVP · IA para gestão de manutenção condominial">

        <DCSection id="sindico" title="Lado do Síndico" subtitle="Do dashboard ao diagnóstico — fluxo principal do MVP">
          <DCArtboard id="home" label="01 · Home · 3 chamados ativos" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><HomeScreen/></FrameWrap>
          </DCArtboard>

          <DCArtboard id="capture" label="02 · Captura · foto + áudio + texto (interativa)" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><CaptureScreen/></FrameWrap>
          </DCArtboard>

          <DCArtboard id="analyzing" label="03 · IA analisando (animada)" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><AnalyzingScreen/></FrameWrap>
          </DCArtboard>

          <DCArtboard id="diagnostic" label="04 · Diagnóstico técnico" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><DiagnosticScreen/></FrameWrap>
          </DCArtboard>

          <DCArtboard id="compare" label="05 · Comparação de orçamentos" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><CompareScreen/></FrameWrap>
          </DCArtboard>
        </DCSection>

        <DCSection id="prestador" title="Lado do Prestador" subtitle="Recebe solicitações ranqueadas pela IA e envia orçamento padronizado">
          <DCArtboard id="inbox" label="06 · Inbox · solicitações ranqueadas" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><ProviderInboxScreen/></FrameWrap>
          </DCArtboard>

          <DCArtboard id="quote" label="07 · Envio de orçamento padronizado" width={FRAME_W} height={FRAME_H}>
            <FrameWrap><ProviderQuoteScreen/></FrameWrap>
          </DCArtboard>
        </DCSection>

      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Marca">
          <TweakColor
            label="Cor primária"
            value={t.primary}
            onChange={v => setTweak('primary', v)}
            options={['#10B981', '#2563EB', '#7C3AED', '#F59E0B', '#0F172A']}
          />
          <TweakColor
            label="Acento IA"
            value={t.accent}
            onChange={v => setTweak('accent', v)}
            options={['#06B6D4', '#22D3EE', '#A78BFA', '#F472B6', '#94A3B8']}
          />
        </TweakSection>
        <TweakSection label="Interface">
          <TweakToggle
            label="Badges IA"
            value={t.showAIBadges}
            onChange={v => setTweak('showAIBadges', v)}
          />
          <TweakRadio
            label="Densidade"
            value={t.density}
            onChange={v => setTweak('density', v)}
            options={[
              { value: 'compact', label: 'Compacta' },
              { value: 'comfortable', label: 'Confort.' },
            ]}
          />
          <TweakSlider
            label="Cantos"
            value={t.roundness}
            onChange={v => setTweak('roundness', v)}
            min={6} max={28} step={1}
            unit="px"
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

// Mount
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
