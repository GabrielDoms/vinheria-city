import "./styles.css";

export function Produtos() {
  return (
    <div id="produtos">
      <h1>Nossos Produtos</h1>

      <div className="lista">
        <div className="produto">
          <img
            src="/produtos/beausejour-bordeaux.jpg"
            alt="Produto 1"
            className="produto1"
          />
          <h2>Beausejour Bordeaux</h2>
        </div>
        <div className="produto">
          <img src="/produtos/carbet-sauvignon.jpg" alt="Produto 2" />
          <h2>Carbet Sauvignon</h2>
        </div>
        <div className="produto">
          <img src="/produtos/el-origen-blend.jpg" alt="Produto 3" />
          <h2>El Origen Blend</h2>
        </div>
      </div>
    </div>
  );
}
