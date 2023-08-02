<template>
  <div id="home-container">
    <div class="main-wrap">
      <main-header />
      <div class="container-wrap scroll-nav-content">
        <square-parallax />
        <section id="home">
          <video-banner />
        </section>
        <section
          id="about"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <about />
        </section>
        <dots-parallax />
        <section
          id="services"
          class="space-top"
        >
          <services />
        </section>
        <section
          id="our-expertise"
          :class="[isTablet ? 'space-top-short' : 'space-top']"
        >
          <expertise />
        </section>
        <section
          id="testimonials"
          :class="[isMobile ? 'space-top-short' : 'space-top']"
        >
          <testimonials />
        </section>
      </div>
      <div class="container-wrap scroll-nav-content">
        <!-- <section id="case-studies"> -->
          <!-- <case-studies /> -->
        <!-- </section> -->
        <section id="call-to-action" class="">
          <call-action />
        </section>
        <section id="address" class="space-top-short">
          <map-address />
        </section>
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <main-footer />
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  @include palette-text-primary;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
.space-top {
  margin-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    margin-top: section-margin(6px);
  }
  @include breakpoints-down(xs) {
    margin-top: section-margin($spacing1 * 0.5);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  overflow: hidden;
  @include breakpoints-up(md) {
    padding-top: $spacing6;
  }
  section {
    position: relative;
  }
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header';
import SquareParallax from '@/components/Parallax/Square';
import VideoBanner from '@/components/VideoBanner';
import About from '@/components/About';
import Services from '@/components/Services';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import CallAction from '@/components/CallAction';
import MapAddress from '@/components/MapAddress';
import Footer from '@/components/Footer';
import Hidden from '@/components/Hidden';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import DotsParallax from '@/components/Parallax/Dots';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    SquareParallax,
    DotsParallax,
    VideoBanner,
    About,
    Services,
    Expertise,
    Testimonials,
    CaseStudies,
    CallAction,
    MapAddress,
    PageNav,
    Hidden,
    Notification,
    'main-footer': Footer,
  }, 
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
  },
  head() {
    return {
      title: brand.agency.name + ' - Home Page',
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
});
</script>
