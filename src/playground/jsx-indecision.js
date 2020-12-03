console.log('App.js is running');

const appObj = {
    title: 'Indecision App',
    subtitle: 'This is the subtitle',
    options: []
};



const removeAll = () => {
    appObj.options = [];
    render();
};

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
    console.log(randomNum);
};
const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    const option = e.target.elements.option.value;
    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};
const render = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <p>sub: {appObj.subtitle}</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    appObj.options.map((option) => {
                        return <li key={option}>Item: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        );
        
    
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
}

// TemplateTwo
const user = {
    userName: 'Eduardo',
    age: 24,
    location: 'Toronto'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
render();