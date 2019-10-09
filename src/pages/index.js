import React from "react";
import { Link } from "gatsby";
import Card from "../components/card";

// import styles
import '../styles/main.scss';

class Index extends React.Component {
  render(){
    return(
      <div className="container">

        <h1>Nouveautés</h1>

        <div className="row-3">
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ipsam."
            cardPrice="3.000">
          </Card>
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, voluptatum!"
            cardPrice="2.500">
          </Card>
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quaerat!"
            cardPrice="3.800">
          </Card>
        </div>

        <div className="row-4">
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
            cardPrice="2.400">
          </Card>
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
            cardPrice="2.800">
          </Card>
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
            cardPrice="1.500">
          </Card>
          <Card
            cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
            cardPrice="2.500">
          </Card>
        </div>
      </div>
    )
  }
}

export default Index

