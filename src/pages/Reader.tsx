import { AppShell } from "@/components/app/AppShell";
import { DivineBackground } from "@/components/app/DivineBackground";
import { useParams } from "react-router-dom";
import { stotras } from "@/content/stotras";

const Reader = () => {
  const { id } = useParams();
  const stotra = stotras.find((s) => s.id === id);

  if (!stotra) {
    return (
      <>
        <DivineBackground />
        <AppShell>
          <p className="text-center py-8 text-muted-foreground">Stotra not found</p>
        </AppShell>
      </>
    );
  }

  return (
    <>
      <DivineBackground stable />
      <AppShell>
        <h1 className="mb-2 font-display text-3xl font-semibold">{stotra.title}</h1>
        <p className="mb-4 font-devanagari text-sm text-muted-foreground">{stotra.dev}</p>
        <div className="parchment p-6">
          {stotra.text.map((line, i) => (
            <p key={i} className="font-devanagari text-[15px] leading-[1.8] text-foreground">
              {line}
            </p>
          ))}
        </div>
      </AppShell>
    </>
  );
};

export default Reader;
