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
          Arte Visual
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
            src="/src/artevisu.jpg"
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
