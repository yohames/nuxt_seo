<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  charset: "utf-8",
  title: "SEO DEMO",
  titleTemplate: (title) =>
    title !== "SEO DEMO" ? `${title} · SEO DEMO` : title,
  meta: [
    {
      name: "description",
      content: "NUXT SEO DEMO",
    },
    {
      property: "og:image",
      content: "https://movies.nuxt.space/images/wallpaperflare.jpg",
    },
    { name: "og:title", content: "Nuxt Movies" },
    { name: "og:type", content: "website" },
    { name: "og:url", content: "https://movies.nuxt.space" },
    {
      name: "og:description",
      content:
        "A TMDB client built with Nuxt Image to show the potential of it ✨",
    },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@afrotimes_ET" },
    { name: "twitter:creator", content: "@afrotimes_ET" },
    { name: "twitter:title", content: "Nuxt Movies" },
    {
      name: "twitter:description",
      content:
        "A TMDB client built with Nuxt Image to show the potential of it ✨",
    },
    {
      name: "twitter:image",
      content: "https://movies.nuxt.space/images/wallpaperflare.jpg",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon_icon.png",
    },
  ],
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
