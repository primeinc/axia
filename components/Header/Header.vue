<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="openDrawer"
    temporary
    class="mobile-nav"
  >
    <mobile-menu :open="openDrawer" />
  </v-navigation-drawer>
  <v-app-bar
    id="header"
    v-scroll="handleScroll"
    :class="{ fixed: fixed, 'open-drawer': openDrawer }"
    class="header"
    app
  >
    <v-container :class="{ 'fixed-width': mdUp }">
      <div class="header-content">
        <nav :class="{ invert: invert }" class="nav-logo">
          <v-btn
            v-if="isMobile"
            :class="{ 'is-active': openDrawer }"
            class="hamburger hamburger--spin mobile-menu"
            text
            icon
            @click.stop="handleToggleOpen"
          >
            <span class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
          <div class="logo">
            <nuxt-link v-if="invert" :to="link.agency.home">
              <img :src="logo" alt="logo" />
            </nuxt-link>
            <span v-if="!invert && loaded">
              <a
                v-smooth-scroll="{ offset: 100 }"
                href="#home"
                class="anchor-link scrollactive-item"
              >
                <img :src="logo" alt="logo" />
              </a>
            </span>
          </div>
        </nav>
        <nav :class="{ invert: invert }" class="nav-menu">
          <div v-if="isDesktop">
            <ul class="scrollactive-nav">
              <li v-for="(item, index) in menuList" :key="index">
                <v-btn
                  v-if="!invert"
                  v-smooth-scroll="{ offset: -100 }"
                  :href="item.url"
                  :class="{ active: activeMenu === item.name }"
                  class="menu-link"
                  @click="scrollToMyEl(item.name)"
                  v-text="$t('agencyLanding.header_' + item.name)"
                />
                <v-btn
                  v-if="invert"
                  :href="'/' + item.url"
                  v-text="$t('agencyLanding.header_' + item.name)"
                />
              </li>
              <li>
                <v-btn
                  :href="link.agency.contact"
                  v-text="$t('agencyLanding.header_contact')"
                />
              </li>
            </ul>
          </div>
          <setting-menu :invert="invert" />
        </nav>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>

<script>
import { inject } from "vue";
import logo from "@/assets/images/agency-logo.svg";
import link from "@/assets/text/link";
import brand from "@/assets/text/brand";
import { useRouter } from "#app";
import navMenu from "./menu";
import Settings from "./Settings";
import MobileMenu from "./MobileMenu";

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  components: {
    "setting-menu": Settings,
    MobileMenu,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const smoothScroll = inject("smoothScroll");
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      logo,
      link,
      loaded: false,
      brand,
      sections: {},
      activeMenu: "",
      fixed: false,
      openDrawer: null,
      menuList: [
        createData(navMenu[0], "#" + navMenu[0]),
        createData(navMenu[1], "#" + navMenu[1]),
        createData(navMenu[2], "#" + navMenu[2], -40),
      ],
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    mdUp() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace("#", "");
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll(".scroll-nav-content > *");
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openDrawer = !this.openDrawer;
    },
  },
};
</script>
