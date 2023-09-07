<template>
  <PanHeader></PanHeader>
  <div class="compony-img"></div>
  <section class="pan-container pan-scroll-bg hero-bg-4 pan-scroll-special">
    <div class="pan-row">
      <div class="compony-title">Company Profile</div>
      <div class="compony-desc">
        Wheat is a world-leading Internet technology company, using innovative
        products and services to improve the quality of life of people around
        the world.
      </div>
      <div class="desc-item">
        <br />
        Wheat was established in 1991 and is headquartered in Anhui, China. The
        company has always been adhering to the purpose of technology for good.
        Our communication and social services connect more than 1 billion people
        around the world, helping them connect with family and friends, and
        enjoy convenient travel, payment and entertainment.
        <br />
        <br />
        Math publishes a variety of popular electronic games and other
        high-quality digital content, bringing rich interactive entertainment
        experience to users around the world.
        <br />
        <br />
        Wheat also provides a series of enterprise services such as cloud
        computing, advertising, and financial technology to support partners in
        realizing digital transformation and promoting business development.
        <br />
        <br />
        Maizi was listed on the Shanghai Stock Exchange of China in 2000.
        <br />
      </div>
    </div>
  </section>
  <PanFooter></PanFooter>
</template>
<script setup lang="ts">
// import { reactive, ref, onMounted, nextTick } from 'vue'
import PanHeader from '@/template1/components/header/index.vue'
import PanFooter from '@/template1/components/footer/index.vue'

defineOptions({
  name: 'AboutPage'
})
</script>
<style lang="scss" scoped>
.compony-img {
  height: 468px;
  background: url(@package/assets/images/hero_bg_2.jpg) no-repeat;
  background-size: cover;
}
.pan-container {
  position: relative;
  padding: 105px 0;
}
.pan-row {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1170px;
}
.compony-title {
  margin-bottom: 52px;
  text-align: center;
  text-transform: uppercase;
  font-size: 30px;
  color: #2a2e2e;
}
.compony-desc {
  margin: 16px auto;
  text-align: left;
  line-height: 24px;
  font-size: 20px;
  font-weight: 400;
  color: #2a2e2e;
}
.desc-item {
  margin: 16px auto;
  letter-spacing: 0;
  text-align: left;
  line-height: 24px;
  font-size: 16px;
  color: #5f6464;
}
@media screen and (max-width: 768px) {
  .pan-container {
    padding: 32px 0;
  }
}
</style>
