<template>
    <div class="app-container">
        <header class="searchbar">
            <el-form size="small" :model="params" class="demo-form-inline" label-width="90px">
                <el-row :gutter="20">
                	<% for(var i = 0; i < form.length; i++) { %>
                    <% if (form[i].type === "time") { %>
                    <% const [_, timeField] = form[i].field.split('|')[0].split('_'); %>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="<%= form[i].name%>：">
                            <el-date-picker
                               v-model="<%= timeField %>"
                               format="yyyy-MM-dd"
                               value-format="yyyy-MM-dd"
                               type="daterange"
                               unlink-panels
                               :default-time="['00:00:00', '23:59:59']"
                               range-separator="至"
                               start-placeholder="开始日期"
                               end-placeholder="结束日期"
                               @change="<%= timeField %>Change">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <% } else if (form[i].type === 'input') { %>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="<%= form[i].name%>：">
                            <el-input v-model="params.<%= form[i].field%>" placeholder="请输入<%= form[i].name%>"></el-input>
                        </el-form-item>
                    </el-col>
                    <% } else if (form[i].type === 'select') { %>
                    <el-col :xs="24" :sm="8">
                        <el-form-item label="<%= form[i].name%>：">
                            <el-select v-model="<%= form[i].field%>" placeholder="请选择" class='u-mt-3'>
                               <el-option
                                 v-for="item in [{value: '选项1', label: '黄金糕'}, {value: '选项2', label: '双皮奶'}]"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                               </el-option>
                             </el-select>
                        </el-form-item>
                    </el-col>
                    <% }} %>
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
            <% for(var i = 0; i < table.length; i++) { %>
            <el-table-column align="center" label="<%= table[i].name%>" prop="<%= table[i].column%>"></el-table-column>
            <% } %>
            <el-table-column align="center" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button size="small" class="ch-button-list-border-r" type="text" @click="$router.push(`/<%= module %>/${scope.row.<%= table[0].column %>}`)">查看</el-button>
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
                // 当前页码
                page: 1,
                // 分页数
                size: 20,
                <% for(var i = 0; i < form.length; i++){ %>
                <% if (form[i].type === 'time') { %>
                <% const [starttime, endtime] = form[i].field.split('|') %>
                <% const [_, timeName] = starttime.split('_') %>
                // <%= form[i].name %>
                <%= timeName %>: '',
                // <%= form[i].name %>-开始时间
                <%= starttime %>: '',
                // <%= form[i].name %>-结束时间
                <%= endtime %>: '',
                <% } else { %>// <%= form[i].name%>
                <%= form[i].field%>: '',
                <% }} %>
            },
        }
    },
    methods: {
        <% for(var i = 0; i < form.length; i++){ %>
        <% if (form[i].type === 'time') { %>
        <% const [starttime, endtime] = form[i].field.split('|') %>
        <% const [_, timeName] = starttime.split('_') %>
        <%= timeName %>Change(event) {
            if (event === null) {
                this.params.<%= starttime %> = ''
                this.params.<%= endtime %> = ''
                return
            }
            this.params.<%= starttime %> = event[0]
            this.params.<%= endtime %> = event[1]
        },
        <% }} %>
        getData(params) {
            this.listLoading = true
            let param = { ...params }
            param.page -= 1

            this.$api.query(param).then(res => {
                this.list = res.rows
                this.total = res.total
            }).finally(res => {
                this.listLoading = false
            })
        },
        resetSearchParams() {
            let resetParams = {
            	<% for(var i = 0; i < form.length; i++){ %>
                <% if (form[i].type === 'time') { %>
                <% const [starttime, endtime] = form[i].field.split('|') %>
                <% const [_, timeName] = starttime.split('_') %>
                // <%= form[i].name %>
                <%= timeName %>: '',
                // <%= form[i].name %>-开始时间
                <%= starttime %>: '',
                // <%= form[i].name %>-结束时间
                <%= endtime %>: '',
                <% } else { %>// <%= form[i].name%>
                <%= form[i].field%>: '',
                <% }} %>
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