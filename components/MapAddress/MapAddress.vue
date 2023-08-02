<template>
  <div class="root">
      <svg
    fill="cccccc"
    width="1045px"
    height="599px"
    class="background base"
  >
    <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
  </svg>
  <svg
    fill="cccccc"
    width="1045px"
    height="599px"
    class="background front"
  >
    <use xlink:href="/images/decoration/square-deco-primary.svg#square" />
  </svg>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col v-if="isDesktop" cols="12" md="1" class="pa-6" />
        <v-col cols="12" lg="5" md="6" class="pa-6">
          <title-deco :text="$t('agencyLanding.office_title')" />
          <div class="block">
            <!-- <div
              data-aos="fade-left"
              data-aos-offset="450"
              data-aos-delay="500"
              data-aos-duration="300"
            >
              <v-card class="paper">
                <h6 class="text-h6">
                  {{ $t('agencyLanding.office_branch') }}
                </h6>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-icon class="icon">
                      mdi-phone
                    </v-icon>
                    <span>+98 765 432 10</span>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-icon class="icon">
                      mdi-email
                    </v-icon>
                    <span>hello@luxi.com</span>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-icon class="icon">
                      mdi-map-marker
                    </v-icon>
                    Lorem ipsum street Block C - Vestibullum Building
                  </v-col>
                </v-row>
              </v-card>
            </div> -->
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-6">
          <div
              data-aos="fade-left"
              data-aos-offset="250"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <v-card class="paper">
                <h6 class="text-h6">
                  {{ $t('agencyLanding.office_head') }}
                </h6>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-icon class="icon">
                      mdi-phone
                    </v-icon>
                    <span>{{ $t('agencyLanding.office_head_phone') }}</span>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-icon class="icon">
                      mdi-email
                    </v-icon>
                    <span>{{ $t('agencyLanding.office_head_email') }}</span>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-icon class="icon">
                      mdi-map-marker
                    </v-icon>
                    {{ $t('agencyLanding.office_head_address') }}
                  </v-col>
                </v-row>
              </v-card>
            </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './map-address-style.scss';
</style>

<script>
import AOS from 'aos';
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map';
import TitleDeco from '../Title/WithDecoration';

export default {
  components: {
    TitleDeco,
    GoogleMap,
    MarkerCluster,
    Marker,
  },
  setup() {
    const center = { lat: 26.5651558, lng: -81.9540897 };
    const locations = [
      { lat: 26.5651558, lng: -81.9540897 },
    ];

    return {
      center,
      locations,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
