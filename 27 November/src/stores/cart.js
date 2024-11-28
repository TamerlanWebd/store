import { defineStore } from "pinia";
import { computed, ref, registerRuntimeCompiler } from "vue";
import { useProductStore } from "./product";


export const useCartStore = defineStore('cart', () => {
    const carts = ref([
        {
            productId: 1,
            count: 1,
        }
    ]);
   
    const findCartProductById = (id) => {
            return carts.value.find((product) => product.productId == id);
        }
        const findIndexCartProductById = (id) => {
            return carts.value.findIndex((product) => product.productId == id);
        }

    const updateCountCart = (id, count = 1) => {
        const productCart = findCartProductById(id);
        if (productCart) {
            productCart.count = count;
        } 
    }

    const addToCart = (id) => {
        const productCart = findCartProductById(id);
        if (productCart) {
            updateCountCart(id, productCart.count + 1);
        } else {
            carts.value.push({
                productId: id,
                count: 1,
            });
        }
    }

    const productStore = useProductStore();
    const cartList = computed(() => {
        return carts.value.map((cartProduct) => {
            const product = productStore.findProductById(cartProduct.productId);
            return {
                productId: cartProduct.productId,
                name: product.name,
                img: product.img,
                price: product.price,
                count: cartProduct.count,
            }
        });
    });
    const deleteProduct = (id) => {
        const index = findIndexCartProductById(id);
        if (index !== -1) {
          carts.value.splice(index, 1);
        }
      };
    return {
        carts,
        updateCountCart,
        addToCart,
        cartList,
        deleteProduct,
}
}
);