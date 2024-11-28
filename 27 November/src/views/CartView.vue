<script setup>
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Изображение</th>
              <th scope="col">Название</th>
              <th scope="col">Цена</th>
              <th scope="col">Количество</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cartStore.cartList" :key="product.productId">
              <th scope="row">{{ index + 1 }}</th>
              <td>
                <img :src="product.img" class="img-thumbnail" alt="Изображение товара"/>
              </td>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}$</td>
              <td>
                <input type="number" 
                       class="form-control" 
                       :value="product.count" 
                       @input="cartStore.updateCountCart(product.productId, parseInt($event.target.value))" />
              </td>
              <td>
                <button type="button" class="btn btn-primary" @click="$router.push('/detail/' + product.productId)">Купить</button>
                <button type="button" class="btn btn-outline-danger" @click="cartStore.deleteProduct(product.productId)">Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-10 text-end">
        <button type="button" class="btn btn-outline-success btn-lg me-2" @click="$router.push('/checkout')">Перейти к оформлению</button>
      </div>
      <div class="col-md-2">
        <h3 class="text-end">Итого: ${{ cartStore.cartList.reduce((total, item) => total + item.price * item.count, 0) }}</h3>
      </div>
    </div>
  </div>
</template>

<style>
.img-thumbnail {
  width: 400px;
  height: auto;
}
</style>