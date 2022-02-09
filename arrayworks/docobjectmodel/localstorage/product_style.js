class ProductDetails{
    createNewProduct(){
        console.log("here in method");
        let product_name=pd_name.value;
        let product_price=pd_amount.value;
        let product_stock=pd_qty.value;
        let product={
            product_name,
            product_price,
            product_stock
        }
        localStorage.setItem(product.product_name,JSON.stringify(product))
        this.listAllProducts()

    }
    displayProducts(products){
        let html_data=``;
        for(let product of products){
            html_data+=`
            <tr>
            <td>${product.product_name}</td>
            <td>${product.product_price}</td>
            <td>${product.product_stock}</td>
        
        </tr>`
        }
        document.querySelector("#result").innerHTML=html_data

    }
    listAllProducts(){
        let products=[];
        for(let i=0;i<localStorage.length;i++){
            let key=localStorage.key(i)
            let product=JSON.parse(localStorage.getItem(key))
            products.push(product)
        }
        this.displayProducts(products)
    }
    findProduct(){
        let product_name=p_name.value;
        let html_data=``
        if(product_name in localStorage){
            let product=JSON.parse(localStorage.getItem(product_name))

            html_data=`<p> product_name:${product.product_name}</p>
            <p> product_price:${product.product_price}</p>
            <p> product_stock:${product.product_stock}</p>
        

            `
            
        }
        else{
            html_data=`<p>no data found</p>`

        }
        document.querySelector("#result-section").innerHTML=html_data

    }



    
    }
    var product=new ProductDetails()
    window.onload=product.listAllProducts()
