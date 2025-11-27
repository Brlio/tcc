import font from "../Paprika.otf";

function Home() {
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
          Lion Papelaria e Soluções Gráficas
        </h1>
      </div>

      {/* Container geral */}
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
        {/* Texto 1 */}
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
            A Lion Papelaria e Soluções Gráficas nasceu com o propósito de oferecer
            muito mais do que produtos de papelaria. Nosso objetivo é entregar
            praticidade, qualidade e criatividade em cada detalhe. Trabalhamos com
            uma ampla linha de materiais escolares, de escritório e produtos
            personalizados, sempre buscando atender às necessidades de nossos
            clientes com agilidade e excelência. Aqui, cada item é escolhido com
            cuidado para garantir o melhor custo-benefício e facilitar o dia a dia
            de estudantes, profissionais e empresas que valorizam organização e
            qualidade.
          </h3>
        </div>

        {/* Texto 2 */}
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
          <h2
            style={{
              fontSize: "clamp(1rem, 2.4vw, 1.55rem)",
              lineHeight: "1.65",
              fontWeight: "800",
              color: "#0A1A2F",
            }}
          >
            Além da papelaria completa, a Lion também é especialista em soluções
            gráficas personalizadas. Contamos com tecnologia de ponta e uma equipe
            dedicada para desenvolver impressões, artes e materiais gráficos que
            traduzem a identidade de cada cliente. Seja para cartões de visita,
            banners, adesivos, convites ou projetos corporativos, nossa missão é
            transformar ideias em produtos de impacto. Na Lion, unimos criatividade,
            profissionalismo e atenção aos detalhes para entregar resultados que
            fazem a diferença e fortalecem a imagem de quem confia em nossos
            serviços.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
