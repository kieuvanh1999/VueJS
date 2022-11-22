<template>
  <div class="hero container">
    <Hero />
      <section class="categories" style="margin-top: 5rem;">
          <VueSlickCarousel v-bind="SlideCateList">
          <div class="swiper-slide" v-for="cate in cateList">
              <div class="img"><img :src = "cate.imgsrc" width = "380" height = "300" /></div>
              <h5 class="title"> {{ cate.title }}</h5>
          </div> 
          </VueSlickCarousel>
      </section>
      <section class="featured spad">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="section-title">
                          <h2>Featured Product</h2>
                      </div>
                      <div class="featured__controls">
                          <ul>
                              <li class="active" data-filter="*">All</li>
                              <li data-filter=".oranges">Oranges</li>
                              <li data-filter=".fresh-meat">Fresh Meat</li>
                              <li data-filter=".vegetables">Vegetables</li>
                              <li data-filter=".fastfood">Fastfood</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="row featured__filter" id="categories">
                  <div id="cuqua" class="col-lg-3 col-md-4 col-sm-6 mix" v-for="feature in cateList" v-bind:class="feature.class">
                  <div class="featured__item">
                      <div class="featured__item__pic set-bg">
                          <div class="img"><img :src = "feature.imgsrc" width = "300" height = "250" /></div>
                          <ul class="featured__item__pic__hover">
                              <li><a href="#"><i class="fa fa-heart"></i></a></li>
                              <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                              <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                          </ul>
                      </div>
                      <div class="featured__item__text">
                          <h6><a href="#">{{ feature.title }}</a></h6>
                          <h5>{{ feature.price }}</h5>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <div class="banner">
      <div class="container">
          <div class="row banner-item">
              <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="banner__pic-1">
                      <img src="../../assets/banner/banner-1.jpg" alt="">
                  </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="banner__pic-2">
                      <img src="../../assets/banner/banner-2.jpg" alt="">
                  </div>
              </div>
          </div>
      </div>
      </div>
      <section class="latest-product spad">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4 col-md-6">
                      <div class="latest-product__text">
                          <h4>Latest Prdouct</h4>
                          <div class="latest-product__slider owl-carousel">
                              <div class="latest-prdouct__slider__list latestPrdouct">
                                  <VueSlickCarousel v-bind="slideProductList">
                                      <a href="#" class="latest-product__item"  v-for="product in productList">
                                          <div class="latest-product__item__pic">
                                              <img :src="product.imgsrc" alt="">
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>{{product.title}}</h6>
                                              <span>{{product.price}}</span>
                                          </div>
                                      </a>
                                  </VueSlickCarousel>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="latest-product__text">
                          <h4>Top Rated Products</h4>
                          <div class="latest-product__slider owl-carousel">
                              <div class="latest-prdouct__slider__list latestPrdouct">
                                  <VueSlickCarousel v-bind="slideProductList">
                                      <a href="#" class="latest-product__item"  v-for="product in productList">
                                          <div class="latest-product__item__pic">
                                              <img :src="product.imgsrc" alt="">
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>{{product.title}}</h6>
                                              <span>{{product.price}}</span>
                                          </div>
                                      </a>
                                  </VueSlickCarousel>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                  <div class="latest-product__text">
                      <h4>Review Products</h4>
                      <div class="latest-product__slider owl-carousel">
                          <div class="latest-prdouct__slider__list latestPrdouct">
                                  <VueSlickCarousel v-bind="slideProductList">
                                      <a href="#" class="latest-product__item"  v-for="product in productList">
                                          <div class="latest-product__item__pic">
                                              <img :src="product.imgsrc" alt="">
                                          </div>
                                          <div class="latest-product__item__text">
                                              <h6>{{product.title}}</h6>
                                              <span>{{product.price}}</span>
                                          </div>
                                      </a>
                                  </VueSlickCarousel>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Blog />
  </div>    
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Hero from '../layouts/Hero.vue';
import Blog from '../layouts/Blog.vue';

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel, Hero, Blog },
  data(){
      return{
          SlideCateList: {
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: false,
              swipe: true,
              responsive: [
                  {
                  "breakpoint": 1024,
                      "SlideCateList": {
                          "slidesToShow": 3,
                          "slidesToScroll": 1,
                          "infinite": true,
                          "dots": true
                      }
                  },
                  {   
                  "breakpoint": 600,
                      "SlideCateList": {
                          "slidesToShow": 2,
                          "slidesToScroll": 1,
                          "initialSlide": 2
                      }
                  },
                  {
                  "breakpoint": 480,
                      "SlideCateList": {
                          "slidesToShow": 1,
                          "slidesToScroll": 1
                      }
                  }
              ]
          },
          slideProductList: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesPerRow: 1,
              rows: 3,
              autoplay: true,
              swipe: true,
          },
          
          cateList: [
            {
            class: 'oranges',
            id: 1,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-1.jpg")
            },
            {
            class: 'fastfood',
            id: 2,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-2.jpg")
            },
            {
            class: 'fresh-meat',
            id: 3,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-3.jpg")
            },
            {
            class: 'oranges',
            id: 7,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-7.jpg")
            },
            {
            class: 'fresh-meat',
            id: 5,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-5.jpg")
            },
            {
            class: 'fastfood',
            id: 6,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-6.jpg")
            },
            {
            class: 'fresh-meat',
            id: 7,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-7.jpg")
            },
            {
            class: 'vegetables',
            id: 8,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-8.jpg")
            }
          ],
          productList: [
          {
            class: 'oranges',
            id: 1,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-1.jpg")
            },
            {
            class: 'fastfood',
            id: 2,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-2.jpg")
            },
            {
            class: 'fresh-meat',
            id: 3,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-3.jpg")
            },
            {
            class: 'oranges',
            id: 7,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-7.jpg")
            },
            {
            class: 'fresh-meat',
            id: 5,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-5.jpg")
            },
            {
            class: 'fastfood',
            id: 6,
            title: "Crab Pool Security",
            price: "$30.00",
            imgsrc: require("../../assets/product/product-6.jpg")
            },
        ],
        
      }
  }
}

</script>
<style>
  .hero__categories ul{
      text-align: left;
  }
  .slick-prev:before, .slick-next:before{
      color: #000 !important;
  }
  
</style>