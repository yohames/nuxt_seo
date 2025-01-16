<script setup>
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    to: "products-id",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    to: "products-id",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    to: "products-id",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    to: "products-id",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Brass Scissors",
    to: "products-id",
    price: "$50",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-05.jpg",
    imageAlt: "Pair of brass scissors with black ergonomic handles.",
  },
  {
    id: 6,
    name: "Leatherbound Journal",
    to: "products-id",
    price: "$60",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-06.jpg",
    imageAlt: "Hand holding a leatherbound journal with a strap closure.",
  },
  {
    id: 7,
    name: "Ceramic Mug",
    href: "#",
    price: "$25",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imageAlt: "White ceramic mug with a black rim and handle.",
  },
  {
    id: 8,
    name: "Wooden Ruler",
    href: "#",
    price: "$15",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt: "Wooden ruler with both metric and imperial measurements.",
  },
  // More products...
];
</script>
<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <NuxtLink
          v-for="product in products"
          :key="product.id"
          :to="{ name: product.to, params: { id: product.id } }"
          class="group"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
          />
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ product.price }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
