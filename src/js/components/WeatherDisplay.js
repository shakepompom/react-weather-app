import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
`;

const Info = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;

const StyledImg = styled.img`
  margin-left: 10px;
  vertical-align: middle;
`;

class WeatherDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    const { zip } = this.props;
    const URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      ",us&appid=1f044a4734b0f271a13b35ca6aeccac3";

    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ weatherData: json }));
  }

  render() {
    const { weatherData } = this.state;
    const { ...props } = this.props;

    if (!weatherData) return <div>Loading...</div>;

    const iconUrl = `http://openweathermap.org/img/w/${
      weatherData.weather[0].icon
    }.png`;

    return (
      <Wrapper {...props}>
        <Title>
          {weatherData.weather[0].main} in {weatherData.name}
          <StyledImg src={iconUrl} alt={weatherData.weather[0].description} />
        </Title>
        <Info>Temp: {weatherData.main.temp}</Info>
        <Info>Wind: {weatherData.wind.speed}</Info>
        <Info>Humidity: {weatherData.main.humidity}</Info>
        <Info>Pressure: {weatherData.main.pressure}</Info>
      </Wrapper>
    );
  }
}

export default WeatherDisplay;
