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
  query MyMobilierQuery {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}}}) {
      nodes {
        data {
          Nom_d_achat
          Created_Time
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Statut
          Images {
            url
          }
        }
      }
    }
  }
`;

function Mobilier({data}) {
  return (
    <React.Fragment>
      < Header />
      < Navbar />
      <div className="container category">
        <div className="sidebar">
          <h1>Mobilier</h1>
          <hr/>
          <ul>
            <li>Mobilier type 1</li>
            <li>Mobilier type 2</li>
            <li>Mobilier type 3</li>
            <li>Mobilier type 4</li>
            <li>Mobilier type 5</li>
            <li>Mobilier type 6</li>
            <li>Mobilier type 7</li>
          </ul>
        </div>
        <div className="row-3">
          {data.allAirtable.nodes.map(node => (
            <Card
              title={node.data.Titre_de_l_annonce__FR_}
              cardPrice={node.data.Prix_de_vente}
              status={node.data.Statut}
              image={node.data.Images[0].url}>
            </Card>
          ))}
          <div className="btn-container">
            <Link className="btn-1">Voir plus de mobilier</Link>
          </div>
        </div>
      </div>
      <NewsletterAd />
      <Footer />
    </React.Fragment>
  )
}

export default Mobilier
