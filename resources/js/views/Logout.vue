<template>
    <div class="container">
        <p class="text-center">
            <span v-if=loading>{{$t('logout.message')}}</span>
        </p>
    </div>
</template>
<script>
    import api from '../api/routes';
    import {common} from '../common.js'
    //const api = () => import('../api/auth');
    export default {
        mixins: [common],
        data() {
            return {
                token: null,
                loading: false,
            };
        },
        methods: {
            sendLogoutRequest(){
                if(this.token!=null){
                    this.loading = true
                    api.logout().then((response) => {
                        
                    }).catch(error => {
                        console.log(error)
                    }).then(_ => {
                        this.eraseToken()
                        this.loading = false
                    })
                }else
                    this.$router.push({name:"auth.login"});
            },
            eraseToken(){
                console.log(this.tokenVariable)
                localStorage.removeItem(this.tokenVariable)
                api.quit()
                this.$router.push({name:"auth.login"});
            }
        },
        created() {
            this.token = localStorage.getItem(this.tokenVariable)
            this.sendLogoutRequest()
        }
    }
</script>