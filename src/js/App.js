import React, { Component, Fragment } from "react";
import styled from "styled-components";
import WeatherDisplay from "./components/WeatherDisplay";
import PLACES from "./utils/consts";

const AppTitle = styled.div`
  padding: 20px 40px;
  font-size: 40px;
  text-align: center;
  border-bottom: 2px solid #b1b1b1;
`;

const AppContainer = styled.div`
  display: flex;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 30%;
  padding: 20px 0;
`;

const BtnTitle = styled.div`
  padding: 10px 20px;
  font-size: 24px;
`;

const StyledButton = styled.button`
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  font-size: 18px;
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  text-align: left;
  background: ${({ isActive }) => (isActive ? "red" : "white")};
  border: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    color: white;
    background: red;
  }
`;

const StyledWeatherDisplay = styled(WeatherDisplay)`
  flex: 1 1 70%;
  padding: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlace: 0
    };
  }

  render() {
    const { activePlace } = this.state;

    return (
      <Fragment>
        <AppTitle>React Simple Weather App</AppTitle>
        <AppContainer>
          <BtnWrapper>
            <BtnTitle>Select a city</BtnTitle>
            {PLACES.map((place, index) => (
              <StyledButton
                isActive={activePlace === index ? true : false}
                key={index}
                onClick={() => {
                  this.setState({
                    activePlace: index
                  });
                }}
              >
                {" "}
                {place.name}{" "}
              </StyledButton>
            ))}
          </BtnWrapper>
          <StyledWeatherDisplay
            key={activePlace}
            zip={PLACES[activePlace].zip}
          />
        </AppContainer>
      </Fragment>
    );
  }
}

export default App;
