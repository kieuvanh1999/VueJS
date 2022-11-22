<template>
    <div>
        <div class="pricing-header рх-3 ру-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h2 class="display-4">Product Infomation</h2>
            <p><router-link to="/admin/product">Back</router-link></p>
        </div>
        <div class="container">
            <form @submit.prevent="save()" action="/uploadSingle" method="post">
                <!-- <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Product name</label>
                    <div class="col-sm-g">
                        <input type="text" class="form-control" />
                    </div>
                </div> -->
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Product name <span style="color: red">*</span></label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Product Name *" @blur="validate()" v-model="product.name" v-bind:class="{'is-invalid': errors.name}"/>
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name}}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Product price <span style="color: red">*</span></label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Price * " @blur="validate()" v-model="product.price"  v-bind:class="{'is-invalid': errors.price}"/>
                        <div class="invalid-feedback">{{errors.price}}</div>
                    </div> 
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label">Discount <span style="color: red">*</span></label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" placeholder="Discount" @blur="validate()" v-model="product.discount" v-bind:class="{'is-invalid': errors.discount}"/>
                        <div class="invalid-feedback">{{errors.discount}}</div>
                    </div>  
                </div>
                <div class="form-group row">
                    <label for=" 'inputPassword" class="col-sm-3 col-form-label">Product descript <span style="color: red">*</span></label>
                    <div class="col-sm-9">
                        <textarea class=" form-control" rows="3" placeholder="description *" @blur="validate()" v-model="product.description" v-bind:class="{'is-invalid': errors.description}"></textarea>
                        <div class="invalid-feedback">{{errors.description}}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="mt-3 col-sm-3 col-form-label">Product Image <span style="color: red">*</span>:</label>
                    <div class="col-sm-9">
                        <input type="file" class="mt-3" plain @blur="validate()" v-bind:class="{'is-invalid': errors.image}">
                         <div class="invalid-feedback">{{errors.image}}</div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label"></label>
                    <div class="col-sm-9">
                        <button type="submit" class="btn btn-primary">Save</button> &nbsp;
                        <button type="reset" class="btn btn-danger" @click="cancel()">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'productForm',
    data() {
      return {  
        errors: {
            name: '',
            price: '',
            description: '',
            discount: '',
            image: '',
        },
        product: {
            name: '',
            price: '',
            description: '',
            discount: '',
            image: '',
        }
      }
    },
    created(){
        let productId = this.$route.params.id
            if(productId){
                this.getProducts(productId)
            }
    },
    methods: {
      validate(){
        let isValid = true
        this.errors = {
            name: '',
            price: '',
            description: '',
            discount: '',
            image: '',
        }
        if (!this.product.name){
            this.errors.name = 'product name is required'
            isValid = false
        }
        if (!this.product.price){
            this.errors.price = 'product price is required'
            isValid = false
        } else if (!this.isNumber(this.product.price)) {
            this.errors.price = 'product price must be number'
            isValid = false
        }
        if (!this.product.discount){
            this.errors.discount = 'product discount is required'
            isValid = false
        } else if (!this.isNumber(this.product.discount)) {
            this.errors.discount = 'product discount must be number'
            isValid = false
        }
        if (!this.product.description){
            this.errors.description = 'product description is required'
            isValid = false
        }
        // if (!this.product.image){
        //     this.errors.image = 'product image is required'
        //     isValid = false
        // }
        return isValid
      },
      isNumber(value) {
        return /^\d*$/.test(value)
      },
      save(){
        if (this.validate()){
            if(this.product.id){
                this.$request.put(`http://localhost:8000/api/products/${this.product.id}`, this.product).then(res =>{
                    if(res.data.success){
                        this.product.name = ''
                        this.product.price = ''
                        this.product.discount = ''
                        this.product.description = ''
                        this.product.image = ''
                        alert("Sửa Sản Phẩm Thành Công")
                        return;
                    }
                    alert("Sửa Sản Phẩm Không Thành Công")
                })
                return;
            }   
        this.$request.post('http://localhost:8000/api/products', this.product).then(res =>{
            this.product.name = ''
            this.product.price = ''
            this.product.discount = ''
            this.product.description = ''
            this.product.image = ''
                console.log(res.data)
                alert("Thêm Sản Phẩm Thành Công")
            })
        }else {
            alert("Thêm Sản Phẩm Không Thành Công")
        }
      },
      getProducts(productId){
            this.$request.get(`http://localhost:8000/api/products/${productId}`).then(res => {
                    this.product = res.data
                }
            ) 
      },
      cancel(){
        this.product.name = ''
        this.product.price = ''
        this.product.discount = ''
        this.product.description = ''
        this.product.image = ''
        },
        }   
    }
</script>
<style> 
    .form-group {
        margin-bottom: 1rem;
    }
</style>