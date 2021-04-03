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

      <form class="gform pure-form pure-form-stacked" @submit="checkForm">
        <!-- 
        novalidate="true"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbwf9vHrFYI6KMJYyhOukPqpd1x1TUhTt41uwqtfmkxUwKmKypGNHmW8cKCdWM9KjAHL/exec"
        @submit="onSubmit"
        > -->
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
            <input id="honeypot" type="text" name="honeypot" />
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
      console.log('hi', e);
      this.show = false;

      e.preventDefault();
      // var form = e.target;

      if (this.honeypot != '') return;

      var data = JSON.stringify({
        name: 'arjun',
        message: 'hey',
        email: 'askalburgi@gmail.com',
      });

      var xhr = new XMLHttpRequest();
      xhr.open('POST', this.url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log("complete :)")
        }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
      console.log("xhr.send(encoded :)")
    },
  },
  data () {
    return {
      show: true,
      url: 'https://script.google.com/macros/s/AKfycbwf9vHrFYI6KMJYyhOukPqpd1x1TUhTt41uwqtfmkxUwKmKypGNHmW8cKCdWM9KjAHL/exec',
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
