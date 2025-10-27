<template>
  <div class="about">
    <h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
    <div class="about_main">
      <div  class="about_main--info">
        <h4>From a studio in London to a global brand with over 400 outlets</h4>
        <p>
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p class="main__info--paragraph">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <p>Get in touch</p>
      </div>
      <img src="../assets/AboutImg2.svg" alt="">
    </div>
    <div class="about_main">
      <img src="../assets/AboutImg.svg" alt="">
      <div  class="about_main--info">
        <h4>Our service isn’t just personal, it’s actually hyper personally exquisite</h4>
        <p>
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        </p>
        <p class="main__info--paragraph">
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        <p class="main__info--contact">Get in touch</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  margin: 0 auto;
  text-align: center;
  padding-bottom: 79px;
  max-width: 600px;
}

.about_main {
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
            flex-direction: column;
            text-align: center;
            gap: 30px;
        }

        @media (max-width: 768px) {
            gap: 20px;
        }
}

.about_main--info {
  max-width: 536px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  row-gap: 25px;
  justify-content: center;

  @media (max-width: 1024px) {
      max-width: 100%;
      padding: 0 20px;
  }

  @media (max-width: 768px) {
      padding: 0 15px;
      row-gap: 20px;
  }
}

h4 {
  font-size: 24px;
  line-height: 140%;
}

.main__info--paragraph {
  padding-bottom: 196px;

  @media (max-width: 480px) {
    padding-bottom: 15px;
  }
}


img {
  max-width: 704px;
}

.main__info--contact {
  padding: 16px 32px;
}
</style>
