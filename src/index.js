// Bootstrap app
import 'index.scss';
import 'moment/locale/de';
import store from 'store';

// Require root UI component
import MasterLayout from 'layouts/MasterLayout';

// Attach layout component to the DOM
const anchor = document.getElementById('world-clocks-root');
anchor.parentNode.replaceChild(MasterLayout(store), anchor);
