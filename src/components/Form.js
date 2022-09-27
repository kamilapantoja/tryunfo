import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="container" id="container1">
        <h1>Super Tryunfo</h1>
        <form className="form">
          {/* Erro: A form label must be associated with control
Foi resolvido com HtmlFor
https://stackoverflow.com/questions/54446655/eslint-rule-for-label */}

          <label htmlFor="nomeDaCarta" className="nomeDaCarta">
            <h2>Adicionar Nova Carta</h2>
            Nome da Carta:
            <input
              id="nomeDaCarta"
              data-testid="name-input"
              name="cardName"
              type="text"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>

          <label htmlFor="descricao" className="descricao">
            Descrição:
            <input
              id="descricao"
              data-testid="description-input"
              name="cardDescription"
              type="textarea"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>

          <label htmlFor="atributo1" className="atributo1">
            Atributo 1:
            <input
              id="atributo1"
              data-testid="attr1-input"
              name="cardAttr1"
              type="number"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>

          <label htmlFor="atributo2" className="atributo2">
            Atributo 2:
            <input
              id="atributo2"
              data-testid="attr2-input"
              name="cardAttr2"
              type="number"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>

          <label htmlFor="atributo3" className="atributo3">
            Atributo 3:
            <input
              id="atributo3"
              data-testid="attr3-input"
              name="cardAttr3"
              type="number"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>

          <label htmlFor="imagemDaCarta" className="imagemDaCarta">
            Imagem:
            <input
              id="imagemDaCarta"
              data-testid="image-input"
              name="cardImage"
              type="text"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>

          <label htmlFor="raridade" className="raridade">
            Raridade:
            <select
              id="raridade"
              data-testid="rare-input"
              name="cardRare"
              type="select"
              onChange={ onInputChange }
              value={ cardRare }
            >
              {/* <option value="">Selecione</option> */}
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {hasTrunfo ? (
            <p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (
            <label htmlFor="cartaTryunfo" className="cartaTryunfo">
              Super Trybe Trunfo
              <input
                id="cartaTryunfo"
                data-testid="trunfo-input"
                type="checkbox"
                name="cardTrunfo"
                onChange={ onInputChange }
                checked={ cardTrunfo }
              />
            </label>
          )}

          <button
            id="botaoSalvar"
            type="submit"
            data-testid="save-button"
            name="onSaveButtonClick"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
