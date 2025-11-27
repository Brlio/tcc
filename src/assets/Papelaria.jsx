function Papelaria() {
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
          Papelaria
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
            src="/src/pape.jpg"
            alt="Papelaria"
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
            Nossa papelaria foi criada para trazer praticidade, qualidade e
            variedade para o dia a dia de quem estuda, trabalha ou simplesmente
            gosta de manter tudo organizado. Oferecemos uma seleção completa de
            materiais escolares, itens de escritório, acessórios criativos,
            cadernos, agendas, planners, folhas especiais, canetas, pastas,
            blocos, papéis para impressão e muito mais. Cada produto é escolhido
            com atenção para garantir durabilidade e funcionalidade, além de um
            visual moderno que combina com todos os estilos. Nosso objetivo é
            facilitar a sua rotina com materiais de confiança e um atendimento
            que entende o que você precisa, sempre proporcionando uma experiência
            prática, agradável e eficiente em cada visita.
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
            Acreditamos que uma boa papelaria vai além dos produtos: ela
            transforma tarefas comuns em momentos mais fáceis, organizados e até
            criativos. Por isso, buscamos oferecer um ambiente acolhedor, um
            atendimento próximo e um catálogo atualizado com tudo que o cliente
            realmente precisa, desde itens básicos até materiais mais específicos
            para projetos, estudos e trabalhos profissionais. Trabalhamos com
            responsabilidade, atenção e respeito, garantindo preços justos,
            produtos de qualidade e soluções rápidas para quem busca praticidade
            no cotidiano. Nossa missão é entregar uma experiência completa — onde
            cada cliente se sinta bem, encontre o que procura sem complicações e
            saia satisfeito por ter sido bem atendido.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Papelaria;
