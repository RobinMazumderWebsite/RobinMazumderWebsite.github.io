<template lang="html">
  <section class="section contact contact-style b-loaded" id="contact">
    <div class="contact_contents">
      <div class="contact_contents--form">
        <p>
          <span class="hidden-start" :class="showLoading ? 'show' : 'hide'">
            Sending...
          </span>

          <span class="hidden-start" :class="showSuccess ? 'show' : 'hide'">
            Thanks
          </span>

          <span class="hidden-start" :class="showError ? 'show' : 'hide'">
            Sorry there was an error, email me at
            <a href="mailto:robin@robinmazumder.com">robin@robinmazumder.com</a
            >.
          </span>
        </p>

        <form
          class="gform pure-form pure-form-stacked hidden-start"
          @submit.prevent="checkForm"
          :class="!showSuccess && !showError && !showLoading ? 'show' : 'hide'"
        >
          <fieldset class="pure-group">
            <label for="name">Name: </label>
            <input id="name" name="name" placeholder="First and last name" />
          </fieldset>

          <fieldset class="pure-group">
            <label for="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.name@email.com"
            />
          </fieldset>

          <fieldset class="pure-group">
            <label for="message">Message: </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="How can we work together?"
            />
          </fieldset>

          <fieldset class="pure-group honeypot-field" aria-hidden="true">
            <label for="honeypot">
              To help avoid spam, utilize a Honeypot technique with a hidden
              text field; must be empty to submit the form! Otherwise, we assume
              the user is a spam bot.
            </label>
            <input
              id="honeypot"
              type="text"
              name="honeypot"
              v-bind="this.honeypot"
            />
          </fieldset>

          <button
            class="button-success pure-button button-xlarge"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default  {
  name: 'contact',
  methods: {
    checkForm: function (e) {
      this.showLoading = true;

      var form = e.target;
      var formData = this.getFormData(form);
      if (formData.honeypot) return;

      fetch("https://script.google.com/macros/s/AKfycbzZ6cm-AlRllkBykajSX2hMgsl1yn5X9jWwQJUGk4xD_I1vGmJleDxfSHjIbGvPkILr/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.data
      }).then(() => {
        console.log("Form sent :)");
        this.showLoading = false;
        this.showSuccess = true;
      }).catch(() => {
        this.showLoading = false;
        this.showError = true;
      })
    },
    getFormData: function(form) {
      var elements = form.elements;
      var honeypot;

      var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });

      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });

      var encoded = Object.keys(formData).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]);
      }).join('&');

      return {data: encoded, honeypot: honeypot};
    }
  },
  data () {
    return {
      showLoading: false,
      showSuccess: false,
      showError: false,
      url: 'https://script.google.com/macros/s/AKfycbzZ6cm-AlRllkBykajSX2hMgsl1yn5X9jWwQJUGk4xD_I1vGmJleDxfSHjIbGvPkILr/exec',
      honeypot: ''
    }
  },
}
</script>

<style scoped lang="scss">
.contact {
  z-index: 1;
  position: relative;
  margin-top: 0;

  &_contents {
    width: 100%;
    margin: auto;
    text-align: center;

    &--title {
      font-weight: bold;
    }

    &--links {
      position: relative;
      margin: auto;
    }

    .email {
      text-decoration: underline;
    }

    &--form {
      p {
        text-align: center;
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

      form {
        display: flex !important;
        flex-direction: column;
        gap: 1rem;
        max-width: 500px;
        margin: auto;
        fieldset {
          border: none;
          display: grid;
          grid-template-rows: auto auto;
          gap: 0.2rem;
          padding: 0;

          &.honeypot-field {
            display: none;
          }

          input,
          textarea {
            border: none;
            padding: 10px;
            font: var(--brand-text);
          }
        }

        button {
          border: none;
          cursor: pointer;
          background-color: var(--brand-colour);
          color: var(--brand-contrastlight);
          font-size: 16px;
          @media (prefers-color-scheme: dark) {
            background-color: var(--brand-contrastlight);
            color: var(--brand-contrastdark);
          }
        }
      }
    }
  }
}
</style>
