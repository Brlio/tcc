function Grafica() {
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
          Gráfica
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
        {/* Card da imagem + texto */}
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
            src="/src/gra.jpg"
            alt="Gráfica"
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
            Nossa gráfica oferece soluções completas para quem busca qualidade,
            precisão e acabamento profissional em impressões. Trabalhamos com impressões
            rápidas e personalizadas, produção de cartões de visita, panfletos, folders,
            banners, adesivos, etiquetas, blocos, cardápios, convites e muito mais. Cada
            material é produzido com equipamentos modernos e atenção aos mínimos detalhes,
            garantindo cores vivas, nitidez e durabilidade em qualquer tipo de projeto.
            Seja para empresas, eventos, trabalhos profissionais ou necessidades do dia a
            dia, nossa gráfica entrega resultados confiáveis, com prazos cumpridos,
            qualidade elevada e um padrão de excelência que reflete exatamente o que o
            cliente precisa.
          </h2>
        </div>

        {/* Card do texto 2 */}
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
            Acreditamos que um bom serviço gráfico deve unir precisão, criatividade e
            responsabilidade, e é exatamente isso que buscamos entregar em cada projeto.
            Desde a criação até a finalização, cuidamos de cada etapa com atenção,
            garantindo que o material final seja fiel ao que foi solicitado e tenha um
            acabamento impecável. Nosso compromisso é oferecer impressões profissionais,
            atendimento transparente, orientação para quem precisa de ajuda na escolha
            dos materiais e soluções rápidas para empresas e clientes que trabalham com
            prazos apertados. Aqui, qualidade e cuidado são prioridades, porque entendemos
            que cada impressão representa a imagem do cliente — e isso merece ser tratado
            com seriedade e dedicação.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Grafica;
