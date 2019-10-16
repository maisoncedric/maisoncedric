import React from "react";
import { graphql } from 'gatsby';
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

//import components
import Card from "../components/card"
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import NewsletterAd from '../components/newsletterAd.js';

// Airtable query
export const query = graphql`
  query MyAssisesQuery {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}) {
      nodes {
        data {
          Nom_d_achat
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Statut
        }
      }
    }
  }
`;

function Assises({data}) {
  let numberDisplayed = 9;
  let displayedItems = data.allAirtable.nodes.slice(0, numberDisplayed);
  return (
    <React.Fragment>
      < Header />
      < Navbar />
      <div className="container category">
        <div className="sidebar">
          <h1>Assises</h1>
          <hr/>
          <ul>
            <li>Toutes les assises</li>
            <li>Fauteuils</li>
            <li>Chaises</li>
            <li>Canapés</li>
            <li>Tabourets</li>
            <li>Tables</li>
            <li>Autres</li>
          </ul>
        </div>
        <div className="row-3">
          {displayedItems.map(node => (
            <Card
              title={node.data.Titre_de_l_annonce__FR_}
              price={node.data.Prix_de_vente}
              status={node.data.Statut}>
            </Card>
          ))}
          <div className="btn-container">
            <Link className="btn-1">Voir plus d'assises</Link>
          </div>
        </div>
      </div>
      <NewsletterAd />
      <Footer />
    </React.Fragment>
  )
}

export default Assises
