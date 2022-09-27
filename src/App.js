import React from 'react';
// import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validateButton = this.validateButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateButton);
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
    } = this.state;

    const currentCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardList: [...prevState.cardList, currentCard],
    }));
  }

  // a função validateButton abaixo foi inspirada no código da Quezia Lima <3
  validateButton() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, /* cardRare, */
    } = this.state;

    const maxNumCard = 90;
    const sumAttrCards = 210;
    const nameValidate = cardName !== '';
    const descriptionValidate = cardDescription !== '';
    const cardAttr1Validate = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxNumCard;
    const cardAttr2Validate = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxNumCard;
    const cardAttr3Validate = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxNumCard;
    const sumAttrValidate = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3) <= sumAttrCards;
    const imageValidate = cardImage !== '';
    // const cardRareValidate = cardRare !== '';

    if (
      nameValidate
      && descriptionValidate
      && cardAttr1Validate
      && cardAttr2Validate
      && cardAttr3Validate
      && sumAttrValidate
      && imageValidate
      // && cardRareValidate
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

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
      cardList,
    } = this.state;

    return (
      <div>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        {/* tentei fazer esse map direto no card acima, mas ele não
        renderizava as informaçoes no preview da carta no momento em
        que eu digitava, só renderizava na hora que eu salvava. */}

        { cardList.map((currentCard) => (
          <div key={ currentCard.cardName }>
            <Card
              cardName={ currentCard.cardName }
              cardDescription={ currentCard.cardDescription }
              cardAttr1={ currentCard.cardAttr1 }
              cardAttr2={ currentCard.cardAttr2 }
              cardAttr3={ currentCard.cardAttr3 }
              cardImage={ currentCard.cardImage }
              cardRare={ currentCard.cardRare }
              cardTrunfo={ currentCard.cardTrunfo }
            />
          </div>
        )) }
      </div>
    );
  }
}

export default App;
