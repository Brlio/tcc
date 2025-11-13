import font from "../Paprika.otf"

function Home() {
  return (
    <>
      {/* Título centralizado */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh", // mais responsivo que cm
          textAlign: "center",
          marginBottom: "5vh", // <-- aumenta a distância entre o título e os textos
        }}
        className="container-md"
      >
        <h1
          style={{
            fontWeight: "900",
            fontSize: "clamp(2rem, 5vw, 3.5rem)", // ajusta tamanho conforme tela
            margin: "0 1rem", // evita texto encostar nas bordas
            color: "#0A1A2F"

          }}
        >
          Lion Papelaria e Soluções Gráficas
        </h1>
      </div>

      {/* Blocos de texto */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap", // quebra linha em telas pequenas
          gap: "2rem",
          padding: "clamp(1rem, 5vw, 3rem)", // padding adaptável
        }}
      >
        {/* Texto 1 */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            textAlign: "justify",
          }}
          className="container-md"
        >
          <h3
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)", // fonte responsiva
              lineHeight: "1.6",
              fontWeight: "800",
              color: "#0A1A2F"

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
            flex: "1 1 400px",
            maxWidth: "600px",
            textAlign: "justify",
          }}
          className="container-md"
        >
          <h2
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              lineHeight: "1.6",
              fontWeight: "800",
              color: "#0A1A2F"

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
