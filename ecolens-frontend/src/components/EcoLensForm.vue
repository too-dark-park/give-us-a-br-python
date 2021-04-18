<template>
<v-form  ref="form" v-model="valid" lazy-validation id="form-section">
      <v-text-field v-model="websiteAnalysis.url" :counter="50" label="Name" required>
      </v-text-field>
  
      <v-btn
        :disabled="!valid"
        color="info"
        class="mr-4"
        @click="emitWebsiteEnteredEvent"
      >
        Analyse
      </v-btn>

    </v-form>
    
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { WebsiteAnalysis } from '../domain/WebsiteAnalysis';

@Component({})
export default class EcoLensForm extends Vue {
    websiteAnalysis: WebsiteAnalysis = WebsiteAnalysis.EMPTY();
    valid = true;

    private emitWebsiteEnteredEvent(): void {
        this.$emit('websiteEntered', this.websiteAnalysis);
    }
}

</script>

<style scoped>

</style>