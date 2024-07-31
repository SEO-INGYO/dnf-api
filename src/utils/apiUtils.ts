import axios, {AxiosRequestHeaders} from 'axios';

/**
 * GET 요청을 보내는 범용 함수
 * @param {string} targetUrl - 요청을 보낼 API 대상 URL
 * @param {string} endPoint - 요청을 보낼 API 엔드포인트
 */
export async function sendRequestGET(targetUrl: string ,endPoint: string, queryParams: string, headers?: AxiosRequestHeaders) {
    const url = `${targetUrl}${endPoint}?${queryParams}`;
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        throw error
    }
}

/**
 * POST 요청을 보내는 범용 함수
 * @param {string} endpoint - 요청을 보낼 API 엔드포인트
 * @param {Object} data - 서버로 보낼 데이터
 * @param {AxiosRequestHeaders} data - [headers={}] - 요청에 사용할 헤더 (옵션)
 */
export async function sendPostRequest(endpoint: string, data: Object, headers?: AxiosRequestHeaders)    {
    try {
        const response = await axios.post(endpoint, data, { headers });
        return response.data;
    } catch (error) {
        throw error
    }
}