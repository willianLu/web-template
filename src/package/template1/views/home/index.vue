<template>
  <div class="home-main">
    <PanHeader mode="home"></PanHeader>
    <el-carousel
      :height="pageWidth < 768 ? '400px' : '750px'"
      @change="handleCarouselChange"
    >
      <el-carousel-item v-for="item in 3" :key="item">
        <div :class="'flex-center pan-carousel hero-bg-' + item">
          <div
            class="pan-carousel-content animate__animated"
            :class="{
              animate__fadeInUp: carouselIndex === item - 1
            }"
          >
            <h1>Enjoy</h1>
            <h3>With Us</h3>
            <p>A free bootstrap website template#</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <section class="pan-container" style="background-color: #fff">
      <div class="pan-row">
        <el-row :gutter="30">
          <el-col :md="12">
            <div
              class="pan-about-us pan-animate"
              data-animate-effect="fadeInUp"
            >
              <h2>OUR STORE</h2>
              <div class="seperator">* * *</div>
              <div class="desc">
                Voluptatibus quaerat laboriosam fugit non Ut consequatur animi
                est molestiae enim a voluptate totam natus modi debitis dicta
                impedit voluptatum quod sapiente illo saepe explicabo quisquam
                perferendis labore et illum suscipit
              </div>
              <div>
                <span class="about-btn">ABOUT US</span>
              </div>
            </div>
          </el-col>
          <el-col :md="12">
            <img
              class="pan-animate"
              data-animate-effect="fadeInUp"
              src="@package/assets/images/img_1.jpg"
              style="width: 100%"
            />
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="pan-container pan-scroll-bg hero-bg-2">
      <div class="pan-row">
        <h3 class="pan-title pan-animate" data-animate-effect="fadeInUp">
          OUR SPECIALTIES
        </h3>
      </div>
    </section>
    <section class="pan-container">
      <div class="pan-row">
        <ul class="cate-desc-wrap">
          <template v-for="(item, index) in cateList" :key="index">
            <li
              v-if="pageWidth <= 768 || index < 2 || index > 3"
              :class="'pan-animate cate-img cate-img' + item.icon"
              data-animate-effect="fadeInScale"
            ></li>
            <li class="pan-animate" data-animate-effect="fadeInScale">
              <div class="cate-desc">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <p class="price">${{ item.price }}</p>
              </div>
            </li>
            <li
              v-if="pageWidth > 768 && (index === 2 || index === 3)"
              :class="'pan-animate cate-img cate-img' + item.icon"
              data-animate-effect="fadeInScale"
            ></li>
          </template>
        </ul>
      </div>
    </section>
    <section class="pan-container pan-scroll-bg hero-bg-4 pan-scroll-special">
      <div class="pan-row">
        <h3 class="pan-title pan-animate" data-animate-effect="fadeInUp">
          Our Menu
        </h3>
      </div>
    </section>
    <section class="pan-container" style="background-color: #fff">
      <div class="pan-row">
        <el-row :gutter="30">
          <el-col v-for="item in 8" :key="item" :md="12">
            <div class="cate-avatar-wrap">
              <img
                class="cate-avatar"
                src="@package/assets/images/img_square_1.jpg"
              />
              <div class="cate-info">
                <span class="price">$22.99</span>
                <h3>Fried Potatoes with Garlic</h3>
                <p>Crab / Potatoes / Rice</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="pan-container pan-scroll-bg hero-bg-5">
      <div class="pan-row">
        <h3 class="pan-title pan-animate" data-animate-effect="fadeInUp">
          Reserve A Table
        </h3>
      </div>
    </section>
    <section class="pan-container">
      <div class="pan-row">
        <el-row :gutter="30">
          <el-col v-for="item in 3" :key="item" :sm="8">
            <div
              class="cate-desc2-wrap pan-animate"
              data-animate-effect="fadeInUp"
            >
              <img src="@package/assets/images/img_square_1.jpg" />
              <div class="cate-desc2">
                <p class="date">June 29, 2017</p>
                <h3>Laboriosam Quod Dignissimos</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  provident qui tempore natus quos quibusdam soluta at.
                </p>
                <p>
                  <span class="about-btn">Read More</span>
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="pan-container" style="background-color: #fff">
      <div class="pan-row">
        <el-row :gutter="30">
          <el-col :md="12">
            <div
              class="pan-about-us pan-animate"
              data-animate-effect="fadeInUp"
            >
              <h2>Let's Chat</h2>
              <div class="desc">
                Voluptatibus quaerat laboriosam fugit non Ut consequatur animi
                est molestiae enim a voluptate totam natus modi debitis dicta
                impedit voluptatum quod sapiente illo saepe explicabo quisquam
                perferendis labore et illum suscipit
              </div>
            </div>
          </el-col>
          <el-col :md="12">
            <el-form
              class="pan-animate"
              data-animate-effect="fadeInUp"
              label-position="top"
              :model="formData"
            >
              <el-form-item label="Your Name">
                <el-input v-model="formData.name" />
              </el-form-item>
              <el-form-item label="Your Email">
                <el-input v-model="formData.email" />
              </el-form-item>
              <el-form-item label="Your Message">
                <el-input
                  v-model="formData.message"
                  type="textarea"
                  :autosize="{ minRows: 8, maxRows: 12 }"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="warning" round>Send Message</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </section>
    <PanFooter></PanFooter>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref, onMounted, nextTick } from 'vue'
