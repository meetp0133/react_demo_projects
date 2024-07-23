function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('herf',reactElement.props.href)
    // domElement.setAttribute('targer',reactElement.props.targer)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue ;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}



const reactElement = {
    type : "a",
    props : { 
        href:'http://google.com',
        targer :"_blank"
    },
    children : "Click me to visit google"
}

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer)
