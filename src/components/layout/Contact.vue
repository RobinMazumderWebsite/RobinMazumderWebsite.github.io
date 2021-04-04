<template lang="html">
  <section class="section contact contact-style b-loaded" id="contact">
    <div class="contact_contents">
      <span>
        <h4 class="contact_contents--title">lets work together:</h4>
        schedule a time to meet
      </span>
      <span>
        <h4 class="contact_contents--title">lets work together:</h4>
        schedule a time to meet
      </span>
      <p>
        email me at
        <a
          class="contact_contents--links"
          href="mailto:robin@robinmazumder.com"
        >
          robin at robinmazumder dot com
        </a>
        .
      </p>

      <p v-if="!show">
        Thanks
      </p>

      <form
        class="gform pure-form pure-form-stacked"
        @submit.prevent="checkForm"
      >
        <div class="form-elements" v-if="show">
          <fieldset class="pure-group">
            <label for="name">aName: </label>
            <input id="name" name="name" placeholder="ur name" />
          </fieldset>

          <fieldset class="pure-group">
            <label for="message">Message: </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us what's on your mind..."
            />
          </fieldset>

          <fieldset class="pure-group">
            <label for="email"><em>Your</em> Email Address:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.name@email.com"
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
            <i class="fa fa-paper-plane"></i>&nbsp;Sendt
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'contact',
    methods: {
      checkForm: function (e) {
        this.show = false;

        var form = e.target;
        var formData = this.getFormData(form);
        if (formData.honeypot) return;

        fetch("https://script.google.com/macros/s/AKfycbwf9vHrFYI6KMJYyhOukPqpd1x1TUhTt41uwqtfmkxUwKmKypGNHmW8cKCdWM9KjAHL/exec", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formData.data
        }).then(() => {
          console.log("Form sent :)");
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
        show: true,
        url: 'https://script.google.com/macros/s/AKfycbwf9vHrFYI6KMJYyhOukPqpd1x1TUhTt41uwqtfmkxUwKmKypGNHmW8cKCdWM9KjAHL/exec',
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
    padding: 10vh 0;
    width: 100%;
    margin: auto;

    &--title {
      font-weight: bold;
    }

    &--links {
      position: relative;
      margin: auto;
    }
  }
}

.honeypot-field {
  display: none;
}
</style>
