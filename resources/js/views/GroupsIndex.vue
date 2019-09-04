<template>
    <div class="container">
        <h2>
            {{$t('Groups')}}
            <router-link class="btn btn-outline-success float-right" :to="{ name: 'groups.create' }">{{$t('Add New')}}</router-link>
        </h2>
        <hr>
        <div class="row">
            <div class="col">
                <form class="form-inline">
                    <label class="sr-only" for="nameInput">{{$t('Name')}}</label>
                    <input class="form-control mb-2 mr-sm-2" id="nameInput" :placeholder="$t('Name')" 
                     v-model="queries.name" @change="filterChanged=true" 
                     @keyup="typeahead($event.target.value, 'group')" list="names">
                     <datalist id="names">
                      <option v-for="item in types" :value="display('name',item)"></option>
                    </datalist>
                     <label class="sr-only" for="inlineFormInputName1">{{$t('ZKS')}}</label>
                    <select v-model="queries.isZKS" class="form-control mb-2 mr-sm-2" @change="filterChanged=true">
                        <option value selected disabled>{{$t('isZKS')}}</option>
                        <option value >{{$t('All')}}</option>
                        <option value="true">{{$t('Yes')}}</option>
                        <option value="false">{{$t('No')}}</option>
                    </select>
                    <button type="submit" class="btn btn-outline-primary mb-2 mr-sm-2" @click.prevent="filter()"
                        :disabled="filterChanged===false">{{$t('Filter')}}</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <nav aria-label="Page navigation example mr-3 float-right">
              <ul class="pagination justify-content-end">
                <li class="page-item">
                    <input class="page-link page-number" type="number" :value="currentPage()" v-if="meta!==null" 
                        @change="goToCustomPage($event.target.value)" min="1" max="lasPage()"/>
                </li>
                <li class="page-item" :class="{disabled: !prevPage()}">
                  <a class="page-link" href="#" @click.prevent="goToPrev"><i class="fa fa-chevron-left"></i></a>
                </li>
                <li class="page-item" :class="{disabled: !nextPage()}">
                  <a class="page-link" href="#" @click.prevent="goToNext"><i class="fa fa-chevron-right"></i></a>
                </li>
              </ul>
            </nav>
            </div>
        </div>
        <div v-if="error" class="error">
            <p>{{ error }}</p>
        </div>
        <div class="table-responsive">
            <table class="table table-sm table-bordered table-striped table-hover" >
                <thead class=""> 
                    <th scope="col">#
                    </th>
                    <th scope="col" :class="{'font-italic': (queries.sort==='name_kk'||queries.sort==='name_ru')}"
                        @click="sortBy('name')">
                        {{$t('Name')}}
                        <i :class="getOrder('name')"></i>
                    </th>
                    <th scope="col" class="d-none d-sm-table-cell">{{$t('isZKS')}}</th>
                    <th scope="col">
                        <span class="float-right">
                            {{currentPage()}}/{{lastPage()}}
                        </span>
                    </th>
                </thead>
                <tbody v-if="groups!==null && groups.length>0">
                    <tr v-for="(group,index) in groups">
                        <th scope="row">{{ (currentPage()-1)*perPage()+index+1 }}</th>
                        <td>{{ display('name',group) }}</td>
                        <td class="d-none d-sm-table-cell"><i v-if="group.isZKS" class="fas fa-check"></i></td>
                        <td>
                            <div class="float-right">
                                <router-link class="btn btn-outline-primary btn-sm" :to="getLink('edit',group)">
                                    <i class="fa fa-edit"></i>
                                </router-link>
                                <button :disabled="saving" @click.prevent="onDelete(group.id)" class="btn btn-outline-danger btn-sm">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else-if="(groups!==null && groups.length===0)">
                    <tr>
                        <td class="font-italic" colspan=8>
                            {{$t('Search returned an empty result')}}
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                       <td colspan=8>
                           {{$t('Loading')}} ...
                       </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import api from '../api/groups';
import {common} from '../common.js'
const getData = (params, callback) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem("enstru_token");
    axios
        .get('/api/groups', {params} )
        .then(response => {
            callback(null, response.data);
        }).catch(error => {
            callback(error, error.response);
        });
};

