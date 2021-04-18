<template>
  <v-container class="main-section" id="main-section">
    <img alt="EcoLens blue logo" class="ecolens-logo" src="../assets/logo.png">
    <h1>{{ $t('welcome') }}</h1>
    <button v-for="language in languages" :key="language.title" @click="changeLocale(language.language)" class="language-button">
      {{ language.title }}
    </button>
    <h2>{{ $t('analyse-website') }}!</h2>
    <EcoLensForm @websiteEntered="addWebsiteAnalysis"/>
    <WebsiteAnalysisComponent :websiteAnalysis="websiteAnalysis" v-if="websiteAnalysis && websiteAnalysis.url != ''"/>
    <AboutComponent />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AboutComponent from './AboutComponent.vue';
import WebsiteAnalysisComponent from './WebsiteAnalysisComponent.vue';
import EcoLensForm from './EcoLensForm.vue';
import { WebsiteAnalysis } from '../domain/WebsiteAnalysis';
import { AnalysisResults } from '@/domain/AnalysisResults';

@Component({
  components: {
    AboutComponent,
    WebsiteAnalysisComponent,
    EcoLensForm
  },
})
export default class EcoLensContainer extends Vue {
  @Prop() private msg!: string;
  
  websiteAnalysis: WebsiteAnalysis = WebsiteAnalysis.EMPTY();
  analysisResults: AnalysisResults[] = [];

  get languages(): Array<object> {
    const languages = [
      { language: 'en', title: 'English' },
      { language: 'fr', title: 'Français' }
    ]

    return languages;
  }

  public changeLocale(locale: string): void {
    this.$i18n.locale = locale;
  }

  private async addWebsiteAnalysis(websiteAnalysis: WebsiteAnalysis): Promise<void>{
    this.websiteAnalysis = websiteAnalysis;
    this.analysisResults = await this.websiteAnalysis.getCssCoverageResults();
    console.log(this.analysisResults);
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  color: #311881;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #311881;
}

.main-section {
  background: #ffeabf;
  padding-top: 80px;
}
.ecolens-logo {
  max-width: 15%;
  max-height: 15%;
}
.language-button {
  background:  #2c3e50;
  color: #76e2f5;
  font-weight: 600;
  padding: 0.3%;
  border-radius: 20%;
}
</style>
