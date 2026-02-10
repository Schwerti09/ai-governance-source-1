
import { createComplianceGraph } from "@/lib/compliance-agent";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const graph = createComplianceGraph();
    
    // Einfache Invocation für Demo-Zwecke (Stream ist komplexer ohne Server-Setup)
    const result = await graph.invoke({ messages });
    
    // Extrahiere die letzte Nachricht
    const lastMsg = result.messages[result.messages.length - 1];
    
    return Response.json({ 
        role: "assistant", 
        content: lastMsg.content,
        risk: result.riskLevel 
    });
  } catch (e) {
    return Response.json({ error: "Agent Error" }, { status: 500 });
  }
}