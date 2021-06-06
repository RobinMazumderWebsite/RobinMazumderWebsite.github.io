<template lang="html">
  <section class="media section" id="media">
    <div class="content">
      <FloatingImage type="media" />
      <div>
        <h1 class="media_text media_text--title">
          Media
        </h1>
        <!-- <p class="media_text media_text--para">
          I speak about healthy cities, human-centred design, intersectional urbanism and bicycles. From Moscow to Montreal, I try to start conversations that lead to change in every speech.
        </p> -->

        <p class="date_buttons">
          <button v-for="type in this.availableDates" :key="type" class="media_button" :class="showing === type ? 'selected' : ''" v-on:click="showText(type)">{{type}}</button>
        </p>

        <section
          v-for="typeData in this.mediaDataByType" 
          :key="typeData.type"
          class="hidden-start"
          :aria-hidden="showing !== typeData.type"
          :class="showing === typeData.type ? 'show' : 'hide'"
          aria-live="polite"
        >
          <h2 class="media_text media_text--subtitle">
            {{typeData.type}}
          </h2>
          <p v-for="data, index in typeData.data" :key="index" class="media_text media_text--para">
            {{data.title}}
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="js">

import FloatingImage from '../system/FloatingImage.vue'

export default  {
  name: 'media',
  components: {
    FloatingImage,
  },
  props: [],
  mounted () { 
    let url = 'https://api.sheety.co/1d451b7406988a7d18b381d137c82628/websiteData/media';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      this.availableDates = [...new Set( json.media.map(event => event.type) )];
      this.mediaDataByType = this.availableDates.map((type) => { 
        return { "type": type, "data": json.media.filter(d => d.type === type) } 
      })
      this.showing = this.availableDates[0];
    });  
  },
  data () { return {
    showing: 2020,
    mediaDataByType: [],
    availableDates: [],
  } },
  methods: { 
    showText: function(type) { this.showing = type },
  },
  computed: { }
}
</script>

<style scoped lang="scss">
.media {
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
    grid-template-columns: 30% auto;
    gap: 5%;

    @media screen and (max-width: 600px) {
      display: block;
      padding: 0;
    }

    .date_buttons {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(45px, max-content));
      gap: 5px;
      margin-top: 2rem;
    }

    .media_button {
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

    .media_text {
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
