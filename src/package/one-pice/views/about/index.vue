<template>
  <PanHeader></PanHeader>
  <div class="compony-img"></div>
  <PageContainer class="pan-container">
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
  </PageContainer>
  <PanFooter></PanFooter>
</template>
<script setup lang="ts">
// import { reactive, ref, onMounted, nextTick } from 'vue'
import PanHeader from '@/one-pice/components/header/index.vue'
import PanFooter from '@/one-pice/components/footer/index.vue'
import PageContainer from '@/one-pice/components/container/index.vue'

defineOptions({
  name: 'AboutPage'
})
</script>
<style lang="scss" scoped>
.compony-img {
  padding-top: 60px;
  height: 468px;
  background: url(@template/assets/images/scenery-1.jpg) no-repeat;
  background-size: cover;
  background-position: bottom;
}
.pan-container {
  position: relative;
  padding: 105px 0;
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
