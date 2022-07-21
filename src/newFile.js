export default (await import('vue')).default.extend({
name: "App",
components: {
Login,
},
data() {
return {
login: false,
};
},
});
