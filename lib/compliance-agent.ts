
import { StateGraph, Annotation } from "@langchain/langgraph";

// Definition des State-Objekts für den Graphen
const ComplianceState = Annotation.Root({
  messages: Annotation({ 
    reducer: (x, y) => x.concat(y), 
    default: () => []  // FIX: Array statt undefined
  }),
  riskLevel: Annotation({ 
    reducer: (x, y) => y ?? x, 
    default: () => "low" 
  })
});

const analyzerNode = async (state: any) => {
    // Mock Analysis Logic
    return { 
        riskLevel: "high", 
        messages: [{ role: "system", content: "AI Governance Scan complete. High risk vector detected in module 3." }] 
    };
};

export const createComplianceGraph = () => {
    const builder = new StateGraph(ComplianceState);
    builder.addNode("analyze", analyzerNode);
    builder.addEdge("__start__", "analyze");
    return builder.compile();
};