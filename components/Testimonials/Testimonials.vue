<template>
  <div class="root">
    <square-parallax :loaded="loaded" />
    <div v-if="loaded" class="carousel">
      <splide
        ref="splide"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(item, index) in testiContent"
          :key="index"
          class="item"
        >
          <testimonial-card
            :avatar="item.avatar"
            :title="item.title"
            :name="item.name"
            :text="item.text"
            :star="item.rating"
          />
        </splide-slide>
        <splide-slide class="item">
          <div class="item-props-last" />
        </splide-slide>
      </splide>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('agencyLanding.testimonial_title')"
            icon="format-quote-close"
          />
        </div>
      </v-container>
    </div>
    <!-- <company-logo /> -->
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import TestimonialCard from '../Cards/Testimonial';
import TitleIcon from '../Title/WithIcon';
import CompanyLogo from '../CompanyLogo';
import SquareParallax from '../Parallax/SingleSquare';

export default {
  components: {
    Splide,
    SplideSlide,
    TestimonialCard,
    TitleIcon,
    CompanyLogo,
    SquareParallax,
  },
  data() {
    return {
      loaded: false,
      testiContent:[
        {
          "text": "Axia Title has been a game-changer for us. Their speedy and accurate title commitments and closing packages have been remarkable. We can always count on them for top-notch service!",
          "avatar": imgAPI.avatar[9],
          "name": "Sarah Thompson",
          "title": "Real Estate Agent",
          "rating": 5
        },
        {
          "text": "For several years, we've relied on Axia Title's exceptional title services. Their team goes above and beyond, ensuring our backroom processes run smoothly. Axia Title feels like a true partner, not just a vendor.",
          "avatar": imgAPI.avatar[2],
          "name": "Michael Ramirez",
          "title": "Property Developer",
          "rating": 5
        },
        {
          "text": "Axia Title deserves high praise for their professionalism and accountability. We confidently recommend them to our clients, knowing they'll receive the best service possible.",
          "avatar": imgAPI.avatar[1],
          "name": "Emily Collins",
          "title": "Mortgage Broker",
          "rating": 5
        },
        {
          "text": "As our go-to title company for over a decade, Axia Title continues to impress with their speed and efficiency. They adapt to market demands like no one else, and their dedication to excellence is truly commendable.",
          "avatar": imgAPI.avatar[8],
          "name": "Robert Anderson",
          "title": "Real Estate Investor",
          "rating": 5
        },
        {
          "text": "Axia Title has consistently exceeded our expectations for many years. Their quick updates and seamless closings make every transaction a breeze. We trust them wholeheartedly with all our transactions.",
          "avatar": imgAPI.avatar[6],
          "name": "Jennifer Mitchell",
          "title": "Homebuyer",
          "rating": 5
        },
        {
          "text": "We can confidently say that Axia Title is the best title company we've worked with. Their commitment to excellence sets them apart. The speed and professionalism of their staff are unmatched.",
          "avatar": imgAPI.avatar[4],
          "name": "David Patterson",
          "title": "Real Estate Agent",
          "rating": 5
        },
        {
          "text": "Axia Title's dedication to providing exceptional service consistently impresses us. Their efficiency and attention to detail have made our real estate transactions smooth and successful. We highly recommend them!",
          "avatar": imgAPI.avatar[7],
          "name": "Laura Evans",
          "title": "Home Seller",
          "rating": 5
        },
        {
          "text": "Axia Title has been an invaluable partner in our business. They adapt to our needs and deliver outstanding results. We appreciate their hard work and commitment to excellence.",
          "avatar": imgAPI.avatar[10],
          "name": "Mark Johnson",
          "title": "Property Manager",
          "rating": 5
        },
        {
          "text": "Working with Axia Title has been refreshing. Their dedication to clients is evident in every interaction. Exceptional service all around! We look forward to many more successful transactions with them.",
          "avatar": imgAPI.avatar[3],
          "name": "Jessica Lee",
          "title": "Real Estate Broker",
          "rating": 5
        }
      ],
      slickOptions: {
        pagination: true,
        speed: 500,
        perPage: 4,
        arrows: false,
        perMove: 1,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 4,
            autoWidth: false,
            perMove: 1,
            rewind: true,
            pagination: true,
          },
          800: {
            perPage: 3,
          },
          600: {
            autoWidth: true,
            perPage: 1,
          },
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.testiContent.length + props - this.slickOptions.perPage);

    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }

      if (window.innerWidth > 1279) {
        this.$refs.splide.go(lastSlide);
      }
    }, 100);
  },
};
</script>
