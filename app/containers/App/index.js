/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import header from '../../components/Header.js';
import footer from '../../components/Footer.js';
// On peut aussi importer du CSS de la meme facon.
import css from '../../containers/CSS/Style.css';

export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div>
      <Machine title="Shoking !" isActive ="yes"/>
      <Machine title="Secouons-nous les mains" isActive ="Of course !"/>
      <Machine title="Je demande votre pardon ?" isActive ="Well"/>
    </div>
  );
}
