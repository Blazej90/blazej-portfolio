import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Moje Portfolio </h1>
      <Button>Sprawdź moje projekty</Button>
    </main>
  );
}
