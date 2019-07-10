const AppBar = ({ title }) => {
    const cont = document.createElement('div');
    cont.setAttribute('id', 'app-bar')
    
    const icon = document.createElement('img');
    icon.setAttribute('src', '/favicon.png');
    cont.appendChild(icon);
    
    const head = document.createElement('h3');
    head.innerText = title;
    cont.appendChild(head);
    
    return cont;
};

export default AppBar;
