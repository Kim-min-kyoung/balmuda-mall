import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../config/constants';
import './recipe.scss';

function Recipe() {
    const [ recipes, setRecipes ] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/recipes`)
        .then(function(result){
            const recipes = result.data.recipe;
            console.log(recipes);
            setRecipes(recipes);
        })
        .catch(function(error){
            console.log(error);
        })
    }, [])
    return (
        <div id="con">
            <div id="con_inner">
                <div id="recipe_logo">
                    <img src="img/recipes/recipe_logo.png" alt="레시피 로고"/>
                    <p>BALMUDA The Toaster로 만드는 다채로운 맛. 발뮤다 키친팀과
                        <br/>요리 전문가의 시그니처 레시피를 소개합니다.</p>
                </div>
                <div id="recipe" className="innerCon">
                    <div id="recipe-list">
                        {
                            recipes.map(recipe => {
                                return(
                                    <div className="recipe-card" key={recipe.id}>
                                        <div>
                                            <img className="recipe-img" src={recipe.imageUrl} alt="레시피 이미지" />
                                        </div>
                                        <div className="recipe-contents">
                                            <p>{recipe.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;