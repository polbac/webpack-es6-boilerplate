import Navigo from 'navigo';

import home from './modulos/home';
import contacto from './modulos/contacto';

import './index.scss';

var root = null;
var useHash = true;
var hash = '#!';
var router = new Navigo(root, useHash, hash);

router
  .on({
    '/': home,
    'contacto':  contacto,
  })
  .resolve();


