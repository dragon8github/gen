<template>
    <div class="app-container">
        <header class="searchbar">
            <el-form size="small" :model="params" class="demo-form-inline" label-width="90px">
                <el-row :gutter="20">
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="登录账号：">
                            <el-input v-model="params.like_account" placeholder="登录账号"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="名称：">
                            <el-input v-model="params.like_fullname" placeholder="名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="是否过期：">
                            <el-select style="width:100%" v-model="params.eq_isexpired" placeholder="是否过期">
                                <el-option label="是" :value="1"></el-option>
                                <el-option label="否" :value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="是否锁定：">
                            <el-select style="width:100%" v-model="params.eq_islock" placeholder="是否锁定">
                                <el-option label="是" :value="1"></el-option>
                                <el-option label="否" :value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="机构：">
                            <el-input v-model="params.like_orgname" placeholder="机构"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="状态：">
                            <el-select style="width:100%" v-model="params.eq_status" placeholder="状态">
                                <el-option label="有效" :value="1"></el-option>
                                <el-option label="无效" :value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item>
                            <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
                            <el-button type="primary" icon="el-icon-refresh" @click="resetSearchParams">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </header>
        <el-table v-loading="listLoading" :data="list" empty-text="没有数据" element-loading-text="Loading" fit highlight-current-row>
            <el-table-column align="center" label="ID" width="150" prop="userid"></el-table-column>
            <el-table-column align="center" label="账号" prop="account"></el-table-column>
            <el-table-column align="center" label="名称" prop="fullname"></el-table-column>
            <el-table-column align="center" label="是否过期" prop="isexpiredName"></el-table-column>
            <el-table-column align="center" label="机构" prop="orgname"></el-table-column>
            <el-table-column align="center" label="是否锁定" prop="islockName"></el-table-column>
            <el-table-column align="center" label="状态" prop="statusName"></el-table-column>
            <el-table-column align="center" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button size="small" class="ch-button-list-border-r" type="text" @click="$router.push(`/system/user-info/${scope.row.userid}`)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
        <element-pagination :pageSize="params.size" :currentPage="params.page" :total="total" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange"></element-pagination>
    </div>
</template>

<script>
import elementPagination from '@/components/ElementPagination'
export default {
    data() {
        return {
            total: 0,
            list: [],
            listLoading: false,
            params: {
                page: 1,
                size: 20,
                like_fullname: '',
                like_orgname: '',
                eq_isexpired: '',
                eq_islock: '',
                eq_status: ''
            },
        }
    },
    methods: {
        getData(params) {
            this.listLoading = true
            let param = { ...params }
            param.page -= 1

            this.$api.getData(param).then(res => {
                this.list = res.rows
                this.total = res.total
            }).finally(res => {
                this.listLoading = false
            })
        },
        resetSearchParams() {
            let resetParams = {
                like_fullname: '',
                like_orgname: '',
                eq_isexpired: '',
                eq_islock: '',
                eq_status: '',
                like_account: ''
            }
            this.params = { ...this.params, ...resetParams }
            this.getData(this.params)
        },
        handleSizeChange(size) {
            this.params.size = size

            this.getData(this.params)
        },
        handleCurrentChange(page) {
            this.params.page = page
            this.getData(this.params)
        },
        onSearch() {
            this.params.page = 1
            this.getData(this.params)
        },
    },
    components: {
        elementPagination,
    },
    beforeMount() {
        this.getData(this.params)
    },
}
</script>