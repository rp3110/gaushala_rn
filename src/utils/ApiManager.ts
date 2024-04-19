import Toast from "react-native-toast-message";
import { showToast } from "./CommonFunction";

export default class ApiManager {
    static async callPostMethod(props:{url: string, body: object}) {
        try {
            const response = await fetch(props.url, {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(props.body)
            });

           return this.manageResponse(response)
        
        } catch (error) {
            showToast({ text: "Something went wrong." })
        }
        
    }

static async callGetMethod(props:{url: string, queryParams?: string}) {
    console.log(`----w-${JSON.stringify(props)}`);
    
        try {
            const response = await fetch(props.url + props.queryParams ?? "");

           return this.manageResponse(response)
        
        } catch (error) {
            showToast({ text: "Something went wrong." })
        }
        
    }


    static async manageResponse(response: Response) {
        switch (response.status) {
            case 200:
                return response
            case 400:
                const error400: CommonResponseType = await response.json()
                showToast({ text: error400.Message })
                break;
            case 401:
                const error401: CommonResponseType = await response.json()
                showToast({ text: error401.Message })
                break;
            case 403:
                const error403: CommonResponseType = await response.json()
                showToast({ text: error403.Message })
                break;
            case 404:
                const error404: CommonResponseType = await response.json()
                showToast({ text: error404.Message })
                break;
            case 500:
                showToast({ text: "Something went wrong." })
                break;
            default:
                break;
        }

    }
}