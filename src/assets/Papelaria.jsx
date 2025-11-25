function Papelaria(){
    return (
    <>
      {/* Título centralizado */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh",
          textAlign: "center",
          marginBottom: "5vh",
        }}
        className="container-md"
      >
        <h1
          style={{
            fontWeight: "900",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            margin: "0 1rem",
            color: "#0A1A2F",
          }}
        >
          Papelaria
        </h1>
      </div>

      {/* Container imagem + textos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "2rem",
          padding: "clamp(1rem, 5vw, 3rem)",
        }}
      >
        {/* Coluna da imagem + h2 */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            textAlign: "justify",
          }}
          className="container-md"
        >
          <img
            src="/src/pape.jpg"
            alt="Arte Visual"
            className="img-fluid mb-3 rounded-4"
            style={{
              width: "100%",
              height: "auto",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              lineHeight: "1.6",
              fontWeight: "800",
              color: "#0A1A2F",
            }}
          >
           Nossa papelaria foi criada para trazer praticidade, qualidade e variedade para o dia a dia de quem estuda, trabalha ou simplesmente gosta de manter tudo organizado. Oferecemos uma seleção completa de materiais escolares, itens de escritório, acessórios criativos, cadernos, agendas, planners, folhas especiais, canetas, pastas, blocos, papéis para impressão e muito mais. Cada produto é escolhido com atenção para garantir durabilidade e funcionalidade, além de um visual moderno que combina com todos os estilos. Nosso objetivo é facilitar a sua rotina com materiais de confiança e um atendimento que entende o que você precisa, sempre proporcionando uma experiência prática, agradável e eficiente em cada visita.
          </h2>
        </div>

        {/* Coluna do h3 */}
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
              fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
              lineHeight: "1.6",
              fontWeight: "800",
              color: "#0A1A2F",
            }}
          >
            Acreditamos que uma boa papelaria vai além dos produtos: ela transforma tarefas comuns em momentos mais fáceis, organizados e até criativos. Por isso, buscamos oferecer um ambiente acolhedor, um atendimento próximo e um catálogo atualizado com tudo que o cliente realmente precisa, desde itens básicos até materiais mais específicos para projetos, estudos e trabalhos profissionais. Trabalhamos com responsabilidade, atenção e respeito, garantindo preços justos, produtos de qualidade e soluções rápidas para quem busca praticidade no cotidiano. Nossa missão é entregar uma experiência completa — onde cada cliente se sinta bem, encontre o que procura sem complicações e saia satisfeito por ter sido bem atendido.
          </h3>
        </div>
      </div>
    </>
  );

}
export default Papelaria