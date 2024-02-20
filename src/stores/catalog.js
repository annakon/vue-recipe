import {reactive, ref} from 'vue';
import { defineStore } from 'pinia';
import axios from "axios";

export const useCatalogStore = defineStore('catalog', () => {
    const recipes = reactive([]);
    const errored = ref();
    const loading = ref(true);
    const requestType = 'https://api.edamam.com/api/recipes/v2?app_id=eefcc2b9&app_key=f5e5717532db4f7737be1f1dbdb5476e&type=public&dishType=';
    const requestQuery = 'https://api.edamam.com/api/recipes/v2?app_id=eefcc2b9&app_key=f5e5717532db4f7737be1f1dbdb5476e&type=public&q=';
    const product = ref();

    async function requestRecipes(query,type) {
        let request=(query.value?requestQuery + query.value:requestType + type.value);
        await axios
            .get(request)
            .then((response) => {recipes.length=0;recipes.push(...response.data.hits)})
            .catch((error) => {
                console.log(error);
                errored.value = true;
            })
            .finally(() => (loading.value = false));
    }

    async function requestProduct(requestOneProduct) {
        await axios
            .get(requestOneProduct)
            .then((response) => (product.value = response.data))
            .catch((error) => {
                console.log(error);
                errored.value = true;
            })
            .finally(() => (loading.value = false));
    }

    return { recipes,
        errored,
        loading,
        product,
        requestProduct,
        requestRecipes,};
});
