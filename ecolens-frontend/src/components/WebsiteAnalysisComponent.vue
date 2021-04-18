<template>
    <div>
       <h1>EcoLens results for {{ websiteAnalysis.url }}</h1>
       <p>Ooh, this website uses a lot of CSS it doesn't need </p>
    </div>   
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { WebsiteAnalysis } from '../domain/WebsiteAnalysis';

@Component({})
export default class WebsiteAnalysisComponent extends Vue {
    @Prop({default: WebsiteAnalysis.EMPTY()}) private websiteAnalysis!: WebsiteAnalysis;
}
</script>

<style scoped>

</style>