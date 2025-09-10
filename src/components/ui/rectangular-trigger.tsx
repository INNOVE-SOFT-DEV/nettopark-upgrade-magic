import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RectangularTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function RectangularTrigger({ text = "Voir NettoPark en action", ...props }: RectangularTriggerProps) {
  return (
    <Button 
      size="lg" 
      className="btn-secondary text-lg px-8 py-4"
    >
      <Play className="w-5 h-5 mr-2" />
      { text }
    </Button>
  );
}
