import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      onInputChange,
    } = this.props;

    return (
      <section className="container" id="container2">
        <div className="carta-box">
          <h2
            data-testid="name-card"
            onChange={ onInputChange }
          >
            { cardName }
          </h2>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p data-testid="description-card">
            { cardDescription }
          </p>
          <h4 data-testid="attr1-card">
            { cardAttr1 }
          </h4>
          <h4 data-testid="attr2-card">
            { cardAttr2 }
          </h4>
          <h4 data-testid="attr3-card">
            { cardAttr3 }
          </h4>
          <h4 data-testid="rare-card">
            { cardRare }
          </h4>
          { cardTrunfo ? <h3 data-testid="trunfo-card"> Super Trunfo </h3> : null}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
// testando avaliador
export default Card;