export default {
    mixins: [common],
    data() {
        return {
            saving: false,
            pageCache: 1,
            perPageCache: 15,
            groups:null,
            types: null,
            meta: null,
            links: {
                first: null,
                last: null,
                next: null,
                prev: null,
            },
            queries:{
                sort: null,
                order: null,
                name: null,
                isZKS: '',
            },
            error: null,
            filterChanged: false,
            filterApplied: false,
        };
    },
    mounted(){
        this.fetchData()
    },
    watch:{
        '$route': 'fetchData'
    },
    methods: {
        fetchData(){
            this.filterApplied = false
            this.groups = this.links = this.meta = null
            this.setParams()
            getData(
                this.$route.query,
                (err, data) => {
                    this.setData(err, data);
                //next();
            });
        },
        setParams(){
            for(var key in this.$route.query) 
                    if(['sort','order','isZKS','name'].includes(key))
                        this.queries[key]=this.$route.query[key];
                if(
                     this.queries.isZKS !== ''  
                    || this.queries.name !== ''
                    || this.queries.group_name!==null 
                ){
                    this.filterApplied = true
                }
        },
        fillParams(page){
            var params = {} 
            if(page>1)
                params.page = page
            if(this.queries.group_name || this.queries.name)
                params.lang = this.$i18n.locale
            const keys = Object.keys(this.queries)
            for(const key of keys){
                if(this.queries[key]!=null && this.queries[key]!='' &&['sort','order','group_name','isZKS','name'].includes(key))
                    params[key] = this.queries[key]
            }
            return params;
        },
        goToNext() {
            this.$router.push({
                query: this.fillParams(this.nextPage()),
            });
        },
        goToPrev() {
            this.$router.push({
                name: 'groups.index',
                query: this.fillParams(this.prevPage()),
            });
        },
        setData(err, data) {
            if (err) {
                this.error = err.toString();
                if(this.error.includes('401'))
                    this.redirectToLogin()
            } else {
                this.groups = data.data;
                this.groups.forEach((group, index) => {
                    group.selected = false
                })
                this.links = data.links;
                this.meta = data.meta;
            }
        },
        goToCustomPage(page){
            if(page>this.meta.last_page)
                page = this.meta.last_page
            this.pageCache = this.meta.current_page;
            this.perPageCache = this.meta.per_page;
            this.$router.push({
                name: 'groups.index',
                query: this.fillParams(page)
            });
        },
        nextPage() {
            if (! this.meta || this.meta.current_page >= this.meta.last_page) {
                return;
            }
            return this.meta.current_page + 1;
        },
        prevPage() {
            if (! this.meta || this.meta.current_page <= 1) {
                return;
            }
            return this.meta.current_page - 1;
        },
        currentPage(){
            return this.meta!==null ? this.meta.current_page : this.pageCache;
        },
        lastPage(){
            return this.meta!==null ? this.meta.last_page : this.pageCache;
        },
        perPage(){
            return this.meta!==null ? this.meta.per_page : this.perPageCache;
        },
        sortBy(target){
            if(this.queries.sort!=null){
                if(this.queries.sort.startsWith(target)===false){
                    this.queries.order = 'asc';
                }else
                    this.queries.order = this.queries.order === 'asc' ? 'desc' : 'asc';
            }
            if(target==='groups'){
                this.queries.sort = target+'.name_'+this.$i18n.locale
            }else if(target==='name'){
                this.queries.sort = target+'_'+this.$i18n.locale
            }else
                this.queries.sort = 'id';
            this.goToCustomPage(1);
        },
        getOrder(target){
            if(this.queries.sort!=null)
                if(this.queries.sort.startsWith(target)){
                    return (this.queries.order==='desc') ? 'fas fa-caret-up' : 'fas fa-caret-down'
                }else
                    return ''
        },
        getLink(which, target){
            if(which==='edit')
                return { 
                    name: 'groups.edit', 
                    params: {
                        'id': target.id 
                    }
                }

        },
        typeahead(input, type, except = null, parent = null){
            if(input.length >1){
                var params = {} 
                  params.input = input
                  params.lang = this.$i18n.locale
                  params.except = except
                  params.parent = parent
                api.search(this.getType(type), params).then((response) => {
                    if(type==='group')
                        this['types'] = response.data.data
                    else
                        this[type+'s'] = response.data.data
                }).catch(e => {
                    if(e.response.status==401)
                        this.redirectToLogin()
                });
            }
        },
        getType(type){
            if(type.startsWith('migrate_'))
                return type.split('_')[1]
            else
                return type
        },
        filter(){
            this.goToCustomPage(1)
        },
    }
}
</script>