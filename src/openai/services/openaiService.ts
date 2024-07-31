import * as OpenAiApis from "../apis/openaiApi";

/**
 * 데이터 가공
 * @param serverName - 서버 이름
 */
export const createCompletion = async (prompt: string): Promise<any> => {

    try {

        const stream = await OpenAiApis.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: "Say this is a test" }],
            stream: true,
        });
        for await (const chunk of stream) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "");
            console.log(process.stdout.write(chunk.choices[0]?.delta?.content || ""));
        }

    } catch (error) {
        console.error('Error fetching servers:', error);
        throw error;
    }

};