import { HNSWLib } from "langchain/vectorstores";
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { makeChain } from "../util";

const { opeanAiKey } = useRuntimeConfig();


let cachedChain: any;

const getChain = async () => {
  if(cachedChain) {
    return cachedChain
  }
  const vectorstore = await HNSWLib.load("ai/data", new OpenAIEmbeddings({
    openAIApiKey: opeanAiKey,
  }))
  
  cachedChain =  makeChain(vectorstore);

  return cachedChain
} 

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const chain = await getChain()

  return await chain.call({
    question: body.question,
    chat_history: body.history,
  });
})