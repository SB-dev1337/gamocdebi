import DocxViewer from "@/components/DocxViewer";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f4ff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <h1
        style={{
          marginBottom: 24,
          fontSize: "2.5rem",
          fontWeight: "700",
          color: "#3b3b98",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        ნუ ჩეთერობ! By: საბა ნაცვალაძე
      </h1>

      <DocxViewer filePath="/giorgipidoras.docx" />
    </main>
  );
}
