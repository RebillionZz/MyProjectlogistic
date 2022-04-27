export default {
name: 'sidebarC',
data() {
return {
// D_search:true,
// D_data:false,
TEST: [{ id: 1, text: 'Comple' }],
dataC: 'Show',
drawer: null,
userAPI: 'bebe',
CoinAPI: '220',
listG1: [
{ id: 1, text: 'ໜ້າຫຼັກ', icon: 'ICON', imgS: '../assets/Admin/sidebar/home.svg', route: '/sidebarC' },
{ id: 2, text: 'ຝາກເຄື່ອງເອງ', icon: 'ICON', imgS: '../assets/Admin/sidebar/home.svg', route: '/sendDC' },
],
listG2: [
{ id: 3, text: 'ຄິດໄລ່ຄ່າຂົນສົ່ງ', icon: 'ICON', imgG2: '../assets/Admin/sidebar/COD.svg', route: '/priceDC' },
{ id: 4, text: 'COD', icon: 'ICON', imgG2: '../assets/Admin/sidebar/COD.svg', route: '/CODDC' },
// {id:3,text:'ຂໍ້ມູນສາຂາ',icon:'ICON',imgG2:'../assets/Admin/sidebar/COD.svg',route:'/DataDC'},
],
listG3: [
{ id: 5, text: 'ຂໍ້ມູນສາຂາ', icon: 'ICON', imgG2: '../assets/Admin/sidebar/COD.svg', route: '/DataDC' },
],
listG322: [
{ id: 6, text: 'ພັດສະດຸທີ່ຂ້ອຍສົ່ງເຖິງຂ້ອຍ', icon: 'ICON', imgG2: '../assets/Admin/sidebar/COD.svg', route: '/myItemGetC' }
],
listG321: [
{
id: 7,
text: 'ພັດສະດຸທີ່ຂ້ອຍສົ່ງອອກ', icon: 'ICON', imgG2: '../assets/Admin/sidebar/COD.svg', route: '/myItempushC'
},
],
};
},
methods: {
// hide_DataC(){
//     data_CSearch =  !data_CSearch;
//     data_C = !data_C;
// }
hildeDATAC: function (newItem) {
this.dataC = newItem;

}
},
computed: {}
};
