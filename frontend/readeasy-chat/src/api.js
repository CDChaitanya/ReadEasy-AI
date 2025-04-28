// Placeholder APIs for upload, summarize, and ask

export async function uploadFile(file) {
  console.log("Uploading file:", file.name);
  return { success: true, message: "File uploaded successfully!" };
}

export async function summarizeDoc() {
  console.log("Summarizing document...");
  return { summary: "This is a summarized version of your document." };
}

export async function askQuestion(question) {
  console.log("Asking question:", question);
  return { answer: `Answer to your question: "${question}"` };
}
