import { FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contract = () => {
  // This will be replaced with actual PDF path
  const pdfUrl = "/contract.pdf";

  return (
    <section id="contract" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            TOUR <span className="text-primary">CONTRACT</span>
          </h2>
          <p className="font-body text-lg text-foreground/70 max-w-2xl mx-auto">
            Review our tour agreement and waiver. All participants must read and 
            accept these terms before embarking on any tour.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto bg-card border-border animate-zoom-in">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Tour Agreement & Liability Waiver
                </h3>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href={pdfUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  DOWNLOAD PDF
                </a>
              </Button>
            </div>

            {/* PDF Preview */}
            <div className="bg-secondary/30 rounded-lg overflow-hidden">
              <iframe
                src={`${pdfUrl}#view=FitH`}
                className="w-full h-[600px]"
                title="Tour Contract Preview"
              />
              <div className="p-4 bg-secondary text-center">
                <p className="font-body text-sm text-foreground/60">
                  Scroll to read the full document. Download for your records.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="font-body text-sm text-foreground/70">
                <span className="font-semibold text-primary">Important:</span> By participating 
                in any tour, you acknowledge that you have read, understood, and agree to all 
                terms and conditions outlined in this document.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
