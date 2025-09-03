import React, {useState} from 'react';
import AppHeader from '../app-header/app-header'

import appStyles from './app.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger.constructor";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import {fetchIngredients} from "../../utils/burger-api";


function App() {
    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        data: []
    })

    const [ingredientDetailsModalVisible, setIngredientDetailsModalVisible] = useState(false);
    const [ingredientDetailModalData, setIngredientDetailModalData] = useState({})




    const handleOpenIngredientDetailsModal = (ingredient) => {
        setIngredientDetailsModalVisible(true);
        setIngredientDetailModalData(ingredient);
    }

    const handleCloseIngredientDetailsModal = () => {
        setIngredientDetailsModalVisible(false);
    }



    React.useEffect(() => {
        fetchIngredients()
            .then(
                data => {
                    return setState({...state, isLoading: false, data: data})
                }
            )
            .catch(
                e => {
                    setState({...state, hasError: true, isLoading: false});
                    alert("Во время загрузки произошла ошибка");
                }
            )
    }, [])

    return (
        <main className={appStyles.app}>
            <AppHeader/>
            <section className={appStyles.main_screen}>
                <section className={appStyles.burger_ingredients}>
                    <BurgerIngredients handleOpenModal={handleOpenIngredientDetailsModal}
                                       ingredients={state.data}/>
                </section>
                <section className={`pt-25 ${appStyles.burger_constructor}`}>
                    <BurgerConstructor ingredients={state.data} />

                </section>
            </section>

            {ingredientDetailsModalVisible &&
                <Modal onClose={handleCloseIngredientDetailsModal} header='Детали ингредиента'>
                    <IngredientDetails ingredient={ingredientDetailModalData}/>
                </Modal>}


        </main>
    );
}

export default App;
