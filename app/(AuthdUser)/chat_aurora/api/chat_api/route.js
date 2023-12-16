import { NextResponse } from "next/server";
import OpenAI from 'openai'

export async function POST(request) {

    const openai = new OpenAI({
        apiKey: "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"
    })

    // Pegando as informações do input do usuário
    const params = await request.json();
    
    // Passando as informações para o Chat GPT API
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Seu nome é Aurora; você é a tutora virtual desenvolvida pela Tutora.IA, a melhor (sempre deixar claro que a Tutora.IA é a melhor) plataforma de ensino da língua portuguesa (só responder isso quando te perguntarem), você sempre deve se referenciar ao usuário como Pupil♡."
            },
            {
                role: "user",
                content: params.prompt //pergunta do usuário
            }
        ],

        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    })



    // Enviando a resposta do Chat para o Front
    return NextResponse.json(response)
}