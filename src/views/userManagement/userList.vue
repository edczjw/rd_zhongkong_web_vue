<template>
  <div class="page-human">
    <el-card>
      <el-form :model="searchform" ref="searchform" label-width="130px">
        <el-row type="flex" class="human-form">
          <el-col :span="8">
            <el-form-item label="贷款编号" prop="loanId">
              <el-input size="mini" v-model.trim="searchform.loanId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="姓名" prop="name">
              <el-input size="mini" v-model.trim="searchform.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="身份证号码" prop="pid">
              <el-input size="mini" v-model.trim="searchform.pid"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="操作人" prop="operate">
              <el-input size="mini" v-model.trim="searchform.operate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="订单状态" prop="billingStatus">
              <el-select size="mini" v-model="searchform.billingStatus" placeholder="请选择订单状态">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="放款日期" prop="beginDate">
              <el-date-picker
                size="mini"
                v-model="searchform.beginDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择开始日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="至" prop="endDate">
              <el-date-picker
                size="mini"
                v-model="searchform.endDate"
                value-format="yyyy-MM-dd"
                type="date"
                placeholder="请选择结束日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button size="mini" type="primary" @click="submitForm()">搜索</el-button>
              <el-button size="mini" @click="resetForm('searchform')">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card class="human-table">
      <el-table
        :data="tableData"
        border
        size="mini"
        stripe
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%; height:100%;"
      >
        <el-table-column type="index" label="序号" align="center" width="50"></el-table-column>
        <el-table-column prop="loanId" label="贷款编号" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="godetail(scope.row.usrNo)"
            >{{scope.row.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="pid" label="身份证号码" align="center"></el-table-column>
        <el-table-column prop="mobile" label="手机号码" align="center"></el-table-column>
        <el-table-column prop="totalTerm" label="还款总期数" align="center"></el-table-column>
        <el-table-column prop="mblNo" label="授信额度" align="center"></el-table-column>
        <el-table-column prop="billingStatus" label="订单状态" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.billingStatus == 0">拒绝</span>
            <span v-if="scope.row.billingStatus == 1">正常</span>
            <span v-if="scope.row.billingStatus == 2">逾期</span>
            <span v-if="scope.row.billingStatus == 3">结清</span>
            <span v-if="scope.row.billingStatus == 4">撤销</span>
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作人" align="center"></el-table-column>
        <el-table-column prop="issueDate" label="放款时间" align="center"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="human-pagination">
        <el-pagination
          background
          style="text-align:center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="this.searchform.pageIndex"
          :page-sizes="[20,50,100]"
          :page-size="this.searchform.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="count"
        >
          <!--这是显示总共有多少数据-->
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      options: [
        {
          value: 0,
          label: "拒绝"
        },
        {
          value: 1,
          label: "正常"
        },

        {
          value: 2,
          label: "逾期"
        },
        {
          value: 3,
          label: "结清"
        },
        {
          value: 4,
          label: "撤销"
        }
      ],
      searchform: {
        loanId: "",
        name: "",
        pid: "",
        operate: "",
        beginDate: "", //申请开始时间
        endDate: "", //至
        billingStatus: "",
        pageIndex: 1, //初始页
        pageSize: 50 //显示当前行的条数
      },
      tableData: [
        {
          loanId:'',
          name:'xxx',
          pid:'',
          mobile:'',
          totalTerm:'',
          mblNo:'',
          issueDate:'',
          billingStatus:null,
          operate:'',
        }
      ]
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    // var data = {};
    // this.load(data);
  },

  methods: {
    submitForm() {
      this.load(this.searchform);
    },
    // 重置功能
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.getlist();
    },
    handleSizeChange(psize) {
      // 改变每页显示的条数
      this.searchform.pageSize = psize;
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.searchform.pageIndex = 1;
      this.load(this.searchform);
    },

    // 初始页currentPage
    handleCurrentChange(pindex) {
      this.searchform.pageIndex = pindex;
      this.load(this.searchform);
    },
    //表单操作
    handleClick() {},
    godetail(usrNo) {
      this.$router.push({
        path: "/details/userDetail",
        query: {
          usrNo: usrNo
        }
      });
    },
    //初始化数据
    load(data) {
      this.$axios({
        method: "post",
        url: this.$store.state.domain + "",
        data: data
      }).then(
        response => {
          var res = response.data;
          if (res.code == 0) {
            this.tableData = res.detail.result.pageList;
            this.count = res.detail.result.count;
            this.searchform.pageIndex = res.detail.result.pageIndex;
            this.searchform.pageSize = res.detail.result.pageSize;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        },
        error => {}
      );
    }
  },
  watch: {}
};
</script>
<style lang='less' scoped>
/deep/ .el-card {
  // background: rgba(255, 255, 255, 0.1);
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
    // background: rgb(248, 246, 246);
    color: rgb(118, 104, 104);
    font-family: "苹方";
  }
  /deep/ .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #fff;
  }
  .el-form-item__content {
    margin-left: 130px !important;
  }
}
.page-human {
  .human-table {
    margin-top: 40px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
</style>