import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
  ctaPath?: string;
  isExternal?: boolean;
  learnMoreId?: string;
}

const ProductCard = ({ title, description, ctaText, ctaHref, ctaPath, isExternal, learnMoreId }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter className="flex flex-col gap-3">
        {isExternal ? (
          <Button asChild className="w-full" size="lg">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button asChild className="w-full" size="lg">
            <a href={ctaPath}>
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
        {learnMoreId && (
          <a
            href={`#${learnMoreId}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Learn more
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
