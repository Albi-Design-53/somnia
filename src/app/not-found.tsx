import { images } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="Diese Seite ruht noch."
      text="Der gesuchte Pfad existiert nicht. Zurück zum Anfang – oder direkt in die Beratung."
      image={images.hero}
      imageAlt="Ruhiges Premium-Schlafzimmer"
    >
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="light">
          Zur Startseite
        </Button>
        <Button href="/kontakt" variant="dark-ghost">
          Beratung vereinbaren
        </Button>
      </div>
    </PageHero>
  );
}