import { useEventListener } from '@lib/hooks/useEventListener'
import { useWindowSize } from '@lib/hooks/useWindowSize'
import PanHeader from '@/template1/components/header/index.vue'
import PanFooter from '@/template1/components/footer/index.vue'
import { judgeInViewPort } from '@lib/utils/util'

defineOptions({
  name: 'HomePage'
})

const formData = reactive({
  name: '',
  email: '',
  message: ''
})

const carouselIndex = ref(0)
// 美食列表
const cateList = [
  {
    icon: 1,
    title: 'Baked Potato Pizza',
    desc: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
    price: '20.99'
  },
  {
    icon: 2,
    title: 'Roast Beef (4 sticks)',
    desc: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
    price: '32.99'
  },
  {
    icon: 3,
    title: 'Salted Fried Chicken',
    desc: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
    price: '19.99'
  },
  {
    icon: 4,
    title: 'Tuna Roast Source',
    desc: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
    price: '25.99'
  },
  {
    icon: 5,
    title: 'Imported Salmon Steak',
    desc: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
    price: '20.99'
  },
  {
    icon: 1,
    title: 'Fried Potatoes with Garlic',
    desc: 'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
    price: '32.99'
  }
]
// 页面大小
const { width: pageWidth } = useWindowSize()

/**
 * @description 处理页面元素动画逻辑
 */
function handlePageAnimate(app: Element) {
  const list = app.querySelectorAll('.pan-animate')
  if (list.length === 0) {
    return
  }
  for (let i = 0; i < list.length; i++) {
    const wrap = list[i] as HTMLElement
    const isInView = judgeInViewPort(wrap)
    if (isInView) {
      const type = wrap.getAttribute('data-animate-effect')
      wrap.classList.add('animate__animated')
      wrap.classList.remove('pan-animate')
      switch (type) {
        case 'fadeInUp':
          wrap.classList.add('animate__fadeInUp')
          break
        case 'fadeInScale':
          wrap.classList.add('animate__fadeInScale')
          break
        default:
          wrap.classList.add('animate__fadeIn')
          break
      }
    }
  }
}
/**
 * @description 处理滚动背景
 */
function handleScroolBg(app: Element) {
  const list = app.querySelectorAll('.pan-scroll-bg, .pan-carousel')
  for (let i = 0; i < list.length; i++) {
    const wrap = list[i] as HTMLElement
    const res = wrap.getBoundingClientRect()
    let multiple = 2
    if (pageWidth.value < 1200) {
      multiple = 6
    }
    if (pageWidth.value < 768) {
      multiple = 8
    }
    wrap.style.backgroundPosition = `0px ${-res.top / multiple}px`
  }
}

