<template>
  <PageContainer class="footer-main">
    <el-row :gutter="30">
      <el-col :md="12">
        <h3>Locations</h3>
        <el-row :gutter="30">
          <el-col :md="12">
            <p>
              198 West 21th Street, Suite 721 <br />
              New York NY 10016
            </p>
          </el-col>
          <el-col :md="12">
            <p>
              198 West 21th Street, Suite 721 <br />
              New York NY 10016
            </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :md="12">
        <h3>Open Hours</h3>
        <el-row :gutter="30">
          <el-col :md="8">
            <p>
              Monday - Thursday <br />
              5:30pm - 10:00pm
            </p>
          </el-col>
          <el-col :md="8">
            <p>
              Friday - Sunday <br />
              5:30pm - 10:00pm
            </p>
          </el-col>
          <el-col :md="8">
            <p>
              Available for Catering <br />
              Email or Call Us
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </PageContainer>
  <PageContainer class="footer-other">
    <div class="flex-center-space-between">
      <div>Copyright © 2023.Company name All rights reserved.</div>
      <div class="flex-v-center link">
        <a href="https://weixin.qq.com/" target="_blank"
          ><SvgIcon name="wx"></SvgIcon
        ></a>
        <a href="https://www.1688.com/" target="_blank"
          ><SvgIcon name="ali"></SvgIcon
        ></a>
        <a href="https://github.com/willianLu/web-template" target="_blank"
          ><SvgIcon name="github"></SvgIcon
        ></a>
      </div>
    </div>
  </PageContainer>
</template>
<script lang="ts" setup>
import SvgIcon from '@lib/components/svg-icon.vue'
import PageContainer from '@/one-pice/components/container/index.vue'
</script>
<style lang="scss" scoped>
.footer-main {
  padding: 105px 0;
  background-color: #000;
  color: rgba(255, 255, 255, 0.7);
  h3 {
    margin: 20px 0 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-size: 18px;
    color: #fff;
  }
  p {
    margin-bottom: 30px;
    line-height: 24px;
    font-size: 15px;
  }
}
.footer-other {
  padding: 20px 0;
  line-height: 24px;
  background: #262626;
  font-size: 14px;
  color: #8b8e94;
  .link {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.2);
    a {
      padding: 10px;
      &:hover {
        color: #fff;
      }
    }
  }
}
.page-container {
  padding: 0 15px;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (max-width: 768px) {
  .footer-main {
    padding: 30px 0;
  }
  .footer-other {
    .page-container.flex-center-space-between {
      display: block;
    }
  }
}
</style>
