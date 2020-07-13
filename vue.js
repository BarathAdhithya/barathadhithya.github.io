var vm = new Vue({
  el: "#vue-app",
  data() {
    return {
      title: "insearch",
      subtitle: "where Journey begins",
      isActive: true,
      color: "pink",
      booknow: false,
      overflowx: false,
      overflowy: false,
      styleObject: {
        color: "white",
      },
      ischecked: false,
      footer: ["Company", "Contact us", "Careers", "Privacy policy", "Terms"],
    };
  },
  methods: {
    book: function () {
      this.booknow = !this.booknow;
    },
    triggercheckboxnav: function (navigateTo) {
      this.ischecked = !this.ischecked;
      this.$refs.checkboxnav.checked = this.ischecked;
      if (this.ischecked === false) {
        if (navigateTo === "About") {
          setTimeout(() => {
            this.$refs.sectionAbout.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 1);
        } else if (navigateTo === "Features") {
          setTimeout(() => {
            this.$refs.sectionFeatures.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 1);
        } else if (navigateTo === "Tours") {
          setTimeout(() => {
            this.$refs.sectionTours.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 1);
        } else if (navigateTo === "Stories") {
          setTimeout(() => {
            this.$refs.sectionStories.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 1);
        }
      }
    },
  },
  created() {
    // this.bg();
  },
  computed: {
    classObject: function () {
      return {
        "heading-secondary": this.isActive,
      };
    },
  },
});
