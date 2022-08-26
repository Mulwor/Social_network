import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from './redux/state'
import {BrowserRouter} from "react-router-dom";


let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}
                /* Привязываем контекст(bind), он позволяет зафиксировать this. Берет функцию addpost и соединяет со стором
                 let user = {  firstName: "Вася" };
                 function func() { alert(this.firstName); }
                 let funcUser = func.bind(user);
                 funcUser(); // Вася
                 Здесь func.bind(user) – это «связанный вариант» func, с фиксированным this=user.

                 */
            />
        </BrowserRouter>, document.getElementById('root'));
}

renderTree()

store.subscribe(renderTree);