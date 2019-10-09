import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

export default () => (
  <div className="container-small">
    <h1>Contactez-nous</h1>
    <p>
      Cédric, Alice, Damien et Mustapha sommes heureux de vous présenter notre sélection éclectique de pièces du XXème siècle. Nous parcourons l'Europe à la recherche de pièces qui nous touchent, et que nous proposons à la vente.
      <br/>
      Notre espace d'exposition est accessible uniquement sur rendez-vous.
    </p>
    <hr/>
    <div className="contact">
      <img src="../images/ic-mail.svg" alt=""/>
      <Link>contact@maisoncedric.com</Link>
    </div>
    <hr/>
    <div className="contact">
      <img src="../images/ic-phone.svg" alt=""/>
      <Link>+33 6 24 55 52 51</Link>
    </div>
  </div>
)