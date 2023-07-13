import style from "./Pagination.module.css"
import { useDispatch } from "react-redux"
import { numPage, prevPage, nextPage } from "../../Redux/Reducers/Recipes/recipeSlice";

export default function Pagination ({totalRecipes, recipesForPage, page}) {
    /* totalrecipes es la longitud entera de la recipes osea 100
       recipesForPage es la cantida de elemento se pueden renderizar por pagina que son 9
       y page es la pagina actual en la que se encuetra, el estado de la currentPage que comienza como 1 */

    const dispatch = useDispatch();

    let numberOfPages = [];
    for (let i = 0; i < Math.ceil(totalRecipes / recipesForPage); i++) {
        numberOfPages.push(i + 1) //i + 1 por que comineza en 0 y queremos que comineze desde 1.
    }

    function handlerPrev () {
        if (page > 1) {
            dispatch(prevPage());
        }else{
            alert("No hay mas paginas")
        }
    }
    function handlerNext () {
        if (page < numberOfPages.length) {
            dispatch(nextPage());
        }else{
            alert("No hay mas paginas")
        }
    }
    function handlerNum (number) {
        dispatch(numPage(number)); 
    }


    return (
        <div className={style.pagination}> 
            <button className={style.otros} onClick={handlerPrev}><i className='bx bxs-chevrons-left'></i></button>
            {numberOfPages.map(number => {
                return (<button className={page === number?style.actualPage:style.otros} onClick={() => handlerNum(number)} key={number}>{number}</button>)}
                )}
            <button className={style.otros} onClick={handlerNext}><i className='bx bxs-chevrons-right' ></i></button>
        </div>
    )
}