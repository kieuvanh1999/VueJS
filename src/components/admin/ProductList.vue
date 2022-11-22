<template>
    <div class="container">
        <div class="pricing-header рх-3 ру-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 class="display-4">Product Management</h2>
            <p><router-link to="/admin/product/productInfo">Add new</router-link></p>
        </div>
        <div class="container">
            <div class="card-deck mb-3 text-center">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <!-- <th scope="col">ID</th> -->
                            <th scope="col">Product name</th>
                            <th scoper="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Description</th>
                            <th scope="col">Images</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(productList, index) in products" :key="index">    
                            <!-- <th scope=" row">{{productList.id}}</th> -->
                            <td>{{productList.name}}</td>
                            <td>{{productList.price}}</td>
                            <td>{{productList.discount}}</td>
                            <td>{{productList.description}}</td>
                            <td>{{productList.image}}</td>
                            <td>
                                <router-link :to="{ name: 'ProductEdit', params: { id: productList.id }}">
                                    <button class="btn btn-primary">Edit</button>
                                </router-link> &nbsp;
                                <button class="btn btn-danger" @click="onDelete(productList.id)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'productList',
        data(){
            return{
                products: [],

            }
        },
        created(){
            this.getAll()
        },
        methods:{
            getAll(){
                this.$request.get('http://localhost:8000/api/products').then(res => {
                    this.products = res.data
                })
            },
            onDelete(productId){
                this.$swal({
                    title: 'Do you want to save the changes?',
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: 'Delete !',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$request.delete(`http://localhost:8000/api/products/${productId}`).then(res => {
                            if(res.data.success){
                                this.getAll()
                            }
                        })
                    }
                })
            },
        }
    }
</script>

<style>
    td:nth-child(6) {
        width: 10rem;
    }
</style>