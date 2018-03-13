import App from './App';

const attributeName = 'data-form';
const formNodes = document.querySelectorAll('[' + attributeName + ']');

const appInstances = [];
for (let k = 0; k < formNodes.length; k++) {
    const mount = formNodes[k];
    const endpoint = mount.getAttribute(attributeName);
    const app = new App(mount, endpoint);
    appInstances.push(app);
}