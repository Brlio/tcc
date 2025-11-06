function Home() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "2cm"
                }}
                class="container-md" 
            >
                <h1>Lion Papelaria e Soluções Gráficas</h1>
            </div>
            
            <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap", // permite quebrar linha em telas pequenas
    gap: "2rem",
    paddingTop: "6cm",
    paddingLeft: "3cm",
    paddingRight: "3cm"
  }}
>
  <div
    style={{
      flex: "1 1 400px", // cresce, encolhe e tem base de 400px
      maxWidth: "600px",
      textAlign: "justify"
    }}
    className="container-md"
  >
    <h3 style={{ fontSize: "1.6rem", lineHeight: "1.6" }}>
      A Lion Papelaria e Soluções Gráficas nasceu com o propósito de oferecer
      muito mais do que produtos de papelaria. Nosso objetivo é entregar
      praticidade, qualidade e criatividade em cada detalhe. Trabalhamos com uma
      ampla linha de materiais escolares, de escritório e produtos personalizados,
      sempre buscando atender às necessidades de nossos clientes com agilidade e
      excelência. Aqui, cada item é escolhido com cuidado para garantir o melhor
      custo-benefício e facilitar o dia a dia de estudantes, profissionais e
      empresas que valorizam organização e qualidade.
    </h3>
  </div>

  <div
    style={{
      flex: "1 1 400px", // mesmo comportamento do primeiro
      maxWidth: "600px",
      textAlign: "justify"
    }}
    className="container-md"
  >
    <h2 style={{ fontSize: "1.6rem", lineHeight: "1.6" }}>
      Além da papelaria completa, a Lion também é especialista em soluções gráficas
      personalizadas. Contamos com tecnologia de ponta e uma equipe dedicada para
      desenvolver impressões, artes e materiais gráficos que traduzem a identidade
      de cada cliente. Seja para cartões de visita, banners, adesivos, convites ou
      projetos corporativos, nossa missão é transformar ideias em produtos de
      impacto. Na Lion, unimos criatividade, profissionalismo e atenção aos detalhes
      para entregar resultados que fazem a diferença e fortalecem a imagem de quem
      confia em nossos serviços.
    </h2>
  </div>
</div>


        </>

    );
}

export default Home;