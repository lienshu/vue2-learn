const state = {
  date:''
 }
 const mutations = {
   updateDate(state,provide){
   state.date = provide
   }
  
 }
 const actions = {
   
 }
 
 export default {
   namespaced: true,
   state,
   mutations,
   actions
 }