import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { AppItem } from "@/data/applications";

type Props = {
  app: AppItem | null;
  onOpenChange: (open: boolean) => void;
};

export function VideoModal({ app, onOpenChange }: Props) {
  return (
    <Dialog open={!!app} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[min(56rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border-border bg-elevated p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight">
            {app?.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            AI-enhanced product demonstration with professional voice-over.
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-4">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border bg-background">
            {app ? (
              <video
                key={app.id}
                src={app.demoUrl}
                poster={app.thumbnail}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
