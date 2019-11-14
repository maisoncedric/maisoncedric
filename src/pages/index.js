// external libraries
import React from 'react';
import {graphql} from 'gatsby';
import MediaQuery from 'react-responsive';
import { useIntl, Link, FormattedMessage, injectIntl } from "gatsby-plugin-intl";

// import styles
import '../styles/main.scss';

//import components
import Card from '../components/card.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import MobileNavbar from '../components/mobile-navbar.js';
import Navbar from '../components/navbar.js';
import NewsletterAd from '../components/newsletterAd.js';

export const getLocalizedProductName = (locale, data) => {
  if (locale === "en") {
    return data.Titre_de_l_annonce__EN_
  } else {
    return data.Titre_de_l_annonce__FR_
  }
}

class Index extends React.Component {
  render(){
    console.log(this.props)
    const nodes = this.props.data.allAirtable.nodes;
    return (
      <React.Fragment>
        <Header />
        <MediaQuery maxDeviceWidth={1199}>
          <MobileNavbar />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1199}>
          <Navbar />
        </MediaQuery>
        <div className="container">

          <h1>Nouveautés</h1>

          <p>
            {this.props.intl.formatMessage({ id: "go_page2" })}
          </p>

          <div className="row-3">
            <Card
              title={getLocalizedProductName(this.props.intl.locale, nodes[4].data)}
              price={nodes[4].data.Prix_de_vente}
              status={nodes[4].data.Statut}
              image={nodes[4].data.Images[0].url}
              id={nodes[4].data.ID}>
            </Card>
            <Card
              title={nodes[3].data.Titre_de_l_annonce__FR_}
              price={nodes[3].data.Prix_de_vente}
              status={nodes[3].data.Statut}
              image={nodes[3].data.Images[0].url}
              id={nodes[3].data.ID}>
            </Card>
            <Card
              title={nodes[2].data.Titre_de_l_annonce__FR_}
              price={nodes[2].data.Prix_de_vente}
              status={nodes[2].data.Statut}
              image={nodes[2].data.Images[0].url}
              id={nodes[2].data.ID}>
            </Card>
          </div>

          <div className="row-4">
            <Card
              title={nodes[0].data.Titre_de_l_annonce__FR_}
              price={nodes[0].data.Prix_de_vente}
              status={nodes[0].data.Statut}
              image={nodes[0].data.Images[0].url}
              id={nodes[0].data.ID}>
            </Card>
            <Card
              title={nodes[1].data.Titre_de_l_annonce__FR_}
              price={nodes[1].data.Prix_de_vente}
              status={nodes[1].data.Statut}
              image={nodes[1].data.Images[0].url}
              id={nodes[1].data.ID}>
            </Card>
            <Card
              title={nodes[2].data.Titre_de_l_annonce__FR_}
              price={nodes[2].data.Prix_de_vente}
              status={nodes[2].data.Statut}
              image={nodes[2].data.Images[0].url}
              id={nodes[2].data.ID}>
            </Card>
            <Card
              title={nodes[3].data.Titre_de_l_annonce__FR_}
              price={nodes[3].data.Prix_de_vente}
              status={nodes[3].data.Statut}
              image={nodes[3].data.Images[0].url}
              id={nodes[3].data.ID}>
            </Card>
          </div>
        </div>
        <NewsletterAd />
        <Footer />
      </React.Fragment>
    )
  }
}

export default injectIntl(Index);

// Airtable query
export const query = graphql`
  query MyIndexQuery {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}}}) {
      nodes {
        data {
          ID
          Nom_d_achat
          Created_Time
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Titre_de_l_annonce__EN_
          Statut
          Images {
            url
          }
        }
      }
    }
  }
`;
