
async function menCloth () {
    try{
        let response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        let data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error){
        console.log('the data is not fetched from category/men clothing', error)
    }
    }

async function womenCloth () {
    try{
        let response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        let data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error){
        console.log('the data is not fetched from category/women clothing', error)
    }
}

export {menCloth, womenCloth};