<template>
  <Experience/>
  <PersonalIntro/>

  <AllProductPage/>
  <ProductDetail/>
  <ProductIntroList/>
  <ProductionIntroArticle/>

  <FeaturePic/>
  <FeaturePic_InAndOut_Button_Top/>
  <FeaturePic_FadeInAndOut_Left_Right/>

  <Faq/>
  <ListInAndOut/>
  <PurchaseProcess/>
  <ServiceCards/>
  <ServiceCardsGrid/>
  <SixCardBlock/>
  <StatsCards/>
  <ThreeColumn/>
  <YoutubeGrid/>

  <SocialMedia/>

  <FooterDesign/>
  <FooterNormal/>

  <ServiceListAndPicture/>
  <OnePicture/>
  <AuthenticationIntro/>

  <Contact_us/>
  <ContactUsWithGoogleMap/>

</template>

<script setup>
// 個人形象網站
import Experience from "./Profile/Experience.vue";
import PersonalIntro from "./Profile/PersonalIntro.vue";

// 產品介紹網站
import AllProductPage from "./Product/AllProductPage.vue";
import ProductDetail from "./Product/ProductDetail.vue";
import ProductIntroList from "./Product/ProductIntroList.vue";
import ProductionIntroArticle from "./Product/ProductionIntroArticle.vue";

import FeaturePic from "./PictureAndWord/FeaturePic.vue";
import FeaturePic_FadeInAndOut_Left_Right from "./PictureAndWord/FeaturePic_FadeInAndOut_Left_Right.vue";
import FeaturePic_InAndOut_Button_Top from "./PictureAndWord/FeaturePic_InAndOut_Button_Top.vue";

import Faq from "../components/modules/Faq.vue";
import ListInAndOut from "../components/modules/ListInAndOut.vue";
import PurchaseProcess from "../components/modules/PurchaseProcess.vue";
import ServiceCards from "../components/modules/ServiceCards.vue";
import ServiceCardsGrid from "../components/modules/ServiceCardsGrid.vue";
import SixCardBlock from "../components/modules/SixCardBlock.vue";
import StatsCards from "../components/modules/StatsCards.vue";
import ThreeColumn from "../components/modules/ThreeColumn.vue";
import YoutubeGrid from "../components/modules/YoutubeGrid.vue";


import SocialMediaOnlyLine from "./Layout/SocialMediaOnlyLine.vue";
import SocialMedia from "./Layout/SocialMedia.vue";

import FooterNormal from "./footers/FooterNormal.vue";
import FooterDesign from "./footers/FooterDesign.vue";

import ServiceListAndPicture from "./content/ServiceListAndPicture.vue";
import OnePicture from "./content/OnePicture.vue";
import AuthenticationIntro from "./content/AuthenticationIntro.vue";

import Contact_us from "./contact_us_page_modules/Contact_us.vue";
import ContactUsWithGoogleMap from "./contact_us_page_modules/ContactUsWithGoogleMap.vue";

</script>


<style scoped>
</style>