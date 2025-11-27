function Artevisual() {
  return (
    <>
      {/* Título centralizado */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh",
          textAlign: "center",
          marginBottom: "6vh",
          paddingInline: "1rem",
        }}
        className="container-md"
      >
        <h1
          style={{
            fontWeight: "900",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            color: "#0A1A2F",
            letterSpacing: "0.8px",
            lineHeight: "1.2",
            textShadow: "0px 2px 6px rgba(0,0,0,0.08)",
            maxWidth: "900px",
          }}
        >
          Arte Visual
        </h1>
      </div>

      {/* Container principal */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2.5rem",
          padding: "clamp(1.2rem, 4vw, 3.5rem)",
          maxWidth: "1400px",
          marginInline: "auto",
        }}
      >
        {/* Coluna da imagem + h2 */}
        <div
          style={{
            flex: "1 1 420px",
            maxWidth: "600px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(6px)",
            borderRadius: "14px",
            padding: "1.6rem",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.07)",
            border: "1px solid rgba(0,0,0,0.06)",
            textAlign: "justify",
          }}
        >
          <img
            src="/src/artevisu.jpg"
            alt="Arte Visual"
            className="img-fluid mb-3 rounded-4"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0px 4px 15px rgba(0,0,0,0.12)",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(1rem, 2.4vw, 1.55rem)",
              lineHeight: "1.65",
              fontWeight: "800",
              color: "#0A1A2F",
              marginTop: "1rem",
            }}
          >
            Na nossa papelaria e gráfica, a personalização é feita com capricho,
            criatividade e atenção total aos detalhes. Produzimos placas decorativas,
            camisetas personalizadas, tags, adesivos, brindes, chaveiros, quadros,
            etiquetas e diversos outros itens, sempre de acordo com o estilo, a ideia
            e a necessidade de cada cliente. Cada peça é desenvolvida de forma única,
            desde a escolha dos materiais até o acabamento, garantindo qualidade,
            durabilidade e aquele toque especial que faz a diferença. Trabalhamos
            ajustando cores, fontes, formatos e detalhes para entregar exatamente o
            que você imaginou — ou até melhor. Seja para uso pessoal, presentes,
            eventos, empresas ou decoração, nossos serviços de personalização
            transformam suas ideias em produtos exclusivos, feitos com carinho,
            precisão e profissionalismo.
          </h2>
        </div>

        {/* Coluna do h3 */}
        <div
          style={{
            flex: "1 1 420px",
            maxWidth: "600px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(6px)",
            borderRadius: "14px",
            padding: "1.6rem",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.07)",
            border: "1px solid rgba(0,0,0,0.06)",
            textAlign: "justify",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1rem, 2.4vw, 1.55rem)",
              lineHeight: "1.65",
              fontWeight: "800",
              color: "#0A1A2F",
            }}
          >
            Nossa empresa nasceu com o propósito de fazer bem feito e com cuidado.
            Valorizamos o bem-estar do cliente em cada atendimento, buscando sempre
            um serviço transparente, confiável e de alta qualidade. Trabalhamos com
            compromisso, responsabilidade e respeito, entendendo que cada pedido
            representa algo importante — seja um presente, um projeto, um material
            profissional ou um item personalizado especial. Prezamos pela honestidade,
            pela dedicação e pela entrega correta do que foi combinado, garantindo
            uma experiência positiva do início ao fim: atendimento atencioso,
            comunicação clara, prazos cumpridos e resultados que superam expectativas.
            Aqui, cada cliente é tratado com atenção e cada produto é feito com
            cuidado, porque acreditamos que a verdadeira qualidade está nos detalhes.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Artevisual;
