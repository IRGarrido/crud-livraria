import { React } from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";

const TabelaLivros = ({ livros, removerLivro }) => {
  const tooltipStyle = {
    backgroundColor: "#f9f9f9",
    color: "#333",
    border: "1px solid #ddd",
    padding: "8px 12px",
    fontSize: "0.85rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const confirmarRemocao = (livro) => {
    if (window.confirm("Deseja realmente remover o livro?")) {
      removerLivro(livro);
    }
  };

  return (
    <div className="livros">
      <h1>Tabela de Livros</h1>
      {livros.length === 0 ? ( // Corrected: .length instead of .lenght()
        <h2>Nenhum livro cadastrado</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>ISBN</th>
              <th>Autor</th>
              <th width="7%"></th>
              <th width="9%"></th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr key={livro.isbn}>
                <td>{livro.titulo}</td>
                <td>{livro.isbn}</td>
                <td>{livro.autor}</td>
                <td>
                  <Link
                    to={`/editar/${livro.isbn}`}
                    className="botao editar"
                    data-tooltip-id={`tooltip-editar-${livro.isbn}`}
                    data-tooltip-content="Editar este livro"
                  >
                    Editar
                  </Link>
                  <Tooltip
                    id={`tooltip-editar-${livro.isbn}`}
                    place="top"
                    style={tooltipStyle}
                  ></Tooltip>
                </td>
                <td>
                  <button
                    className="botao remover"
                    data-tooltip-id={`tooltip-remover-${livro.isbn}`}
                    data-tooltip-content="Remover este livro"
                    onClick={() => confirmarRemocao(livro)}
                  >
                    Remover
                  </button>
                  <Tooltip
                    id={`tooltip-remover-${livro.isbn}`}
                    place="top"
                    style={tooltipStyle}
                  ></Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TabelaLivros;
