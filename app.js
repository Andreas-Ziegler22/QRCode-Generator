const app = Vue.createApp({
  data: {
    title: "QRCode Generator",
    text: "https://www.google.com.br",
    qrcode: new QRious({ size: 300 }),
  },
  computed: {
    newQRCode() {
      this.qrcode.value = this.text;
      return this.qrcode.toDataURL();
    },
  },
  methods: {
    onData(event) {
      this.text = event.target.value;
    },
  },
});
app.mount("#app");
