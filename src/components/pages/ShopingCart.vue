<template>
    <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="cart in cateList">
                                    <td class="shoping__cart__item">
                                        <img src="img/cart/cart-1.jpg" alt="">
                                        <h5>{{cart.title}}</h5>
                                    </td>
                                    <td class="shoping__cart__price">
                                        {{cart.price}}
                                    </td>
                                    <td class="shoping__cart__quantity">
                                        <div class="quantity">
                                            <div class="pro-qty"><span class="dec qtybtn">-</span>
                                                <input type="text" value="1" >
                                            <span class="inc qtybtn">+</span></div>
                                        </div>
                                    </td>
                                    <td class="shoping__cart__total">
                                        {{cart.price}}
                                    </td>
                                    <td class="shoping__cart__item__close">
                                        <span class="icon_close"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__btns">
                        <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__continue">
                        <div class="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code">
                                <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>$454.98</span></li>
                            <li>Total <span>$454.98</span></li>
                        </ul>
                        <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                cateList: [
                {
                class: 'oranges',
                id: 1,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-1.jpg")
                },
                {
                class: 'fastfood',
                id: 2,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-2.jpg")
                },
                {
                class: 'fresh-meat',
                id: 3,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-3.jpg")
                },
                {
                class: 'oranges',
                id: 7,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-7.jpg")
                },
                {
                class: 'fresh-meat',
                id: 5,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-5.jpg")
                },
                {
                class: 'fastfood',
                id: 6,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-6.jpg")
                },
                {
                class: 'fresh-meat',
                id: 7,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-7.jpg")
                },
                {
                class: 'vegetables',
                id: 8,
                title: "Crab Pool Security",
                price: "$36.00",
                priceCount: "$30.00",
                discount: "-20%",
                imgsrc: require("../../assets/product/product-8.jpg")
                }
            ],
            }
        },
        methods: {
            
        }
    }
</script>