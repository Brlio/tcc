function Grafica(){
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
          Gráfica
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
            src="/src/gra.jpg"
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
           Nossa gráfica oferece soluções completas para quem busca qualidade, precisão e acabamento profissional em impressões. Trabalhamos com impressões rápidas e personalizadas, produção de cartões de visita, panfletos, folders, banners, adesivos, etiquetas, blocos, cardápios, convites e muito mais. Cada material é produzido com equipamentos modernos e atenção aos mínimos detalhes, garantindo cores vivas, nitidez e durabilidade em qualquer tipo de projeto. Seja para empresas, eventos, trabalhos profissionais ou necessidades do dia a dia, nossa gráfica entrega resultados confiáveis, com prazos cumpridos, qualidade elevada e um padrão de excelência que reflete exatamente o que o cliente precisa.
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
            Acreditamos que um bom serviço gráfico deve unir precisão, criatividade e responsabilidade, e é exatamente isso que buscamos entregar em cada projeto. Desde a criação até a finalização, cuidamos de cada etapa com atenção, garantindo que o material final seja fiel ao que foi solicitado e tenha um acabamento impecável. Nosso compromisso é oferecer impressões profissionais, atendimento transparente, orientação para quem precisa de ajuda na escolha dos materiais e soluções rápidas para empresas e clientes que trabalham com prazos apertados. Aqui, qualidade e cuidado são prioridades, porque entendemos que cada impressão representa a imagem do cliente — e isso merece ser tratado com seriedade e dedicação.
          </h3>
        </div>
      </div>
    </>
  );

}
export default Grafica