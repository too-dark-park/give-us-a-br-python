import { AnalysisResults } from './AnalysisResults';
import axios from 'axios';

export class WebsiteAnalysis {
    url!: string;

    constructor(url: string){
        this.url = url
    }

    static EMPTY(){
        return new WebsiteAnalysis('');
    }

    
    public async getCssCoverageResults(): Promise<AnalysisResults[]> {
        const url = `https://eco-lens-node.herokuapp.com/getCssCoverage?url=${this.url}`;
        const response = await axios.get(url);

        return response.data;
    }

    // public async getJavaScriptCoverageResults(): Promise<AnalysisResults> {
    //     const baseUrl = "https://eco-lens-node.herokuapp.com/";
    //     let cheesePairing = '';
        
    // }
}