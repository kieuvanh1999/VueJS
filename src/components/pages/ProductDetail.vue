<template>
    <div>
        <Banner />
    <div class="ProductDetail container" >
        <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <VueSlickCarousel
                            ref="c1"
                            :asNavFor="$refs.c2"
                            :focusOnSelect="true"
                            >
                                <div v-for="detail in cateList">
                                    <img :src="detail.imgsrc">
                                </div>
                               
                            </VueSlickCarousel>
                            <VueSlickCarousel
                            ref="c2"
                            :asNavFor="$refs.c1"
                            :focusOnSelect="true"
                            :slidesToShow="4"
                            >
                                <div v-for="detail in cateList">
                                    <img :src="detail.imgsrc">
                                </div>
                        
                            </VueSlickCarousel>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6"> 
                    <div class="product__details__text">
                        <h3>{{product.title}}</h3>
                        <div class="product__details__rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-half-o"></i>
                            <span>(18 reviews)</span>
                        </div>
                        <div class="product__details__price">{{product.price}}</div>
                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                            vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                            quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                        <div class="product__details__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <input type="text" value="1">
                                </div>
                            </div>
                        </div>
                        <a href="#" class="primary-btn">ADD TO CARD</a>
                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                        <ul>
                            <li><b>Availability</b> <span>In Stock</span></li>
                            <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                            <li><b>Weight</b> <span>0.5 kg</span></li>
                            <li><b>Share on</b>
                                <div class="share">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="product__details__tab">
                        <div class="tab-content">
                            <b-card no-body>
                                <b-tabs card>
                                <b-tab title="Description" active>
                                    <b-card-text>
                                        <h3>Products Infomation</h3>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                        sed sit amet dui. Proin eget tortor risus.</p>
                                    </b-card-text>
                                    
                                </b-tab>
                                <b-tab title="Infomation">
                                    <b-card-text>
                                        <h3>Products Infomation</h3>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</p>
                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                    </b-card-text>
                                    
                                </b-tab>
                                <b-tab title="Reviews (1)">
                                    <b-card-text>
                                        <h3>Products Infomation</h3>
                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        Proin eget tortor risus.</b-card-text>
                                </b-tab>
                                </b-tabs>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import Hero from '../layouts/Hero.vue'
    import Banner from '../layouts/banner.vue'

    export default {   
        components: {
            VueSlickCarousel,
            Hero,
            Banner
        },
        data(){
            return{     
                product: {},
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
                    title: "Crab Pool Security 2",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-2.jpg")
                    },
                    {
                    class: 'fresh-meat',
                    id: 3,
                    title: "Crab Pool Security 3",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-3.jpg")
                    },
                    {
                    class: 'oranges',
                    id: 7,
                    title: "Crab Pool Security 4",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-7.jpg")
                    },
                    {
                    class: 'fresh-meat',
                    id: 5,
                    title: "Crab Pool Security 5",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-5.jpg")
                    },
                    {
                    class: 'fastfood',
                    id: 6,
                    title: "Crab Pool Security 6",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-6.jpg")
                    },
                    {
                    class: 'fresh-meat',
                    id: 7,
                    title: "Crab Pool Security 7",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-7.jpg")
                    },
                    {
                    class: 'vegetables',
                    id: 8,
                    title: "Crab Pool Security 8",
                    price: "$36.00",
                    priceCount: "$30.00",
                    discount: "-20%",
                    imgsrc: require("../../assets/product/product-8.jpg")
                    }
                ],
            }
        },
        props: ["id"],
        mounted() {
            this.id = this.$route.params.id
            this.product = this.cateList.find((product) => this.product.id == this.id)
        },
    }
</script>

<style>
    .card-header{
        background-color: #fff;
        border-bottom: none;
    }
    .card{
        border: none;
    }
</style>