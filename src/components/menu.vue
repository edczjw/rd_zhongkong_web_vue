<template>
  <!-- template必须包裹一个div，否则会报错 -->
  <div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
    <el-row>
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="rgb(28, 150, 207)"
          text-color="#fff"
          active-text-color="#FFC192"
          unique-opened
          :collapse="this.$store.state.isLeftHiden"
        >
          <el-submenu index="1">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yonghuguanli" />
              </svg>
              <span>账户管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/userManagement/userList">
                <el-menu-item index="1-1">账户列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ziyuan" />
              </svg>
              <span>申请管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/applyManagement/applyList">
                <el-menu-item index="2-1">申请列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dingdanguanli" />
              </svg>
              <span>贷后管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/loanManagement/loanList">
                <el-menu-item index="3-1">贷后列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped  lang="less">
.el-menu {
  border-color: rgb(211, 212, 212);
  background: rgb(28, 150, 207);
  border-right: none;
  /deep/ .el-submenu__title i {
    color: #fff;
  }
  /deep/ .el-submenu .el-menu-item {
    min-width: 198px;
  }
  /deep/ .el-submenu__title:hover {
    background: rgb(192, 128, 128) !important;
  }
  /deep/ .el-menu-item:hover {
    background: rgb(194, 121, 121) !important;
  }
}

/* 菜单 */
.side {
  position: fixed;
  font-family: "苹方";

  width: 199px;
  height: 100%;
  transition: all 0.5s;
  background: rgb(28, 150, 207);
}

.side-menu {
  width: 64px;
  transition: all 0.5s;
  background: rgb(28, 150, 207);
}

.el-menu-item-group {
  text-align: center;
}
svg {
  width: 32px;
  height: 32px;
  padding: 1px 6px;
}
</style>