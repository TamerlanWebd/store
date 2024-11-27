<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
<div class="container">
  <div class="row mt-4">
    <div class="col md-5">
      <select class="form-select" aria-label="Default select example">
  <option selected>Select category</option>
  <option value="1">Vegetables</option>
  <option value="2">Fruits</option>
  <option value="3">Berries</option>
</select>
</div>
      <div class="col md-5">
        <input type="text" class="form-control" value="Search by name" aria-label="readonly input example">
      </div>
        <div class="col md-2">
          <button type="button" class="btn btn-outline-warning">reset</button>
    
     
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=8bc7aeefc6e26a6a8b0afc90bd60626ec00dbdf7-5886141-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Banana</h5>
        <p class="card-text">$15</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=297d9a0b2677cdd2319975967f2e910c_l-4373599-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Apple</h5>
        <p class="card-text">$10</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://goveggie.ro/wp-content/uploads/2018/01/fructul-pasiunii.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">passion fruit</h5>
        <p class="card-text">$20</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=4f62c8474048ff54f657732e8b7d7906_l-5251286-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">kiwi</h5>
        <p class="card-text">$19</p>
        <p class="card-text">Fruits</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
        
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=36ed2c2ba0939be4b58325b8900d9986_l-5163166-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">tomato</h5>
        <p class="card-text">$9</p>
        <p class="card-text">Vegetables</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/get-eda/3735503/641c48ff1e078822b7c40281491198e8/1200x1200nocrop" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Watermelon</h5>
        <p class="card-text">$7</p>
        <p class="card-text">Berry</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=fc712f8f14c9757683895acecfaa030b_l-4298511-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Strawberry</h5>
        <p class="card-text">$15</p>
        <p class="card-text">Berry</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=62eb759f7e7b89492a15f082b46fa9a6_l-10805306-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Potato</h5>
        <p class="card-text">$2</p>
        <p class="card-text">Vegetables</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://avatars.mds.yandex.net/i?id=04ac33014e379660e716f846df91cc6a4b181200c61451ce-5230282-images-thumbs&n=13" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Grape</h5>
        <p class="card-text">$12</p>
        <p class="card-text">Berry</p>
        <div class="card-footer text-end">
          <button type="button" class="btn btn-outline-info">Detail</button>
          <button type="button" class="btn btn-outline-success">Cart</button>
        </div>
      </div>
    </div>
  </div>
  
</div>
  </div>
</div>
</template>
