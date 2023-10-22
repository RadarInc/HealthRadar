// import axios, { AxiosInstance } from 'axios';
// import openai from 'openai';

// const headers = {
//     "Content-Type": "application/json",
//     "Authorization": "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"
// };

// // Define the API endpoint
// class HealthRadarContext {
//     private baseURL:string =  "https://api.openai.com/v1/chat/completions";
//     private axiosInstance: AxiosInstance = axios.create({ baseURL: this.baseURL });

//     constructor(){}

//     public async postHealthRadarData(body: any): Promise<any> {

//         const response = await this.axiosInstance.post(this.baseURL, body, { headers });
//         try {
//         if (response.status === 200) {
//             return response.data;
//         } else {
//             throw new Error(`Error posting data to Health Radar: ${response.statusText}`);
//         }
//     } catch (error) {
//         throw new Error(`Error posting data to Health Radar: ${error}`);
//     }

//     }
// }

// export default HealthRadarContext;