onMounted(() => {
  nextTick(() => {
    const app = document.getElementById('app')
    if (app && app.scrollHeight > app.clientHeight) {
      useEventListener(app, 'scroll', () => {
        window.requestAnimationFrame(() => {
          handlePageAnimate(app)
          handleScroolBg(app)
        })
      })
      // 初始化页面元素动画
      handlePageAnimate(app)
    }
  })
})
// 走马灯切换事件
function handleCarouselChange(index: number) {
  carouselIndex.value = index
}
</script>
<style lang="scss" scoped>
.home-main {
  position: relative;
  z-index: 1;
  background-color: #e4e4e4;
}
.pan-carousel {
  width: 100%;
  height: 100%;
}
.hero-bg-1 {
  background: url(@package/assets/images/hero_bg_1.jpg) no-repeat;
  background-size: cover;
}
.hero-bg-2 {
  background: url(@package/assets/images/hero_bg_2.jpg) no-repeat;
  background-size: cover;
}
.hero-bg-3 {
  background: url(@package/assets/images/hero_bg_3.jpg) no-repeat;
  background-size: cover;
}
.hero-bg-4 {
  background: url(@package/assets/images/hero_bg_4.jpg) no-repeat;
  background-size: cover;
}
.hero-bg-5 {
  background: url(@package/assets/images/hero_bg_5.jpg) no-repeat;
  background-size: cover;
}
.pan-carousel-content {
  margin-top: 20px;
  padding: 0 15px;
  h1 {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    font-size: 80px;
    color: #ffa33e;
  }
  h3 {
    text-transform: uppercase;
    color: #fff;
    margin: 0;
    padding: 0;
    letter-spacing: 0.05em;
    font-size: 50px;
    position: relative;
    top: -32px;
    font-weight: 700;
    line-height: 40px;
  }
  p {
    margin-top: -16px;
    font-size: 20px;
    color: #ffffffb3;
  }
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
.pan-about-us {
  text-align: center;
  h2 {
    margin: 50px 0;
    padding: 0;
    line-height: 40px;
    letter-spacing: 0.05em;
    font-size: 50px;
    font-weight: 700;
  }
  .seperator {
    margin-bottom: 10px;
    color: #ccc;
    font-weight: 300;
  }
  .desc {
    margin-bottom: 30px;
    line-height: 24px;
    font-size: 15px;
    color: #8b8e94;
  }
}
.about-btn {
  display: inline-block;
  position: relative;
  padding-bottom: 5px;
  margin-bottom: 30px;
  line-height: 24px;
  font-size: 24px;
  color: #000;
  border-bottom: 2px solid #000;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ffa33e;
    position: absolute;
    bottom: -2px;
    z-index: 2;
    transition: width 0.5s;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
}
.pan-scroll-bg {
  height: 600px;
  box-sizing: border-box;
}
.pan-scroll-special {
  position: relative;
  margin-top: -140px;
  z-index: -1;
}
.pan-title {
  margin-top: 320px;
  padding: 0;
  text-align: center;
  line-height: 40px;
  letter-spacing: 0.05em;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
}
.cate-desc-wrap {
  display: flex;
  flex-wrap: wrap;
  margin-top: -13%;
  li {
    width: 25%;
  }
}
.cate-img {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.cate-img1 {
  background-image: url(@package/assets/images/img_square_1.jpg);
}
.cate-img2 {
  background-image: url(@package/assets/images/img_square_2.jpg);
}

.cate-img3 {
  background-image: url(@package/assets/images/img_square_3.jpg);
}
.cate-img4 {
  background-image: url(@package/assets/images/img_square_4.jpg);
}

.cate-img5 {
  background-image: url(@package/assets/images/img_square_5.jpg);
}

.cate-desc {
  position: relative;
  padding: 40px;
  text-align: center;
  line-height: 24px;
  background-color: #fff;
  font-size: 15px;
  color: #8b8e94;
  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    text-transform: uppercase;
    color: #000;
  }
  .price {
    margin-top: 30px;
    font-size: 20px;
    color: #ffa33e;
  }
}
.cate-avatar-wrap {
  display: flex;
  margin-bottom: 10px;
}
.cate-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.cate-info {
  flex: 1;
  position: relative;
  padding-left: 20px;
  line-height: 24px;
  font-size: 15px;
  color: #8b8e94;
  h3 {
    margin: 15px 0 0;
    text-transform: uppercase;
    font-size: 18px;
    color: #000;
  }
  p {
    margin-bottom: 30px;
  }
  .price {
    position: absolute;
    top: 15px;
    right: 0;
    font-size: 20px;
    color: #ffa33e;
  }
}
.cate-desc2-wrap {
  img {
    width: 100%;
  }
}
.cate-desc2 {
  padding: 20px;
  line-height: 24px;
  background-color: #fff;
  font-size: 15px;
  color: #8b8e94;

  h3 {
    margin: 0 0 10px;
    font-size: 18px;
    text-transform: uppercase;
    color: #000;
  }
  .about-btn {
    margin-top: 30px;
  }
}

@media screen and (max-width: 992px) {
  .cate-desc-wrap {
    li {
      width: 50%;
    }
  }
}
@media screen and (max-width: 768px) {
  .pan-carousel-content {
    h1 {
      font-size: 56px;
    }
    h3 {
      font-size: 36px;
    }
  }
  .pan-container {
    padding: 32px 0;
  }
  .pan-about-us {
    h2 {
      margin-top: 16px;
      font-size: 36px;
    }
  }
  .cate-desc-wrap {
    margin: 0 -15px;
    li {
      width: 100%;
    }
  }
  .cate-img {
    height: 200px;
  }
  .pan-scroll-bg {
    height: 300px;
  }
  .pan-title {
    margin-top: 110px;
    font-size: 36px;
  }
  .pan-scroll-special {
    margin-top: -32px;
  }
  .cate-info {
    .price {
      position: relative;
      top: 0;
    }
    h3 {
      margin-top: 0;
    }
  }
  .cate-desc2-wrap {
    margin-bottom: 30px;
  }
}
</style>
