<template lang="html">
  <section class="speaking section" id="speaking">
    <div class="content">
      <FloatingImage type="speaking" float="right" class="mobile" />
      <div>
        <h1 class="speaking_text speaking_text--title">
          Speaking
        </h1>
        <p class="speaking_text speaking_text--para">
          I speak about healthy cities, human-centred design, intersectional urbanism and bicycles. From Moscow to Montreal, I try to start conversations that lead to change in every speech.
        </p>

        <p class="speaking_text speaking_text--para">
          View my speaking history here, and get in touch if you'd like me to speak at your event.
        </p>

        <p class="date_buttons">
          <button v-for="year in this.availableDates" :key="year" class="speaking_button" :class="showing === year ? 'selected' : ''" v-on:click="showText(year)">{{year}}</button>
        </p>

        <section
          v-for="yearData in this.speakingDataByYear" 
          :key="yearData.year"
          class="hidden-start"
          :aria-hidden="showing !== yearData.year"
          :class="showing === yearData.year ? 'show' : 'hide'"
          aria-live="polite"
        >
          <h2 class="speaking_text speaking_text--subtitle">
            {{yearData.year}}
          </h2>
          <p v-for="data, index in yearData.data" :key="index" class="speaking_text speaking_text--para">
            {{data.title}}
          </p>
        </section>
      </div>
      <FloatingImage type="speaking" float="right" class="desktop" />
    </div>
  </section>
</template>

<script lang="js">

import FloatingImage from '../system/FloatingImage.vue'

export default  {
  name: 'speaking',
  components: {
    FloatingImage,
  },
  props: [],
  mounted () { 
    let url = 'https://api.sheety.co/1d451b7406988a7d18b381d137c82628/websiteData/speaking';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      this.availableDates = [...new Set( json.speaking.map(event => event.year) )];
      this.speakingDataByYear = this.availableDates.map((year) => { 
        return { "year": year, "data": json.speaking.filter(d => d.year === year) } 
      })
      this.showing = this.availableDates[0];
    });  
  },
  data () { return {
    showing: 2020,
    speakingDataByYear: [],
    availableDates: [],
  } },
  methods: { 
    showText: function(year) { this.showing = year },
  },
  computed: { }
}
</script>

<style scoped lang="scss">
.speaking {
  position: relative;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    max-width: none;
    padding-left: 0;
    position: relative;

    li {
      display: flex;
      align-items: center;
      padding: 13.2px;

      a {
        font-size: 16px;
        color: #202020;
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid #bd8732;
          color: #6a932e;
        }

        &:active {
          color: #384722;
        }
      }
    }
  }

  .content {
    padding: 100px 0 0;
    display: grid;
    grid-template-columns: auto 30%;
    gap: 5%;

    .mobile {
      display: none;
    }

    @media screen and (max-width: 600px) {
      display: block;
      padding: 0;

      .mobile {
        display: block;
      }
      .desktop {
        display: none;
      }
    }

    .date_buttons {
      display: grid;
      grid-template-columns: repeat( auto-fill, 45px );
      gap: 5px;
      margin-top: 2rem;
    }

    .speaking_button {
      border: none;
      background-color: var(--brand-colour);
      color: var(--brand-contrastlight);
      font-size: 16px;
      &:hover {
        cursor: pointer;
      }
      @media (prefers-color-scheme: dark) {
        background-color: var(--brand-contrastlight);
        color: var(--brand-contrastdark);
      }
      &.selected {
        outline: 1px solid var(--brand-colour);
        outline-offset: -1px;
        background-color: var(--brand-contrastlight);
        color: var(--brand-contrastdark);
      }
    }

    .speaking_text {
      &--title {
        font: var(--bold-text);
        text-transform: uppercase;
        z-index: 0;
        @media screen and (max-width: 600px) {
          font-size: 20px;
        }
      }

      &--subtitle {
        font-size: 18px;
        text-transform: uppercase;
        z-index: 0;
        margin-bottom: 0.5rem;
      }

      &--desc {
        margin-bottom: 1.5rem;
      }

      &--para {
        line-height: 150%;
        margin-top: 1rem;
      }
    }
  }
}

.hidden-start {
  transition: opacity 2s ease-out, max-height 2s ease-out;
  &:nth-of-type(2) {
    transition-delay: 0.3s;
  }
  &:nth-of-type(3) {
    transition-delay: 0.6s;
  }
  &:nth-of-type(4) {
    transition-delay: 0.9s;
  }
  &:nth-of-type(5) {
    transition-delay: 1.2s;
  }
  opacity: 0;
  max-height: 0px;
  overflow: hidden;
  &.show {
    opacity: 1;
    max-height: 1000px;
    display: block;
  }
}
</style>
