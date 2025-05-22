import { useEffect } from "react";
import PresentationContainer from "@/components/presentation/PresentationContainer";

export default function PresentationPage() {
  useEffect(() => {
    // Set page title
    document.title = "Totem Selfie Photobooth - Il Ricordo Perfetto per Ogni Matrimonio";
  }, []);

  return <PresentationContainer />;
}
